
import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'





export default class App extends Component {
  pageSize = 15;
  apikey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }


  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>


            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country={'in'} category="general" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Business" pageSize={this.pageSize} country={'in'} category="business" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country={'in'} category="general" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Entertainment" pageSize={this.pageSize} country={'in'} category="entertainment" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Health" pageSize={this.pageSize} country={'in'} category="Health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Science" pageSize={this.pageSize} country={'in'} category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={this.pageSize} country={'in'} category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Technology" pageSize={this.pageSize} country={'in'} category="Technology" />} />


          </Routes>
        </Router>
      </div>
    )
  }
}
