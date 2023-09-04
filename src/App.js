
import './App.css';
import NavBar from './components/NavBar';
import React, { useState } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'





// export default class App extends Component {
const App = () => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API
  // state = {
  //   progress: 0
  // }

  const [progress, setProgress] = useState(0)

  // setProgress = (progress) => {
  //   setState({ progress: progress })
  // }

  // render() {
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>


          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={'in'} category="general" />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={pageSize} country={'in'} category="business" />} />
          <Route exact path="/General" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={pageSize} country={'in'} category="general" />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={pageSize} country={'in'} category="entertainment" />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={pageSize} country={'in'} category="Health" />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={pageSize} country={'in'} category="Science" />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={pageSize} country={'in'} category="Sports" />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={pageSize} country={'in'} category="Technology" />} />


        </Routes>
      </Router>
    </div>
  )
  // }
}

export default App;