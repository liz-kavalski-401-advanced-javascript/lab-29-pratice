import React from "react";
import Deck from "../components/deck.js";


class Card extends React.Component {
  render() {
    console.log(this.props.card)
    return (
      <>
        <header>
          <h3>{this.props.card.title}</h3>
        </header>
        <div className="">{this.props.card.copy}</div>
        <figure>
          <img
            src={this.props.card.media.href}
            title={this.props.card.media.title}
            alt={this.props.card.media.alt}
          />
          <figcaption>{this.props.card.media.title}</figcaption>
        </figure>
        {/* <nav className="links">
          <ul>
            {cards.links.maps((link, i)=>(
              <li key ={i}>
                <a className= {cards.links.type} href={cards.links.href} title={cards.links.title} >
                  {cards.links.title}
                </a>
              </li>  
            ))}
          </ul>
        </nav> */}
        
      </>
    );
  }
}



export default Card;
