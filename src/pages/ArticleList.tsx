import React from "react";
import articles from "../utils/art-placeholders";
import { Link } from "react-router-dom";
type Props = {};

function ArticleList({}: Props) {
    return (
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                Article List
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {articles.map((art, i) => (
                        <div key={i} className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Link to={`/atricle/${art.name}`}>
                                    <img
                                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                                        src={art.thumbnail}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticleList;
