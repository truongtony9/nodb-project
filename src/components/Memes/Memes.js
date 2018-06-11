import React, { Component } from "react";
import axios from "axios";

import "./Meme.css";
// import Name from "./Name";
import Button from "../Button/Button";
// import { log } from "util";

class Memes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: [],
      name: "",
      memeDisplay: "",
      newid: "",
      input: "",
      msg: ""
    };
  }
  componentDidMount() {
    axios.get(`/api/meme/newid?newid=${this.randomNumber}`).then(response => {
      if (this.state.meme) {
        this.setState({ meme: response.data });
      }

      var randomNumber = Math.floor(Math.random() * 100 + 1);
      const newImg = this.state.meme[randomNumber].url;
      const imgName = this.state.meme[randomNumber].name;
      const memeID = this.state.meme[randomNumber].newid;
      this.setState({
        memeDisplay: newImg,
        name: imgName,
        newid: memeID
      });
    });
  }

  generate = () => {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/meme/newid?newid=${randomNumber}`).then(response => {
      if (this.state.meme) {
        this.setState({ meme: response.data });
      }
      var randomNumber = Math.floor(Math.random() * 100 + 1);
      const newImg = this.state.meme[randomNumber].url;
      const imgName = this.state.meme[randomNumber].name;
      const memeID = this.state.meme[randomNumber].newid;
      this.setState({
        memeDisplay: newImg,
        name: imgName,
        newid: memeID
      });
    });
  };

  onChangeHandler = e => {
    this.setState({ input: e });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("hello");
    axios.post("/api/meme", { input: this.state.input }).then(response => {
      this.setState({ msg: response.data });
    });
  };

  updateHandler = () => {
    axios
      .put(`/api/meme/${this.state.newid}`, { input: this.state.input })
      .then(response => {
        this.setState({ name: response.data });
      });
  };

  deleteHandler = memeDisplay => {
    axios
      .delete("/api/meme/:newid", { memeDisplay: this.state.memeDisplay })
      .then(response => {
        this.setState({ memeDisplay: response.data });
      });
  };

  render() {
    if (this.state.meme) {
      return (
        <div>
          <img className="images" src={this.state.memeDisplay} />
          <div className="name">{this.state.name}</div>
          <div className="msg">{this.state.msg}</div>
          <br />
          <input
            onChange={event => this.onChangeHandler(event.target.value)}
            type="text"
            placeholder="edit top text here..."
          />
          <Button className="updateText" clickButton={this.updateHandler}>
            Edit Text
          </Button>
          <form>
            <input
              // value={this.state.msg}
              onChange={event => this.onChangeHandler(event.target.value)}
              type="text"
              placeholder="add bottom text here..."
            />
            <Button clickButton={this.submitHandler}>Add Text</Button>
          </form>
          <Button className="delete" clickButton={this.deleteHandler}>
            Delete Meme
          </Button>
          <button className="randomButton" onClick={this.generate}>
            Random Image
          </button>
        </div>
      );
    }
  }
}

export default Memes;
