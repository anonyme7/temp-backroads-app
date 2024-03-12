import React from 'react';
import Title from './Title';
import {tours} from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="features" subtitle="tours" />
      
      <div className="section-center featured-center">
        {tours.map((tour) =>{
          return <Tour key={tour.id} {...tour} />
        })}

      </div>
    </section>

  )
}

export default Tours
