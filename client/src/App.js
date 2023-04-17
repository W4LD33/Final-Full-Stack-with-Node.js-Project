import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  const [topics, setTopics] = useState([]);
  console.log(topics)
  const authToken = true;

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8000/questions');
      const json = await response.json();
      setTopics(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home topics={topics} />} />
          </Routes>
        {!authToken && <Auth />}
      </BrowserRouter>
    </div>
  );
}

export default App;
