const Photo = () => (
  <div className="mockup-browser border bg-base-300 md:w-[60%] lg:w-[60%] -z-[1]">
    <div className="mockup-browser-toolbar">
      <div className="input">Ke (David)?</div>
    </div>
    <div className="flex justify-center bg-base-200">
      <img src="/profile.jpg" className="w-[70%] lg:w-[40%]" />
    </div>
  </div>
);

function Home() {
  return (
    <div className="prose max-w-full flex flex-col lg:flex-row gap-5" id="#">
      <div className="lg:w-[40%]">
        <p>
          I build things at{" "}
          <a className="link" href="https://www.hungryhungry.com/who">
            HungryHungry
          </a>
          . In my free time, I play soccer, read books and build and/or break
          things over and over again.
        </p>
        <p>
          It is fun turning different ideas to life with my mates as I learn new
          things and satisfy my curiosity.{" "}
          <a className="link" href="#projects">
            Check out my works
          </a>
        </p>
      </div>
      <Photo />
    </div>
  );
}

export default Home;
