import img1 from "../../assets/react-core-concepts.png"
const reactTitle = ["React Essentials","React Core Concepts","React Fundamentals","React Basics"];
import "./Header.css";

function getRandomTitle(max){
  return Math.floor(Math.random() * max + 1);
}

export default function Header() {
const title = reactTitle[getRandomTitle(3)];

  return (
    <header>
        <img src={img1} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {title} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}