import React from 'react'
import Home from './components/Home'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
// import Categories from './components/Categories';
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  )
}
export default App
