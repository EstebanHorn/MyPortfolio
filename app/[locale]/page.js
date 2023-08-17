import AboutMe from "./components/aboutMe";
import ButtonTr from "./components/buttonTr";
import Contact from "./components/contact";
import Formation from "./components/formation";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Porojects from "./components/projects";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Contact");
  const contactTr = {
    Title1: t("title1"),
    Title2: t("title2"),
    Subtitle: t("subtitle"),
    Name: t("name"),
    Mesagge: t("message"),
    Send: t("send"),
  };

  return (
    <main className="">
      <ButtonTr />
      <Header />
      <Navbar />
      <AboutMe />
      <Formation />
      <Porojects />
      <Contact traslation={contactTr} />
    </main>
  );
}
