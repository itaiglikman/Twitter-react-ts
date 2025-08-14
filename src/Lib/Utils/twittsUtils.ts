import type { TwittType } from "../Types/types";

function createPost(content: string) {
    const post: TwittType = {
        id:  crypto.randomUUID(),
        date: new Date().toString(),
        userName: 'itai',
        content
    }
    return post;
}

export default {
    createPost,
}