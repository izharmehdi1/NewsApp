import React from 'react';

const NewsItem =(props)=> {
    
      let {title, description, imageUrl, newsUrl, author, date,source} = props;
    return (
    <div>
        <div className="card" style={{width: "19rem", height:"31rem", marginBottom:"1.5rem"}}>
            <img src={!imageUrl?"https://www.sciencealert.com/images/2022-02/processed/PointNemoMarkedWithRedArrowInTheOcean_1024.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...  
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{zIndex:"2", marginLeft:"-50%",width:'100%'}}>{source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
    )
}

export default NewsItem;
