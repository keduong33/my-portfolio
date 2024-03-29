import chatbot from "../../assets/chatbot.png";
import favicon from "/favicon.png";

export type Project = {
  id: string;
  title: string;
  description?: string;
  demoLink?: string;
  githubLink?: string;
  imageLink?: string;
};

const chattychatty: Project = {
  id: "chatty-chatty",
  title: "Language Partner Chatbot",
  description:
    " A friendly LLM bot that user can converse via text and/or speech to learn different languages.",
  demoLink: "https://youtu.be/aVbRqxHJIhU",
  githubLink: "https://github.com/keduong33/chatty-chatty",
  imageLink: chatbot,
};

const portfolio: Project = {
  id: "my-portfolio",
  title: "My Portfolio",
  description:
    "A website showcasing my tinkerings. The website you are on right now ;)",
  demoLink: "https://ke-duong.com",
  githubLink: "https://github.com/keduong33/my-portfolio",
  imageLink: favicon,
};

const pokeguideCli: Project = {
  id: "pokeguide-gli",
  title: "Pokeguide CLI",
  description:
    "A REPL program that helps users play Pokemon Showdown more effective",
  githubLink: " https://github.com/keduong33/poke-guide-cli",
};

export const projects: Project[] = [portfolio, chattychatty, pokeguideCli];
