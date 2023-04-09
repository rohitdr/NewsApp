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
      
  
  /* This code block is handling a POST request to add news to the database. It first extracts the
  necessary data from the request body and creates a new News object with that data. It then saves
  the News object to the database using the `save()` method and sends a JSON response with the saved
  News object and a status code of 200. If there is an error during this process, it logs the error
  message and sends a response with a status code of 500. */
      const savedNews = await news.save();
      res.status(200).json(savedNews);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
 /* This code block is defining a route for retrieving all news articles from the database using the
 HTTP GET method. It first uses the `News.find()` method to retrieve all news articles from the
 database and stores them in the `news` variable. It then checks the length of the `news` array and
 if it is zero, it sends a JSON response with an error message and a status code of 404. If there
 are news articles in the database, it sends a JSON response with the news articles and the total
 number of news articles in the database with a status code of 200. */
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