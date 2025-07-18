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
  } else {
    alert("Silakan centang bahwa Anda berusia 18 tahun ke atas.");
  }
}
