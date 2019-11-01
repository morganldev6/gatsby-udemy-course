import React from 'react';
import SingleTour from './SingleTour';
import styles from '../../css/items.module.css';

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section className={styles.Tours}>
      <h2>Our Tours</h2>
      <div className={styles.center}>
        {tours.map(({ tour }) => (
          <SingleTour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
