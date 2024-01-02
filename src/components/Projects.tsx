function Projects() {
  return (
    <div id="projects">
      <div className="prose pb-2">
        <h2>Projects</h2>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center">
        <div className="card card-compact max-w-[300px] bg-neutral shadow-xl">
          <figure className="mb-0 px-4">
            <img
              src="src/assets/chatbot.png"
              alt="chatbot"
              className="max-w-[150px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mt-0">Language Partner Chatbot</h2>
            <p className="text-justify">
              A friendly LLM bot that user can converse via text/speech to learn
              English. Txhis partner will fix the user's grammars upon request.
            </p>
            <div className="card-actions ">
              <a
                className="link link-primary"
                href="https://chattychatty.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="link link-secondary"
                href="https://github.com/keduong33/ChattyChatty"
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
