import { Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import "./App.css";
import { teal } from "@mui/material/colors";
import { Projects } from "./Projects";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { DiNodejs, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

function App() {
  return (
    <div>
      <AppBar position="static" className="bar_style" style={{ color: teal }}>
        <ul className="appbar">
          <li>
            <Link to="/">
              <Button variant="text" style={{ color: "white" }}>
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <Button variant="text" style={{ color: "white" }}>
                Projects
              </Button>
            </Link>
          </li>
        </ul>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      {/* <div className="mainbody">
        <div className="me">
          {" "}
          <h3 className="about">About</h3>A full-stack web developer from
          Kerala,India looking for professional experience working with cool
          tech including ReactJS, JavaScript, HTML & CSS and MongoDB. When I'm
          not coding, you can find me scrolling through Twitter, reading a book
          or playing some of my favourite video games on PlayStation 5 - you
          know, stuff I can do indoors. If you wish to reach me through a pretty
          form, I am sorry to disappoint you as there is none. Just shoot me a
          mail @ sathwicked00@gmail.com - it makes both our lives easier! Cheers!
        </div>

        <img className="image" src="screen.jpg" />
      </div> */}
      <div className="mainbody">
        <div className="container text-box">
          <div className="row">
          <div className="col-5 col-md-5">
          {" "}
          <div style={{textAlign:"center"}}>
          <h3 className="about">About</h3>
          </div>
          <p>A full-stack web developer from
          Kerala,India looking for professional experience working with cool
          tech including ReactJS, JavaScript, HTML & CSS and MongoDB.</p>
          
           <p>When I'm not coding, you can find me scrolling through Twitter, reading a book
          or playing some of my favourite video games on PlayStation 5 - you
          know, stuff I can do indoors.</p>
          
          <p> If you wish to reach me through a prettyform, I am sorry to disappoint you as there is none. Just shoot me a
          mail</p>
          <p> @ sathwicked00@gmail.com
          </p>
           - it makes both our lives easier! Cheers!
        </div>
        <div className="col-7 col-md-7 image-box">
            <img className="image" src="mine.jpeg" alt="my image"/>
        </div>
        </div>
        </div>
      </div>
      <div className="icons">
        <h3>
          <IoLogoJavascript />
          <GrReactjs />
          <SiMongodb />
          <DiNodejs />
          <AiOutlineHtml5 />
          <DiCss3 />
        </h3>
      </div>
    </div>
  );
}
