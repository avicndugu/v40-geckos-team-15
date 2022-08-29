import React from 'react'
import './CourseCard.css'
import "./WhyLearn.css"

function WhyLearnCard(props) {



  return (
    <div>

        <div className='card-container card2'>
            <img className="card-img img2" src={props.img}/>
            <p className='descript-text d-text2'>{props.learntag}</p>
        </div>
    </div>
  )
}

export default WhyLearnCard