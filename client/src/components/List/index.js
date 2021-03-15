import React from "react";

export function List({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
};

export function ListItem({
  googleId,
  title,
  authors,
  description,
  thumbnail,
  href,
  date,
  clickEvent,
  saved,
  screenWidth
}) {
  console.log(saved);
  return (
    <li className="list-group-item m-2">

      {screenWidth >= 768 &&
        <div className="float-right">
          {!saved ? (
            <button
              className="btn btn-success"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
          ) : (
              <button className="btn btn-danger" onClick={event => clickEvent(event, googleId)}>Unsave</button>
            )
          }
          <a className="btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View</a>
        </div>
      }

      <h4 className="font-weight-bold">{title}</h4>
      <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
      <div className="row">
        <div className="col-sm-12 col-md-auto text-center">
          <img src={thumbnail} alt={title} className="mt-1 mb-2" />
        </div>
        <div className="col">
          <p className={screenWidth < 768 ? "text-justify" : ""}>{description}</p>
        </div>
      </div>

      {screenWidth < 768 &&
        <div className="row">
          <div className="col">
          {!saved ? (
            <button
              className="btn btn-success btn-block"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
          ) : (
              <button className="btn btn-danger btn-block" onClick={event => clickEvent(event, googleId)}>Unsave</button>
            )
          }
          </div>
          <div className="col">
            <a className="btn btn-primary btn-block" href={href} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        </div>
      }
      {saved &&
        <div className="row">
          <div className="col">
            <small className="text-right">Saved on {date}</small>
            </div>
        </div>
      }

    </li>
  );
};