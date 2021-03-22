import axios from "axios";
import { resolve } from "path";

export default {
  getBooks: function (query) {
    console.log(query);
    
    const queryjoin = query.split(" ").join("")
    console.log(queryjoin);
    const queryjoinstring = JSON.stringify(queryjoin)
    console.log(queryjoinstring);
    return new Promise((resolve, reject)=>{
     axios
     .get("https://www.googleapis.com/books/v1/volumes/?q="+queryjoinstring+"+intitle:")
      .then(res =>{
        const books = res.data;
        console.log(books)
        const results = books.items.map(book=>{
          return{
            googleId: book.id,
            author: book.volumeInfo.authors,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            href: book.selfLink,
            // thumbnail: book.volumeInfo.imageLinks.thumbnail,

          }
        })
        resolve(results)
      })
     .catch(err => reject(err))
    })
  },

  getSavedBooks: function () {
    return axios.get("/api/savedBooks");
  },

  saveBook: function (bookData) {
    return axios.post("./api/savedBooks", bookData);
  },

  deleteSavedBook: function (googleId) {
    return axios.delete(`/api/savedBooks/${googleId}`);
  },
};
