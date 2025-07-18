function toggleMenu() {
  const e = document.getElementById("categoryMenu");
  e.style.display = "flex" === e.style.display ? "none" : "flex";
}

window.addEventListener("scroll", () => {
  const e = document.getElementById("stickyAd");
  if (window.scrollY > 100 && e.style.display !== "block") {
    e.style.display = "block";
  }
});

function closeAd() {
  document.getElementById("stickyAd").style.display = "none";
}

window.onscroll = function () {
  document.getElementById("backToTop").style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

function lazyLoadImages() {
  const e = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const t = new IntersectionObserver((o) => {
      o.forEach((o) => {
        if (o.isIntersecting) {
          const n = o.target;
          n.src = n.dataset.src;
          n.classList.add("loaded");
          t.unobserve(n);
        }
      });
    });
    e.forEach((e) => t.observe(e));
  } else {
    e.forEach((e) => {
      e.src = e.dataset.src;
      e.classList.add("loaded");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages();
});

document.getElementById("site-title").addEventListener("click", function () {
  window.location.href = "index.html";
});
