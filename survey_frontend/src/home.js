// Import the React library
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  
    const navigateTo = (path) => {
      navigate(path);
    };
  
    return (
      <div className="background-image">
        <div className="content">
          <h1 className="welcome-msg">WELCOME TO GMU SURVEY</h1>
          <p>
            This application enables potential students to complete a
            survey form sharing feedback about their campus visit. Users
            also have the option to access and review all surveys that have
            been submitted thus far.
          </p>
          <div className="container">
            <div className="row">
              <div className="col">
                <button onClick={() => navigateTo('/')}>Home</button>
              </div>
              <div className="col">
                <button onClick={() => navigateTo('/surveyform')}>Survey Form</button>
              </div>
              <div className="col-lg-4">
                <button onClick={() => navigateTo('/surveylists')}>Survey Lists</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Home;
  