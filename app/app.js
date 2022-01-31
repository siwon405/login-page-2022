// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");

// const logger = require("./src/config/logger");
// logger.log("info", "할 수 있냐? 노드!");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use 는 미들 웨어를 등록해주는 메서드

module.exports = app;