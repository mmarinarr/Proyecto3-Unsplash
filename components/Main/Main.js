import "./Main.css";

const template = () => `
  <div id="message"></div>
  <ul id="gallery"></ul>  
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};


export default Main;