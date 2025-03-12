import React from 'react'
import CarouselComponent from './CarouselComponent'
import Testimonial from './Testimonial'
import CardComponent from './CardComponent'
import Timeline from './TimeLine'
import "../css/Timeline.css"
import Banner from './Banner'
import Banner2 from './Banner2'

const LandingPage = () => {
  return (
    <div>
        <CarouselComponent/>
        <CardComponent />
         <Banner/>
         <Banner2/>
        <Timeline/>
        <Testimonial />
    </div>
  )
}

export default LandingPage
