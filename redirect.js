(async () => {
  // Ambil directLink dari localStorage
  const directLink = localStorage.getItem("directLink");

  if (!directLink) return;

  // Ambil IP dari backend kamu
  try {
    const ipRes = await fetch("https://my-api-nu-three.vercel.app/api/ip");
    const ipData = await ipRes.json();
    const ip = ipData.ip;

    // Log IP ke backend untuk cek apakah sudah pernah
    const logRes = await fetch("https://my-api-nu-three.vercel.app/api/log-ip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip })
    });

    const logData = await logRes.json();

    // Jika IP belum pernah diklik hari ini → redirect ke directLink
    if (!logData.alreadyLoggedToday) {
      window.open(directLink, "_blank");
    }

  } catch (err) {
    console.error("Redirect failed:", err);
  }
})();
