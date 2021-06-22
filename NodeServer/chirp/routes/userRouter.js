const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/Update/:email", async (req, res) => {
  if (req.body.email === req.params.email || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      catch (err) {
        console.log(err)
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findOne({ email: req.body.email });
      await User.updateOne({ $set: req.body });
      res.status(200).json("Account has been updated");
    }
    catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/delete/:email", async (req, res) => {
  if (req.body.email === req.params.email || req.body.isAdmin) {
    try {
      await User.findOne({ email: req.body.email });
      await User.deleteOne();
      res.status(200).json("Account deleted");
    }
    catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  }
  else {
    return res.status(403).json("Hello You Can't Delete anyone's Account");
  }
});

router.get("/allUsers", async (req, res) => {
  console.log("all users");
  User.find({}, function (err, users) {
    var userMap = {};

    users.forEach(function (user) {
      userMap[user.email] = user;
    });

    res.send(userMap);
  });
});

//get a user
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    console.log("USer")
    console.log(user);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


router.put("/follow/:email", async (req, res) => {
  if (req.body.email !== req.params.email) {
    try {
      const user = await User.findOne({ email: req.params.email });
      const cUser = await User.findOne({ email: req.body.email });


      if (!user.followers.includes(req.body.email)) {
        await user.updateOne({
          $push:
            { followers: req.body.email }
        });

        await cUser.updateOne({
          $push:
            { followings: req.params.email }
        });

        res.status(200).json("UserFollowed");

      } else {
        res.status(403).json("You allready follow this user");
      }
    }
    catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});



router.put("/unfollow/:email", async (req, res) => {
  if (req.body.email !== req.params.email) {
    try {
      const user = await User.findOne({ email: req.params.email });
      const currentUser = await User.findOne({ email: req.body.email });
      if (user.followers.includes(req.body.email)) {
        await user.updateOne({
          $pull:
            { followers: req.body.email }
        });
        await currentUser.updateOne({
          $pull: { followings: req.params.email }
        });
        res.status(200).json("User Un Followed");
      } else {
        res.status(403).json("You Donot follow this user prior");
      }
    }
    catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are un Following YourSelf You cannot");
  }
});



module.exports = router;