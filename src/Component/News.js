import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
// import Spine from './Spinner'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [state, setState] = useState([]);
  // const[loading,setLoading]=useState(true);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const fetchApi = async () => {
    try {
      // props.setProgress(10);
      // console.log(props.setProgress)
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ebbe1bac9a6f4af8847ee7e2922e771a&page=${page}`
      );
      // props.setProgress = 30;
      let data = await response.json();
      // props.setProgress = 70;
      console.log(data, "data");
      setState(data.articles);
      setTotalResults(data.totalResults);
      // props.setProgress(100);
      // props.setProgress = 100;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  // const previous=async()=>{
  //   try {
  //     const response = await fetch(
  //       `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ebbe1bac9a6f4af8847ee7e2922e771a&page=${page}`
  //     );
  //     let data = await response.json();

  //     setState(data.articles);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //    setPage(page-1)
  //    console.log(page)

  // }
  // const next=async()=>{

  //   try {
  //     const response = await fetch(
  //       `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ebbe1bac9a6f4af8847ee7e2922e771a&page=${page}`
  //     );
  //     let data = await response.json();

  //     setState(data.articles);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //   console.log(page)
  //    setPage(page+1)
  // }

  //  console.log(state,"ssss");
  const fetchMoreData = async () => {
    // props.setProgress(10);
    // console.log(props.setProgress)
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${
        props.category
      }&apiKey=ebbe1bac9a6f4af8847ee7e2922e771a&page=${page + 1}`
    );
    //  props.setProgress=(30);
    setPage(page + 1);
    let data = await response.json();
    //  props.setProgress=(70);
    //  console.log(data,"data");
    setState(state.concat(data.articles));
    setTotalResults(data.totalResults);
    // props.setProgress(100);
    //  props.setProgress=(100);
  };

  return (
    <>
      <h1 className="text-center my-1">
        Headlines of {props.category} Section
      </h1>
      {/* <Spinner/>  */}
      <InfiniteScroll
        dataLength={state.length}
        next={fetchMoreData}
        hasMore={state.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container content-row">
          <div className="row">
            <div className="col-md-12 ">
              <div className="row my-3">
                {/* <div className="col-md-3"> */}
                  {/* <Spine/>  */}

                  {state.map((currvalue, index) => (
                 <div className=" col-4 col-md-4 " key={index}>
                      <NewsItem
                        title={currvalue.title}
                        description={currvalue.description}
                        url={currvalue.urlToImage}
                        link={currvalue.url}
                        date={currvalue.publishedAt}
                        author={currvalue.author}
                        source={currvalue.source.name}
                      />
                    </div>
                  ))}
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* <div className="container d-flex justify-content-between"> */}
          {/* <button disabled={page<=1} type="button" className="btn btn-dark" onClick={previous}>← Previous</button> */}
          {/* <button type="button" className="btn btn-dark " onClick={next}>Next →</button> */}
          {/* </div> */}
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};

export default News;
