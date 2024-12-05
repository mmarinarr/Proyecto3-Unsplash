import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const init = () => {
  Header();
  Main();
  Footer();
};

init();

const getPhotos = async (keyword, photoNum, photoOrientation, photoColor) => {
  try{
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${photoNum}&orientation=${photoOrientation}&color=${photoColor}&client_id=ujx0vatFXRxi8GjGlCnsAnunpBcU5IGsMBzZF-0aAjE`
    );
    const dataJSON = await data.json();
    const photos = dataJSON.results;
    printPhotos(photos);
  }catch (error) {
    console.error('Error al obtener las fotos:', error);
  } 
};

const printPhotos = (photos) => {
  const container = document.querySelector("#gallery");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";

    const text = document.createElement("h2");
    text.textContent = "Sorry, search another thing...";
    message.appendChild(text);

    const img = document.createElement("img");
    img.src = "./error.jpg";
    img.alt = "No results found"; 
    message.appendChild(img);

    const text2 = document.createElement("h4");
    text2.textContent = "Try with one of this keywords...";
    message.appendChild(text2);

    const keywords = ["Nature", "City", "Animals"]; 

    keywords.forEach(keyword => {
      const button = document.createElement("button");
      button.textContent = keyword;
      button.classList.add("button-style"); 
      button.addEventListener("click", () => {
        const photoNumValue = document.querySelector("#countInput").value;
        const photoOrientationValue = document.querySelector("#orientationInput").value;
        const photoColorValue = document.querySelector("#colorInput").value;
        getPhotos(keyword, photoNumValue, photoOrientationValue, photoColorValue);
      });
      message.appendChild(button); 
    });
    
  } else {
    container.innerHTML = "";
    message.textContent = "";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
    <img src="${photo.urls.regular}" alt="${photo.alt_description}" loading="lazy"/>
  `;
      container.appendChild(li);
    }
  }
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  const keywordValue = document.querySelector("#searchInput").value;
  const photoNumValue = document.querySelector("#countInput").value;
  const photoOrientationValue = document.querySelector("#orientationInput").value;
  const photoColorValue = document.querySelector("#colorInput").value;
  getPhotos(keywordValue, photoNumValue, photoOrientationValue, photoColorValue);
  document.querySelector("#searchInput").value = "";
});


const addButtonListener = (buttonId, keyword) => {
  document.querySelector(buttonId).addEventListener("click", () => {
    const photoNumValue = document.querySelector("#countInput").value || 10;
    const photoOrientationValue = document.querySelector("#orientationInput").value || "landscape";
    const photoColorValue = document.querySelector("#colorInput").value || "";
    getPhotos(keyword, photoNumValue, photoOrientationValue, photoColorValue);
  });
};

const buttons = [
  { id: "#flowerBtn", keyword: "Flower" },
  { id: "#catBtn", keyword: "Cat" },
  { id: "#dogBtn", keyword: "Dog" },
  { id: "#natureBtn", keyword: "Nature" },
  { id: "#horseBtn", keyword: "Horse" },
  { id: "#nightBtn", keyword: "Night" },
  { id: "#sunBtn", keyword: "Sun" }
];

buttons.forEach(button => addButtonListener(button.id, button.keyword));

getPhotos("Beach", "10", "squarish", "blue");



