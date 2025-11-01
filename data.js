// ========================================
// MALAYSIA ZERO-TIER DOMAINS (100+)
// ========================================
const MALAYSIA_DOMAINS = [
  // === SPEEDTEST & CDN ===
  { name: "Speedtest KL", host: "ookla.kul1.speedtest.net", cf: true, zt: true },
  { name: "Speedtest MY", host: "www.speedtest.net", cf: true, zt: true },
  { name: "Fast.com", host: "fast.com", cf: false, zt: true },
  { name: "Cloudflare MY", host: "1.1.1.1", cf: true, zt: true },

  // === GOOGLE & YOUTUBE ===
  { name: "YouTube MY", host: "www.youtube.com", cf: true, zt: true },
  { name: "Google MY", host: "www.google.com.my", cf: true, zt: true },
  { name: "Google DNS", host: "dns.google", cf: true, zt: true },

  // === SOCIAL & MESSAGING ===
  { name: "Facebook MY", host: "edge.facebook.com", cf: true, zt: true },
  { name: "Instagram MY", host: "i.instagram.com", cf: true, zt: true },
  { name: "WhatsApp MY", host: "mmg.whatsapp.net", cf: false, zt: true },
  { name: "Telegram MY", host: "web.telegram.org", cf: true, zt: true },

  // === E-COMMERCE ===
  { name: "Shopee MY", host: "shopee.com.my", cf: true, zt: true },
  { name: "Lazada MY", host: "my.lazada.com", cf: true, zt: true },
  { name: "Grab MY", host: "m.grab.com", cf: true, zt: true },

  // === BANKING & GOV ===
  { name: "Maybank", host: "www.maybank2u.com.my", cf: true, zt: true },
  { name: "CIMB", host: "www.cimbclicks.com.my", cf: true, zt: true },
  { name: "MyGov", host: "www.malaysia.gov.my", cf: false, zt: true },

  // === NEWS & MEDIA ===
  { name: "Astro Awani", host: "www.astroawani.com", cf: true, zt: true },
  { name: "The Star", host: "www.thestar.com.my", cf: true, zt: true },
  { name: "Berita Harian", host: "www.bharian.com.my", cf: true, zt: true },

  // === TELCOS ===
  { name: "Celcom", host: "www.celcom.com.my", cf: true, zt: true },
  { name: "Maxis", host: "www.maxis.com.my", cf: true, zt: true },
  { name: "Digi", host: "www.digi.com.my", cf: true, zt: true },
  { name: "Unifi", host: "unifi.com.my", cf: true, zt: true },

  // === CDN & CLOUDFLARE EDGES ===
  { name: "CF KL", host: "kuala-lumpur.cloudflare.com", cf: true, zt: true },
  { name: "CF MY", host: "cloudflare-dns.com", cf: true, zt: true },
  { name: "Akamai MY", host: "a248.e.akamai.net", cf: false, zt: true },

  // === ADD MORE BELOW (JUST COPY-PASTE) ===
  { name: "TM Net", host: "www.tm.com.my", cf: false, zt: true },
  { name: "Hotlink", host: "www.hotlink.com.my", cf: true, zt: true },
  { name: "U Mobile", host: "www.u.com.my", cf: true, zt: true },
  // ... add 70+ more here ...
];

// ========================================
// PAYLOAD TEMPLATES (ADD MORE ANYTIME)
// ========================================
const PAYLOAD_TEMPLATES = [
  {
    name: "Speedtest CF Trace",
    payload: `GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]`
  },
  {
    name: "YouTube 204",
    payload: `GET /generate_204 HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]`
  },
  {
    name: "Google Favicon",
    payload: `GET /favicon.ico HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket[crlf][crlf]`
  },
  {
    name: "WhatsApp Direct",
    payload: `GET / HTTP/1.1[crlf]Host: [DOMAIN][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket[crlf][crlf]`
  },
  {
    name: "Shopee API",
    payload: `GET /api/v4/homepage/recommend HTTP/1.1[crlf]Host: [DOMAIN][crlf]Accept: application/json[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [TUNNEL][crlf]Connection: Upgrade[crlf]User-Agent: [UA][crlf]Upgrade: websocket:[DOMAIN][crlf][crlf]`
  },
  // ADD 45+ MORE HERE...
];
