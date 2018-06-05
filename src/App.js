import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 20,
      y: 20,
      docked: true,
      bottomOpen: false,
      sideOpen: false
    };
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  handleDrag = event => {
    this.setState({ x: event.x - 100, y: event.y - 180, docked: false });
  };

  handleStop = event => {
    let newX = event.x < window.innerWidth / 2 ? 25 : 1400 - 225;
    let newY = event.y < 330 ? 20 : 300;
    // let newY = event.y < window.innerHeight/2 ? 0 : 300 -20
    console.log("newX", newX);
    console.log("newY", newY);
    // console.log("Width", window.innerWidth/2)
    // console.log("Height", window.innerHeight/2)
    this.setState({ x: newX, y: newY, docked: true });
  };

  toggleBottomPanel = () => {
    this.setState({ bottomOpen: !this.state.bottomOpen });
  };

  toggleSidePanel = () => {
    this.setState({ sideOpen: !this.state.sideOpen });
  };

  render() {
    console.log("state", this.state);
    let arrowIcon = this.state.sideOpen ? "\u25b6" : "\u25C0";
    let mainWidth = this.state.sideOpen ? "75%" : "98%";
    let mainContainer =
      this.state.sideOpen && this.state.bottomOpen
        ? "main-container main-width main-height"
        : this.state.sideOpen && !this.state.bottomOpen
          ? "main-container main-width"
          : this.state.bottomOpen && !this.state.sideOpen
            ? "main-container main-height"
            : "main-container";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Title</h1>
        </header>
        <div className={mainContainer}>
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 25, y: 0 }}
            position={{ x: this.state.x, y: this.state.y }}
            grid={[5, 5]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div className={this.state.docked ? "phone docked" : "phone"}>
              <div className="handle">Drag from here</div>
              <div />
            </div>
          </Draggable>

          <div
            className={
              this.state.sideOpen ? "side-panel side-open" : "side-panel"
            }
          >
            <div onClick={this.toggleSidePanel} className="toggle-side-panel">
              <p>{arrowIcon}</p>
            </div>
            <div className="sidebar-content">
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
            </div>
          </div>

          <div
            className={
              this.state.bottomOpen ? "bottom-panel open" : "bottom-panel"
            }
          >
            <div className="bottom-menu">
              <div
                onClick={this.toggleBottomPanel}
                className="bottom-menu-center"
              >
                <p>Toggle Panel</p>
              </div>
              <div>
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
