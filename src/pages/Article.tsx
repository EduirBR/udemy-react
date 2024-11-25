import Articles from "../components/Articles";
import { get_articles } from "../utils/art-placeholders";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import { CommentsResponse, Comments } from "../interfaces/responseInterface";
import CommentBox from "../components/CommentBox";
import * as fetchService from "../fetch";
import AddCommentForm from "../components/AddCommentForm";

type Props = {};

function Article({}: Props) {
    const { name } = useParams();
    const { article, excluded_arts } = get_articles(name!);
    const [articleInfo, setAticleInfo] = useState<Comments[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const path = `/api/blog/${name}`;
            const result = await fetchService.get(path);
            const body: CommentsResponse = await result.json();
            setAticleInfo(body.data.comments);
        };
        fetchData();
    }, [name]);

    if (!article) {
        return <NotFound />;
    }
    return (
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                {article.title}
            </h1>
            {article.content.map((p, index) => (
                <p
                    className="mx-auto leading-relaxed text-base mb-4"
                    key={index}
                >
                    {p}
                </p>
            ))}
            <br />
            <CommentBox comments={articleInfo} />
            <AddCommentForm name={name!} setArticleInfo={setAticleInfo} />
            <h2 className="sm:text-2xl text-xl font-bold my-4 text-gray-900"></h2>
            <div className="flex flex-wrap -m-4">
                <Articles articles={excluded_arts} />
            </div>
        </div>
    );
}

export default Article;
