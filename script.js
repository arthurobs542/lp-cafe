document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const carouselIndicators = document.querySelectorAll(".indicator");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const menuItems = document.querySelectorAll(".menu-item");
  const contactForm = document.querySelector(".contact-form");
  const ctaButtons = document.querySelectorAll(".cta-button");
  const backToTopBtn = document.getElementById("backToTop");

  let currentSlide = 0;
  let slideInterval;
  function initCarousel() {
    showSlide(currentSlide);
    startSlideInterval();
  }

  function showSlide(index) {
    carouselSlides.forEach((slide) => slide.classList.remove("active"));
    carouselIndicators.forEach((indicator) =>
      indicator.classList.remove("active")
    );

    carouselSlides[index].classList.add("active");
    carouselIndicators[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide =
      (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
  }

  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopSlideInterval();
      startSlideInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopSlideInterval();
      startSlideInterval();
    });
  }
  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      stopSlideInterval();
      startSlideInterval();
    });
  });

  carouselSlides.forEach((slide) => {
    slide.addEventListener("mouseenter", stopSlideInterval);
    slide.addEventListener("mouseleave", startSlideInterval);
  });
  function initMenuFilter() {
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        categoryBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        menuItems.forEach((item) => {
          if (item.dataset.category === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  function initSmoothScroll() {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }

        navMenu.classList.remove("active");
      });
    });

    ctaButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const menuSection = document.querySelector("#menu");
        if (menuSection) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = menuSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  function initMobileMenu() {
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }

    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
      }
    });
  }

  function initContactForm() {
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector(".submit-btn");
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Enviando...';
        submitBtn.disabled = true;
        lucide.createIcons();

        setTimeout(() => {
          submitBtn.innerHTML = '<i data-lucide="check"></i> Enviado!';
          lucide.createIcons();

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
            lucide.createIcons();
          }, 2000);
        }, 1500);
      });
    }
  }

  function initBackToTop() {
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }

  function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        stopSlideInterval();
        startSlideInterval();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        stopSlideInterval();
        startSlideInterval();
      } else if (e.key === "Escape") {
        navMenu.classList.remove("active");
      }
    });
  }

  function initScrollAnimations() {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return rect.top < windowHeight && rect.bottom > 0;
    }

    function handleScrollAnimations() {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");

      animatedElements.forEach((element) => {
        if (
          isElementInViewport(element) &&
          !element.classList.contains("animated")
        ) {
          element.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", handleScrollAnimations);

    handleScrollAnimations();
  }

  initCarousel();
  initMenuFilter();
  initSmoothScroll();
  initMobileMenu();
  initContactForm();
  initBackToTop();
  initKeyboardNavigation();
  initScrollAnimations();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
    }
  });

  window.addEventListener("beforeunload", () => {
    stopSlideInterval();
  });
});
