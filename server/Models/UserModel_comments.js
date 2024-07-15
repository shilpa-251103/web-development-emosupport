const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');


const commentSchema = new mongoose.Schema({
    username: String,
    comment: String,
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  module.exports = Comment;