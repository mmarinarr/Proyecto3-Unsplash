import "./Footer.css";

const template = () => `
    <p>Unsplash Project - 2024</p>
    <h5>Marina Moreno</h5>
`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;