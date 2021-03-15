const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

app.use("/api", routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
