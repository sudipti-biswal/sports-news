
const {news}= require("./data.json")
console.log("news",news)

export default function handler(req, res) {
  const newsArticle= news?.filter((item)=>item.slug === req.query.slug);
  if (req.method==="GET"){
    res.status(200).json(newsArticle)
      
    }else{
      res.setHeader("Allow",["GET"]);
      res.status(405).json({Message:`Method ${req.method} is not allowed`})
    }

  }
  