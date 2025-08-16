import type { TwittType } from "../Types/types";

function createPost(userName: string, content: string) {
    const post: TwittType = {
        date: new Date().toISOString(),
        userName,
        content
    }
    return post;
}

// digest row userName to a specific pattern User_Name
function formatUserName(rowUserName: string): string {
    return rowUserName
        .trim()
        .split(' ')
        .map(word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : '')
        .join('_');
}

export default {
    createPost,
    formatUserName,
}