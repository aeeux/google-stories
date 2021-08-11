import React from "react";
import HeroCollage from "./HeroCollage";
import HeroFooter from "./HeroFooter";
import HeroHeader from "./HeroHeader";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";
import Nav from "./Navbar";

import './style.scss';

export default function Hero() {
  return (
    <div className="hero-container">
      <Nav />
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy/>
      <HeroFooter/>
    </div>
  );
}
