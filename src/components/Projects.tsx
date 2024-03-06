import chatbot from "../assets/chatbot.png";

function Projects() {
  return (
    <div id="projects">
      <div className="pb-2 prose">
        <h2>Projects</h2>
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row">
        <div className="card card-compact max-w-[300px] bg-neutral shadow-xl">
          <figure className="px-4 mb-0">
            <img src={chatbot} alt="chatbot" className="max-w-[150px]" />
          </figure>
          <div className="card-body">
            <h2 className="justify-center w-full mt-0 card-title">
              Language Partner Chatbot
            </h2>
            <p className="text-justify">
              A friendly LLM bot that user can converse via text and/or speech
              to learn different languages.
            </p>
            <div className="card-actions ">
              <a
                className="link link-primary"
                href="https://youtu.be/aVbRqxHJIhU"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="link link-secondary"
                href="https://github.com/keduong33/chatty-chatty"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
