import "./Header.css";

const template = () => `
<div class="navbar">
<img src="./unsplash.png" id="logo" width="200rem">
<div class="search">
<div id="search">
<input type="text" id="searchInput" placeholder="Playa..."/>
<button id="searchBtn"><img src="./lupa.png" width="30rem"></button>
</div>
<div id="inputs">
<select id="countInput">
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
</select>
<select id="orientationInput">
<option value="squarish">Squarish</option>
<option value="portrait">Portrait</option>
<option value="landscape">Landscape</option>
</select>
</select>
<select id="colorInput">
<option value="blue">Blue</option>
<option value="yellow">Yellow</option>
<option value="green">Green</option>
<option value="purple">Purple</option>
<option value="red">Red</option>
<option value="black">Black</option>
<option value="white">White</option>
</select>
</div>
</div>
</div>

<div id="options">
<h3>Popular searches</h3>
<div id="buttons">
<button id="flowerBtn">Flower</button>
<button id="catBtn">Cat</button>
<button id="dogBtn">Dog</button>
<button id="natureBtn">Nature</button>
<button id="horseBtn">Horse</button>
<button id="nightBtn">Night</button>
<button id="sunBtn">Sun</button>
</div>
</div>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;