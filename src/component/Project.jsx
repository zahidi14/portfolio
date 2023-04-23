import axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {

    const [card, setCard] = useState([]);
    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/zahidi14/portfolio/project/")
        .then(response => setCard(response.data) )
        .catch(error => console.error(error));
    },[])
    console.log({t:card.name})
    const List = () =>{
        return card.map(list=>{
            return(
            <div class="col" key={list.id} style={{ background: `url({list.image}) no-repeat center center fixed`, 
            backgroundSize: 'cover'  }}>
                       <div class="hov-card fm" >
                           
                             <div class="card-content">
                                <h3>{list.name}</h3>
                                <h4>{list.code}</h4>
                                <p>{list.desc}</p>
                                <a target="_blank" rel="noopener noreferrer" href="FeMentor/fm1/">Visit</a>
                             </div>
                       </div>
                    </div>
            )
        })
    }
    return (
        <section id="project" class="project">
        <div class="container">
            <div class="header">
                <h2>Project</h2>
             </div>
             <div class="row">
             
                <div class="card-wrap">
                <List />
                 </div>
             </div>
         
            
        </div>
       
    </section>
    )
}

export default Project;