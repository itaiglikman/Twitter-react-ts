import type { TwittType } from "../Types/types";

function createPost(userName: string, content: string) {
    const post: TwittType = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        userName,
        content
    }
    return post;
}

export default {
    createPost,
}