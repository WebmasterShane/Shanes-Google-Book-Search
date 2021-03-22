import React, { Component, useState, useEffect } from 'react';
import ListItem from "../components/List/ListItem";
import List from "../components/List/List"
import API from "../utils/API";

 function Search() {
  const [books, setBooks] = useState([])
   const[defaultState, setDefaultState] = useState({
    books: [],
    bookSearch: "",
    savedBooks: [],
    searched: ""
   })
console.log(defaultState)
console.log(books)
  useEffect(() => {
    loadSavedBooks();
  }, []);
   
  

  // function checkIfSaved = googleId => {
  //   // not forEach used because we want the return statement break the loop
  //   for (let i in this.state.savedBooks) {
  //     if (this.state.savedBooks[i].googleId === googleId) return true
  //   }
  //   return false;
  // }



  function loadSavedBooks(){
    API.getSavedBooks()
    .then(res => {
      setDefaultState({ savedBooks: res.data });
    })
  }

 function handleFormSubmit(event) {
    event.preventDefault();
    console.log(defaultState.bookSearch)
    API.getBooks(defaultState.bookSearch)
    .then((results) =>{
      console.log(results)
      setBooks(results)
    })
  };

 function deleteSavedBook(event, googleId) {
    event.preventDefault();
    API.deleteSavedBook(googleId)
    .then(res => this.loadSavedBooks())
    .catch(err => console.log(err));
  };

 function handleSave (event, googleId, title, authors, description, href, thumbnail){
    event.preventDefault();
    API.saveBook({ googleId, title, authors, description, href, thumbnail })
    .then(res => loadSavedBooks());
  }


    return (
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
                  
                  onChange = {(e) => setDefaultState({...defaultState,bookSearch: e.target.value})} />
              </div>
              <button className="btn btn-primary" onClick={handleFormSubmit}>Search</button>
            </form>
          </div>
          </div>
        <div className="row">
        <div className="col border border-rounded p-3 mb-4">
            <h4>Results</h4>
              <h4>Results for {defaultState.bookSearch}</h4>
                <List>
                {books.map((books, index) => 
                  
                      <ListItem
                        index={index}
                        book={books}
                      />
                )}
                </List>
              
          </div>

          </div>
        </div>
    )
                }

export default Search;