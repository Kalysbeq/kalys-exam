import React,{useState} from 'react'
import axios from 'axios'
import s from "./Qalys.module.css"


 const Qalys = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState([])
    axios.get(url).then(res => {
        setPosts(posts => posts = res.data)
    })


    const deletePost = (id)=>{
        
         setPosts(
         posts.filter((post)=>{
             if(post.id != id){
                 return post
             }
         })
     ) 
        
    }
    return (
        <div>
            <p className={s.text__post} style={{textAlign:"center"}}>Общий список</p>
        <div>
            
             {
               
              
                posts.map(post => {
                    return(
                       
                        <div className={s.container}>
                            
                            <h1 style={{textAlign:'center'}}>{post.id}</h1>
                            <h2 >{post.title}</h2>
                            <h3>{post.body}</h3>
                            <div className={s.btn}>
                                <button className={s.button} onClick={()=>deletePost(post.id)} >Knopochka</button>
                            </div>
                          

                        </div>
                     
   
                    )
                     
                })
                
            }
        </div>
        </div>
        
    );
    
};
export default Qalys;