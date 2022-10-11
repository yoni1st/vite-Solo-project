import React from 'react'
import itemPic from '../../public/katie-zaferes.png'

export default function Body(props) {
  // id: 1, 
  // title: "Mount Fuji", 
  // location: "Japan", 
  // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8", 
  // startDate: "12 Jan, 2021", 
  // endDate: "24 Jan, 2021", 
  // description: "Mount Fuji is the tallest.", 
  // imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
  return (
    <div className='body'>
        <div className='content'>
          <div className='div--img'>
            <img src={props.imageUrl} alt='images' className='body--img'/>
          </div>
          <div className='body--dis'>
            <section>
              <span className="material-symbols-outlined">
                location_on
              </span> 
              {props.location} 
              <a href={props.googleMapsUrl}>View on Google Map</a>
            </section>
            <h1>{props.title}</h1>

            <h4><span>{props.startDate}</span> - <span>{props.endDate}</span></h4>

            <p className='journal'>{props.description}</p>
          </div>  
        </div>   
    </div>
  )
}
