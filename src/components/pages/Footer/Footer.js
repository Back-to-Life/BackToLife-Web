import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {Button} from '../../Button';
import { useTranslation } from 'react-i18next';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';

function Footer() {
  const {t, i18n} = useTranslation();
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
       {t('Footer.header')}
        </p>
       
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t('Footer.about')}</h2>
            <Link to='/signup'>{t('Footer.Link1')}</Link>
            <Link to='/'>{t('Footer.Link2')}</Link>
            <Link to='/howtowork'>{t('Footer.Link3')}</Link>
            <Link to='/points'>{t('Footer.Link4')}</Link>
          </div>
          <div className='footer-link-items'>
            <h2>{t('Footer.Visit')}</h2>
            <a href="https://play.google.com/store?hl=tr">Google Play</a>
            <a href="https://www.apple.com/tr/app-store/">App Store</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t('Footer.Social')}</h2>
           <a href="https://www.instagram.com/">Instagram</a><a href="https://twitter.com/">Twitter</a><a href="https://tr-tr.facebook.com/">Facebook</a><a href="https://www.youtube.com/">YouTube</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaRecycle className='navbar-icon' />
              Back To Life
            </Link>
          </div>
          <small className='website-rights'>Back To Life © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;