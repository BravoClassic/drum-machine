import "./App.css";
import React from "react";
import Display from "./Components/Display";
import DrumPad from "./Components/DrumPad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }
  playSound(e) {
    let audioFile = document.getElementById(e.key.toUpperCase());
    if (audioFile) {
      audioFile.children[0].play();
      if (audioFile.children[0].id) {
        document.getElementById("display").textContent =
          audioFile.children[0].id;
      }
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSound);
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Drum Machine</h1>
          <p>fx-680</p>
        </header>
        <div className="drum-box">
          <Display text="Drum Machine" />
          <DrumPad />
        </div>
      </div>
    );
  }
}

export default App;
