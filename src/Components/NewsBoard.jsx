import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <br />
            <h1 className='text-center fw-bold fs-1' >Aaj Ki Taaza <span className='badge bg-danger fw-bolder fs-1'>KHABAR</span></h1>
            <br />
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} scr={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

export default NewsBoard
