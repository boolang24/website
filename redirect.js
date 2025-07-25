function redirectFromButton() {
  fetch("https://my-api-nu-three.vercel.app/api/ip")
    .then(res => res.json())
    .then(({ ip }) => {
      const today = new Date().toISOString().slice(0, 10);
      const key = `redirect_${ip}_${today}`;
      if (!localStorage.getItem(key)) {
        const links = [
          "https://thermometerpushfulabnegate.com/dwrpn1ns7?key=61637c39d8fe762ff37b9627e3bd95d3",
          "https://thermometerpushfulabnegate.com/u5se2wg3?key=267cf6ba29121d04dca551dd8586fbed",
          "https://thermometerpushfulabnegate.com/u5se2wg3?key=3bdba92060257b990b3bf917b9fa01e9"
        ];
        const url = links[Math.floor(Math.random() * links.length)];
        localStorage.setItem(key, "1");

        // log IP ke backend
        fetch("https://my-api-nu-three.vercel.app/api/log-ip", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, date: today, source: "button" })
        });

        window.open(url, "_blank");
      }
    });
}
