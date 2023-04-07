import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HI FROM H1 TAG"),
    React.createElement("h2", {}, "HI FROM H2 TAG"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HI FROM H1 TAG"),
    React.createElement("h2", {}, "HI FROM H2 TAG"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
