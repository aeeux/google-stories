import React, { useEffect } from "react";
import { gsap } from "gsap";
import { logo } from "../../data";

export default function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text-section",
      {
        opacity: -1,
        duration: 0.5,
        delay: 0.2,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  }, []);
  return (
    <div className="hero-text-section">
      <img className="logo" src={logo} width="88" height="88"/>
      <h1 id="hero-text"><span className="hightlight">Stories</span> meet their widest audience ever.</h1>
    </div>
  );
}
