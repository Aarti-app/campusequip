/**
 * CampusEquip - Peer-to-Peer Campus Equipment Rental
 * Core Application Logic & State Engine
 * Swiss Typography Edition: Plus Jakarta Sans (Headings) + Inter (Body/UI)
 */

// Initial Equipment Inventory Data with curated hardware photography & tech specs
const INITIAL_EQUIPMENT = [
  {
    id: 'eq-1',
    title: 'JBL PartyBox 310 Speaker Set',
    category: 'audio',
    categoryName: 'Audio Systems',
    categoryCode: 'AUDIO // SYS-01',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    specs: '240W RMS • Dual Mic Inputs • 18hr Battery/AC',
    techSheet: {
      power: '240W RMS Dynamic',
      frequency: '45Hz - 20kHz',
      inputs: '2x 6.35mm Mic/Guitar + Aux',
      battery: '18 Hours Lithium-Ion',
      weight: '17.4 kg (Trolley Wheels)'
    },
    owner: {
      name: 'Rahul S.',
      dept: 'Comps Dept',
      prn: 'PRN: IT-2026-OK',
      rating: 4.9,
      reviewsCount: 18,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 450,
    deposit: 500,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'Canteen Safe-Zone Locker #02',
    clashDates: ['2026-10-31'],
    barcodeId: 'JBL-PB310-8902',
    description: 'Perfect for outdoor arena events, flashmobs, and acoustic jams. Includes heavy-duty power cable and 1 wired microphone.'
  },
  {
    id: 'eq-2',
    title: 'Epson Full-HD 4000L Projector',
    category: 'projection',
    categoryName: 'Projectors',
    categoryCode: 'OPTIC // PROJ-04',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    specs: '4000 Lumens • 1080p Native • HDMI/VGA Included',
    techSheet: {
      lumens: '4,000 ANSI Lumens',
      resolution: '1920x1080 Full-HD',
      throwRatio: '1.30 - 1.56:1',
      lampLife: '12,000 hrs Eco',
      connectivity: 'Dual HDMI + VGA + Audio In'
    },
    owner: {
      name: 'Priya M.',
      dept: 'Electronics Dept',
      prn: 'PRN: EC-2025-OK',
      rating: 4.8,
      reviewsCount: 12,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 600,
    deposit: 800,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'IT Lab 302 Hardware Desk',
    clashDates: ['2026-10-29'],
    barcodeId: 'EPSON-4000L-3341',
    description: 'High lumen output works even in semi-lit auditorium rooms. Ideal for PPT presentations, fest movie screenings, or gaming tournaments.'
  },
  {
    id: 'eq-3',
    title: 'Ahuja Dual Collar Wireless Mics',
    category: 'audio',
    categoryName: 'Audio Systems',
    categoryCode: 'AUDIO // MIC-02',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    specs: 'Dual VHF Bodypack • 60m Range • Fresh AA Batteries',
    techSheet: {
      carrierFreq: '210MHz - 260MHz VHF',
      polarPattern: 'Cardioid Unidirectional',
      rfRange: '60 Meters Line-of-sight',
      battery: '2x 9V or 4x AA Cells',
      output: 'Balanced XLR + 6.3mm Mix'
    },
    owner: {
      name: 'Tanmay K.',
      dept: 'IT Dept',
      prn: 'PRN: IT-2026-OK',
      rating: 5.0,
      reviewsCount: 24,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 250,
    deposit: 300,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'Student Council Desk Foyer',
    clashDates: [],
    barcodeId: 'AHUJA-VHF-2041',
    description: 'Crystal clear speech clarity for anchor duos, debate competitions, and stage plays. Zero clipping.'
  },
  {
    id: 'eq-4',
    title: 'PAR Can 64 RGBW Stage Light Kit',
    category: 'lighting',
    categoryName: 'Stage Lights',
    categoryCode: 'STAGE // FX-01',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    specs: '4x 54W LED • DMX512 / Sound Active • Tripod Stand',
    techSheet: {
      diodes: '54x 3W Quad-Color RGBW',
      channels: '8-Channel DMX512',
      modes: 'Sound-Active / Auto Strobe',
      powerDraw: '160W Total Load',
      rigging: 'Dual Bracket + T-Bar Stand'
    },
    owner: {
      name: 'Devansh R.',
      dept: 'Mech Dept',
      prn: 'PRN: ME-2024-OK',
      rating: 4.7,
      reviewsCount: 9,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 550,
    deposit: 600,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'IT Lab 302 Hardware Desk',
    clashDates: ['2026-10-30'],
    barcodeId: 'PARCAN-64RGBW-7104',
    description: 'Transform any seminar hall into a concert arena. Pre-programmed strobe, fade, and beat-sync modes.'
  },
  {
    id: 'eq-5',
    title: 'Sony Alpha A7 III + 24-70mm f/2.8',
    category: 'photography',
    categoryName: 'Photography',
    categoryCode: 'CAMERA // RIG-08',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    specs: '4K HDR Video • 2x 128GB V90 Cards • 3 Batteries',
    techSheet: {
      sensor: '24.2MP Full-Frame BSI',
      videoCodec: '4K 24/30p XAVC S 100Mbps',
      lens: 'G-Master 24-70mm f/2.8 Constant',
      stabilization: '5-Axis In-Body IBIS',
      media: 'Dual UHS-II SDXC Slots'
    },
    owner: {
      name: 'Ananya P.',
      dept: 'Media Studies',
      prn: 'PRN: MS-2025-OK',
      rating: 4.95,
      reviewsCount: 31,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 950,
    deposit: 1200,
    status: 'locked',
    statusText: 'LOCKED FOR FEST',
    safeZone: 'Student Council Desk Foyer',
    clashDates: ['2026-10-27', '2026-10-28', '2026-10-29'],
    barcodeId: 'SONY-A7M3-GM2470',
    description: 'Campus media team official camera. Reserved for Annual Cultural Gala main coverage.'
  },
  {
    id: 'eq-6',
    title: 'Heavy-Duty 50M Industrial Cable Reel',
    category: 'cables',
    categoryName: 'Cables & Adapters',
    categoryCode: 'POWER // CORE-16',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: '50 Meters • 16A Surge Protected • 4 Universal Sockets',
    techSheet: {
      length: '50.0 Meters (164 Feet)',
      wireGauge: '2.5mm² Pure Copper Core',
      rating: '16A / 3500W Max Draw',
      protection: 'Thermal Cut-off Breaker',
      drum: 'Heavy-duty steel axle frame'
    },
    owner: {
      name: 'Rohit B.',
      dept: 'Electrical Dept',
      prn: 'PRN: EE-2025-OK',
      rating: 4.8,
      reviewsCount: 15,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 120,
    deposit: 200,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'Canteen Safe-Zone Locker #01',
    clashDates: [],
    barcodeId: 'REEL-50M-16A-9921',
    description: 'Essential lifeline for garden setups and ground stalls. Thick copper core prevents voltage drop.'
  },
  {
    id: 'eq-7',
    title: 'Stage Fog Machine 900W + Fluid',
    category: 'lighting',
    categoryName: 'Stage Lights',
    categoryCode: 'STAGE // FX-02',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    specs: '900W Fast Heatup • Wired + Wireless Remote • 1L Tank',
    techSheet: {
      heater: '900W Thermostatic Core',
      heatupTime: '3.5 Minutes initial',
      outputVolume: '10,000 cu.ft / minute',
      tank: '1.0 Litre High-Density Fluid',
      control: 'Wireless RF Remote 30m'
    },
    owner: {
      name: 'Sneha T.',
      dept: 'Civil / Dance Club',
      prn: 'PRN: CE-2025-OK',
      rating: 4.9,
      reviewsCount: 14,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 380,
    deposit: 400,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'Canteen Safe-Zone Locker #03',
    clashDates: [],
    barcodeId: 'FOG-900W-SMK-4412',
    description: 'Creates thick, cinematic ground fog. High output pump covers a 20x30ft dance stage in 40 seconds.'
  },
  {
    id: 'eq-8',
    title: 'Shure SM58 Vocal Microphone Pair',
    category: 'audio',
    categoryName: 'Audio Systems',
    categoryCode: 'AUDIO // MIC-01',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    specs: '2x SM58 Dynamic Mics • 2x 10m XLR Cables • 2 Stands',
    techSheet: {
      transducer: 'Dynamic Moving Coil',
      polarPattern: 'Cardioid Symmetrical',
      freqResponse: '50Hz - 15,000Hz',
      cables: '2x Mogami 10M Gold-pin XLR',
      accessories: '2x Cast-iron Roundbase Stands'
    },
    owner: {
      name: 'Arjun M.',
      dept: 'Music Club Lead',
      prn: 'PRN: ME-2024-OK',
      rating: 5.0,
      reviewsCount: 42,
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 200,
    deposit: 250,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'Student Council Desk Foyer',
    clashDates: [],
    barcodeId: 'SHURE-SM58-PAIR-5519',
    description: 'Legendary cardioid vocal mics. Indestructible, warm vocal tone, zero handling noise.'
  },
  {
    id: 'eq-9',
    title: 'DJI Ronin-SC 3-Axis Camera Gimbal',
    category: 'photography',
    categoryName: 'Photography',
    categoryCode: 'OPTIC // GIMBAL-03',
    image: 'https://images.unsplash.com/photo-1589872766857-2110abb95a08?auto=format&fit=crop&w=800&q=80',
    specs: '2.0kg Payload • ActiveTrack 3.0 • Focus Wheel',
    techSheet: {
      payload: '2.0 kg (4.4 lbs) Tested',
      batteryRuntime: '11 Hours 18650 Pack',
      axes: '360° Continuous Pan, -95° to +220° Tilt',
      connection: 'Bluetooth 5.0 + USB-C',
      features: 'Sport Mode, ActiveTrack 3.0'
    },
    owner: {
      name: 'Karthik N.',
      dept: 'Design Dept',
      prn: 'PRN: DES-2026-OK',
      rating: 4.85,
      reviewsCount: 11,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: 500,
    deposit: 700,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: 'IT Lab 302 Hardware Desk',
    clashDates: ['2026-11-02'],
    barcodeId: 'DJI-RONIN-SC-7721',
    description: 'Silky smooth cinematic tracking shots for fest trailers, aftermovies, and Instagram reels.'
  }
];

// Initial Campus Wanted Board Requests
const INITIAL_WANTED_REQUESTS = [
  {
    id: 'w-1',
    title: 'Need 2 Wireless Lapel Mics for Drama Society Annual Fest',
    club: 'Natak Dramatic Society',
    requester: 'Aayush V. (President)',
    neededDate: 'This Friday (Oct 30)',
    budget: '₹350/day',
    duration: '2 Days',
    urgency: 'high',
    urgencyText: 'URGENT • 2 DAYS LEFT',
    offersCount: 3,
    description: 'Need crisp collar mics for our 8-character stage production at Main Auditorium. Clean battery compartment required.'
  },
  {
    id: 'w-2',
    title: 'Looking for 50m Heavy-Duty Extension Reel & Spike Guards',
    club: 'RoboVITics Club',
    requester: 'Siddharth T. (Tech Head)',
    neededDate: 'Tomorrow Morning',
    budget: '₹150/day',
    duration: '1 Day',
    urgency: 'critical',
    urgencyText: 'CRITICAL • NEEDED TOMORROW',
    offersCount: 1,
    description: 'Required for outdoor combat robot test arena behind Mechanical Workshop. 16A load bearing required.'
  },
  {
    id: 'w-3',
    title: 'HDMI to USB-C 4K 10m cord for Tech Fest Hall A',
    club: 'Developers Student Club',
    requester: 'Meera S. (Tech Lead)',
    neededDate: 'Saturday Evening',
    budget: '₹300/day',
    duration: '2 Days',
    urgency: 'medium',
    urgencyText: 'HACKATHON STREAM',
    offersCount: 2,
    description: 'Need Elgato Cam Link or equivalent 1080p60 USB capture card for YouTube livestreaming of hackathon pitches.'
  },
  {
    id: 'w-4',
    title: 'High-Power Spotlight Strobe Light for Fashion Walk',
    club: 'Vogue Fashion Team',
    requester: 'Rhea K. (Convenor)',
    neededDate: 'Next Monday',
    budget: '₹500/day',
    duration: '1 Day',
    urgency: 'low',
    urgencyText: 'NEXT WEEK',
    offersCount: 0,
    description: 'Looking for a warm-white strobe light + stand to highlight showstopper walk on the amphitheatre ramp.'
  }
];

// Active Bookings State
let activeBookings = [
  {
    id: 'PASS-8902',
    title: 'Ahuja Dual Collar Wireless Mics',
    category: 'Audio Systems',
    categoryCode: 'AUDIO // MIC-02',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80',
    ownerName: 'Tanmay K. (IT Dept)',
    eventDate: 'Today (Oct 27, 2026)',
    pickupSpot: 'Canteen Safe-Zone Locker #02',
    otp: '7419',
    rentalFee: 250,
    deposit: 300,
    peerDiscount: 50,
    totalPaid: 500,
    status: 'in_use',
    statusStep: 2,
    expectedReturn: 'Today, 7:00 PM',
    lateHours: 0,
    conditionState: 'clean'
  }
];

// App State
// Current User Profile Defaults & Storage Structure
const DEFAULT_USER = {
  isLoggedIn: true,
  name: 'Aarti Patil',
  prn: 'PRN-2024-IT-084',
  dept: 'Information Technology — Year 2',
  email: 'aartipatil@student.ac.in',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  karmaScore: 99,
  verifiedStatus: true
};

const state = {
  user: { ...DEFAULT_USER },
  equipment: [...INITIAL_EQUIPMENT],
  wantedRequests: [...INITIAL_WANTED_REQUESTS],
  selectedCategory: 'all',
  searchQuery: '',
  sortOrder: 'recommended',
  currentBookingTarget: null,
  activeBookingView: activeBookings[0] || null,
  featuredKitDays: 1,
  cardDaysMap: {},
  escrowSim: {
    lateMinutes: 15,
    hasDamage: false,
    damageNote: ''
  }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  loadUserProfile();
  initLucideIcons();
  renderMarketplace();
  renderWantedBoard();
  renderActiveTracker();
  updateEscrowCalculations();
  setupEventListeners();
});

// Re-initialize Lucide SVG icons safely
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ----------------------------------------------------
// Clean Obsidian Dark SaaS Toast Notification Engine
// ----------------------------------------------------
function showToast(message, type = 'info', title = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `p-4 rounded-2xl border border-[#E9D5FF] bg-white/95 backdrop-blur-xl shadow-[0_15px_35px_-5px_rgba(139,92,246,0.18)] flex items-start gap-3.5 transform translate-y-4 opacity-0 transition-all duration-200 pointer-events-auto max-w-sm w-full text-[#1E1B4B]`;

  const badgeColor = type === 'success' 
    ? 'bg-[#F3E8FF] text-[#7C3AED] border border-[#DDD6FE]' 
    : type === 'warning' 
    ? 'bg-amber-50 text-amber-700 border border-amber-200' 
    : 'bg-[#F5F3FF] text-[#5B21B6] border border-[#DDD6FE]';
  const label = type === 'success' ? 'SUCCESS' : type === 'warning' ? 'NOTICE' : 'UPDATE';

  toast.innerHTML = `
    <div class="mt-0.5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full ${badgeColor}">
      ${label}
    </div>
    <div class="flex-1 min-w-0">
      ${title ? `<h4 class="text-xs font-black tracking-tight mb-0.5 text-[#1E1B4B] font-heading">${title}</h4>` : ''}
      <p class="text-xs leading-relaxed text-[#64748B]">${message}</p>
    </div>
    <button class="text-slate-400 hover:text-[#1E1B4B] transition-colors p-1" onclick="this.parentElement.remove()">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;

  container.appendChild(toast);
  initLucideIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ----------------------------------------------------
// Featured Kit Day Slider Handler
// ----------------------------------------------------
function updateFeaturedKitDays(val) {
  state.featuredKitDays = parseInt(val) || 1;
  const days = state.featuredKitDays;
  const dailyRate = 450;
  const deposit = 500;
  const discount = 50;
  const total = (dailyRate * days) + deposit - discount;

  const daysLabel = document.getElementById('featured-days-label');
  const totalDisplay = document.getElementById('featured-total-display');
  const mathBreakdown = document.getElementById('featured-math-breakdown');

  if (daysLabel) daysLabel.textContent = `${days} Day${days > 1 ? 's' : ''}`;
  if (totalDisplay) totalDisplay.textContent = `₹${total}`;
  if (mathBreakdown) mathBreakdown.textContent = `₹${dailyRate} × ${days}d + ₹${deposit} dep - ₹${discount} peer disc`;
}

// ----------------------------------------------------
// Equipment Pass Day Estimator Handler
// ----------------------------------------------------
function handlePassDayChange(id, days) {
  state.cardDaysMap[id] = parseInt(days);
  const item = state.equipment.find(e => e.id === id);
  if (!item) return;

  const total = (item.dailyRate * days) + item.deposit - 50;
  const calcEl = document.getElementById(`calc-price-${id}`);
  const daysEl = document.getElementById(`calc-days-${id}`);

  if (calcEl) calcEl.textContent = `₹${total}`;
  if (daysEl) daysEl.textContent = `${days}d:`;
}

// ----------------------------------------------------
// Equipment Marketplace: Obsidian Dark Glass Cards (Orbix / ZeBeyond Inspired)
// ----------------------------------------------------
function renderMarketplace() {
  const grid = document.getElementById('equipment-grid');
  const countBadge = document.getElementById('marketplace-count');
  if (!grid) return;

  // Filter items
  let filtered = state.equipment.filter(item => {
    const matchesCat = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const q = state.searchQuery.toLowerCase().trim();
    const matchesQuery = !q ||
      item.title.toLowerCase().includes(q) ||
      item.specs.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.owner.name.toLowerCase().includes(q) ||
      item.owner.dept.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  // Sort
  if (state.sortOrder === 'price-low') {
    filtered.sort((a, b) => a.dailyRate - b.dailyRate);
  } else if (state.sortOrder === 'price-high') {
    filtered.sort((a, b) => b.dailyRate - a.dailyRate);
  } else if (state.sortOrder === 'rating') {
    filtered.sort((a, b) => b.owner.rating - a.owner.rating);
  }

  if (countBadge) {
    countBadge.innerHTML = `<span class="font-bold text-xs text-[#7C3AED] bg-[#F3E8FF] border border-[#DDD6FE] px-3.5 py-1.5 rounded-full shadow-sm">${filtered.length} Units Online</span>`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center glass-panel rounded-3xl p-8 border border-[#E9D5FF] shadow-sm bg-white">
        <div class="w-12 h-12 mx-auto mb-3 bg-[#F3E8FF] border border-[#DDD6FE] rounded-2xl flex items-center justify-center font-black text-xl text-[#7C3AED]">
          !
        </div>
        <h3 class="text-base font-extrabold font-heading text-[#1E1B4B] mb-1">No matching hardware found</h3>
        <p class="text-xs text-[#64748B] max-w-sm mx-auto mb-5">Broadcast an urgent request onto the campus wanted notice board.</p>
        <button onclick="openPostWantedModal()" class="btn-lilac px-6 py-2.5 text-xs font-black uppercase rounded-full shadow-md">
          + Post Request on Wanted Board
        </button>
      </div>
    `;
    initLucideIcons();
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isLocked = item.status === 'locked';
    const currentDays = state.cardDaysMap[item.id] || 1;
    const totalCalc = (item.dailyRate * currentDays) + item.deposit - 50;

    const categoryClassMap = {
      audio: 'badge-cat-audio',
      projection: 'badge-cat-projection',
      lighting: 'badge-cat-lighting',
      photography: 'badge-cat-photography',
      cables: 'badge-cat-cables'
    };
    const catBadgeClass = categoryClassMap[item.category] || 'badge-cat-audio';

    return `
      <!-- LAVENDER & LILAC EQUIPMENT CARD (AWSMD.COM INSPIRED) -->
      <div class="equipment-card w-full rounded-3xl overflow-hidden flex flex-col transition-all duration-300">
        
        <!-- Top Image Container with #FAF5FF background -->
        <div class="card-image-container relative w-full overflow-hidden bg-[#FAF5FF] border-b border-[#F3E8FF] group flex items-center justify-center" style="width: 100%; height: 200px;">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style="width: 100%; height: 200px; object-fit: cover;"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'"
          />

          <!-- Category Pill -->
          <div class="absolute top-3 left-3">
            <span class="${catBadgeClass} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
              ${item.categoryName}
            </span>
          </div>

          <!-- Status Indicator: ● Available Today -->
          <div class="absolute top-3 right-3">
            ${isLocked 
              ? `<span class="badge-fest-locked shadow-sm">Booked for Fest</span>`
              : `<span class="status-indicator-lilac shadow-sm"><span class="pulse-dot-lilac"></span> Available Today</span>`
            }
          </div>

          <!-- Deposit Badge -->
          <div class="absolute bottom-3 left-3">
            <span class="badge-deposit shadow-sm text-[10px]">
              Refundable Deposit: ₹${item.deposit}
            </span>
          </div>
        </div>

        <!-- Content Details -->
        <div class="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            <!-- Title & Verification -->
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h3 class="text-base font-extrabold font-heading text-[#1E1B4B] leading-snug line-clamp-1">
                ${item.title}
              </h3>
              <span class="badge-verified shrink-0 text-[10px]">
                <i data-lucide="check" class="w-2.5 h-2.5 text-[#7C3AED]"></i> PRN
              </span>
            </div>

            <!-- Student Department / Campus Zone -->
            <div class="flex items-center gap-1.5 text-xs text-[#64748B] mb-2.5 font-medium">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#8B5CF6] shrink-0"></i>
              <span class="truncate">${item.owner.dept} • ${item.safeZone}</span>
            </div>

            <p class="text-xs text-[#64748B] mb-4 line-clamp-2 leading-relaxed">
              ${item.specs}
            </p>

            <!-- Tech Specs Summary Box -->
            <div class="p-3 rounded-2xl bg-[#FAF5FF] border border-[#F3E8FF] mb-4 text-xs space-y-1 font-mono">
              ${Object.entries(item.techSheet).slice(0, 2).map(([key, val]) => `
                <div class="flex justify-between text-[#64748B] text-[11px]">
                  <span class="uppercase text-[#8B5CF6] font-semibold tracking-wider text-[10px]">${key}:</span>
                  <span class="font-bold text-[#1E1B4B] truncate max-w-[170px]">${val}</span>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Estimator -->
            <div class="p-3 rounded-2xl bg-[#FAF5FF] border border-[#F3E8FF] mb-4">
              <div class="flex justify-between items-center text-xs mb-1.5">
                <span class="text-[#64748B] font-bold text-[10px] uppercase tracking-wider font-mono">Est. Total (${currentDays}d):</span>
                <span class="font-black text-[#7C3AED] text-sm font-mono" id="calc-price-${item.id}">₹${totalCalc}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value="${currentDays}" 
                class="w-full cursor-pointer h-1.5"
                oninput="handlePassDayChange('${item.id}', this.value)"
              >
            </div>
          </div>

          <!-- Clean Price Layout: Bold daily fee in #1E1B4B with a clean "Refundable Deposit: ₹500" tag -->
          <div class="pt-4 border-t border-[#F3E8FF] flex items-center justify-between gap-3">
            <div>
              <div class="flex items-baseline gap-1">
                <span class="text-2xl font-black font-heading text-[#1E1B4B]">₹${item.dailyRate}</span>
                <span class="text-xs text-[#64748B] font-bold">/ Day</span>
              </div>
              <span class="text-[10px] text-[#7C3AED] font-semibold">Free 30m campus grace</span>
            </div>

            ${isLocked 
              ? `<button onclick="handleRentClick('${item.id}')" class="btn-ghost opacity-75 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">Waitlist</button>`
              : `<button onclick="handleRentClick('${item.id}')" class="btn-lilac px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"><span>Rent Now →</span></button>`
            }
          </div>

      </div>
    `;
  }).join('');

  initLucideIcons();
}

// ----------------------------------------------------
// Rent Button Click & Checkout Ticket Modal
// ----------------------------------------------------
function handleRentClick(id) {
  const item = state.equipment.find(e => e.id === id);
  if (!item) return;

  if (item.status === 'locked') {
    showToast(`Pass #${item.barcodeId} is currently reserved for festival dates. You've been placed on the peer priority waitlist.`, 'warning', 'Waitlist Registered');
    return;
  }

  state.currentBookingTarget = item;
  openBookingModal(item);
}

function openBookingModal(item) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  // Set equipment preview
  const titleEl = document.getElementById('modal-item-title');
  if (titleEl) titleEl.textContent = item.title;

  const categoryClassMap = {
    audio: 'badge-cat-audio',
    projection: 'badge-cat-projection',
    lighting: 'badge-cat-lighting',
    photography: 'badge-cat-photography',
    cables: 'badge-cat-cables'
  };

  const catEl = document.getElementById('modal-item-category');
  if (catEl) {
    catEl.className = `${categoryClassMap[item.category] || 'badge-cat-audio'} text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider`;
    catEl.textContent = item.categoryName;
  }

  const specsEl = document.getElementById('modal-item-specs');
  if (specsEl) specsEl.textContent = item.specs;

  const imgEl = document.getElementById('modal-item-img');
  if (imgEl) imgEl.src = item.image;

  const ownerEl = document.getElementById('modal-item-owner');
  if (ownerEl) ownerEl.textContent = `Owner: ${item.owner.name} (${item.owner.dept}) • ${item.owner.prn}`;

  const rateEl = document.getElementById('modal-item-rate');
  if (rateEl) rateEl.textContent = `₹${item.dailyRate}/day`;

  const depEl = document.getElementById('modal-item-deposit');
  if (depEl) depEl.textContent = `₹${item.deposit} refundable deposit`;

  const barcodeEl = document.getElementById('modal-barcode-id');
  if (barcodeEl) barcodeEl.textContent = item.barcodeId;

  // Set default dates
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const startDateInput = document.getElementById('booking-start-date');
  const endDateInput = document.getElementById('booking-end-date');
  if (startDateInput) startDateInput.value = today;
  if (endDateInput) endDateInput.value = tomorrow;

  // Reset Safe Zone selection
  const safeZoneSelect = document.getElementById('booking-safe-zone');
  if (safeZoneSelect) {
    safeZoneSelect.value = item.safeZone.includes('Canteen') ? 'canteen' : (item.safeZone.includes('IT') ? 'it_lab' : 'council_desk');
  }

  updateBookingCalculations();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function updateBookingCalculations() {
  if (!state.currentBookingTarget) return;

  const item = state.currentBookingTarget;
  const startDateVal = document.getElementById('booking-start-date').value;
  const endDateVal = document.getElementById('booking-end-date').value;

  const start = new Date(startDateVal);
  const end = new Date(endDateVal);
  let days = 1;
  if (start && end && end > start) {
    const diffTime = Math.abs(end - start);
    days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Conflict Detection Logic
  const conflictBanner = document.getElementById('conflict-status-banner');
  const confirmBtn = document.getElementById('confirm-booking-btn');
  const hasClash = item.clashDates && item.clashDates.some(clashDate => {
    return clashDate >= startDateVal && clashDate <= endDateVal;
  });

  if (hasClash) {
    conflictBanner.className = 'p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs mb-4';
    conflictBanner.innerHTML = `
      <div class="flex items-center gap-2 mb-1">
        <span class="badge-fest-locked">Festival Clash</span>
        <strong class="font-bold text-white">Date slot overlap on ${item.clashDates.join(', ')}</strong>
      </div>
      <p class="text-xs text-rose-300/80">Another registered campus club holds this date slot. Please select alternative hours or message owner.</p>
    `;
    confirmBtn.disabled = true;
    confirmBtn.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    conflictBanner.className = 'p-3.5 rounded-2xl bg-[#F3E8FF] border border-[#DDD6FE] text-[#6D28D9] text-xs mb-4';
    conflictBanner.innerHTML = `
      <div class="flex items-center gap-2 mb-1">
        <span class="status-indicator-lilac"><span class="pulse-dot-lilac"></span> Conflict Check: Clear</span>
        <strong class="font-bold text-[#1E1B4B]">Slot Free for Reservation</strong>
      </div>
      <p class="text-xs text-[#64748B]">Hardware resting at Safe-Zone locker ready for same-day handover with zero schedule clashes.</p>
    `;
    confirmBtn.disabled = false;
    confirmBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  }

  // Price calculations
  const rentalFee = item.dailyRate * days;
  const deposit = item.deposit;
  const peerDiscount = 50;
  const totalPayable = Math.max(0, rentalFee + deposit - peerDiscount);

  document.getElementById('breakdown-rent-days').textContent = `₹${item.dailyRate} × ${days}d`;
  document.getElementById('breakdown-rent-total').textContent = `₹${rentalFee}`;
  document.getElementById('breakdown-deposit').textContent = `+₹${deposit}`;
  document.getElementById('breakdown-discount').textContent = `-₹${peerDiscount}`;
  document.getElementById('breakdown-final-total').textContent = `₹${totalPayable}`;
  document.getElementById('breakdown-refund-note').textContent = `₹${deposit} refundable security deposit returned via UPI upon return inspection.`;

  initLucideIcons();
}

function confirmBooking() {
  if (!state.currentBookingTarget) return;
  const item = state.currentBookingTarget;

  // Generate 4-digit mock OTP
  const mockOtp = Math.floor(1000 + Math.random() * 9000).toString();
  const safeZoneSelect = document.getElementById('booking-safe-zone');
  const safeZoneName = safeZoneSelect.options[safeZoneSelect.selectedIndex].text;

  const startDateVal = document.getElementById('booking-start-date').value;

  const newBooking = {
    id: `PASS-${Math.floor(1000 + Math.random() * 9000)}`,
    title: item.title,
    category: item.categoryName,
    categoryCode: item.categoryCode,
    image: item.image,
    ownerName: `${item.owner.name} (${item.owner.dept})`,
    eventDate: startDateVal || 'Today',
    pickupSpot: safeZoneName,
    otp: mockOtp,
    rentalFee: item.dailyRate,
    deposit: item.deposit,
    peerDiscount: 50,
    totalPaid: item.dailyRate + item.deposit - 50,
    status: 'reserved',
    statusStep: 1,
    expectedReturn: 'Tomorrow, 6:00 PM',
    lateHours: 0,
    conditionState: 'clean'
  };

  activeBookings.unshift(newBooking);
  state.activeBookingView = newBooking;

  closeBookingModal();
  openOtpSuccessModal(newBooking);

  renderActiveTracker();
  updateEscrowCalculations();

  showToast(`Booking locked! Show OTP ${mockOtp} at ${safeZoneName} to collect hardware.`, 'success', 'Gear Reserved Successfully');
}

function openOtpSuccessModal(booking) {
  const modal = document.getElementById('otp-success-modal');
  if (!modal) return;

  document.getElementById('otp-code-display').textContent = booking.otp;
  document.getElementById('otp-item-name').textContent = booking.title;
  document.getElementById('otp-safe-spot').textContent = booking.pickupSpot;
  document.getElementById('otp-booking-id').textContent = booking.id;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeOtpSuccessModal() {
  const modal = document.getElementById('otp-success-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ----------------------------------------------------
// Campus Wanted Board (Obsidian Dark Glass Cards)
// ----------------------------------------------------
function renderWantedBoard() {
  const container = document.getElementById('wanted-board-cards');
  if (!container) return;

  container.innerHTML = state.wantedRequests.map((req, idx) => {
    return `
      <!-- Lavender & Lilac Wanted Board Card -->
      <div 
        class="glass-panel p-6 rounded-3xl relative flex flex-col justify-between bg-white border border-[#E9D5FF] shadow-[0_10px_30px_-5px_rgba(139,92,246,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.18)] hover:border-[#C084FC] transition-all duration-300"
      >
        <div>
          <!-- Top Badge & Needed Date -->
          <div class="flex items-center justify-between gap-2 mb-3 text-xs">
            <span class="px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7C3AED] border border-[#DDD6FE] font-black text-[10px] uppercase tracking-wider font-mono">
              ${req.urgencyText}
            </span>
            <span class="text-[#64748B] font-semibold flex items-center gap-1.5 text-xs font-mono">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-[#8B5CF6]"></i>
              ${req.neededDate}
            </span>
          </div>

          <!-- Request Title -->
          <h4 class="text-base font-extrabold font-heading text-[#1E1B4B] mb-1.5 leading-snug">
            ${req.title}
          </h4>
          <p class="text-xs text-[#64748B] mb-4 leading-relaxed">
            "${req.description}"
          </p>

          <!-- Requester Club Info -->
          <div class="flex items-center justify-between text-xs py-2.5 border-y border-[#F3E8FF] mb-4 bg-[#FAF5FF] px-3.5 rounded-xl">
            <div class="flex items-center gap-2 font-bold text-[#1E1B4B]">
              <i data-lucide="users" class="w-3.5 h-3.5 text-[#8B5CF6]"></i>
              <span>${req.club}</span>
            </div>
            <div class="text-[11px] text-[#64748B] font-medium font-mono">
              by ${req.requester}
            </div>
          </div>
        </div>

        <!-- Budget & Offer Button -->
        <div class="flex items-center justify-between gap-3 pt-1">
          <div>
            <span class="text-[10px] uppercase tracking-wider text-[#64748B] block font-bold font-mono">Max Daily Budget:</span>
            <span class="text-2xl font-black font-heading text-[#1E1B4B]">${req.budget}</span>
          </div>

          <button 
            onclick="openOfferModal('${req.id}')"
            class="btn-lilac px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
          >
            <i data-lucide="handshake" class="w-3.5 h-3.5"></i>
            <span>Offer Hardware →</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

function openOfferModal(requestId) {
  const req = state.wantedRequests.find(r => r.id === requestId);
  if (!req) return;

  const modal = document.getElementById('offer-modal');
  if (!modal) return;

  document.getElementById('offer-req-title').textContent = req.title;
  document.getElementById('offer-req-club').textContent = `${req.club} • Budget: ${req.budget}`;
  document.getElementById('offer-target-id').value = req.id;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeOfferModal() {
  const modal = document.getElementById('offer-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitOffer(e) {
  if (e) e.preventDefault();

  const reqId = document.getElementById('offer-target-id').value;
  const gearName = document.getElementById('offer-gear-name').value;
  const rentRate = document.getElementById('offer-rent-rate').value;

  const req = state.wantedRequests.find(r => r.id === reqId);
  if (req) {
    req.offersCount = (req.offersCount || 0) + 1;
  }

  closeOfferModal();
  renderWantedBoard();
  showToast(`Offer for "${gearName}" at ₹${rentRate}/day sent to ${req ? req.club : 'the club lead'}!`, 'success', 'Offer Dispatched');
}

function openPostWantedModal() {
  const modal = document.getElementById('post-wanted-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closePostWantedModal() {
  const modal = document.getElementById('post-wanted-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitPostWanted(e) {
  if (e) e.preventDefault();

  const title = document.getElementById('wanted-form-title').value;
  const club = document.getElementById('wanted-form-club').value;
  const date = document.getElementById('wanted-form-date').value;
  const budget = document.getElementById('wanted-form-budget').value;
  const desc = document.getElementById('wanted-form-desc').value;

  const newRequest = {
    id: `w-${Date.now()}`,
    title: title,
    club: club || 'Independent Student Fest Team',
    requester: 'Rahul S. (IT Dept)',
    neededDate: date || 'Upcoming Fest',
    budget: `₹${budget}/day`,
    duration: '1-2 Days',
    urgency: 'high',
    urgencyText: 'RECENT NOTICE',
    offersCount: 0,
    description: desc || 'Looking for working condition peer gear for event.'
  };

  state.wantedRequests.unshift(newRequest);
  closePostWantedModal();
  renderWantedBoard();

  const wantedSection = document.getElementById('wanted-board-section');
  if (wantedSection) {
    wantedSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast('Hardware demand posted to Campus Wanted Board.', 'success', 'Notice Published');
}

// ----------------------------------------------------
// Active Handover Tracker & Escrow Console (Dark Glass SaaS)
// ----------------------------------------------------
function renderActiveTracker() {
  const container = document.getElementById('tracker-card-container');
  if (!container) return;

  const b = state.activeBookingView;
  if (!b) {
    container.innerHTML = `
      <div class="p-8 text-center text-xs text-slate-400">
        No active gear handovers. Click "Rent Now" on any hardware card to simulate active lifecycle.
      </div>
    `;
    return;
  }

  const step1Active = b.statusStep >= 1;
  const step2Active = b.statusStep >= 2;
  const step3Active = b.statusStep >= 3;

  container.innerHTML = `
    <!-- Top Equipment Summary Strip -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF]">
      <div class="flex items-center gap-4">
        <div class="relative">
          <img src="${b.image}" alt="${b.title}" class="w-16 h-16 rounded-xl object-cover border border-[#E9D5FF] shadow-sm">
        </div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] border border-[#DDD6FE] font-bold uppercase tracking-wider font-mono">
              ${b.id}
            </span>
            <span class="text-xs text-[#64748B] font-semibold font-mono">${b.categoryCode || b.category}</span>
          </div>
          <h3 class="text-base font-extrabold font-heading text-[#1E1B4B]">${b.title}</h3>
          <p class="text-xs text-[#64748B] mt-0.5">Owner: <span class="text-[#1E1B4B] font-bold">${b.ownerName}</span> • Pickup: <span class="text-[#7C3AED] font-bold">${b.pickupSpot}</span></p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="bg-[#F3E8FF] border border-[#DDD6FE] p-2.5 px-5 rounded-2xl text-center shadow-sm">
          <span class="text-[9px] text-[#7C3AED] uppercase tracking-widest block font-bold font-mono">Handover OTP</span>
          <span class="text-2xl font-black text-[#1E1B4B] tracking-widest font-mono">${b.otp}</span>
        </div>

        <!-- Segmented Step Controller -->
        <div class="flex flex-col gap-1 text-right">
          <span class="text-[9px] font-bold text-[#64748B] uppercase tracking-widest font-mono">Simulate Stage:</span>
          <div class="inline-flex p-1 rounded-xl bg-white border border-[#E9D5FF] shadow-sm">
            <button 
              onclick="setBookingStep(1)" 
              class="px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-all ${b.statusStep === 1 ? 'bg-[#1E1B4B] text-white shadow-sm' : 'text-[#64748B] hover:text-[#1E1B4B]'}"
            >
              1. Verified
            </button>
            <button 
              onclick="setBookingStep(2)" 
              class="px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-all ${b.statusStep === 2 ? 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-extrabold shadow-sm' : 'text-[#64748B] hover:text-[#1E1B4B]'}"
            >
              2. Handover
            </button>
            <button 
              onclick="setBookingStep(3)" 
              class="px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-all ${b.statusStep === 3 ? 'bg-[#8B5CF6] text-white font-bold shadow-sm' : 'text-[#64748B] hover:text-[#1E1B4B]'}"
            >
              3. Settled
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stepper Stage Cards with Studio Lilac Nodes -->
    <div class="py-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <!-- Step 1: Verified -->
        <div class="p-4 rounded-2xl border transition-all ${step1Active ? 'bg-[#FAF5FF] border-[#E9D5FF] shadow-sm' : 'bg-slate-50 border-slate-200 opacity-50'}">
          <div class="flex items-center gap-2.5 mb-1.5">
            <span class="w-6 h-6 rounded-full bg-[#1E1B4B] text-white font-black text-xs flex items-center justify-center font-mono">
              ${step1Active ? '✓' : '1'}
            </span>
            <h4 class="text-xs font-extrabold text-[#1E1B4B] uppercase tracking-wider">1. Verified • OTP Ready</h4>
          </div>
          <p class="text-xs text-[#64748B] leading-relaxed">
            OTP #${b.otp} active. Unit verified and stored in Safe-Zone locker box for student handover.
          </p>
        </div>

        <!-- Step 2: Handover / In Use (Electric Lilac) -->
        <div class="p-4 rounded-2xl border transition-all ${step2Active ? 'bg-[#F3E8FF] border-[#DDD6FE] shadow-[0_4px_15px_rgba(139,92,246,0.15)]' : 'bg-slate-50 border-slate-200 opacity-50'}">
          <div class="flex items-center gap-2.5 mb-1.5">
            <span class="w-6 h-6 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-black text-xs flex items-center justify-center font-mono">
              ${step2Active ? '✓' : '2'}
            </span>
            <h4 class="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider">2. Handover • In Use</h4>
          </div>
          <p class="text-xs text-[#475569] leading-relaxed">
            OTP verified by Safe-Zone volunteer. ₹${b.deposit} security deposit locked in peer escrow.
          </p>
        </div>

        <!-- Step 3: Settled -->
        <div class="p-4 rounded-2xl border transition-all ${step3Active ? 'bg-[#EDE9FE] border-[#C084FC] shadow-sm' : 'bg-slate-50 border-slate-200 opacity-50'}">
          <div class="flex items-center gap-2.5 mb-1.5">
            <span class="w-6 h-6 rounded-full bg-[#8B5CF6] text-white font-black text-xs flex items-center justify-center font-mono">
              ${step3Active ? '✓' : '3'}
            </span>
            <h4 class="text-xs font-extrabold text-[#6D28D9] uppercase tracking-wider">3. Deposit Settled</h4>
          </div>
          <p class="text-xs text-[#64748B] leading-relaxed">
            Hardware passed return inspection. ₹${b.deposit} deposit instantaneously settled to UPI.
          </p>
        </div>

      </div>
    </div>
  `;

  initLucideIcons();
}

function setBookingStep(step) {
  if (!state.activeBookingView) return;
  state.activeBookingView.statusStep = step;
  if (step === 1) state.activeBookingView.status = 'reserved';
  else if (step === 2) state.activeBookingView.status = 'in_use';
  else if (step === 3) state.activeBookingView.status = 'returned';

  renderActiveTracker();
  updateEscrowCalculations();

  const labels = {
    1: 'Stage: 1. Reserved with OTP',
    2: 'Stage: 2. Physical Handover Verified [In Use]',
    3: 'Stage: 3. Inspection Passed [Escrow Released]'
  };
  showToast(labels[step], step === 3 ? 'success' : 'info', 'Status Updated');
}

// ----------------------------------------------------
// Escrow Simulator & Late Return Calculator
// ----------------------------------------------------
function updateEscrowCalculations() {
  const b = state.activeBookingView;
  const deposit = b ? b.deposit : 500;

  const lateMinutes = parseInt(document.getElementById('sim-late-minutes')?.value || state.escrowSim.lateMinutes);
  const hasDamage = document.getElementById('sim-damage-toggle')?.checked || false;

  state.escrowSim.lateMinutes = lateMinutes;
  state.escrowSim.hasDamage = hasDamage;

  const lateLabel = document.getElementById('sim-late-label');
  if (lateLabel) {
    if (lateMinutes === 0) {
      lateLabel.textContent = '0 min (On Time)';
      lateLabel.className = 'text-xs font-bold text-[#7C3AED] font-mono';
    } else if (lateMinutes <= 30) {
      lateLabel.textContent = `${lateMinutes}m (30-min Free Grace Applied)`;
      lateLabel.className = 'text-xs font-bold text-[#7C3AED] font-mono';
    } else {
      const extraHours = Math.ceil((lateMinutes - 30) / 60);
      lateLabel.textContent = `${lateMinutes}m late (+${extraHours}h late fee)`;
      lateLabel.className = 'text-xs font-bold text-rose-500 font-mono';
    }
  }

  let lateDeduction = 0;
  if (lateMinutes > 30) {
    const billableHours = Math.ceil((lateMinutes - 30) / 60);
    lateDeduction = billableHours * 50;
  }

  const damageDeduction = hasDamage ? 150 : 0;
  const netRefund = Math.max(0, deposit - lateDeduction - damageDeduction);

  const elEscrowLocked = document.getElementById('escrow-locked-amount');
  const elGraceNote = document.getElementById('escrow-grace-status');
  const elLateDeduction = document.getElementById('escrow-late-deduction');
  const elDamageDeduction = document.getElementById('escrow-damage-deduction');
  const elNetRefund = document.getElementById('escrow-net-refund');
  const elRefundStatusBadge = document.getElementById('escrow-status-badge');

  if (elEscrowLocked) elEscrowLocked.textContent = `₹${deposit}`;
  if (elLateDeduction) elLateDeduction.textContent = lateDeduction > 0 ? `-₹${lateDeduction}` : '₹0';
  if (elDamageDeduction) elDamageDeduction.textContent = damageDeduction > 0 ? `-₹${damageDeduction}` : '₹0';
  if (elNetRefund) elNetRefund.textContent = `₹${netRefund}`;

  if (elGraceNote) {
    if (lateMinutes <= 30) {
      elGraceNote.innerHTML = '<span class="text-[#7C3AED] text-xs font-semibold">✓ 30-min campus peer grace active — Zero deduction applied</span>';
    } else {
      elGraceNote.innerHTML = `<span class="text-rose-500 text-xs font-semibold">⚠ Exceeded 30m grace by ${lateMinutes - 30} mins — ₹50/hr deducted for peer delay</span>`;
    }
  }

  if (elRefundStatusBadge) {
    if (netRefund === deposit) {
      elRefundStatusBadge.textContent = '100% Escrow Refund Guarantee';
      elRefundStatusBadge.className = 'text-xs px-2.5 py-0.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] font-semibold border border-[#DDD6FE]';
    } else {
      elRefundStatusBadge.textContent = `Partial Escrow Refund: ₹${netRefund}`;
      elRefundStatusBadge.className = 'text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200';
    }
  }
}

function simulateInstantRefund() {
  const b = state.activeBookingView;
  const deposit = b ? b.deposit : 500;
  const lateMinutes = state.escrowSim.lateMinutes;
  let lateDeduction = 0;
  if (lateMinutes > 30) {
    lateDeduction = Math.ceil((lateMinutes - 30) / 60) * 50;
  }
  const damageDeduction = state.escrowSim.hasDamage ? 150 : 0;
  const netRefund = Math.max(0, deposit - lateDeduction - damageDeduction);

  if (b) {
    b.statusStep = 3;
    b.status = 'returned';
    renderActiveTracker();
  }

  showToast(`₹${netRefund} returned to UPI ID (rahul.comps@campusbank). Escrow cleared.`, 'success', 'UPI Refund Executed');
}

// ----------------------------------------------------
// List Equipment Modal & Peer Upload
// ----------------------------------------------------
function openListEquipmentModal() {
  const modal = document.getElementById('list-equipment-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeListEquipmentModal() {
  const modal = document.getElementById('list-equipment-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitListEquipment(e) {
  if (e) e.preventDefault();

  const title = document.getElementById('list-form-title').value;
  const category = document.getElementById('list-form-category').value;
  const specs = document.getElementById('list-form-specs').value;
  const dailyRate = parseInt(document.getElementById('list-form-rate').value) || 300;
  const deposit = parseInt(document.getElementById('list-form-deposit').value) || 400;
  const safeZone = document.getElementById('list-form-safezone').value;
  const image = document.getElementById('list-form-image').value || 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80';

  const categoryNames = {
    audio: 'Audio Systems',
    projection: 'Projectors',
    lighting: 'Stage Lights',
    photography: 'Photography',
    cables: 'Cables & Adapters'
  };

  const categoryCodes = {
    audio: 'AUDIO // SYS-05',
    projection: 'OPTIC // PROJ-07',
    lighting: 'STAGE // FX-04',
    photography: 'CAMERA // RIG-12',
    cables: 'POWER // CORE-19'
  };

  const newItem = {
    id: `eq-${Date.now()}`,
    title: title,
    category: category,
    categoryName: categoryNames[category] || 'Campus Hardware',
    categoryCode: categoryCodes[category] || 'STUDIO // GEAR-01',
    image: image,
    specs: specs,
    techSheet: {
      category: categoryNames[category],
      dailyRate: `₹${dailyRate}`,
      deposit: `₹${deposit}`,
      location: safeZone
    },
    owner: {
      name: `${(state.user && state.user.name) || 'Aarti Patil'} (You)`,
      dept: (state.user && state.user.dept) || 'Information Technology',
      prn: (state.user && state.user.prn) || 'PRN-2024-IT-084',
      rating: 5.0,
      reviewsCount: 1,
      avatar: (state.user && state.user.avatar) || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    dailyRate: dailyRate,
    deposit: deposit,
    status: 'available',
    statusText: 'AVAILABLE TODAY',
    safeZone: safeZone,
    clashDates: [],
    barcodeId: `PASS-NEW-${Math.floor(1000 + Math.random() * 9000)}`,
    description: specs
  };

  state.equipment.unshift(newItem);
  closeListEquipmentModal();
  renderMarketplace();

  const marketplaceSection = document.getElementById('marketplace-section');
  if (marketplaceSection) {
    marketplaceSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`"${newItem.title}" registered and live in inventory.`, 'success', 'Equipment Listed');
}

// ----------------------------------------------------
// Campus Safe Zones Modal
// ----------------------------------------------------
function openSafeZonesModal() {
  const modal = document.getElementById('safe-zones-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeSafeZonesModal() {
  const modal = document.getElementById('safe-zones-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ----------------------------------------------------
// Event Listeners Setup
// ----------------------------------------------------
function setupEventListeners() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedCategory = pill.dataset.category;
      renderMarketplace();
    });
  });

  const searchInput = document.getElementById('marketplace-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMarketplace();
    });
  }

  const navSearch = document.getElementById('nav-search');
  if (navSearch) {
    navSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchInput) searchInput.value = e.target.value;
      renderMarketplace();
    });
  }

  const sortSelect = document.getElementById('marketplace-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortOrder = e.target.value;
      renderMarketplace();
    });
  }

  const heroQuickSearch = document.getElementById('hero-quick-search');
  if (heroQuickSearch) {
    heroQuickSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchInput) searchInput.value = e.target.value;
      renderMarketplace();
    });
  }

  const lateSlider = document.getElementById('sim-late-minutes');
  if (lateSlider) {
    lateSlider.addEventListener('input', updateEscrowCalculations);
  }

  const damageToggle = document.getElementById('sim-damage-toggle');
  if (damageToggle) {
    damageToggle.addEventListener('change', updateEscrowCalculations);
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.add('hidden');
      e.target.classList.remove('flex');
    }
  });

  const startDateInput = document.getElementById('booking-start-date');
  const endDateInput = document.getElementById('booking-end-date');
  if (startDateInput) startDateInput.addEventListener('change', updateBookingCalculations);
  if (endDateInput) endDateInput.addEventListener('change', updateBookingCalculations);
}

// =========================================================================
// CampusEquip User Profile & LocalStorage Engine
// =========================================================================

function loadUserProfile() {
  try {
    const saved = localStorage.getItem('campusEquipUser');
    if (saved) {
      state.user = { ...DEFAULT_USER, ...JSON.parse(saved) };
    } else {
      state.user = { ...DEFAULT_USER };
      localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
    }
  } catch (e) {
    console.error('Error loading user profile from localStorage:', e);
    state.user = { ...DEFAULT_USER };
  }
  updateNavbarProfileUI();
}

function updateNavbarProfileUI() {
  const u = state.user;
  const profileBtn = document.getElementById('nav-profile-btn');
  const loginBtn = document.getElementById('nav-login-btn');
  const avatarEl = document.getElementById('nav-user-avatar');
  const nameEl = document.getElementById('nav-user-name');
  const prnEl = document.getElementById('nav-user-prn');
  const drawerAvatar = document.getElementById('drawer-user-avatar');
  const drawerName = document.getElementById('drawer-user-name');
  const drawerPrn = document.getElementById('drawer-user-prn');

  if (!u || !u.isLoggedIn) {
    if (profileBtn) profileBtn.classList.add('hidden');
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (drawerName) drawerName.textContent = 'Guest Student';
    if (drawerPrn) drawerPrn.textContent = 'Not Logged In';
    return;
  }

  if (profileBtn) profileBtn.classList.remove('hidden');
  if (loginBtn) loginBtn.classList.add('hidden');

  if (avatarEl) avatarEl.src = u.avatar || DEFAULT_USER.avatar;
  if (nameEl) nameEl.textContent = u.name;
  if (prnEl) prnEl.textContent = u.prn;

  if (drawerAvatar) drawerAvatar.src = u.avatar || DEFAULT_USER.avatar;
  if (drawerName) drawerName.textContent = u.name;
  if (drawerPrn) drawerPrn.textContent = u.prn;
}

function openProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (!modal) return;

  const u = state.user || DEFAULT_USER;
  const nameInput = document.getElementById('profile-name');
  const prnInput = document.getElementById('profile-prn');
  const deptInput = document.getElementById('profile-dept');
  const emailInput = document.getElementById('profile-email');
  const phoneInput = document.getElementById('profile-phone');
  const avatarInput = document.getElementById('profile-avatar-url');
  const previewImg = document.getElementById('profile-avatar-preview');

  if (nameInput) nameInput.value = u.name || '';
  if (prnInput) prnInput.value = u.prn || '';
  if (deptInput) deptInput.value = u.dept || '';
  if (emailInput) emailInput.value = u.email || '';
  if (phoneInput) phoneInput.value = u.phone || '';
  if (avatarInput) avatarInput.value = u.avatar || '';
  if (previewImg) previewImg.src = u.avatar || DEFAULT_USER.avatar;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function selectPresetAvatar(url) {
  const avatarInput = document.getElementById('profile-avatar-url');
  const previewImg = document.getElementById('profile-avatar-preview');
  if (avatarInput) avatarInput.value = url;
  if (previewImg) previewImg.src = url;
}

function saveUserProfile(e) {
  if (e) e.preventDefault();

  const nameVal = document.getElementById('profile-name')?.value.trim() || DEFAULT_USER.name;
  const prnVal = document.getElementById('profile-prn')?.value.trim() || DEFAULT_USER.prn;
  const deptVal = document.getElementById('profile-dept')?.value.trim() || DEFAULT_USER.dept;
  const emailVal = document.getElementById('profile-email')?.value.trim() || DEFAULT_USER.email;
  const phoneVal = document.getElementById('profile-phone')?.value.trim() || DEFAULT_USER.phone;
  const avatarVal = document.getElementById('profile-avatar-url')?.value.trim() || DEFAULT_USER.avatar;

  state.user = {
    ...state.user,
    name: nameVal,
    prn: prnVal,
    dept: deptVal,
    email: emailVal,
    phone: phoneVal,
    avatar: avatarVal,
    isLoggedIn: true
  };

  try {
    localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }

  updateNavbarProfileUI();
  closeProfileModal();
  showToast('Profile updated successfully! ✓', 'success', 'Identity Saved');
}

function resetUserProfile() {
  state.user = { ...DEFAULT_USER };
  try {
    localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
  } catch (err) {
    console.error('Failed to reset localStorage:', err);
  }

  const nameInput = document.getElementById('profile-name');
  const prnInput = document.getElementById('profile-prn');
  const deptInput = document.getElementById('profile-dept');
  const emailInput = document.getElementById('profile-email');
  const phoneInput = document.getElementById('profile-phone');
  const avatarInput = document.getElementById('profile-avatar-url');
  const previewImg = document.getElementById('profile-avatar-preview');

  if (nameInput) nameInput.value = DEFAULT_USER.name;
  if (prnInput) prnInput.value = DEFAULT_USER.prn;
  if (deptInput) deptInput.value = DEFAULT_USER.dept;
  if (emailInput) emailInput.value = DEFAULT_USER.email;
  if (phoneInput) phoneInput.value = DEFAULT_USER.phone;
  if (avatarInput) avatarInput.value = DEFAULT_USER.avatar;
  if (previewImg) previewImg.src = DEFAULT_USER.avatar;

  updateNavbarProfileUI();
  showToast('Profile restored to default student account (Aarti Patil).', 'info', 'Profile Reset');
}

function logoutUser() {
  state.user.isLoggedIn = false;
  try {
    localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
  } catch (err) {
    console.error('Failed to update localStorage:', err);
  }

  updateNavbarProfileUI();
  closeProfileModal();
  showToast('Logged out of campus session. Switched to guest mode.', 'warning', 'Account Logged Out');
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function handleAuthLogin(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('auth-name')?.value.trim() || 'Aarti Patil';
  const prn = document.getElementById('auth-prn')?.value.trim() || 'PRN-2024-IT-084';
  const email = document.getElementById('auth-email')?.value.trim() || 'aartipatil@student.ac.in';

  state.user = {
    ...DEFAULT_USER,
    name: name,
    prn: prn,
    email: email,
    isLoggedIn: true
  };

  try {
    localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
  } catch (err) {
    console.error('Failed to save user in auth:', err);
  }

  updateNavbarProfileUI();
  closeAuthModal();
  showToast(`Welcome back, ${state.user.name}! Campus credentials verified.`, 'success', 'Session Authenticated');
}

function quickLoginDefault() {
  state.user = { ...DEFAULT_USER, isLoggedIn: true };
  try {
    localStorage.setItem('campusEquipUser', JSON.stringify(state.user));
  } catch (err) {
    console.error('Failed to save user:', err);
  }
  updateNavbarProfileUI();
  closeAuthModal();
  showToast('Logged in as Aarti Patil (PRN-2024-IT-084).', 'success', 'Quick Auth Success');
}
