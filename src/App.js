import { useState } from "react";
import "./App.css";
import About from "./components/About";
import MyInfo from "./components/MyInfo";
import NavBar from "./components/NavBar";
import Timeline from "./components/Timeline";
import { Layout } from "./components/styles/Layout.styled";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects";

const App = () => {
  const [color, setColor] = useState("#55EFC4");
  const [theme, setTheme] = useState("light");

  return (
    <Layout theme={theme}>
      <NavBar color={color} theme={theme} setTheme={setTheme} />
      <About color={color} setColor={setColor} />
      <MyInfo theme={theme} />
      <Timeline color={color} theme={theme} />
      <Skills color={color} theme={theme} />
      {/* <Projects color={color} theme={theme} /> */}
    </Layout>
  );
};

export default App;
