/*

<div id="parent">
    <div id="child">
        <h1>HI FROM H1 TAG</h1>
        <h1>HI FROM H1 TAG</h1>
    </div>
    <div id="child2">
        <h1>HI FROM H1 TAG</h1>
        <h1>HI FROM H1 TAG</h1>
    </div>
</div>


*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "heading", xyz: "abc" },
//   "HELLO FROM REACT"
// ); // it takes 3 argument 1.WHAT TAG 2.OBJECT(ID AND CLASS NAME CONTAIN) 3.WHAT WE HAVE TO PUT IN TAG

//React Element is simply Javascript Object
// console.log(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "HI FROM H1 TAG")
//   )
// );   // ONE CHILDREN ONLY

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "HI FROM H1 TAG"),
//     React.createElement("h2", {}, "HI FROM H2 TAG"),
//   ])
// ); // SIBLINGS ARRAY OF CHILDREN

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HI FROM H1 TAG"),
    React.createElement("h2", {}, "HI FROM H2 TAG"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HI FROM H1 TAG"),
    React.createElement("h2", {}, "HI FROM H2 TAG"),
  ]),
]); // SIBLINGS ARRAY OF CHILDREN

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
setTimeout(() => {
  root.render(parent);
}, 2000);

// const heading = React.createElement(
//   "html tag",
//   { attributes:"id,className" },
//   "Children.It should be text or createElement"
// );
