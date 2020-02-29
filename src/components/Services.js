import React ,{Component} from 'react';
import Titles from './Titles';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
 export default class Services extends Component{

     state={
         services:[
             {
                 icon:<FaCocktail/>,
                 title:'free cocktaills',
                 info:'Lorem ipsum dolor sit amet consecteur adipiscing elit .Magni,corporis!'
             },
             {
                  icon:<FaHiking/>,
                  title:'Endless Hiking',
                  info:'Lorem ipsum dolor sit amet consecteur adipiscing elit .Magni,corporis!'
             },
             {
                  icon:<FaShuttleVan/>,
                  title:'free Shuttle',
                  info:'Lorem ipsum dolor sit amet consecteur adipiscing elit .Magni,corporis!'
             },
             {
                   icon:<FaBeer/>,
                   title:'Strongest Beer',
                   info:'Lorem ipsum dolor sit amet consecteur adipiscing elit .Magni,corporis!'
             }
         ]
     }
     render(){
         return(
             <section className="services">
             <Titles title="services" />
              <div className="services-center">
               {this.state.services.map((item,index)=>{
                return <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                 </article>
               }
               )
               }
            </div>
             </section>
         )
     }
 }
