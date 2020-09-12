import React from "react";

import Logo from "./header-components/logo";
import NavLink from "./header-components/navLink";
import TitleSection from "./header-components/titleSection";

export default function Header() {
  const NAV_LINKS = [
    {
      href: "#features",
      title: "Features"
    },
    {
      href: "#reviews",
      title: "Reviews"
    },
    {
      href: "#pricing",
      title: "Pricing"
    }
  ];

  return (
    <header id="header">
      <div id="nav-container">
        <Logo />

        <nav id="nav-bar">
          {NAV_LINKS.map(({ href, title }, key) => (
            <NavLink key={key} href={href} title={title} />
          ))}
        </nav>
      </div>

      <TitleSection />
    </header>
  );
}
