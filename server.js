// External Import
const express = require("express");
// Internal Import
const routes = require("./routes/index");
const middleware = require("./middleware/index");
const mongodb = require("./utlis/mongodb")

const app = express();
const PORT = 3000;

// setup middleware
middleware(app, express);

//setup mongodb
mongodb.connection();

// setup routes
routes(app);

app.listen(PORT, () => {
  console.log(
    "Server is Successfully Running and App is listening on port " + PORT
  );
});
