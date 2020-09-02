import React from "react";
import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home.component";
import About from "./about/about.component";
import Calendar from "./calendar/Calendar.component";
import Catalog from "./catalog/Catalog.component";
import Contact from "./contact/Contact.component";
import Gallery from "./gallery/Gallery.component";
import Login from "./login/Login.component";
import News from "./news/News.component";
import Projects from "./projects/Projects.component";
import projects from "./projects/ProjectList";
import SingleProject from "./projects/SingleProject";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      adminMode: false
    };
    this.findProject = this.findProject.bind(this);
  }
  findProject(id) {
    return this.state.projects.find(prj => prj.id === id);
  }
  logIn() {
    this.setState({ adminMode: true });
  }
  logOut() {
    this.setState({ adminMode: false });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/calendar" render={() => <Calendar />} />
          <Route exact path="/catalog" render={() => <Catalog />} />
          <Route exact path="/gallery" render={() => <Gallery />} />
          <Route exact path="/news" render={() => <News />} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                logIn={this.logIn}
                adminState={this.state.adminMode}
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => <Projects projects={this.state.projects} />}
          />
          <Route
            exact
            path="/projects/:id"
            render={props => (
              <SingleProject
                projects={this.findProject(props.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
