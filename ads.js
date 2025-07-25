// === DAFTAR IKLAN ===

// Directlink (bisa dipakai di redirect.js)
const directLinks = [
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=61637c39d8fe762ff37b9627e3bd95d3",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=98924fe5e40aa1565494e91c2887bb37",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=aa66bc713fed7d0d95815a2ccaa4db97"
];

// Popunder script
// === Popunder Ads ===
const popunderScripts = [
  "//thermometerpushfulabnegate.com/66/e7/9a/66e79a753269d03ddec67bae4a63fdcd.js",
  "//thermometerpushfulabnegate.com/3b/db/a9/3bdba92060257b990b3bf917b9fa01e9.js",
  "//thermometerpushfulabnegate.com/26/7c/f6/267cf6ba29121d04dca551dd8586fbed.js"
];

// Halaman yang tidak boleh memuat popunder
const disablePopunderPaths = [
  '/backlink.html'
];

const currentPath = window.location.pathname;

// Jika bukan halaman yang dikecualikan, jalankan popunder acak
if (!disablePopunderPaths.includes(currentPath)) {
  const randomPop = popunderScripts[Math.floor(Math.random() * popunderScripts.length)];
  const script = document.createElement("script");
  script.src = randomPop;
  document.body.appendChild(script);
}

// Native Ads (script src dan container ID harus sepasang)
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

// === FUNGSI UTAMA ===

const selectedDirectLink = directLinks[Math.floor(Math.random() * directLinks.length)];
localStorage.setItem("directLink", selectedDirectLink); // Simpan untuk redirect.js

// Pasang popunder script
const selectedPop = popunderScripts[Math.floor(Math.random() * popunderScripts.length)];
const popScript = document.createElement("script");
popScript.src = selectedPop;
popScript.type = "text/javascript";
document.body.appendChild(popScript);

// Pasang native ad di <div id="native-slot">
const native = nativeAds[Math.floor(Math.random() * nativeAds.length)];
const nativeContainer = document.getElementById("native-slot");

if (nativeContainer) {
  // Ganti ID elemen sesuai dengan yang dibutuhkan native ad
  nativeContainer.id = native.containerId;

  const nativeScript = document.createElement("script");
  nativeScript.src = native.src;
  nativeScript.async = true;
  nativeScript.setAttribute("data-cfasync", "false");
  document.body.appendChild(nativeScript);
}
