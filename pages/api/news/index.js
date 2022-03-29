
const {news}= require("./data.json")
export default function handler(req, res) {
  if (req.method==="GET"){
  res.status(200).json(news)
    
  }else{
    res.setHeader("Allow",["GET"]);
    res.status(405).json({Message:`Method ${req.method} is not allowed`})
  }
}
