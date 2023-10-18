import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                  handleShow(true);
            } else handleShow(false);
        });
        return () => {
            // window.removeEventListener("scroll");
        };
    }, []);



  return (
    <div className={`nav ${show && "nav__black"}`}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo" className="nav__logo" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVHHNwcCOQ4Y7ulfRG1cZb9joFo5CV921mN1Ha1skrsyRx7PJcLa1stsjBm79z7QV9pQ&usqp=CAU" alt="avatar" className="nav__avatar" />
    </div>
  )
}

export default Nav;
