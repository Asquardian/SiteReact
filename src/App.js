import './App.css';
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a align="center" href="index.html"><Bounce>WorkSpace</Bounce></a>
      </header><div class="rel"><Bounce right ><img src="1.jpg" width="100%"/></Bounce>
      <div class="borderMain"><Bounce left>Welcome to WorkSpace! Its a large site made with react.When I started graduate school, digital projectors were just becoming standard, opening the door to the magical world of PowerPoint presentations. If you never lived in a pre-PowerPoint era, you may not understand how many avenues digital projection opened for presenters. It may have taken us a while to realize that we shouldn’t use every animation or piece of clip art (remember Screen Beans?), but now we could show helpful graphics, set everything up in advance, and even have a little fun.
</Bounce></div>
<div class="mar"><Bounce left><img src="2.jpg" width="100%"/></Bounce></div><div class="borderMain border2"><Bounce right>Its a large site made with react.When I started graduate school, digital projectors were just becoming standard, opening the door to the magical world of PowerPoint presentations. If you never lived in a pre-PowerPoint era, you may not understand how many avenues digital projection opened for presenters. It may have taken us a while to realize that we shouldn’t use every animation or piece of clip art (remember Screen Beans?), but now we could show helpful graphics, set everything up in advance, and even have a little fun.
</Bounce></div>


<div class="mar"><Bounce><img src="3.jpg" width="100%"/></Bounce></div><div class="borderMain border3"><Bounce right>Its a large site made with react.When I started graduate school, digital projectors were just becoming standard, opening the door to the magical world of PowerPoint presentations. If you never lived in a pre-PowerPoint era, you may not understand how many avenues digital projection opened for presenters. It may have taken us a while to realize that we shouldn’t use every animation or piece of clip art (remember Screen Beans?), but now we could show helpful graphics, set everything up in advance, and even have a little fun.
</Bounce></div>

    </div>
    <form><div align="center" class="borderJoin"><Fade><h1>Do you want to join?</h1></Fade>
    <input type="text" placeholder="E-mail"/>
    <input class="inputJoin" type="submit" value="Send"/></div></form>
    </div>
    
  );
}

export default App;