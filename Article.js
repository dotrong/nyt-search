var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/* 
    Article has 4 fields in MongoDB
*/

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  date: {
    type: Date
  },
  article_id: {
    type:String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;