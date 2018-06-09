import React, { Component } from "react";
import axios from "axios";
// import { log } from "util";
import "./Meme.css";

class Memes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: []
    };
  }
  componentDidMount() {
    axios.get(`/api/meme/newid?newid=${this.randomNumber}`).then(response => {
      this.setState({ meme: response.data });
    });
  }

  //   createTopMsgHandler = e => {
  //     this.setState({ newTopMsg: e.target.value });
  //   };

  render() {
    // let url = memeDisplay.url;
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    const memeDisplay = this.state.meme[randomNumber];
    console.log(memeDisplay);
    // .map(meme => {
    //   console.log(meme);
    return (
      <div>
        <img
          className="images"
          src={memeDisplay ? memeDisplay.url : memeDisplay}
        />
      </div>
      //<div>{randomImgHandler}</div>
    );
  }
}

export default Memes;
