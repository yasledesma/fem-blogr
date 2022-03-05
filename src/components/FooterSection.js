import React from "react";

function FooterSection({ title, links }) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {links.map( link => {
            return(
                <li>{link}</li>
            )
        })}
      </ul>
    </section>
  );
}

export default FooterSection;
