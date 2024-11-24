import articles from "../utils/art-placeholders";
import { useParams } from "react-router-dom";

type Props = {};

function Article({}: Props) {
    const { name } = useParams();
    const article = articles.find((article) => article.name == name);
    if (!article) {
        return (
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                Article {name} not found
            </h1>
        );
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
        </div>
    );
}

export default Article;
