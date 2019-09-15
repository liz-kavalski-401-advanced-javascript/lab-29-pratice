import React from "react";

import Deck from "./deck.js";

const Page = props => {
  const content = props.content || [];
  return (
    <>
    <section>
    {props.content.map((deckinfo, i) => (
        <Deck deckinfo={deckinfo} />
      ))}
    </section>
    </>
  );
};

export default Page;
