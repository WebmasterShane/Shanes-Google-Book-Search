import axios from "axios";

export default {
  getBooks: function (query) {
     axios
     .get("https://www.googleapis.com/books/v1/volumes/?q="+{ query });
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
