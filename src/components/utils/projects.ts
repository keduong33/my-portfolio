import chatbot from "../../assets/chatbot.png";
import favicon from "/favicon.png";

export type Project = {
  title: string;
  description?: string;
  demoLink?: string;
  githubLink?: string;
  imageLink?: string;
};

const chattychatty: Project = {
  title: "Language Partner Chatbot",
  description:
    " A friendly LLM bot that user can converse via text and/or speech to learn different languages.",
  demoLink: "https://youtu.be/aVbRqxHJIhU",
  githubLink: "https://github.com/keduong33/chatty-chatty",
  imageLink: chatbot,
};

const portfolio: Project = {
  title: "My Portfolio",
  description: "A showcase website of my tinkerings",
  demoLink: "https://ke-duong.com",
  githubLink: "https://github.com/keduong33/my-portfolio",
  imageLink: favicon,
};

export const projects: Project[] = [portfolio, chattychatty];
