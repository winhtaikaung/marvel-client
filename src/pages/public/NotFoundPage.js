import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const NotFoundPage = props => {
  
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
      }}
    >
      <h2 style={{color:`white`}}>¯\_(ツ)_/¯</h2>
      <h2 style={{color:`white`}}>{props.title}</h2>
      <Link to="/" >Home</Link>
    </div>
  );
};

NotFoundPage.propTypes={
  title:PropTypes.string
}

NotFoundPage.defaultProps = {
  title: '404 Not Found!'
};

export default NotFoundPage;
