// src/routes/blog/+page.js
export const load = async ({ fetch, url }) => {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();
    return {
        posts
    };

};
