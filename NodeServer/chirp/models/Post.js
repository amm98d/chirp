const mongoose = require("mongoose");

const PostSch = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    postId :{
        type: String,
        required: true,
        unique: true
    },

    postNum:{
        type: String,
        required: true
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSch);