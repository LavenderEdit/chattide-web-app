export interface CommentEvent {
    commentId: number;
    postId: number;
    authorId: number;
    authorName: string;
    postOwnerEmail: string;
    content: string;
    timestamp: string;
}