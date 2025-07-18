function toggleMenu() {
  const menu = document.getElementById("categoryMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

window.addEventListener('scroll', function () {
  const ad = document.getElementById('stickyAd');
  if (window.scrollY > 100 && ad.style.display !== 'block') {
    ad.style.display = 'block';
  }
});

function closeAd() {
  document.getElementById('stickyAd').style.display = 'none';
}

window.onscroll = function () {
  document.getElementById("backToTop").style.display =
    (document.documentElement.scrollTop > 300) ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

function agreeAndContinue() {
  const checkbox = document.getElementById("ageCheckbox");
  if (checkbox.checked) {
    document.getElementById("nsfwPopup").style.display = "none";

    // Simpan status usia dan IP terkini
    fetch("https://my-api-nu-three.vercel.app/api/ip")
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("is18Plus", "true");
        localStorage.setItem("agreedIP", data.ip);
      })
      .catch(() => {
        console.warn("Gagal menyimpan IP saat klik setuju.");
      });
  } else {
    alert("Silakan centang bahwa Anda berusia 18 tahun ke atas.");
  }
}

async function checkIP() {
  try {
    const res = await fetch("https://my-api-nu-three.vercel.app/api/ip");
    const data = await res.json();
    const currentIP = data.ip;

    const savedIP = localStorage.getItem("savedIP");
    const agreedIP = localStorage.getItem("agreedIP");
    const isAgreed = localStorage.getItem("is18Plus");

    // Jika IP baru atau belum pernah setuju
    if (agreedIP !== currentIP || isAgreed !== "true") {
      document.getElementById("nsfwPopup").style.display = "flex";
      localStorage.setItem("savedIP", currentIP);
      localStorage.removeItem("is18Plus");
      localStorage.removeItem("agreedIP");
    } else {
      document.getElementById("nsfwPopup").style.display = "none";
    }
  } catch (error) {
    console.error("Gagal mendeteksi IP:", error);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  checkIP();
});
