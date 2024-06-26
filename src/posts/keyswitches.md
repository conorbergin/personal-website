---
published: true
title: Are compliant keyboard switches viable?
date: "2023-09-25"

---

I am generally interested in input devices for computers. Earlier this year I made (assembled) an ortholinear 36 key split keyboard, a relatively common setup. Building it was expensive, it required two controllers (RP2040s), two mainboards, 36 switches, keycaps and hotswap sockets (you could omit the hotswap sockets if you know you won't want to try different switches), which all came to about £120.

I had some experience designing compliant mechanisms from my degree, so I wondered if I could significantly reduce the part count with a 3d printed keyswitch / keycap combo.

## Rationale
Because 3d printing gives you 'complexity for free', you can make a very complex mechanism which is just as quick and easy to print as a simple one. If you could design an effective keyswitch, you could parametrize the model to make it work in a range of sizes and shapes. You could print them in place as apart of a larger structure -- maybe a full sized keyboard or a game controller.

## Requirements
A good keyboard makes typing more enjoyable, what makes a keyboard good is up for debate, but I think there are some basic things everyone can agree on:
1. The key must only move down, no pitching or sliding
2. The key must be easy to actuate from its corners as well as its centre, and must not bend (think cheap buttons that pitch when you press them from the edges)
3. The key should not wobble

## Mk 1

I replaced the pivots in a parallel mechanism with simple flexures. The flexures are too thick and feels quite plasticky (we want elasticky).
<figure>
    <video controls loop>
        <source src="/posts/keyswitches/IMG_1847.MP4">
    </video>
    <figcaption>Mk.1 </figcaption>

</figure>



## Mk 2

I increased the thickness of the bars and used a different hinge design. This flexure is made up of flexures layered perpendicularly to each other, similar to how flexure bearings work. This is a much stiffer hinge for the material used so we can make the flexures thinner and longer, meaning that we get less of a damping effect from the plastic.

<figure>
    <video controls loop>
        <source src="/posts/keyswitches/IMG_1849.MP4">
    </video>
    <figcaption>Mk.2 </figcaption>
</figure>



## Future Work
In order to be a switch, and not a fidget toy, we need some way of registering actuation. It would be nice if I could confine all the electronics to a single printed PCB that could be glued or screwed to the bottom. There are two methods that come to mind:
1. Optical switches by integrating a light gate into the moving part of the switch, and placing a LED and a light sensor on either side
2. Hall Effect switches by placing a small magnet in the moving part and a hall effect sensor in the PCB


The mechanism is too thick, even for a desktop keyboard. The main thing preventing the design from being miniaturized are the parallel sections, but I have a few ideas for a single layer mechanism.