// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './SurveyForm';
import SurveyLists from './SurveyLists';
import UpdateSurvey from './UpdateSurvey';
import withRouteParams from './withRouteParams';
import Header from './header';
import Home from './home';

function App() {
  const UpdateSurveyWithParams = withRouteParams(UpdateSurvey); // Wrap UpdateSurvey with HOC

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/SurveyForm" element={<SurveyForm />} />
        <Route path="/SurveyLists" element={<SurveyLists />} />
        <Route path="/UpdateSurvey/:id" element={<UpdateSurveyWithParams />} /> {/* Use the wrapped component */}
      </Routes>
    </Router>
  );
}

export default App;
