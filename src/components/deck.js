import React from "react";
import Card from "../components/card.js"

class Deck extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <h1>{this.props.deckinfo.title}</h1>
      {this.props.deckinfo.records.map((card) =>(
        <Card card={card}/>
      ))}
      </>
    ); 
  };
}
  

export default Deck;
