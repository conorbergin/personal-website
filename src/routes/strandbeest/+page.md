<title>Making a Flexible Strandbeest"</title>

<script>

  import VideoPlayer from '$lib/VideoPlayer.svelte'
  let paused = true

</script>


<figure>
  <video loop controls>
    <source src="/strandbeest/final.webm">
    <source src="/strandbeest/final.mp4">
  </video>
</figure>


_22 Sep 2022 -- Adapted from a <a data-sveltekit-reload href="/strandbeest/poster.pdf">university project</a>_

The <a href="https://www.strandbeest.com/">Strandbeests</a> are a family of kinetic sculptures developed by Theo Jansen. At their centre is a linkage which is responsible for their organic gait. The linkage is driven by a crank, and its end effector is a foot. It can be driven both forwards and backwards and at different speeds, analagous to a wheel. If several of them are arranged in parallel on a crankshaft you have a sort of walking trolley that can either be powered at the crank, pulled along, or made to descend an incline under its own weight.

I thought it would be possible to make the linkages out of a single piece of plastic, making use of flexures instead of joints. This comes with several advantages:

 - I could easily 3D print complete sections of a Strandbeest
 - Flexures do not need to be assembled, they do not need to be lubricated, nor do they wear out
 - Flexures are less complex to model in CAD (though more complex to design)

## The difficulty of simulating large deflections
Unfortuantely, flexures are significantly more mathematically complex than joints. I used Larry Howell’s <em>Compliant Mechanisms</em> constantly and found it very helpful.

The difficuly arises because flexures are designed to flex much further than typical engineering models allow for. Typical beam bending problems assume the deflection is very small compared to the length of the beam -- allowing us to use a linear elastic model. This is not a valid assumption with flexures, so we have to use a non-linear model. Non linear models are much harder to reason about, and much harder for computers to solve.

Fortunately, you can make a pretty good approximation of a flexure with linear springs and links, called the Pseudo-Rigid-Body Model (PRBM). They are explained in Chapter 5 of <em>Compliant Mechanisms</em>. The most obvious PRBM is to model a small flexure as a hinge with a torsional spring that returns it to its original position.

<figure style="padding:0px 100px ">
  <img  src="/strandbeest/prbm-examples.webp" />
  <figcaption>Fig. 1</figcaption>
</figure>

In Fig. 1 we see three simple flexures operating in tandem with their PRBM equivalent. A has a very short flexure, so the PRBM is accurate through a large range of motion, B and C have much longer flexures, so the PRBMs are only accurate through a range of about 90 degrees. The value of a, used to determine the position of the pivot in B and C, is an empirically derived number.

## Using FreeCAD to Design Linkages
I tried several different rigid body solvers, but found them clumsy to use. You would have to define your model using code, or import it from some CAD package. I wanted something I could work on in realtime. I started using FreeCAD to sketch out ideas, using the contraint solver in the Sketcher workbench as a poor man’s rigid body solver. I found that FreeCAD worked fine for my use case (I wasn’t worryed about kinematics or dynamics at this point, I was looking for a mapping between crank angles and end effector position). FreeCAD has a python interface, so I wrote a script that would periodically change the angle of the input link.

<figure>
  <video controls style="object-fit:contain; object-position: bottom center ;width:100%">
  <source src="/strandbeest/screencast.webm">
  <video>

  <figcaption>Fig. 2</figcaption>
</figure>

I could then change the lengths of links as I watched the linkage cycle, observing how the characteristics of the path of the foot changed. Once I had something that more or less worked I wrote a second script that recorded the path of the foot as a set of coordinates, then changed the geometry of the foot, and repeated. When it had finished running I had a set of a hundred different paths, and I just had to select the best one. Now that I had my finished PRBM, I set about turning it into the compliant linkage it was supposed to be representing. I replaced all the joints with flexures and filled the spaces between with rigid bodies.

<figure>
  <img src="/strandbeest/my-prbm.webp"/>
  <figcaption>Fig. 3</figcaption>
</figure>


I attempted to run a FEM analyis using CalculiX in Freecad, applying different displacements to try and replicate the effect of the crank turning. The results aren’t good, I suspect because the internal solver is linear. Notice how the pivot hole expands and contracts oddly.

<div style="position:relative; display:grid; grid-template-columns: 1fr 1fr" on:click={() => paused = !paused}>
  <video loop bind:paused>
    <source src="/strandbeest/prbm.webm">
    <source src="/strandbeest/prbm.mp4">
  </video>
  <video loop bind:paused>
    <source src="/strandbeest/fem.webm">
    <source src="/strandbeest/fem.mp4">
  </video>

  <em style="position:absolute; bottom: 10px; left: 5px" >Click to {paused ? "play" : "pause"}</em>
</div>



## The Printed Linkage
I mirrored the linkage to make a part with two feet with one input and sent it off to a 3D printing service. I did have to reassure them that I wanted the flexures to be that thin, and that I would take the of risk them getting damaged in the post. You can see the final thing in action at the top of the page.

As you can see the parallel flexures buckle due to the torque on the foot from the link to the pivot. This is a limitation of using a PRBM, if I had found a better way of modelling the mechanism I might have been able to mitigate it. That being said it still works reasonably well. I never made a full Strandbeest using my mechanism, at this point I was pretty sick of the project.

