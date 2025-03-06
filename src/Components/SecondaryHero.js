import React from "react";

export default function SecondaryHero({ bg, page, mainHeading }) {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="secondaryHeroSection"
    >
      <div className="secondaryHeroContentContainer">
        <p className="paginationOuter">
          Home / <span>{page}</span>
        </p>
        <h1 className="secondaryHeroMainHeading">{mainHeading}</h1>
      </div>
    </section>
  );
}
