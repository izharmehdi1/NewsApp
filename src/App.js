import './App.css';
import React, { useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  
  const pageSize= 8;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  

    return (
        <div>
          <Router>
            <LoadingBar
                  color='#f11946'
                  height={3}
                  progress={progress}
                  // onLoaderFinished={() => setProgress(0)}
            />
            <NavBar/>
              <Routes>
                <Route exact path="/" element = {<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='us' category="General" />}/>
                <Route exact path="/General" element = {<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='us' category="General" />}/>
                <Route exact path="/Business" element = {<News setProgress={setProgress} apiKey={apiKey} key="bussines" pageSize={pageSize} country='us' category="Business" />}/>
                <Route exact path="/Entertainment" element = {<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='us' category="Entertainment"/>}/>
                <Route exact path="/Health" element = {<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='us' category="Health" />}/>
                <Route exact path="/Science" element = {<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='us' category="Science" />}/>
                <Route exact path="/Sports" element = {<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='us' category="Sports" />}/>
                <Route exact path="/Technology" element = {<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='us' category="Technology" />}/>
              </Routes>
          </Router>
        </div>
    )
  }

  export default App;