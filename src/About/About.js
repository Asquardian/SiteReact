import React from 'react'
import '../App.css'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

class About extends React.Component {
    render() {return (
    <div className="App">
    <header className="App-header">
      <a align="center" href="index.html"><Bounce>WorkSpace</Bounce></a>
    </header>
        <div align="center" class="borderMain border4"><h1 align="center"><Fade>About</Fade></h1>
        <Bounce left>We are biggest company for designing of officeplace<br />
        Asquardian - <a href="http://www.github.com/Asquardian">github.com/Asquardian</a></Bounce></div>
    <footer>
   <div class="App-header footAbout">Copyright Asquardian</div></footer>
    </div>


    
  );
    }
}

export default About;