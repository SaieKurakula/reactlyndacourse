import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location} from "./pages";

function App() {

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          // These will be nested under /about dir 
          // url will be http://localhost:3000/about/services
          <Route path="services" element={<Services />} />
          <Route path="companyhistory" element={<CompanyHistory />} />
          <Route path="Location" element={<Location />} />
        </Route>
        // Above is the closing tag for /about page in order to next. Otherwise it's self closing
        // url will be http://localhost:3000/about/services
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );

}

export default App;
