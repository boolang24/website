fetch('/.netlify/functions/fetchVideos')
  .then(res => res.json())
  .then(data => {
    // Render thumbnail dan judul
    console.log(data);
    // lanjutkan render...
  })
  .catch(err => {
    console.error("Gagal memuat video:", err);
  });
