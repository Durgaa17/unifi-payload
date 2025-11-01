// ========================================
// 100+ MALAYSIA ZERO-TIER DOMAINS
// ========================================
const DOMAINS = [
  { name: "Speedtest KL", host: "ookla.kul1.speedtest.net", cf: true, zt: true },
  { name: "Speedtest MY", host: "www.speedtest.net", cf: true, zt: true },
  { name: "Fast.com", host: "fast.com", cf: false, zt: true },
  { name: "YouTube MY", host: "www.youtube.com", cf: true, zt: true },
  { name: "Google MY", host: "www.google.com.my", cf: true, zt: true },
  { name: "Shopee MY", host: "shopee.com.my", cf: true, zt: true },
  { name: "Lazada MY", host: "my.lazada.com", cf: true, zt: true },
  { name: "Grab MY", host: "m.grab.com", cf: true, zt: true },
  { name: "Facebook MY", host: "edge.facebook.com", cf: true, zt: true },
  { name: "Instagram MY", host: "i.instagram.com", cf: true, zt: true },
  { name: "WhatsApp MY", host: "mmg.whatsapp.net", cf: false, zt: true },
  { name: "Telegram MY", host: "web.telegram.org", cf: true, zt: true },
  { name: "Maybank2u", host: "www.maybank2u.com.my", cf: true, zt: true },
  { name: "CIMB Clicks", host: "www.cimbclicks.com.my", cf: true, zt: true },
  { name: "Unifi", host: "unifi.com.my", cf: true, zt: true },
  { name: "Maxis", host: "www.maxis.com.my", cf: true, zt: true },
  { name: "Celcom", host: "www.celcom.com.my", cf: true, zt: true },
  { name: "Digi", host: "www.digi.com.my", cf: true, zt: true },
  { name: "Cloudflare MY", host: "1.1.1.1", cf: true, zt: true },
  { name: "TM Net", host: "www.tm.com.my", cf: false, zt: true },
  { name: "Astro Awani", host: "www.astroawani.com", cf: true, zt: true },
  { name: "The Star", host: "www.thestar.com.my", cf: true, zt: true },
  { name: "Berita Harian", host: "www.bharian.com.my", cf: true, zt: true },
  { name: "Hotlink", host: "www.hotlink.com.my", cf: true, zt: true },
  { name: "U Mobile", host: "www.u.com.my", cf: true, zt: true },
  // Add 75+ more here...
];

// ========================================
// 30+ PAYLOAD VARIANTS (ADD MORE ANYTIME)
// ========================================
const PAYLOADS = [
  { name: "CF Trace + WS", payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "YouTube 204", payload: `GET /generate_204 HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "Google Favicon", payload: `GET /favicon.ico HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket[crlf][crlf]` },
  { name: "WhatsApp Direct", payload: `GET / HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket[crlf][crlf]` },
  { name: "Shopee API", payload: `GET /api/v4/homepage/recommend HTTP/1.1[crlf]Host: [DOMAIN][crlf]Accept: application/json[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "CF Trace + Keep-Alive", payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf]Connection: Keep-Alive[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "YouTube Player", payload: `GET /s/player/abc123/player_ias.js HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "Google Search", payload: `GET /search?q=bypass HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket[crlf][crlf]` },
  { name: "Facebook Edge", payload: `GET / HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "Instagram API", payload: `GET /api/v1/feed/timeline/ HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "CF Visitor", payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf]CF-Visitor: {\"scheme\":\"https\"}[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "Range Bypass", payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf]Range: bytes=0-1024[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "Origin WS", payload: `GET / HTTP/1.1[crlf]Host: [DOMAIN][crlf]Origin: https://[DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "X-Online-Host", payload: `GET / HTTP/1.1[crlf]Host: [DOMAIN][crlf]X-Online-Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  { name: "CF-RAY Fake", payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf]CF-RAY: 8a1b2c3d4e5f[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]` },
  // Add 15+ more here...
];
