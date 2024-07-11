import React from "react"
const News = ({news}) => {
    return (
        <>
        <div className="card" style={{ width: '18rem', marginTop: '15px' }}>
        <img src={news.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
        <h3>{news.ai_tag}</h3>
          <p>{news.description}</p>
          <a href={news.link} class="btn btn-info">click to read more</a>
       </div>
      </div>
      </>
        )
}
export default News







