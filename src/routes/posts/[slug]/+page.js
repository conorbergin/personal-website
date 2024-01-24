import { error } from "@sveltejs/kit"


export const load = async ({params}) => {
    try {
        const post = await import(`../../../posts/${params.slug}.md`)
        return {
            PostContent: post.default,
            meta: {...post.metadata, slug:params.slug}
        }
    } catch (err) {
        error(404,err);
    }
}