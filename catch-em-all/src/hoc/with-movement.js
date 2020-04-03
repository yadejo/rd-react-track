import React, { useState, useEffect } from "react";

const withMovement = (Component) => props => {
    const [visibility, setVisible] = useState(getRandomVisibility());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setVisible(getRandomVisibility());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div style={{visibility: visibility }}>
        <Component {...props} />
      </div>
    );
  };
  
  const getRandomVisibility = () => {
   return Math.floor(Math.random() * 101) > 50 ? "visible" : "hidden"; 
  };

export default withMovement;