import React, { useState, useEffect } from "react";
import News from "./news";
const NewsContainer = () => {
    const [newsdata, setNewsData] = useState([])
    useEffect(() => {
        fetch("https://newsdata.io/api/1/latest?apikey=pub_453279580e7d32edd9b54813321db221700a7&language=en").then((response) => {
            response.json()
                .then((resp) => {
                    console.log(resp);
                    setNewsData(resp.results)
                })
                // cathes any error that  ocuus during fetching
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    return (
        <>
            <h1>NEWS APP </h1>
            <div className="container">
                <div className="row justify-content-around">
                    {
                      // .map iterate over the news data array and render individual news components for each item
                        newsdata.map((news, index) => {
                            return (
                                <div className="col-md-4 mb-4" key={index}>
                                    <News news={news} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default NewsContainer




















