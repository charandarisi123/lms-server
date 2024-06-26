"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { connect } from "http2";
const app_1 = require("./app");
const cloudinary_1 = require("cloudinary");
const db_1 = __importDefault(require("./utils/db"));
require('dotenv').config();
// cloudinary config
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    secret_key: process.env.CLOUD_SECRET_KEY,
});
//create server
app_1.app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    (0, db_1.default)();
});
