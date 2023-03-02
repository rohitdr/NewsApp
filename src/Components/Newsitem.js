import React from 'react'

 const Newsitem =(props)=> {
 
    // let {title, desc,ImageUrl,NewsUrl,time,author,source}=this.props;
   
    return (
    <>
        <div class="card m-3" >
  <img src={props.ImageUrl} class="card-img-top" alt="..."      width="400" 
     height="200" />
  <div class="card-body">
    <h5 class="card-title">{props.title}.....</h5>
    <p class="card-text">{props.desc}</p>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:1}}>
    {props.source}
    <span class="visually-hidden"></span>
  </span>
    <p class="card-text"><small class="text-muted"> {(new Date(props.time).toUTCString())} By {props.author?props.author:"Rohit"}</small></p>
    <a href={props.NewsUrl} target= "_blank" class="btn btn-primary">Read More</a>
  
  </div>
</div>
</>
    )
  }


export default Newsitem
