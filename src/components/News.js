import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'



const News =(props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [progress, setProgress] = useState(0)

    // document.title  = `${capitalizeFirstLetter(props.category)} - News Monkey`;

    const capitalizeFirstLetter =(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


    const updateNews = async()=> {
        props.setProgress(0);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        setProgress(true)
        props.setProgress(30);
        fetch(url).then((res) => res.json())
        .then((json) => {
            setArticles(json.articles)
            setTotalResults(json.totalResults)
            setProgress(80)
            setArticles(json.articles)
            setTotalResults(json.articles.totalResults)
            setLoading(false)
            });
            props.setProgress(100);
        }
    
    
    useEffect(() => {
        document.title  = `${capitalizeFirstLetter(props.category)} - News Monkey`;
        updateNews();  
    }, [])
    
    // const handlePrevClick = async()=>{
    //     setPage(page -1)
    //     updateNews();
    // }

    // const handleNextClick = async()=>{
    //     setPage(page +1)
    //     updateNews();
 
    // }
    const fetchMoreData = async() =>{
        setPage(page +1)
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        // setState({loading:true});
        fetch(url).then((res) => res.json())
        .then((json) => {
                setArticles(articles.concat(json.articles))
                setTotalResults(json.articles.totalResults)
                setLoading(false)   
            });
        }
    
  
    return (
    <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey - Top HeadLines {props.category}</h2>   
            
        
        {loading && <Spinner />}
        <InfiniteScroll   
            dataLength={articles.length} 
            next={fetchMoreData} 
            hasMore={articles.length !== totalResults} 
            loader={<Spinner />} 
        > <hr /><div style={{height:"20px"}}></div>
        <div className='container'  >
            <div className='row'>
                {/* {console.log(articles)} */}
                {articles.map((element)=>{
                    return(
                        <div className='col-md-3' key={element.url}>
                            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    )
                    })}
                </div>
            </div> 
        </InfiniteScroll>
        <br/><br/>
        {/* <div className='container d-flex justify-content-between'>
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button disabled={page +1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
    </div>
    )
  }

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}

export default News;
