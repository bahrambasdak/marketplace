import React from "react";
import { ArrowDownRight, Store } from "lucide-react";

export default function Home() {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <div className="page-heading">
        <div className="page-eyebrow"><span className="eyebrow-rule" /> YOUR NEXT FAVORITE THING</div>
        <h1 id="home-title">A marketplace<br />taking shape.</h1>
        <p>The public catalog is on its way. This is where the collection will come together.</p>
      </div>
      <div className="home-feature" aria-label="Marketplace preview">
        <div className="feature-copy">
          <span className="feature-index">01 <span> / &nbsp; THE BEGINNING</span></span>
          <h2>Good things<br />start somewhere.</h2>
          <p>We’re laying the groundwork for a thoughtful, easy-to-browse storefront.</p>
          <span className="feature-mark" aria-hidden="true"><ArrowDownRight /></span>
        </div>
        <div className="feature-art" aria-hidden="true">
          <div className="art-frame">
            <div className="art-sun" />
            <div className="art-shelf art-shelf-top" />
            <div className="art-shelf art-shelf-bottom" />
            <div className="art-vase art-vase-tall" />
            <div className="art-vase art-vase-round" />
            <div className="art-book art-book-one" />
            <div className="art-book art-book-two" />
            <Store className="art-store" strokeWidth={1.15} />
          </div>
          <span className="art-caption">A NEW PLACE TO DISCOVER</span>
        </div>
      </div>
      <div className="home-footer-note">
        <span>THE FIRST CHAPTER</span>
        <span>More to come <ArrowDownRight aria-hidden="true" /></span>
      </div>
    </section>
  );
}
