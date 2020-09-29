import React from 'react';
import axios from 'axios';
export default class Home extends React.Component{
state = {
articles: ""
}
componentDidMount(  ){
axios.get( "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a2c8801190a0424ba9664fc5de4254cf" ).then( res =>{
this.setState( {articles: res.data.articles } )
} )
}
render(  ){
const {articles} = this.state;
console.log( articles );
return( 
<div className ="container">
{ 
articles.length ? articles.map( ( article, index ) =>{
return( <div class="row"> <div class="col s12 m7"> <div class="card"> <div class="card-image"> <img src={article.urlToImage}/> </div>
 <span class="card-title">{article.title}</span>
 <div class="card-content"> <p>{article.description}</p> </div>
  <div class="card-content"> <p>{article.content}</p> </div>
  <p>{article.author}</p>
  <div class="card-action"> <a href={article.url}>This is a link</a> </div> </div> </div> </div> 
)
} ): <div>Loading...</div>
}
</div>
 )
}
}