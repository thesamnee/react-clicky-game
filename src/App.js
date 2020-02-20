import React, { Component } from "react";
import CharCard from "./components/CharCard/CharCard.js";
import Chars from "./Chars.json";
import Title from "./components/Title/Title.js";
import './App.css'
class App extends Component {

  state = {
    Chars,
    message: "Try to click all of the Simpsons characters without clicking the same one twice!",
    score: 0, 
    topScore: 0
  };

  shuffleImages = () => {
    console.log(this.state.Chars)
    this.setState({Chars: this.state.Chars.sort(() => Math.random() - 0.5)});
  }

  componentDidMount() {
    this.shuffleImages();
  }

  imageClick = (id, name, clicked) => {

    const CharImages = this.state.Chars

    CharImages.forEach((Char) => {

      if (Char.id === id && Char.clicked) {
        CharImages.forEach((element) => {
          element.clicked = false 
        });   
        this.setState({
          message: "D'oh! Try Again!",
          score: 0});
      } else if (Char.id === id && !Char.clicked) {
          Char.clicked = true
          this.setState({
            message: `Haha, gotta love ${Char.name}`, 
            score: this.state.score + 1,
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          });
      }
    })

    if (this.state.score + 1 === CharImages.length) {
      this.setState({
        message: "I am the smart", 
        score: 0,
        topScore: 0});
    } 

    this.shuffleImages()    
  };


  render() {
    return (
      <div>
        <Title
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topScore}        
        ></Title>
            {this.state.Chars.map(Char => (
                <CharCard 
                id={Char.id} 
                key={Char.id} 
                name={Char.name}
                img={Char.img}
                shuffle={this.shuffleImages}
                imageClick={this.imageClick} />
            ))}
      </div>
    );
  }
}

export default App;