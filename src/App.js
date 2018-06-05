import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { x: 25, y: 0, docked: true }
  }


  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  handleDrag = event => {
    this.setState({ x: event.x - 100, y: event.y - 180, docked: false })
    // console.log('Client X', event.clientX);
    // console.log('X', event.x);
    // console.log("Width", window.innerWidth)
    // this.eventLogger(event)
  }

  handleStop = event => {
    let newX = event.x < window.innerWidth/2 ? 25 : 1400 -225
    let newY = event.y < 330 ? 0 : 300 -20
    // let newY = event.y < window.innerHeight/2 ? 0 : 300 -20
    console.log('newX', newX);
    console.log('newY', newY);
    // console.log("Width", window.innerWidth/2)
    // console.log("Height", window.innerHeight/2)
    this.setState({ x:newX, y:newY, docked: true })
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Title</h1>
        </header>
        <div className="main-container">
          <p className="App-intro">
            Body
          </p>
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 25, y: 0}}
            position={{x: this.state.x, y: this.state.y}}
            grid={[5, 5]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className={this.state.docked ? "phone docked" : "phone"}>
              <div className="handle">Drag from here</div>
              <div></div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;
