# UI Design System & Component Guidelines — Natarajan Travel Agency

## 1. Design Direction & Core Aesthetics
The visual identity of **Natarajan Travel Agency** is built to convey trust, premium comfort, reliability, and modern travel excitement.

Key design tenants:
- **Clean Whitespace & Hierarchy**: Avoid claustrophobic layouts and cluttered sidebars.
- **Tailored Palette**: Curated deep ocean blues, warm amber accents, crisp off-whites, and soft slate grays.
- **Subtle Motion**: Purposeful micro-animations on interactive cards, buttons, modals, and responsive car animation shells (`CarAnimationLeft`, `CarAnimationRight`).

---

## 2. Color Palette & Design Tokens

### Primary Palette (Ocean & Trust)
- `brand-primary-900`: `#0F172A` (Midnight Slate)
- `brand-primary-800`: `#1E293B`
- `brand-primary-600`: `#0284C7` (Sky Blue)
- `brand-primary-500`: `#0EA5E9`

### Accent Palette (Energy & Adventure)
- `brand-accent-500`: `#F59E0B` (Warm Amber)
- `brand-accent-600`: `#D97706`
- `brand-accent-light`: `#FEF3C7`

### Neutral Palette
- `surface-50`: `#F8FAFC` (Canvas / Body background)
- `surface-100`: `#F1F5F9`
- `surface-card`: `#FFFFFF`
- `text-primary`: `#0F172A`
- `text-secondary`: `#475569`
- `text-muted`: `#94A3B8`

---

## 3. Typography
- **Primary Font**: `'Outfit', 'Inter', system-ui, sans-serif`
- **Headings**: Semibold/Bold with tightened letter spacing (`tracking-tight`).
- **Body**: Regular/Medium with comfortable reading line heights (`leading-relaxed`).

---

## 4. Homepage Section Layout Architecture

1. **Sticky Header / Navbar**: Brand Logo ("Natarajan Travel Agency"), Nav links (Home, Cars, Packages, Reviews, About, Contact), AI Assistant quick badge, Call-to-action button ("Book Now").
2. **Hero Section with Integrated Booking Search**:
   - Hero copy: *"Your Journey Starts Here — Reliable Cars, Comfortable Journeys & Travel Experiences You Can Trust."*
   - Floating glass/elevated Booking Search Widget (Pickup, Drop, Pickup Date, Return Date, Vehicle Category selector).
   - Left & Right Car Animation placeholders (`CarAnimationLeft`, `CarAnimationRight`).
3. **Trust Badges / "Why Choose Us"**:
   - Verified Drivers, 24/7 Roadside Assistance, Clean & Sanitized Fleet, Transparent Pricing.
4. **"How It Works" 3-Step Guide**:
   - 1. Choose Your Car -> 2. Select Dates & Route -> 3. Hit the Road with Ease.
5. **Featured Car Fleet**:
   - Filter chips: All, Sedan, SUV, Luxury, Tempo Traveller.
   - Rich vehicle cards with seats, fuel type, transmission, price per day, and direct "Book Now" buttons.
6. **Popular Travel Packages**:
   - Tour itineraries with destination photos, duration, inclusions, and pricing.
7. **Customer Reviews & Testimonials**:
   - Star ratings, customer quotes, travel destinations.
8. **Interactive AI Travel Assistant Highlight**:
   - Explanatory teaser demonstrating instant itinerary suggestions and car recommendations.
9. **Frequently Asked Questions (FAQ)**:
   - Expandable accessible accordions covering rental terms, security deposits, driver charges, cancellation.
10. **Call to Action (CTA Banner)**:
    - High-contrast banner with phone numbers, WhatsApp direct link, and inquiry form.
11. **Footer**:
    - Quick links, office address, contact details, social links, copyright.
