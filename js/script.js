// ─── NAVBAR SCROLL EFFECT ───
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  // Add scroll shadow to navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // Hamburger menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  // Close mobile menu when link is clicked
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Fade-up on scroll animation
  initFadeUpAnimation();

  // Set active nav link based on current page
  setActiveNavLink();

  // Gallery lightbox
  initGalleryLightbox();
});

// ─── CLOSE MOBILE MENU ───
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }
}

// ─── FADE UP ANIMATION ───
function initFadeUpAnimation() {
  const fadeEls = document.querySelectorAll(".fade-up");

  if (!("IntersectionObserver" in window)) {
    // Fallback for older browsers
    fadeEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  fadeEls.forEach((el) => observer.observe(el));
}

// ─── SET ACTIVE NAV LINK ───
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if link matches current page
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "/" && href === "index.html")
    ) {
      link.classList.add("active");
    } else if (href.startsWith("#")) {
      // Handle hash links
      link.classList.remove("active");
    }
  });
}

// ─── SMOOTH SCROLL FOR HASH LINKS ───
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute("href"));
  if (target) {
    e.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: "smooth" });
  }
});

// ─── ERROR TRACKING (optional - for deployment monitoring) ───
window.addEventListener("error", (e) => {
  console.error("Error:", e.error);
  // In production, you'd send this to a logging service
});

// ─── LAZY LOAD IMAGES ───
function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Call lazy loading on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLazyLoading);
} else {
  initLazyLoading();
}

// ─── THEME TOGGLE (optional enhancement) ───
function initThemeToggle() {
  const theme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", theme);
}

initThemeToggle();

// ─── GALLERY LIGHTBOX ───
function initGalleryLightbox() {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeButton = document.querySelector(".lightbox-close");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!lightbox || !lightboxImage || galleryItems.length === 0) {
    return;
  }

  function openLightbox(src, altText) {
    lightboxImage.src = src;
    lightboxImage.alt = altText || "Gallery image";
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lightboxImage.src = "";
  }

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    if (!img) return;
    item.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxImage) {
      closeLightbox();
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}
