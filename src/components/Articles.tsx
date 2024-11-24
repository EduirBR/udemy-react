import { Link } from "react-router-dom";
import ArticlesInterface from "../interfaces/ArticlesInterface";
type Props = {
    articles: ArticlesInterface[];
};

function Articles({ articles }: Props) {
    if (articles.length == 0)
        return (
            <>
                <h2>Not Articles to show</h2>
            </>
        );

    return (
        <>
            {articles.map((art, i) => (
                <div key={i} className="p-4 md:w-1/2">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden pb-2">
                        <Link to={`/article/${art.name}`}>
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={art.thumbnail}
                            />
                            <h3 className="text-lg font-medium text-gray-900 mb-3">
                                {art.title}
                            </h3>
                        </Link>
                        <p className="leading-relaxed mb-3">
                            {art.content[0].substring(0, 115)}...
                        </p>
                        <div className="flex item-center flex-wrap">
                            <Link
                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                to={`/article/${art.name}`}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Articles;
