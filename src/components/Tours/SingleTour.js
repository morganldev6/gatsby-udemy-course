import React from 'react';
import { FaMap } from 'react-icons/fa';
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const SingleTour = ({ tour }) => {
  const { name, price, country, days, images, slug } = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.image} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          Details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
        </div>
        <div className={styles.details}>
          <h6>{days} days</h6>
          <h6>From ${price}</h6>
        </div>
      </div>
    </article>
  );
};

SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default SingleTour;
