import React from 'react';
import List from "../List"


function Search(props) {
    console.log(props)
    return(
        <div className="container">
        <div className="row">
          <div className="col rounded text-center bg-secondary mt-4 p-4">
            <h1>Google Book Search</h1>
            <h4>Search and save your favorite books!</h4>
          </div>
          </div>
          <div className="row">
          <div className="col rounded bg-light mb-4 mt-4 p-4">
            <h4>Book Search</h4>
            <form>
              <div className="form-group">
                <label htmlFor="bookSearch">Book</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  name="bookSearch"
                  value={props.bookSearch}
                  onChange={props.handleInputChange} />
              </div>
              <button className="btn btn-primary" onClick={props.handleFormSubmit}>Search</button>
            </form>
          </div>
       </div>
        <div className="row">
          <div className="col border border-rounded p-3 mb-4">
            {props.searched === "" ? (
            <h4>Results</h4>
            ) : (
              <h4>Results for {props.searched}</h4>
            )}
            {!props.books.length ? (
              <h6 className="text-center">No books to display currently</h6>
            ) : (
                <List>
                  {props.books.map(book => {
                    return (
                      <List
                        key={book.volumeInfo.infoLink}
                        googleId={book.id}
                        title={book.volumeInfo.title || "Title Unavailable"}
                        authors={book.volumeInfo.authors || ["Unknown Author"]}
                        description={book.volumeInfo.description || "No description available"}
                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "img/placeholder.png"}
                        href={book.volumeInfo.infoLink}
                        saved={this.checkIfSaved(book.id)}
                        clickEvent={this.checkIfSaved(book.id)
                          ? this.deleteSavedBook
                          : this.handleSave}
                        date={this.checkSavedDate(book.id)}
                        screenWidth={props.screenWidth}
                      />
                    );
                  })}
                </List>
              )}
          </div>
        </div>
        </div>
    )
};

export default Search;