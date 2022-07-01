import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';


function getThumb(something){ 
  //passed thumbnail
  var thumbU = something.location + something.images.small
  return thumbU
}
  

function App(){
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("https://www.jalirani.com/files/barstool.json")
    .then((res) => {
      setData(res.data);
    });
  },[])
  return <div>
    {data.map((article)=> {
      return <div>
        
        <h1><a href = {article.url}>{article.title}</a></h1>
        <div>
        <img src ={getThumb(article.thumbnail)} alt = "thumbnail" heihgt = {200} width = {200}/>
        </div>
        <h1>{article.author.name}</h1>
        <img src ={article.author.avatar} alt = "Avatar" height={64} width = {64}/>
        <h2>{article.comment_count}</h2>
      </div>
    })}
  </div>
}

export default App;
