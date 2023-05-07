---
title: "From Eleventy to SvelteKit"
date: "26 Apr 2023"
---


I started this website in the final year of my engineering degree. Up to this point my "areas of inquiry" had been esoteric operating systems and scientific computing, so I assumed web dev would be plain sailing.

## Eleventy

Slightly overwhelmed by all the paths I could take, I settled on static site generators. I looked at Eleventy and Hugo, going with Eleventy because it seemed more flexible. I would recommend starting with just HTML and CSS for someone in a similar position, it's much easier to understand the templating and data fetching a static site generator does if you understand what you are actually generating.

I was satisfied with Eleventy for some time, it had a few very useful features, such as being able to generate a date from the last edit of that file in the git repo. I could host it on Netlify and have it linked to my Github so that it rebuilt everytime I pushed an update.

## A digression on GUI toolkits

Designing a GUI is difficult, and choosing which technology to use in the first place is a good part of why. The choice seems between a web app and a 'native' app, but the latter term has never been well defined, and the former is becoming almost as murky.

At the lowest level we have drawing apis and libraries. Apple has core graphics, windows has direct2d. Browsers have HTML + CSS, SVG and Canvas. On Linux you typically use Cairo, Flutter uses Skia. And then there is nothing stopping you using a 3d api, Metal, DirectX, Vulkan, OpenGL, WebGL and WebGPU.

They you have the toolkits, some are built on top of one portable api, like Flutter on Skia, some tarrget multiple, like Qt, some make no attempt, like windowsa and mac toolkits. 

I believe the future is flutter et al. I don't see the point in not making a cross platform app, and I think trying to target multiple lo level apis is an inefficent way to going about things.

Until then you should be making web apps. For all their shortcomings, there isn't another platform that comes close to the level of crossplatform support, 3rd party libraries.


## SvelteKit

After using Svelte for a month or so I realised there was nothing stopping me from using it for my website as well. It would be no heavier, because of its compile step, and it would offer me a lot more flexibility. Actually the main reason I started using it was so the page wouldn't reload when you were navigating the website, which I found to be exceedingly nice.

I had to do a few things to get my SvelteKit project to feature parity with my Eleventy setup. I needed a markdown preprocessor, for starters, even though I end up using a lot of HTML in my markdown documents, having to write 'p' tags everywhere really gets in the way of my writing. I found <a href="https://mdsvex.pngwn.io/">mdsvex</a> from <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">this blogpost</a>.

## Conclusion

You should probably use Wordpress

