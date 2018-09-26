import './App.css';
import React from "react";
import Front from "zoapp-front/front";

import config from "./config.json"

const appProps = {
  name: "Zoapp",
  version: "0.1.0",
  design: {
    toolbar: {
      theme: "white",
    },
    drawer: {
      type: "persistent",
      themeDark: true,
    },
  },
  screens: [
    {
      id: "1",
      to: "/",
      icon: "dashboard",
      name: "Dashboard",
      access: "auth",
      path: "/",
      panels: ["Panel 1", "Panel 2"],
      toolbox: ["todo"],
      render: props => React.createElement(Screen, props, "Dashboard"),
    },
    {
      id: "2",
      to: "/admin",
      icon: "settings",
      name: "Admin",
      path: "/admin",
      access: "auth",
      panels: ["General", "Extensions", "Users", "Advanced"],
      render: props => React.createElement(Screen, props, "Admin"),
    },
    {
      id: "3",
      to: "/",
      icon: "home",
      name: "Home",
      path: "*",
      access: "public",
      render: props => React.createElement(Screen, props, "Home"),
    },
    {
      id: "4",
      to: "/help",
      name: "Help",
      icon: "help",
      path: "/help",
      access: "all",
      render: props => React.createElement(Screen, props, "Help"),
    },
  ],
};

class Opla {
  constructor() {
    this.front = new Front("root", appProps, config);
  }

  restart() {
    this.front.restart();
  }

  start() {
    this.front.start();
  }
}

export default Opla;