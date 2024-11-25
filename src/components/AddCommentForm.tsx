import React, { useState } from "react";
import * as fetchService from "../fetch";
import { CommentsResponse } from "../interfaces/responseInterface";
type Props = {
    name: string;
    setArticleInfo: Function;
};

function AddCommentForm({ name, setArticleInfo }: Props) {
    const [username, setUsername] = useState<string>("");
    const [text, setComment] = useState<string>("");
    const addComment = async () => {
        const path = `/api/blog/${name}/add-comments`;
        const resp = await fetchService.post(path, {
            username,
            text,
        });
        const body: CommentsResponse = await resp.json();
        setArticleInfo(body.data.comments);
        setUsername("");
        setComment("");
    };

    const handleAddComment = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        await addComment();
    };
    return (
        <form
            className="shadow rounded px-8 pt-8 pb-8 mb-4 bg-green-200"
            action=""
        >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
                Add a Comment
            </h3>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Name :
            </label>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Comment :
            </label>
            <textarea
                value={text}
                rows={4}
                cols={50}
                onChange={(event) => setComment(event.target.value)}
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                onClick={handleAddComment}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Comment
            </button>
        </form>
    );
}

export default AddCommentForm;
