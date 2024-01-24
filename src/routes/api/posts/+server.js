
import { json } from '@sveltejs/kit';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(4, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};


export const GET = async ({url}) => {
    const urlTags = url.searchParams.get('tags')?.split(',')
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});


    // Filter posts based on tags if tags are present
    const filteredPosts = urlTags
        ? sortedPosts.filter(post => {
            // Assuming tags are found under post.meta.categories
            const postTags = post.meta.tags || [];
            return urlTags.every(t => postTags.includes(t));
        })
        : sortedPosts;


	return json(filteredPosts);
};