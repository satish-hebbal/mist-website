import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import DocsPage from './DocsPage.jsx'
import 'mist-ui-comp/dist/style.css';
import './index.css'
import './customScrollbar.css';
import Examples from './Examples.jsx'
import ComponentsList from './Components.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/components" element={<ComponentsList />} />
          <Route path="/examples" element={<Examples />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)