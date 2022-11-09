import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className=" badge rounded-pill bg-danger"
              style={{ left: "50%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageurl
                ? imageurl
                : "https://images.livemint.com/img/2022/09/16/600x338/KVP8IM6W_1600274980295_1600274984745_1663346215072_1663346215072.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} updated on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
