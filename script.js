const LINES = [
  { t: '╔══════════════════════════════════════════════════════════════╗', c: 'd' },
  { t: '║        CYBER DEV OS  v3.7.1  //  SECURE BOOT SEQUENCE        ║', c: 'g b' },
  { t: '║        KHALEED USMAN AJEIGBE  //  AL HIKMAH UNIVERSITY        ║', c: 'c' },
  { t: '╚══════════════════════════════════════════════════════════════╝', c: 'd' },
  { t: ' ', c: 'd' },
  { t: '[BIOS]    POST check complete ....................... PASS', c: 'w', ms: 60 },
  { t: '[BIOS]    CPU: CyberCore-X9 @ 4.8GHz .............. DETECTED', c: 'w', ms: 50 },
  { t: '[BIOS]    RAM: 32768 MB DDR5 ....................... OK', c: 'g', ms: 50 },
  { t: '[BIOS]    GPU: CyberGFX-RTX ........................ ONLINE', c: 'g', ms: 50 },
  { t: '[BIOS]    Storage: /dev/nvme0n1 .................... MOUNTED', c: 'g', ms: 50 },
  { t: '[BIOS]    TPM 2.0 Secure Chip ...................... VERIFIED', c: 'g', ms: 50 },
  { t: ' ', c: 'd' },
  { t: '[BOOT]    Loading GRUB bootloader .................. OK', c: 'w', ms: 45 },
  { t: '[BOOT]    Decompressing kernel image ............... OK', c: 'w', ms: 45 },
  { t: '[BOOT]    Kernel v6.9.0-cyberdev ................... LOADED', c: 'g', ms: 50 },
  { t: '[BOOT]    Mounting root filesystem ................. OK', c: 'g', ms: 45 },
  { t: '[BOOT]    /dev/portfolio ........................... MOUNTED', c: 'g', ms: 45 },
  { t: '[BOOT]    tmpfs /run ............................... OK', c: 'g', ms: 40 },
  { t: '[BOOT]    sysfs /sys .............................. OK', c: 'g', ms: 40 },
  { t: '[BOOT]    devtmpfs /dev ........................... OK', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[INIT]    Starting system services...', c: 'c', ms: 80 },
  { t: '[INIT]    systemd v253 ............................ RUNNING', c: 'g', ms: 45 },
  { t: '[INIT]    udev daemon ............................. STARTED', c: 'g', ms: 40 },
  { t: '[INIT]    dbus message bus ........................ STARTED', c: 'g', ms: 40 },
  { t: '[INIT]    network manager ......................... ONLINE', c: 'g', ms: 40 },
  { t: '[INIT]    eth0: 192.168.1.37 ...................... ASSIGNED', c: 'g', ms: 40 },
  { t: '[INIT]    wlan0: 5GHz band ........................ CONNECTED', c: 'g', ms: 40 },
  { t: '[INIT]    DNS resolver ............................ ACTIVE', c: 'g', ms: 40 },
  { t: '[INIT]    SSH daemon .............................. LISTENING', c: 'g', ms: 40 },
  { t: '[INIT]    cron scheduler .......................... STARTED', c: 'g', ms: 40 },
  { t: '[INIT]    log daemon .............................. RUNNING', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[SEC]     Initializing security subsystem...', c: 'c', ms: 80 },
  { t: '[SEC]     AES-256-GCM encryption module ........... LOADED', c: 'g', ms: 45 },
  { t: '[SEC]     SHA-3 hashing engine .................... LOADED', c: 'g', ms: 40 },
  { t: '[SEC]     RSA-4096 key exchange ................... READY', c: 'g', ms: 40 },
  { t: '[SEC]     TLS 1.3 handshake module ................ READY', c: 'g', ms: 40 },
  { t: '[SEC]     Firewall rules (iptables) ............... ACTIVE', c: 'g', ms: 40 },
  { t: '[SEC]     Fail2ban intrusion blocker .............. ARMED', c: 'g', ms: 40 },
  { t: '[SEC]     IDS / IPS engine ........................ ARMED', c: 'g', ms: 40 },
  { t: '[SEC]     Rootkit scanner ......................... CLEAN', c: 'g', ms: 40 },
  { t: '[SEC]     Sandboxed execution env ................. READY', c: 'g', ms: 40 },
  { t: '[SEC]     VPN tunnel (WireGuard) .................. ESTABLISHED', c: 'g', ms: 40 },
  { t: '[SEC]     Zero-trust policy engine ................ ENFORCING', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[SCAN]    Running environment threat scan...', c: 'y', ms: 90 },
  { t: '[SCAN]    Checking open ports ..................... CLEAN', c: 'g', ms: 45 },
  { t: '[SCAN]    Scanning for malware signatures ......... 0 FOUND', c: 'g', ms: 45 },
  { t: '[SCAN]    Validating SSL certificates ............. VALID', c: 'g', ms: 40 },
  { t: '[SCAN]    Checking DNS integrity .................. OK', c: 'g', ms: 40 },
  { t: '[SCAN]    Memory integrity check .................. PASSED', c: 'g', ms: 40 },
  { t: '[SCAN]    Process anomaly detection ............... CLEAR', c: 'g', ms: 40 },
  { t: '[SCAN]    Environment: FULLY SECURE ✓', c: 'g', ms: 50 },
  { t: ' ', c: 'd' },
  { t: '[LOAD]    Mounting portfolio filesystem...', c: 'c', ms: 80 },
  { t: '[LOAD]    /assets/css ............................ CACHED', c: 'g', ms: 40 },
  { t: '[LOAD]    /assets/fonts .......................... LOADED', c: 'g', ms: 40 },
  { t: '[LOAD]    /assets/images ......................... LOADED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/hero .......................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/about ......................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/skills ........................ COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/experience .................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/services ...................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/projects ...................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/education ..................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    /modules/contact ....................... COMPILED', c: 'g', ms: 40 },
  { t: '[LOAD]    Projects index (5 entries) ............. INDEXED', c: 'g', ms: 40 },
  { t: '[LOAD]    Skills database (12 skills) ............ MAPPED', c: 'g', ms: 40 },
  { t: '[LOAD]    Services catalog (6 items) ............. ONLINE', c: 'g', ms: 40 },
  { t: '[LOAD]    Animation engine ....................... READY', c: 'g', ms: 40 },
  { t: '[LOAD]    UI renderer ............................ READY', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[AUTH]    Verifying user identity...', c: 'c', ms: 80 },
  { t: '[AUTH]    Scanning biometric signature ........... MATCH', c: 'g', ms: 50 },
  { t: '[AUTH]    Cross-referencing credentials .......... CONFIRMED', c: 'g', ms: 50 },
  { t: ' ', c: 'd' },
  { t: '          ┌─────────────────────────────────────┐', c: 'd' },
  { t: '          │  NAME    :  KHALEED USMAN AJEIGBE   │', c: 'w', ms: 40 },
  { t: '          │  ALIAS   :  CYBER DEV               │', c: 'g', ms: 40 },
  { t: '          │  ROLE    :  Software Engineer        │', c: 'w', ms: 40 },
  { t: '          │  SCHOOL  :  Al Hikmah University     │', c: 'w', ms: 40 },
  { t: '          │  DEPT    :  Software Engineering     │', c: 'w', ms: 40 },
  { t: '          │  MATRIC  :  25/09CYB019              │', c: 'w', ms: 40 },
  { t: '          │  PHONE   :  +234 913 858 3684        │', c: 'w', ms: 40 },
  { t: '          │  NATION  :  Nigeria 🇳🇬               │', c: 'w', ms: 40 },
  { t: '          │  LEVEL   :  FULL CLEARANCE ★         │', c: 'g', ms: 40 },
  { t: '          └─────────────────────────────────────┘', c: 'd' },
  { t: ' ', c: 'd' },
  { t: '[AUTH]    Token generated: 8f3a-c9d2-7e1b-4f06 .. OK', c: 'g', ms: 50 },
  { t: '[AUTH]    Session expires: never ................. SET', c: 'g', ms: 40 },
  { t: '[AUTH]    Privilege level: ROOT .................. GRANTED', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[NET]     Establishing external connections...', c: 'c', ms: 80 },
  { t: '[NET]     cyberdevpotofolio.netlify.app .......... REACHABLE', c: 'g', ms: 45 },
  { t: '[NET]     cyberads.netlify.app ................... REACHABLE', c: 'g', ms: 40 },
  { t: '[NET]     finalemail-tau.vercel.app .............. REACHABLE', c: 'g', ms: 40 },
  { t: '[NET]     wa.me/2349138583684 .................... ONLINE', c: 'g', ms: 40 },
  { t: '[NET]     CDN edge nodes ......................... SYNCED', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '[SYS]     Final system checks...', c: 'c', ms: 80 },
  { t: '[SYS]     CPU usage ............................. 4%', c: 'g', ms: 40 },
  { t: '[SYS]     Memory usage .......................... 12%', c: 'g', ms: 40 },
  { t: '[SYS]     Disk I/O .............................. OPTIMAL', c: 'g', ms: 40 },
  { t: '[SYS]     Temperature ........................... 38°C', c: 'g', ms: 40 },
  { t: '[SYS]     Uptime ................................ 0d 0h 0m 3s', c: 'g', ms: 40 },
  { t: '[SYS]     All systems nominal ................... ✓', c: 'g', ms: 40 },
  { t: ' ', c: 'd' },
  { t: '████████████████████████████████████████  100%', c: 'g', ms: 60 },
  { t: ' ', c: 'd' },
  { t: '> BOOT COMPLETE.  ALL SYSTEMS OPERATIONAL.', c: 'g b', ms: 70 },
  { t: '> ACCESS GRANTED.  WELCOME, CYBER DEV.  🚀', c: 'g b', ms: 50 },
];

const tOut = document.getElementById('t-out');
const tCur = document.getElementById('t-cursor');
const tBtn = document.getElementById('t-btn');

let li = 0;
function nextLine() {
  if (li >= LINES.length) {
    if (tCur) tCur.style.display = 'inline-block';
    setTimeout(() => { 
      if (tBtn) tBtn.style.display = 'block'; 
    }, 500);
    return;
  }
  const { t, c, ms = 130 } = LINES[li];
  const el = document.createElement('div');
  el.className = 'tl ' + c;
  el.textContent = t;
  if (tOut) {
    tOut.appendChild(el);
    requestAnimationFrame(() => el.classList.add('on'));
    tOut.scrollTop = tOut.scrollHeight;
  }
  li++;
  setTimeout(nextLine, ms);
}
setTimeout(nextLine, 300);

window.enterSite = function() {
  const term = document.getElementById('terminal');
  const port = document.getElementById('portfolio');
  if (term && port) {
    term.classList.add('exit');
    port.style.display = 'block';
    setTimeout(() => {
      port.classList.add('show');
      term.style.display = 'none';
      startPortfolio();
    }, 900);
  }
};

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'Flutter Developer', 'UI/UX Designer', 'Digital Studio Founder', 'CYBER DEV'];
let ri = 0, ci = 0, del = false;
const typedEl = document.getElementById('typed');

function typeLoop() {
  const cur = ROLES[ri];
  if (!typedEl) return;

  if (!del) {
    typedEl.textContent = cur.slice(0, ci + 1);
    ci++;
    if (ci === cur.length) { 
      del = true; 
      setTimeout(typeLoop, 2000); 
      return; 
    }
  } else {
    typedEl.textContent = cur.slice(0, ci - 1);
    ci--;
    if (ci === 0) { 
      del = false; 
      ri = (ri + 1) % ROLES.length; 
    }
  }
  setTimeout(typeLoop, del ? 52 : 90);
}

function startPortfolio() {
  typeLoop();
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        e.target.querySelectorAll('.ski-fill').forEach(b => {
          setTimeout(() => { 
            if (b.dataset.w) b.style.width = b.dataset.w + '%'; 
          }, 200);
        });
      }
    });
  }, { threshold: 0.10 });
  
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
