// Toggle Kategori Menu
function toggleMenu() {
  const menu = document.getElementById("categoryMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Sticky Ad on Scroll
window.addEventListener("scroll", () => {
  const stickyAd = document.getElementById("stickyAd");
  if (window.scrollY > 100 && stickyAd.style.display !== "block") {
    stickyAd.style.display = "block";
  }
});

// Close Sticky Ad
function closeAd() {
  document.getElementById("stickyAd").style.display = "none";
}

// Back to Top Button
window.onscroll = function () {
  document.getElementById("backToTop").style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Hide Loader When Page is Loaded
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Lazy Load Images
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => observer.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
    });
  }
}

// NSFW Popup Agreement
function agreeAndContinue() {
  const checkbox = document.getElementById("ageCheckbox");
  if (!checkbox.checked) {
    alert("Silakan centang bahwa Anda berusia 18 tahun ke atas.");
    return;
  }

  document.getElementById("nsfwPopup").style.display = "none";

  fetch("https://my-api-nu-three.vercel.app/api/ip")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("agreedIP", data.ip);
    })
    .catch(() => {
      console.warn("Gagal fetch IP saat menyimpan agreedIP");
    });
}

// Cek IP Apakah Sudah Pernah Setuju NSFW
async function checkIP() {
  try {
    const res = await fetch("https://my-api-nu-three.vercel.app/api/ip");
    const data = await res.json();
    const currentIP = data.ip;
    const agreedIP = localStorage.getItem("agreedIP");

    if (currentIP === agreedIP) {
      document.getElementById("nsfwPopup").style.display = "none";
    } else {
      document.getElementById("nsfwPopup").style.display = "flex";
      localStorage.setItem("savedIP", currentIP);
    }
  } catch (error) {
    console.error("Gagal mendeteksi IP:", error);
  }
}

// Jalankan Saat DOM Siap
document.addEventListener("DOMContentLoaded", () => {
  checkIP();
  lazyLoadImages();
});
