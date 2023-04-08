const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const News = require('../models/News');
const User = require('../models/User');
const router = express.Router();

/* This is a post request to add news to the database. */
router.post("/addNews", fetchuser, async (req, res) => {
    try {
      const {
       
        tag,
        description,
        title,

        source,
        image,
       
      } = req.body; 
      const userdata=await User.findOne({_id:req.user.id})
      const news = new News({
        
        source,
        image,
        tag,
        description,
        title,
      
        
        user: req.user.id,
       
        userdata:userdata
      });
      
  
      const savedNews = await news.save();
      res.status(200).json(savedNews);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  router.get("/allNews",  async (req, res) => {
    try {
      const news = await News.find();
  
      const news_lenght = news.length;
      if (news_lenght == 0) {
        return res.status(404).json({error:"Their is no News avialable in database"});
      }
  
      res.status(200).json({news, totalResults: news_lenght });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }


  });

  router.put("/updateNews/:id", fetchuser, async (req, res) => {
    try {
      const {
        
        source,
        image,
        tag,
        description,
        title,
      } = req.body;
  
      const newNews = {};
      if (source) {
        newNews.source = source;
      }
      if (image) {
        newNews.image = image;
      }
      if (tag) {
        newNews.tag = tag;
      }
      if (description) {
        newNews.description = description;
      }
      if (title) {
        newNews.title = title;
      }
     
     
      let news = await News.findById(req.params.id);
     
      if (!news) {
        return res.status(404).send({ error: "News not found" });
      }
   
  
    const  updateNews = await News.findByIdAndUpdate(
        req.params.id,
        { $set: newNews },
        { new: true }
      );
      res.json(updateNews);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("INTERNAL SERVER ERROR");
    }
  });

  /* This is a route for deleting a news article from the database. It uses the HTTP DELETE method and
  takes in the news article ID as a parameter in the URL. The `fetchuser` middleware is used to
  authenticate the user making the request. */
  router.delete("/deleteNews/:id", fetchuser, async (req, res) => {
    try {
      
      let news = await News.findById(req.params.id);
      if (!news) {
        return res.status(404).json({error:"News not found"});
      }
      // verfing user
      if (news.user.toString() !== req.user.id) {
        return res.status(404).json({error:" You Are Not allowed"});
      }
      news = await News.findByIdAndDelete(req.params.id);
      res.status(200).json({ succes: "News has been deleted"});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("INTERNAL SERVER ERROR");
    }
  });
module.exports = router