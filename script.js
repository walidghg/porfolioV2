// init background canvas particles
try {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#8b5cf6" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#8b5cf6",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": false },
          "onclick": { "enable": false },
          "resize": true
        }
      },
      "retina_detect": true
    });
} catch (e) {
    console.warn("particles js fail hook", e);
}

// dom binds
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalRepoLink = document.getElementById("modal-repo-link");
const modalDemoLink = document.getElementById("modal-demo-link");
const closeModalBtn = document.querySelector(".close-modal");
const projectCards = document.querySelectorAll(".project-card");

// triggers modal render (toutes les références aux images ont été supprimées)
if (modal && projectCards.length > 0) {
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.getAttribute("data-title");
            const desc = card.getAttribute("data-desc");
            const repoUrl = card.getAttribute("data-repo");
            const demoUrl = card.getAttribute("data-demo");

            if (modalTitle) modalTitle.textContent = title;
            if (modalDesc) modalDesc.textContent = desc;

            if (modalRepoLink) {
                if (repoUrl && repoUrl !== "") {
                    modalRepoLink.href = repoUrl;
                    modalRepoLink.style.display = "inline-block";
                } else {
                    modalRepoLink.style.display = "none";
                }
            }

            if (modalDemoLink) {
                if (demoUrl && demoUrl !== "") {
                    modalDemoLink.href = demoUrl;
                    modalDemoLink.style.display = "inline-block";
                } else {
                    modalDemoLink.style.display = "none";
                }
            }

            modal.style.display = "flex";
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// typing engine animation
const textToType = "Développeur Web & Étudiant à Epitech";
const typewriterElement = document.getElementById("typewriter");
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        typewriterElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

if (typewriterElement) {
    typewriterElement.textContent = ""; 
    setTimeout(typeWriter, 600); 
}