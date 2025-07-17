async function loadVideo() {
  const videoId = document.getElementById("videoIdInput").value.trim();
  if (!videoId) return alert("Masukkan ID video dulu!");

  const container = document.getElementById("videoContainer");
  container.innerHTML = "⏳ Sedang mengambil data...";

  try {
    const response = await fetch(`/.netlify/functions/proxy?id=${videoId}`);
    const data = await response.json();

    if (data && data.video) {
      container.innerHTML = `
        <video controls width="640">
          <source src="${data.video}" type="video/mp4">
          Browser Anda tidak mendukung tag video.
        </video>
      `;
    } else {
      container.innerHTML = "❌ Video tidak ditemukan.";
    }
  } catch (error) {
    container.innerHTML = `⚠️ Gagal memuat video: ${error.message}`;
  }
}
