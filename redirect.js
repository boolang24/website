// === Konfigurasi Directlink ===
const directLinks = [
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=61637c39d8fe762ff37b9627e3bd95d3",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=267cf6ba29121d04dca551dd8586fbed",
  "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=66e79a753269d03ddec67bae4a63fdcd"
];
const selectedLink = directLinks[Math.floor(Math.random() * directLinks.length)];

// === Konfigurasi Backend ===
const ipEndpoint = "https://my-api-nu-three.vercel.app/api/ip";
const logCheckEndpoint = "https://my-api-nu-three.vercel.app/api/log-ip?ip=";
const logSaveEndpoint = "https://my-api-nu-three.vercel.app/api/log-ip";

// === Halaman yang Tidak Aktif Redirect ===
const disableRedirectPaths = [
  "/watch/watch.html",
  "/artikel/artikel.html"
];

const currentPath = window.location.pathname;

// === Redirect Otomatis Jika IP Belum Pernah ===
async function handleRedirectIfNeeded() {
  try {
    if (disableRedirectPaths.includes(currentPath)) return;

    const res = await fetch(ipEndpoint);
    const { ip } = await res.json();

    const check = await fetch(logCheckEndpoint + ip);
    const data = await check.json();

    if (!data.found) {
      window.open(selectedLink, "_blank");

      await fetch(logSaveEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ip })
      });
    }
  } catch (err) {
    console.error("Redirect failed:", err);
  }
}

// === Fungsi Manual dari Tombol (Optional) ===
async function redirectFromButton() {
  await handleRedirectIfNeeded();
}
