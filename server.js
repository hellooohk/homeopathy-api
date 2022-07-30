const express = require("express");
const router = express.Router();

const app = express();

app.listen(process.env.PORT || 3000, function () {
  console.log(process.env.PORT || 3000);
});
