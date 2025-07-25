// === DAFTAR IKLAN ===

// Directlink (dipakai untuk tombol dan redirect.js)
const directLinks = [
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=61637c39d8fe762ff37b9627e3bd95d3",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=98924fe5e40aa1565494e91c2887bb37",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=aa66bc713fed7d0d95815a2ccaa4db97"
];

// Popunder
const popunderScripts = [
  "//thermometerpushfulabnegate.com/66/e7/9a/66e79a753269d03ddec67bae4a63fdcd.js",
  "//thermometerpushfulabnegate.com/3b/db/a9/3bdba92060257b990b3bf917b9fa01e9.js",
  "//thermometerpushfulabnegate.com/26/7c/f6/267cf6ba29121d04dca551dd8586fbed.js"
];

// Native Ads
const nativeAds = [
  {
    src: "//thermometerpushfulabnegate.com/3cb3541af4774ece06527691f68755a2/invoke.js",
    containerId: "container-3cb3541af4774ece06527691f68755a2"
  },
  {
    src: "//thermometerpushfulabnegate.com/d022d2e2a5b5615d71e8ea97bf366a95/invoke.js",
    containerId: "container-d022d2e2a5b5615d71e8ea97bf366a95"
  },
  {
    src: "//thermometerpushfulabnegate.com/087a5434b38672b575440c316bebe4f4/invoke.js",
    containerId: "container-087a5434b38672b575440c316bebe4f4"
  }
];

// === PENGECEKAN HALAMAN ===

const currentPath = window.location.pathname;

// Daftar halaman tanpa popunder
const disablePopunderPaths = [
  '/backlink.html'
];

// === DIRECTLINK: Simpan acak untuk dipakai ulang ===

const selectedDirectLink = directLinks[Math.floor(Math.random() * directLinks.length)];
localStorage.setItem("directLink", selectedDirectLink);

// === TRAP BUTTON (Jika ada tombol) ===

const ipKey = 'directlink-clicked';
const lastClick = localStorage.getItem(ipKey);
const today = new Date().toDateString();

const trapBtn = document.getElementById('trapButton');
if (trapBtn) {
  trapBtn.addEventListener('click', () => {
    if (lastClick !== today) {
      window.open(selectedDirectLink, '_blank');
      localStorage.setItem(ipKey, today);
    }
    // Redirect ke konten setelah klik (opsional)
    // window.location.href = "/watch/watch.html?id=...";
  });
}

// === POPUNDER ===

if (!disablePopunderPaths.includes(currentPath)) {
  const selectedPop = popunderScripts[Math.floor(Math.random() * popunderScripts.length)];
  const popScript = document.createElement("script");
  popScript.src = selectedPop;
  popScript.type = "text/javascript";
  document.body.appendChild(popScript);
}

// === NATIVE ADS ===

const nativeSlot = document.getElementById("native-slot");
if (nativeSlot) {
  const native = nativeAds[Math.floor(Math.random() * nativeAds.length)];

  // Ganti ID elemen agar cocok dengan script invoke.js
  nativeSlot.id = native.containerId;

  const nativeScript = document.createElement("script");
  nativeScript.src = native.src;
  nativeScript.async = true;
  nativeScript.setAttribute("data-cfasync", "false");
  document.body.appendChild(nativeScript);
}
