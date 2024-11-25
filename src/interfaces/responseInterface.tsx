export interface Comments {
    username: string;
    text: string;
}

interface CommentsItems {
    _id: string;
    name: string;
    comments: Comments[];
}

export interface CommentsResponse {
    error: boolean;
    message: string;
    data: CommentsItems;
}
