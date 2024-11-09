import AboutMe from "./about_me/page";
import Experties from "./experties/page";
import Projects from "./projects/page";
import Contact from "./contact_us/page";
export default function Home() {
  return (
    <div>
      <AboutMe/>
      <Experties/>
      <Projects/>
      <Contact/>
    </div>
  );
}
