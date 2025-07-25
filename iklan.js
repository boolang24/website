(async () => {
  // === KONFIGURASI ===
  const nativeAds = [
    {
      id: '3cb3541af4774ece06527691f68755a2'
    },
    {
      id: '087a5434b38672b575440c316bebe4f4'
    },
    {
      id: 'd022d2e2a5b5615d71e8ea97bf366a95'
    }
  ];

  const directLinks = [
    'https://thermometerpushfulabnegate.com/dwrpn1ns7?key=61637c39d8fe762ff37b9627e3bd95d3',
    'https://thermometerpushfulabnegate.com/dwrpn1ns7?key=98924fe5e40aa1565494e91c2887bb37',
    'https://thermometerpushfulabnegate.com/dwrpn1ns7?key=aa66bc713fed7d0d95815a2ccaa4db97'
  ];

  const popunderScripts = [
    '//thermometerpushfulabnegate.com/66/e7/9a/66e79a753269d03ddec67bae4a63fdcd.js',
    '//thermometerpushfulabnegate.com/66/e7/9a/267cf6ba29121d04dca551dd8586fbed.js',
    '//thermometerpushfulabnegate.com/66/e7/9a/3bdba92060257b990b3bf917b9fa01e9.js'
  ];

  const API_BASE = 'https://my-api-nu-three.vercel.app/api'; // Ganti jika base URL-mu beda

  // === AMBIL IP DAN STATUS ===
  let ipData = await fetch(`${API_BASE}/ip`).then(res => res.json()).catch(() => null);
  if (!ipData || !ipData.ip) return;

  let ip = ipData.ip;
  let hash = btoa(ip).slice(0, 12);
  let today = new Date().toISOString().slice(0, 10);
  let logUrl = `${API_BASE}/log-ip?ip=${ip}&date=${today}`;

  let alreadyLogged = await fetch(logUrl).then(r => r.json()).catch(() => ({ logged: false }));

  // === 1. PASANG NATIVE ADS ACak ===
  const native = nativeAds[Math.floor(Math.random() * nativeAds.length)];
  const nativeScript = document.createElement('script');
  nativeScript.async = true;
  nativeScript.dataset.cfasync = "false";
  nativeScript.src = `//thermometerpushfulabnegate.com/${native.id}/invoke.js`;
  document.body.appendChild(nativeScript);

  const nativeDiv = document.getElementById('native-slot');
  if (nativeDiv) nativeDiv.id = `container-${native.id}`;

  // === 2. PASANG POPUNDER ACak ===
  const popScript = document.createElement('script');
  popScript.src = popunderScripts[Math.floor(Math.random() * popunderScripts.length)];
  document.body.appendChild(popScript);

  // === 3. HANDLE DIRECTLINK HANYA 1X / HARI / IP ===
  if (!alreadyLogged.logged) {
    document.addEventListener('click', function handleClick(e) {
      e.preventDefault();
      window.open(
        directLinks[Math.floor(Math.random() * directLinks.length)],
        '_blank'
      );
      document.removeEventListener('click', handleClick);
      fetch(`${API_BASE}/log-ip`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip, date: today })
      });
    }, { once: true });
  }
})();
