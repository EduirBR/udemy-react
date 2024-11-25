import { Comments } from "../interfaces/responseInterface";

type Props = {
    comments: Comments[];
};

function CommentBox({ comments }: Props) {
    if (comments.length > 0)
        return (
            <>
                <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
                    Comments:
                </h3>
                {comments.map((comment, i) => (
                    <div key={i}>
                        <h4 className="text-xl font-bold">
                            {comment.username}
                        </h4>
                        <p className="mt-1 mb-4">{comment.text}</p>
                    </div>
                ))}
            </>
        );
}

export default CommentBox;
