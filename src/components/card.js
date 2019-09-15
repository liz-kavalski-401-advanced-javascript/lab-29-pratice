import React from "react";
import Deck from "../components/deck.js";


class Card extends React.Component {
  render() {
    let cards=this.props.card;
    console.log(cards.links)
    return (
      <>
        <header>
          <h3>{cards.title}</h3>
        </header>
        <div className="">{cards.copy}</div>
        <figure>
          <img
            src={cards.media.href}
            alt={cards.media.alt}
          />
          <figcaption>{cards.media.title}</figcaption>
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
