
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Formation from "./components/formation";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Porojects from "./components/projects";
export default function Home() {
  return (
    <main className="">
     <Header/>
      <Navbar/>
      <AboutMe/>
      <Formation/>
      <Porojects/>
      <Contact/>
    </main>
  );
}
