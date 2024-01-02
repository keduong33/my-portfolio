import Experiences from "./Experiences";
import Projects from "./Projects";

function About() {
  return (
    <div className="prose max-w-full flex flex-col lg:flex-row gap-5 px-4 lg:px-[100px] pb-4">
      <img
        src="/profile.jpg"
        className="w-full max-w-[400px] m-auto border rounded-2xl border-transparent lg:hidden block"
      />
      <div className="max-w-[1000px]">
        <div>
          <p>
            I build things at{" "}
            <a className="link" href="https://www.hungryhungry.com/who">
              HungryHungry
            </a>
            . In my free time, I play soccer, read books and build and/or break
            things over and over again.
          </p>
          <p>
            It is fun turning different ideas to life with my mates as I can
            learn new things and satisfy my curiosity.{" "}
            <a className="link" href="#projects">
              Check out my projects
            </a>
          </p>
        </div>
        <Experiences />
        <Projects />
      </div>
      <img
        src="/profile.jpg"
        className="w-full max-w-[400px] lg:m-0 border rounded-2xl border-transparent lg:block hidden self-start"
      />
    </div>
  );
}

export default About;
