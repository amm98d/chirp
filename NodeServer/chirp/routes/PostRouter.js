const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/create", async (req, res) => {


  try {
  var cUser = await User.findOne({ email: req.body.email });
  
  
 
  const newPost = new Post({
    email :  req.body.email,
     desc: req.body.desc,
     postNum: cUser.NumberofPosts,
     postId: req.body.email+cUser.NumberofPosts
  });
 
    console.log("new Post");
    console.log(req.body.email+(cUser.NumberofPosts))
    await cUser.updateOne({ $inc: { NumberofPosts: 1} });
    const savedPost = await newPost.save();
    
    
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:email/:postNum/like", async (req, res) => {
console.log("Liking Tweet")
  try {
    const post = await Post.findOne({postId:(req.params.email+req.params.postNum)});
    if (!post.likes.includes(req.body.email)) {
      await post.updateOne({ $push: { likes: req.body.email } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.email } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/updateTweet", async (req, res) => {
  try {
    const post = await Post.findOne({postId:(req.body.email+req.body.postNum)});
    if (post.postId === (req.body.email+req.body.postNum)) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
      console.log(err);
    res.status(500).json(err);
  }
});
//delete a post

router.delete("/delete", async (req, res) => {
  try {
    const post = await Post.findOne({postId:(req.body.email+req.body.postNum)});
    if (post.postId === (req.body.email+req.body.postNum)) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
      console.log(err);
    res.status(500).json(err);
  }
});



//get a post

router.get("/:email/:postNum", async (req, res) => {
    console.log("Fetvching")
    console.log(req.params.email)
    console.log(req.params.PostNum)
  try {
    const post = await Post.findOne({postId:(req.params.email +req.params.postNum)});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts

router.post("/timeline/all", async (req, res) => {
  try {
      console.log(req.body.email)

    const currentUser = await User.findOne({email:req.body.email} );
    console.log("Fetch2")
    const userPosts = await Post.find({email:req.body.email});
    console.log("Fetch3")
    const friendPosts = await Promise.all(
      currentUser.followings.map((fremail) => {
        return Post.find({ email: fremail });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
      console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;