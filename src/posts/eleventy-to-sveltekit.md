---
title: "From Eleventy to SvelteKit"
date: "26 Apr 2023"
---


I started this website in the final year of my engineering degree. Up to this point my "areas of inquiry" had been esoteric operating systems and scientific computing, so I assumed web dev would be plain sailing.

## Eleventy

Slightly overwhelmed by all the paths I could take, I settled on static site generators. I looked at Eleventy and Hugo, going with Eleventy because it seemed more flexible. I would recommend starting with just HTML and CSS for someone in a similar position, it's much easier to understand the templating and data fetching a static site generator does if you understand what you are actually generating.

I was satisfied with Eleventy for some time, it had a few very useful features, such as being able to generate a date from the last edit of that file in the git repo. I could host it on Netlify and have it linked to my Github so that it rebuilt everytime I pushed an update.

## A digression on GUI develtoolkits

Designing a GUI is difficult, and choosing which technology to use in the first place is a good part of why.

I think you can categorize frameworks by the approach to cross platform consistency. In one category you have frameworks that handle their own drawing, like flutter, game engines and immediate mode guis, these gaurantee consitent user experience, but if you want platform specific feaures you have to implement them on top of their engine. In the middle you have gui libraries like qt and webapps, these might use native text rendering, and will use different widgets.

I believe the future is flutter et al. I am particulary interested in where the Rust GUI ecosystem goes.


## SvelteKit

After using Svelte for a month or so I realised there was nothing stopping me from using it for my website as well. It would be no heavier, because of its compile step, and it would offer me a lot more flexibility. Actually the main reason I started using it was so the page wouldn't reload when you were navigating the website, which I found to be exceedingly nice.

I had to do a few things to get my SvelteKit project to feature parity with my Eleventy setup. I needed a markdown preprocessor, for starters, even though I end up using a lot of HTML in my markdown documents, having to write 'p' tags everywhere really gets in the way of my writing. I found <a href="https://mdsvex.pngwn.io/">mdsvex</a> from <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">this blogpost</a>.

## Conclusion

You should probably use Wordpress

