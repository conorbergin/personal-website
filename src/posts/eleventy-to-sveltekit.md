---
title: "From Eleventy to SvelteKit"
date: "26 Apr 2023"
---

<style>
    li {
        margin: 0
    }
</style>

I started this website in the final year of my engineering degree. Up to this point my "areas of inquiry" had been esoteric operating systems and scientific computing, so I assumed web dev would be, as a lesser art, plain sailing.

## Eleventy

Slightly overwhelmed by all the paths I could take, I settled on static site generators. I looked at Eleventy and Hugo, going with Eleventy because it seemed more flexible. I would recommend starting with just HTML and CSS for someone in a similar position, it's much easier to understand the templating and data fetching a static site generator does if you understand what you are actually generating.

I was satisfied with Eleventy for some time, it had a few very useful features, such as being able to generate a date from the last edit of that file in the git repo. I could host it on Netlify and have it linked to my Github so that it rebuilt everytime I pushed an update.

## A digression on GUI development

Designing a GUI is difficult, and choosing which technology to use in the first place is more so.

Your options are:

1. Native application for every target platform, shared logic as a library
2. Make a website, package it as a app for every target platform
3. Flutter, Qt or something else

(1) requires you to have separate code, and therefore separate bugs and user experience for every platform, not ideal. Libraries like Flutter and Qt do their own drawing, 




## SvelteKit

For unrelated reasons, I had been learning modern frontend development. Specifically Svelte. I was using Svelte because it had a strong community and good ergonomics, and performance gaurantees. Svelte is a compiler which generates Javascript, unlike React which ships a runtime library for DOM manipulation. After using Svelte for a month or so I realised there was nothing stopping me from using it for my website as well. It would be no heavier, because of its compile step, and it would offer me a lot more flexibility. Actually the main reason I started using it was so the page wouldn't reload when you were navigating the website, which I found to be exeedingly nice.

I had to do a few things to get my SvelteKit project to feature parity with my Eleventy setup. I needed a markdown preprocessor, for starters, even though I end up using a lot of HTML in my markdown documents, having to write 'p' tags everywhere really gets in the way of my writing. I found <a href="https://mdsvex.pngwn.io/">mdsvex</a> from <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">this blogpost</a>.

## Conclusion

You should probably use Wordpress

