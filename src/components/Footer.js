import React from 'react';
import styles from './css/Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contactInfo}>
        <div className={styles.devImageContainer}>
          <img
            className={styles.devImage}
            alt='Blain Crawford'
            src='https://media-exp2.licdn.com/dms/image/D4E35AQFvtCA60WqxVw/profile-framedphoto-shrink_200_200/0/1646839310829?e=1655996400&v=beta&t=riAbXF3qwIlcR5o2_inARhUWD3ho7WnHAwgwiimofzI'
          />
        </div>
        <div className={styles.devDetails}>
          <h2 className={styles.devQuestion}>Looking for a developer?</h2>
          <p className={styles.devIntro}>
            Call Blain Crawford, the developer who built this site!
          </p>
          <p className={styles.website}>Look into his other work here</p>
          <a
            className={styles.ghLink}
            href='https://github.com/blain-crawford'
            target='_blank'
            rel='noreferrer'
          >
            Blain Crawford's GitHub
          </a>
        </div>
        <div className={styles.siteLinks}></div>
      </div>
      <div className={styles.footerLinks} target='_blank'>
        <div className={styles.linkContainer1}>
          <ul className={styles.aboutBassShop}>
            <li>
              <span className={styles.listHeader}>About Bass Shop</span>
            </li>
            <li>Careers</li>
            <li>Environtmental & Social Responsibility</li>
            <li>Green Policy</li>
            <li>Our Sales Engineers</li>
            <li>Why Choose Bass Shop?</li>
            <li>More about our mission</li>
          </ul>
        </div>
        <div className={styles.linkContainer2}>
          <ul className={styles.customerService}>
            <li>
              <span className={styles.listHeader}>Customer Service</span>
            </li>
            <li>Free Shipping Policy</li>
            <li>Order Status</li>
            <li>Return Policy</li>
            <li>Sales and Use Tax Policy</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles.linkContainer3}>
          <ul className={styles.ordering}>
            <li>
              <span className={styles.listHeader}>Ordering</span>
            </li>
            <li>Free Catalog</li>
            <li>Gift Cards</li>
            <li>Bonus Bucks</li>
            <li>Payment Options</li>
            <li>Shipping and Delivery Times</li>
          </ul>
        </div>
        <div className={styles.linkContainer4}>
          <ul className={styles.services}>
            <li>
              <span className={styles.listHeader}>Services</span>
            </li>
            <li>Bass Workshop</li>
            <li>Music Store</li>
            <li>Events and Workshops</li>
            <li>Music Lessons</li>
            <li>Recording Studio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
