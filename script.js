console.log("Website loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

const images = [
  { src: "photo1.jpeg", caption: "September 2024 – Under the Stars" },
  { src: "images/photo2.jpeg", caption: "October 2024 – Trouvaille Memory Care" },
  { src: "images/photo3.jpeg", caption: "December 2024 – Santa Brunch" },
  { src: "images/photo4.jpeg", caption: "December 2024 – Trouvaille Memory Care" },
  { src: "images/photo5.jpeg", caption: "December 2024 – Santa Brunch" },
  { src: "images/photo6.jpeg", caption: "April 2025 – Black Gown Gala" },
  { src: "images/photo7.jpeg", caption: "April 2025 – Excelsior Firehouse" },
  { src: "images/photo8.jpeg", caption: "June 2025 – Trouvaille Memory Care" },
  { src: "images/photo9.jpeg", caption: "July 2025 – Excelsior Commons" }
];

let currentIndex = 0;
const imgElement = document.getElementById("carousel-img");
const captionElement = document.getElementById("carousel-caption");

// Hide initially
imgElement.style.opacity = 0;
captionElement.style.opacity = 0;

// Load first image, then show
imgElement.addEventListener('load', () => {
  imgElement.style.opacity = 1;
  captionElement.style.opacity = 1;
});
imgElement.src = images[currentIndex].src;
captionElement.textContent = images[currentIndex].caption;


// Auto-advance every 5 seconds
let autoSlide = setInterval(() => changeSlide(1), 5000);

// Change slide function
function changeSlide(direction) {
  // Fade out current
  imgElement.style.opacity = 0;
  captionElement.style.opacity = 0;

  // Clear and reset interval (optional: resets timer when clicking)
  clearInterval(autoSlide);
  autoSlide = setInterval(() => changeSlide(1), 5000);

  setTimeout(() => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
  }, 500); // matches fade-out time
}



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  if (form && thankYouMessage) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();  // <--- THIS stops the default redirect

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.style.display = "none";
          thankYouMessage.style.display = "block";
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error. Please try again later.");
      }
    });
  }
});



