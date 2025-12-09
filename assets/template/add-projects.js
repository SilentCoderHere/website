"use strict";

/* Global Variables */
const htmlItems = document.getElementById("htmlItems");
const pythonItems = document.getElementById("pythonItems");

const allHtmlProjects = [
  { title: "Flappy Bird", repo: "flappy-bird", image: false },
  { title: "Reaction time", repo: "reaction-time", image: false },
  { title: "Personality test", repo: "personality-test", image: true },
  { title: "Tic tac toe game", repo: "tictactoe-game", image: true },
  { title: "Memory game", repo: "memory-game", image: true },
  { title: "Mines game", repo: "mines-game", image: true },
  { title: "Guessing game", repo: "guessing-game", image: true },
];

const pythonProjects = [
  {
    title: "End to End demo",
    description:
      "A simple Python demo to learn how End-to-End (E2E) encryption works using RSA keys.",
    repo: "e2e-demo",
    image: false,
  },
  {
    title: "Chat Application",
    description:
      "Experience real-time messaging via command-line or curses(UI) using Python's socket programming.",
    repo: "socket-chatroom",
    image: true,
  },
  {
    title: "Money Tracker",
    description:
      "Track financial transactions, categorize expenses, and generate reports via CLI.",
    repo: "cli-money-tracker",
    image: true,
  },
  {
    title: "Pyshare",
    description:
      "Easily share files between PC and mobile devices via command line.",
    repo: "pyshare",
    image: false,
  },
];

for (let project of allHtmlProjects) {
  let iamgeUrl = "https://placehold.co/1024x1024?text=Image+will+be+added+soon";
  if (project.image)
    iamgeUrl =
      "https://silentcoderhere.github.io/html/" + project.repo + "/cover.png";

  htmlItems.innerHTML += `
    <div class="card-container col-md-6 col-lg-4 mb-5">
      <div class="card shadow-lg p-0 bg-body rounded border-0">
        <div class="card-body d-flex flex-column p-4">
          <h4 class="card-title text-dark mb-3">${project.title}</h4>
          <img src="${iamgeUrl}" class="card-img-top rounded mb-3" alt="${project.title}">
          <p class="card-text mb-4">
            <a href="https://silentcoderhere.github.io/html/${project.repo}" class="btn btn-primary mt-2 w-100">
              <i class="fas fa-external-link-alt"></i>&nbsp; Open Page
            </a>
          </p>
        </div>
      </div>
    </div>
  `;
}

for (let project of pythonProjects) {
  let iamgeUrl = "https://placehold.co/600x400?text=Image+will+be+added+soon";
  if (project.image)
    iamgeUrl =
      "https://github.com/SilentCoderHere/" +
      project.repo +
      "/raw/main/cover.png";

  pythonItems.innerHTML += `
    <div class="card-container col-md-6 col-lg-4 mb-5">
      <div class="card shadow-lg p-0 bg-body rounded border-0">
        <div class="card-body d-flex flex-column p-4">
          <h4 class="card-title text-dark mb-3">${project.title}</h4>
          <img src="${iamgeUrl}" class="card-img-top rounded mb-3" alt="${project.title}">
          <p class="card-text mb-4">${project.description}</p>
          <a href="https://github.com/SilentCoderHere/${project.repo}" class="btn btn-primary mt-2 w-100">
            <i class="fab fa-github"></i>&nbsp; View Project
          </a>
        </div>
      </div>
    </div>
  `;
}
