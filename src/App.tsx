import React, { useEffect } from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  useEffect(() => {
    // Update the tab title
    document.title = "Nasah - Your Trusted Legal Platform";

    // Update the favicon
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "https://naseh.qa/assets/naseh-logo.CpTfn_N7.svg");
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "https://naseh.qa/assets/naseh-logo.CpTfn_N7.svg";
      document.head.appendChild(newFavicon);
    }
  }, []);

  return <Home />;
};

export default App;
