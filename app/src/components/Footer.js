import React from "react";

import "../css/index.css";

const Footer = () => {

    return (
        <div className="footer-container">
            <footer>
            <p>&copy; 2020 <a href={`https://github.com/phmenard`} target="new">Paul H. Menard Jr.</a> </p>  

            <h3>Async Redux</h3>
            </footer>
        </div>
    );

}

export default Footer;