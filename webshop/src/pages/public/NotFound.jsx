import React from 'react'
import Lottie from "lottie-react";
import notFound from '../../css/NotFound.json';

function NotFound() {
    const lottieProps = {
          loop: true,
          animationData: notFound,
          style: { 
        marginTop: "-50px",
              width: '90vw', 
              height: '500px',
          },
      };
  
      return (
      <div className="center">
        <Lottie {...lottieProps} /> 
      </div>
      );
  }

export default NotFound