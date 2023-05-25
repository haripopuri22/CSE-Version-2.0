import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import People from './components/pages/People/FacultyOverview';
import POs from './components/pages/POs/POs';
import ResearchAreas from './components/pages/Research/Research';
import Project from './components/pages/Projects/Projects';
import Publications from './components/pages/Publications/Publications';
import Course from './components/pages/CourseOverview/CourseOverview';
import AluminiNetwork from './components/pages/AluminiNetwork/AluminiNetwork';
import Gallary from './components/pages/Gallary/Gallary';
import StudentSection from './components/pages/StudentSection/StudentSection';
import Activities from './components/pages/Activities/Activities';
import Placements from './components/pages/PlacementStatistics/PlacementStatistics';
import ContactUs from './components/pages/ContactInformation/ContactInformation';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="About" component={About} />
        <Route path="/POs" component={POs} />
        <Route path="/Research-Areas" component={ResearchAreas} />
        <Route path="/Research-Areas" component={ResearchAreas} />
        <Route path="/Project" component={Project} />
        <Route path="/Publications" component={Publications} />
        <Route path="/Course" component={Course} />
        <Route path="/AluminiNetwork" component={AluminiNetwork} />
        <Route path="/Gallary" component={Gallary} />
        <Route path="/StudentSection" component={StudentSection} />
        <Route path="/Activities" component={Activities} />
        <Route path="/Placements" component={Placements} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
