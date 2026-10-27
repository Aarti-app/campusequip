# 🎓 CampusEquip — Peer-to-Peer Campus Equipment Rental Platform

**CampusEquip** is a high-conversion, collegiate hardware rental platform designed specifically for university students, event coordinators, seminar heads, and student societies. It enables seamless, trustworthy equipment exchange directly between peers—eliminating exorbitant external vendor markups.

---

## ⚡ Core Features

### 1. 🛡️ PRN-Verified Peer Ecosystem
- Every student profile is authenticated with university PRN (Permanent Registration Number) and department badge (e.g., `Rahul S. (Comps) • PRN: 21BCE1048 Verified`).
- Zero anonymous listings or unvetted vendors.

### 2. 🎛️ Curated Campus Equipment Marketplace
- Real hardware categories: **Audio Systems & Wireless Mics**, **High-Lumen Projectors**, **Stage & Strobe Lights**, **4K DSLR Cameras**, **Cables, Adapters & Extension Reels**.
- Comprehensive specs, daily pricing, refundable security deposit transparency, and real-time availability badges (`Available Today` vs `Locked for Fest`).

### 3. 📅 Interactive Booking & Festival Conflict Detection Engine
- Automated clash detection: Identifies if requested gear has already been booked by another club during college festivals or exams.
- Dynamic transparent cost breakdown: `Rental Fee + Refundable Security Deposit - College Peer Discount = Total`.
- Handover pickup point selector at campus safe spots.
- 4-digit mock OTP generation for secure physical exchanges.

### 4. 📢 Campus "Wanted Board" (Reverse Marketplace)
- When popular gear is booked out, student clubs and event heads post urgent equipment shoutouts (e.g. *Drama Society needing 2 lapel mics*, *Robotics Club needing 50m extension reel*).
- Peer students can click **"I Have This (Offer Rent)"** to submit competitive peer bids.
- **"+ Post Urgent Request"** modal for event leads to broadcast needs to the entire campus.

### 5. 💰 Active Handover Tracker & Escrow Simulator
- Live booking status pipeline:
  1. **Reserved** (OTP generated)
  2. **Handed Over & In Use** (OTP verified at Safe Zone, security deposit in escrow)
  3. **Returned & Inspected** (Inspection passed, automated refund)
- **30-Minute Free Campus Grace Period**: No late fees if returned within 30 minutes of scheduled time.
- **Automated Late Calculation**: ₹50/hour late deduction slider with transparent ledger.
- **Simulated Instant UPI Escrow Refund**: Demonstrates automatic escrow release straight to student UPI.

### 6. 📍 3 Campus Safe Handover Zones
- **Central Canteen Safe-Zone**: High-def CCTV, 240V testing sockets, Student Marshall station.
- **IT Lab 302 Hardware Desk**: Multimeter bench, HDMI test screen for projectors, smart lockboxes.
- **Student Council Desk (Admin Foyer)**: 24/7 security post and temporary overnight lockers.

---

## 🚀 Quick Start / How to Run Locally

You can run CampusEquip with any standard static file server:

### Option A: Using Python
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

### Option B: Using Node (npx serve)
```bash
npx serve .
```

### Option C: Using PowerShell
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```

Or simply double-click `index.html` to open directly in any modern browser!

---

## 🎨 Design System & Aesthetics
- **Color Palette**: Deep slate background (`#0b0f19`, `slate-950`, `slate-900`), Indigo/Violet primary accents (`#6366f1`, `#8b5cf6`), Emerald success accents, Amber urgency tags.
- **Typography**: `Outfit` (punchy modern headings) & `Plus Jakarta Sans` (ultra-clean UI body).
- **Glassmorphism**: Backdrop blur with micro-borders, glowing ambient pulses, and subtle micro-interactions.
