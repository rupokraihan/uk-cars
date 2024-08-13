/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';

const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.186783850078!2d0.0727546!3d51.546473899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a66877f80f6f%3A0x1f58ed3ae356bf47!2s30%20Uphall%20Rd%2C%20Ilford%20IG1%202JF%2C%20UK!5e0!3m2!1sen!2sbd!4v1702071384029!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
      />
    );
};

export default GoogleMap;
