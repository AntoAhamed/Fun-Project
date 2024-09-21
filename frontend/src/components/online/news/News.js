import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

function News() {
    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4d567079a1cb496c88f4b7221987541f`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
    }

    useEffect(() => {
        updateNews();
    }, []);

    return (
        <div className='container' style={{ marginTop: "70px" }}>
            <h1 className='text-center mx-4 my-4'>Top News Headlines</h1>
            <div className="container">
                <div className="row">
                    {articles.map((e) => {
                        return <div className="col-md-4 my-2" key={e.url}>
                            <NewsItems title={e.title ? e.title.slice(0, 30) : " "} desc={e.description ? e.description.slice(0, 80) : " "} imageUrl={e.urlToImage ? e.urlToImage : "https://source.unsplash.com/3tYZjGSBwbk"} newsUrl={e.url} author={e.author ? e.author : "Unknown"} publishedAt={e.publishedAt} />
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

News.defaultProps = {
    category: "general"
}

News.propTypes = {
    category: PropTypes.string
}

export default News
