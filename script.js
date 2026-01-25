const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalDesc = document.getElementById("modal-desc");

const projectData = {
  1: {
    title: "Project One",
    img: "assets/project1.png",
    tags: ["VR", "Unity"],
    desc: "Longer description of the project. Explain goals, tech stack, challenges, and results."
  },
  2: {
    title: "Project Two",
    img: "assets/project2.jpg",
    tags: ["AR", "WebXR"],
    desc: "Longer description here."
  },
  3: {
    title: "Project Three",
    img: "assets/project3.jpg",
    tags: ["VR", "Haptics"],
    desc: "Longer description here."
  }
};

// document.querySelectorAll(".card").forEach(card => {
//   card.addEventListener("click", () => {
//     const data = projectData[card.dataset.project];
//     modalImg.src = data.img;
//     modalTitle.textContent = data.title;
//     modalDesc.textContent = data.desc;
//     modalTags.innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
//     modal.style.display = "flex";
//   });
// });

// document.querySelector(".close").onclick = () => {
//   modal.style.display = "none";
// };
