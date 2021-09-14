const express = require("express");
const serverless = require("serverless-http");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const connection = mongoose.connect("mongodb://localhost:27017/test");

const RandomSchema = new Schema({ author: String, body: String });
const RandomModel = mongoose.model("randomschema", RandomSchema);

exports.handler = async event => {
    await connection;

    console.log("tweed data is: ", event.body);
    const newTweet = await RandomModel.create(JSON.parse(event.body));
    console.log("saved to db: ", newTweet);
    return {
        statusCode: 201,
        body: JSON.stringify(newTweet),
    };
};