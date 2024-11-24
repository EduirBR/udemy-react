import Articles from "../components/Articles";
import { get_articles } from "../utils/art-placeholders";
import { useParams } from "react-router-dom";

type Props = {};

function Article({}: Props) {
    const { name } = useParams();
    const { article, excluded_arts } = get_articles(name!);
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
            <h2 className="sm:text-2xl text-xl font-bold my-4 text-gray-900"></h2>
            <div className="flex flex-wrap -m-4">
                <Articles articles={excluded_arts} />
            </div>
        </div>
    );
}

export default Article;
