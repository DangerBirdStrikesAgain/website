import './Home.css';
import React, {useState} from "react";

export default function Home() {
  return (
    <div className="Page">
        <img src={require("./media/myphoto.jpeg")} className="myPicture" alt = {"Me, Alex"} />
        <section className = "Title">
          Alex Riddell-Webster
        </section>
        <section className="Icons">
          <a href="https://github.com/DangerBirdStrikesAgain"><img src={require("./media/github.png")} className="Icon" alt = {"GitHub"} /></a>
          <a rel="me" href="https://infosec.exchange/@alexRW"><img src={require("./media/mastodon.png")} className="Icon" alt = {"Mastodon"} /></a>
          <a href="https://twitter.com/AlexRW_"><img src={require("./media/twitter.png")} className="Icon" alt = {"Twitter"} /></a>        

        </section>
        <section className="Text">
          I'm a Computer Scientist, vulnerability researcher, rower, and coffee enthusiast. <br></br>
          Have a look around :)
        </section>
    </div>
  );
}

