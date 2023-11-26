import React from "react";

function NewsItem(props) {
  const { title, description, url, link ,date,author,source} = props;
  const modifiedurl =url!==null?url:"https://image.cnbcfm.com/api/v1/image/107316737-1697197702560-gettyimages-1258888530-AA_21062023_1243522.jpeg?v=1697197841&w=1920&h=1080";
  const truncatedTitle = title && title.length > 50 ? title.slice(0, 50) + "..." : title;
  const truncatedDescription = description && description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div>
   
      <div className="card  my-2 shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
      {/* <button type="button" className="btn btn-primary position-relative">
  Inbox */}
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>

        <img src={modifiedurl} className="card-img-top" alt="..." />
        <div className="card-body  ">
          <h5 className="card-title">{truncatedTitle || "No Title Available"}</h5>
          <p className="card-text">{truncatedDescription || "The Patriots are finally paying the price for several poor decisions, and the result is a reality that the franchise hasn’t known for more than two de..."}</p>
          <p className="card-text"><small class="text-muted"> Updated by {author} on {date}</small></p>
          <a href={link} className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
