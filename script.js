// ==================== DATA ====================
const propertyData = {
  'amrit-kalash': {
    title: 'Amrit Kalash Apartment - Maansarovar',
    location: 'Maansarovar, India',
    heroImage: 'assets/p1.png',
    images: Array.from({length: 12}, (_, i) => `assets/p${i+1}.png`),
    videos: [],
    document: 'documents/AMRIT KALASH APARTMENT BY MAANSAROVAR.pdf',
    specs: [
      { icon: 'fa-door-open', label: 'Type', value: '3 BHK Apartments' },
      { icon: 'fa-ruler', label: 'Size', value: '1566-1650 sq.ft' },
      { icon: 'fa-building', label: 'Builder', value: 'Maansarovar Developers' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Prime location with excellent connectivity' },
    ],
  },
  'sea-cliff-villa': {
    title: 'Sea Cliff Villa - Panaiyur',
    location: 'Sea Cliff 4th Dr, Panaiyur, Chennai',
    heroImage: 'assets/P1/WhatsApp Image 2026-06-27 at 3.02.06 PM.jpeg',
    images: [
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.06 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.07 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.08 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.10 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.11 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.12 PM.jpeg'
    ],
    videos: [],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '5 BHK' },
      { icon: 'fa-ruler', label: 'Area', value: '4,800 sq.ft' },
      { icon: 'fa-water', label: 'Feature', value: 'Seaview Infinity Pool' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Panaiyur, Chennai' },
    ],
    pricing: [
      { label: 'Weekend Rate', value: '₹ 30,000 / night' },
      { label: 'Weekday Rate', value: '₹ 15,000 / night' }
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Infinity Pool' },
      { icon: 'fa-bed', label: '5 Luxurious Bedrooms' },
      { icon: 'fa-utensils', label: 'Gourmet Chef Kitchen' },
      { icon: 'fa-tree', label: 'Landscaped Garden' },
      { icon: 'fa-wifi', label: 'High-Speed Internet' },
      { icon: 'fa-shield-alt', label: '24/7 Security' },
      { icon: 'fa-car', label: 'Valet & Secure Parking' },
      { icon: 'fa-hot-tub', label: 'Jacuzzi & Spa Area' },
      { icon: 'fa-concierge-bell', label: '24/7 Butler Service' },
      { icon: 'fa-water', label: 'Private Poolside Cabana' },
      { icon: 'fa-snowflake', label: 'Central AC & Climate Control' },
      { icon: 'fa-camera', label: 'CCTV Surveillance' }
    ],
    description: 'Sea Cliff Villa is a premium ocean-view estate in Panaiyur, offering resort-style comforts, private pool access, and exclusive villa stays for guests and investors. All facilities are available here for your stay and booking needs.',
  },
  'coastal-retreat': {
    title: 'Coastal Retreat Villa',
    location: 'South Chennai Coastline, India',
    heroImage: 'assets/P2/WhatsApp Image 2026-06-27 at 3.02.00 PM.jpeg',
    images: [
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.00 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.01 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.02 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.03 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.04 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.05 PM.jpeg'
    ],
    videos: [],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '4 BHK' },
      { icon: 'fa-ruler', label: 'Area', value: '3,600 sq.ft' },
      { icon: 'fa-water', label: 'Feature', value: 'Private Beach Access' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Chennai Coastline' },
    ],
    pricing: [
      { label: 'Weekend Rate', value: '₹ 15,000 / night' },
      { label: 'Weekday Rate', value: '₹ 10,000 / night' }
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Pool' },
      { icon: 'fa-wifi', label: 'High-Speed Internet' },
      { icon: 'fa-spa', label: 'In-Villa Spa' },
      { icon: 'fa-concierge-bell', label: '24/7 Concierge' },
      { icon: 'fa-utensils', label: 'Personal Chef Options' },
      { icon: 'fa-car', label: 'Valet Parking' },
      { icon: 'fa-bed', label: 'Luxury King Suites' },
      { icon: 'fa-water', label: 'Beachfront Lounge' },
      { icon: 'fa-tree', label: 'Garden Terrace' },
      { icon: 'fa-couch', label: 'Private Entertainment Lounge' },
      { icon: 'fa-shield-alt', label: 'Secure Gated Access' },
      { icon: 'fa-bolt', label: 'Power Backup' }
    ],
    description: 'Coastal Retreat Villa is a luxury villa offering premium hospitality living, private villa services, and coastal retreat stays for family and investor guests. All facilities are available here, with details on weekend and weekday rates provided for every stay.',
  }
  ,
  'p5-uthandi': {
    title: 'Uthandi Villa - 5 BHK',
    location: 'Uthandi, Chennai',
    heroImage: 'assets/P5/WhatsApp Image 2026-06-30 at 11.11.23 PM (2).jpeg',
    images: [
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.22 PM (1).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.22 PM (2).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.22 PM.jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.23 PM (1).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.23 PM (2).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.23 PM (3).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.23 PM.jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.24 PM (1).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.24 PM (2).jpeg',
      'assets/P5/WhatsApp Image 2026-06-30 at 11.11.24 PM.jpeg'
    ],
    videos: [],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '5 BHK' },
      { icon: 'fa-ruler', label: 'Area', value: '4,800 sq.ft' },
      { icon: 'fa-water', label: 'Feature', value: 'Seaview & Private Pool' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Uthandi, Chennai' }
    ],
    pricing: [
      { label: 'Weekend Rate', value: '₹ 30,000 / night' },
      { label: 'Weekday Rate', value: '₹ 15,000 / night' }
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Pool' },
      { icon: 'fa-wifi', label: 'High-Speed Internet' },
      { icon: 'fa-car', label: 'Parking' }
    ],
    description: 'Uthandi Villa: spacious 5BHK villa with private pool and ocean views. Gallery images are loaded from the local P5 folder.'
  }
  ,
  'p4-premium-villas': {
    title: 'Premium Beach Villas',
    location: 'Chennai Coastline (near beach)',
    heroImage: 'assets/P4/WhatsApp Image 2026-06-30 at 12.31.17 AM.jpeg',
    images: [
      'assets/P4/WhatsApp Image 2026-06-30 at 12.31.17 AM.jpeg',
      'assets/P4/WhatsApp Image 2026-06-30 at 12.31.18 AM.jpeg',
      'assets/P4/WhatsApp Image 2026-06-30 at 12.31.19 AM.jpeg'
    ],
    videos: ['assets/P4/WhatsApp Video 2026-06-30 at 12.31.16 AM.mp4'],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '3-4 BHK options' },
      { icon: 'fa-ruler', label: 'Area', value: '1,800 - 3,200 sq.ft' },
      { icon: 'fa-water', label: 'Feature', value: 'Beach View' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Chennai - Beachside' },
    ],
    pricing: [
      { label: 'Per Night', value: '₹ 8,000 - ₹ 15,000' }
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Pool' },
      { icon: 'fa-wifi', label: 'High-Speed WiFi' },
      { icon: 'fa-parking', label: 'Secure Parking' },
      { icon: 'fa-concierge-bell', label: 'Concierge Services' }
    ],
    description: 'Premium beach villas with ocean views, suitable for weekend stays and premium bookings. Regularly booked — great for leisure guests.'
  },
  'kanathur-6bhk': {
    title: 'Kanathur Villa - 6 BHK',
    location: 'Kanathur, Chennai',
    heroImage: 'assets/P3_Kanathur_6BHK/WhatsApp Image 2026-06-30 at 12.31.20 AM.jpeg',
    images: [
      'assets/P3_Kanathur_6BHK/WhatsApp Image 2026-06-30 at 12.31.20 AM.jpeg',
      'assets/P3_Kanathur_6BHK/WhatsApp Image 2026-06-30 at 12.31.21 AM.jpeg',
      'assets/P3_Kanathur_6BHK/WhatsApp Image 2026-06-30 at 12.31.22 AM.jpeg'
    ],
    videos: ['assets/P3_Kanathur_6BHK/WhatsApp Video 2026-06-30 at 12.31.21 AM.mp4'],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '6 BHK' },
      { icon: 'fa-ruler', label: 'Area', value: '6,500 sq.ft' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Kanathur, Chennai' }
    ],
    pricing: [
      { label: 'Weekend', value: 'Regularly Booking • Popular Choice' }
    ],
    facilities: [
      { icon: 'fa-bed', label: '6 Bedrooms' },
      { icon: 'fa-utensils', label: 'Large Gourmet Kitchen' },
      { icon: 'fa-tree', label: 'Garden & Outdoor Space' }
    ],
    description: 'Spacious 6BHK villa in Kanathur, ideal for large groups and events. Popular choice and regularly booked.'
  }
};

const resortData = {
  'coastal-retreat': {
    title: 'Coastal Retreat Villa',
    location: 'South Chennai Coastline, India',
    heroImage: 'assets/P2/WhatsApp Image 2026-06-27 at 3.02.00 PM.jpeg',
    images: [
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.00 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.01 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.02 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.03 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.04 PM.jpeg',
      'assets/P2/WhatsApp Image 2026-06-27 at 3.02.05 PM.jpeg'
    ],
    videos: [],
    specs: [
      { icon: 'fa-door-open', label: 'Bedrooms', value: '4 BHK' },
      { icon: 'fa-ruler', label: 'Area', value: '3,600 sq.ft' },
      { icon: 'fa-water', label: 'Feature', value: 'Private Beach Access' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Chennai Coastline' },
    ],
    pricing: [
      { label: 'Weekend Rate', value: '₹ 15,000 / night' },
      { label: 'Weekday Rate', value: '₹ 10,000 / night' }
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Pool' },
      { icon: 'fa-wifi', label: 'High-Speed Internet' },
      { icon: 'fa-spa', label: 'In-Villa Spa' },
      { icon: 'fa-concierge-bell', label: '24/7 Concierge' },
      { icon: 'fa-utensils', label: 'Personal Chef Options' },
      { icon: 'fa-car', label: 'Valet Parking' },
      { icon: 'fa-bed', label: 'Luxury King Suites' },
      { icon: 'fa-water', label: 'Beachfront Lounge' },
      { icon: 'fa-tree', label: 'Garden Terrace' },
      { icon: 'fa-couch', label: 'Private Entertainment Lounge' }
    ],
    description: 'Coastal Retreat Villa is a luxury villa offering premium hospitality living, private villa services, and coastal retreat stays for family and investor guests.',
  },
  'kovalam-nemili': {
    title: 'Kovalam Nemili Resort',
    location: 'Kovalam, Nemili, India',
    // heroImage was pointing to assets/resort which isn't present; use external fallback
    heroImage: 'https://images.unsplash.com/photo-1501117716987-c8e6b1f6f8b5?w=1200&h=800&fit=crop',
    // Fallback dummy images (external) to ensure gallery shows even if local assets are missing
    images: [
      'https://images.unsplash.com/photo-1501117716987-c8e6b1f6f8b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1505692794403-35b0d0d7e6b6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1505691723518-36a0f8f3b5b3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1501119776822-6f2d7d36f2b8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1505692794403-35b0d0d7e6b6?w=1200&h=800&fit=crop'
    ],
    videos: ['assets/resort/rv3.mp4'],
    specs: [
      { icon: 'fa-expand', label: 'Area', value: '6 Ground' },
      { icon: 'fa-tag', label: 'Price', value: '₹ 8 Crore' },
      { icon: 'fa-water', label: 'Type', value: 'Beachfront Resort' },
      { icon: 'fa-star', label: 'Rating', value: '4.9/5 Premium' },
    ],
    facilities: [
      { icon: 'fa-water', label: 'Private Beach Access' },
      { icon: 'fa-spa', label: 'Spa & Wellness Center' },
      { icon: 'fa-swimming-pool', label: 'Infinity Pool' },
      { icon: 'fa-utensils', label: 'Multi-Cuisine Restaurant' },
      { icon: 'fa-glass-martini', label: 'Beachfront Bar' },
      { icon: 'fa-dumbbell', label: 'Fitness Center' },
      { icon: 'fa-wifi', label: 'High-Speed WiFi' },
      { icon: 'fa-concierge-bell', label: '24/7 Room Service' },
      { icon: 'fa-car', label: 'Valet Parking' },
      { icon: 'fa-ship', label: 'Water Sports' },
      { icon: 'fa-child', label: 'Kids Club' },
      { icon: 'fa-music', label: 'Live Entertainment' },
    ],
    description: 'Sprawling 6-ground luxury beachfront resort in Kovalam Nemili offering premium amenities, fine dining, spa & pool, and breathtaking ocean views. An exclusive investment and lifestyle opportunity.'
  }
};

const landData = {
  'panayur-house': {
    title: 'Individual House - Panayur',
    location: 'Panayur, Chennai, India',
    // resort images folder was missing in workspace; fall back to available P1 images
    heroImage: 'assets/P1/WhatsApp Image 2026-06-27 at 3.02.06 PM.jpeg',
    images: [
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.06 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.07 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.08 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.10 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.11 PM.jpeg',
      'assets/P1/WhatsApp Image 2026-06-27 at 3.02.12 PM.jpeg'
    ],
    // use available video assets from P3/P4 folders if needed
    videos: ['assets/P4/WhatsApp Video 2026-06-30 at 12.31.16 AM.mp4', 'assets/P3_Kanathur_6BHK/WhatsApp Video 2026-06-30 at 12.31.21 AM.mp4'],
    specs: [
      { icon: 'fa-expand', label: 'Land', value: '4 Ground' },
      { icon: 'fa-door-open', label: 'House', value: '4 BHK' },
      { icon: 'fa-tag', label: 'Price', value: '₹ 6 Crore' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Panayur, Chennai' },
    ],
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Swimming Pool' },
      { icon: 'fa-tree', label: 'Lush Garden & Landscapes' },
      { icon: 'fa-car', label: 'Car Parking (3+ Cars)' },
      { icon: 'fa-solar-panel', label: 'Solar Power Backup' },
      { icon: 'fa-tint', label: 'Borewell + Metro Water' },
      { icon: 'fa-shield-alt', label: 'Gated Community Security' },
      { icon: 'fa-wind', label: 'Spacious Balconies' },
      { icon: 'fa-utensils', label: 'Modular Kitchen' },
      { icon: 'fa-couch', label: 'Servant Quarters' },
      { icon: 'fa-bus', label: 'Near Bus & Metro' },
    ],
    description: 'Spacious individual house on 4 grounds of land in Panayur, Chennai. Features 4 BHK with resort-style amenities, lush surroundings, and excellent connectivity to the city.'
  }
};

// ==================== MODAL MANAGEMENT ====================
const enquiryModal = document.getElementById('enquiryModal');
const bookingModal = document.getElementById('bookingModal');
const detailModal = document.getElementById('detailModal');

function openEnquiryModal() {
  if(enquiryModal) {
    enquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEnquiryModal() {
  if(enquiryModal) {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openBookingModal() {
  if(bookingModal) {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  if(bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function getEncodedAssetPath(url) {
  return String(url)
    .replace(/ /g, '%20')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');
}

function openDetailModal(type, id) {
  let data;
  if (type === 'property') data = propertyData[id];
  else if (type === 'resort') data = resortData[id];
  else if (type === 'land') data = landData[id];

  if (!data || !detailModal) return;

  const heroImg = getEncodedAssetPath(data.heroImage || (data.images && data.images[0]) || '');

  // Build slides array (images then videos)
  const slidesArr = [];
  (data.images || []).forEach(img => slidesArr.push({ type: 'image', src: getEncodedAssetPath(img) }));
  (data.videos || []).forEach(vid => slidesArr.push({ type: 'video', src: getEncodedAssetPath(vid) }));

  const slidesHtml = slidesArr.map((s, i) => {
    if (s.type === 'image') return `
      <div class="detail-slide" data-index="${i}" style="display:${i===0?'block':'none'}">
        <img src="${s.src}" alt="${data.title} - ${i}" style="width:100%;height:auto;border-radius:8px;cursor:pointer;" onclick="openImageLightbox('${s.src}')" />
      </div>`;
    return `
      <div class="detail-slide" data-index="${i}" style="display:${i===0?'block':'none'}">
        <video controls style="width:100%;height:auto;border-radius:8px;"><source src="${s.src}" type="video/mp4"></video>
      </div>`;
  }).join('');
  const specsHtml = data.specs.map(s => `
    <div class="detail-spec-item">
      <i class="fas ${s.icon}"></i>
      <strong>${s.label}:</strong> ${s.value}
    </div>
  `).join('');
  const pricingHtml = data.pricing ? `
    <div class="detail-pricing" style="margin:20px 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">
      ${data.pricing.map(p => `
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;">
          <strong style="display:block;margin-bottom:8px;color:var(--dark-color);">${p.label}</strong>
          <span style="font-size:16px;color:#333;font-weight:600;">${p.value}</span>
        </div>
      `).join('')}
    </div>
  ` : '';
  const facilitiesHtml = data.facilities ? `
    <h3 style="margin:25px 0 12px;color:var(--dark-color);"><i class="fas fa-concierge-bell" style="color:var(--primary-color);margin-right:8px;"></i>Amenities & Facilities</h3>
    <div class="detail-facilities" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-bottom:20px;">
      ${data.facilities.map(f => `
        <div class="facility-item" style="display:flex;align-items:center;gap:10px;background:#f8f9fa;padding:12px 15px;border-radius:10px;border-left:3px solid var(--primary-color);">
          <i class="fas ${f.icon}" style="color:var(--primary-color);width:20px;text-align:center;"></i>
          <span style="font-size:13px;color:#444;font-weight:500;">${f.label}</span>
        </div>
      `).join('')}
    </div>
  ` : '';
  const docHtml = data.document ? `
    <a href="${data.document}" target="_blank" class="btn btn-secondary" style="flex:1;justify-content:center">
      <i class="fas fa-file-pdf"></i> View Brochure
    </a>
  ` : '';

  document.getElementById('detailModalBody').innerHTML = `
    <div class="detail-hero">
      <img src="${heroImg}" alt="${data.title}">
      <div class="detail-hero-overlay">
        <h2>${data.title}</h2>
        <p><i class="fas fa-map-marker-alt"></i> ${data.location}</p>
      </div>
    </div>
    <div class="detail-body">
      <p style="color:#666;line-height:1.7;margin-bottom:20px;">${data.description}</p>
      <div class="detail-specs">${specsHtml}</div>
      ${pricingHtml}
      ${facilitiesHtml}
      <h3 style="margin:20px 0 10px;color:var(--dark-color);">Gallery</h3>
      <div class="detail-carousel" style="position:relative;">
        ${slidesHtml}
        <button class="carousel-prev" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;padding:10px;border-radius:50%;cursor:pointer;">‹</button>
        <button class="carousel-next" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;padding:10px;border-radius:50%;cursor:pointer;">›</button>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="openEnquiryModal()"><i class="fas fa-phone"></i> Enquire Now</button>
        <button class="btn btn-secondary" onclick="openBookingModal()"><i class="fas fa-calendar"></i> Book Site Visit</button>
        ${docHtml}
      </div>
    </div>
  `;

  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Delegated carousel control handlers while detail modal is active
document.addEventListener('click', function(e){
  if (!document.getElementById('detailModal') || !document.getElementById('detailModal').classList.contains('active')) return;
  if (e.target && e.target.classList && e.target.classList.contains('carousel-next')) {
    changeDetailSlide(1);
  }
  if (e.target && e.target.classList && e.target.classList.contains('carousel-prev')) {
    changeDetailSlide(-1);
  }
});

function changeDetailSlide(delta) {
  const slides = Array.from(document.querySelectorAll('#detailModalBody .detail-slide'));
  if (!slides.length) return;
  let currentIndex = slides.findIndex(s => s.style.display !== 'none');
  if (currentIndex === -1) currentIndex = 0;
  slides[currentIndex].style.display = 'none';
  let next = (currentIndex + delta + slides.length) % slides.length;
  slides[next].style.display = 'block';
  // pause any video when slide changes
  slides.forEach((sl, idx) => {
    const v = sl.querySelector('video');
    if (v) { if (idx === next) v.play().catch(()=>{}); else v.pause(); }
  });
}

function openImageLightbox(src) {
  let lb = document.getElementById('imageLightbox');
  if (!lb) {
    // create inline if missing
    lb = document.createElement('div');
    lb.id = 'imageLightbox';
    lb.className = 'image-lightbox';
    lb.style.cssText = 'display:flex;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;align-items:center;justify-content:center;padding:20px;';
    lb.innerHTML = `<div style="max-width:1200px;max-height:90vh;overflow:auto;position:relative;"><img id="lightboxImg" src="" alt="" style="max-width:100%;max-height:90vh;border-radius:8px;display:block;margin:0 auto;"/><button id="lightboxCloseBtn" style="position:absolute;top:-10px;right:-10px;border:none;background:#fff;padding:8px 10px;border-radius:50%;cursor:pointer;">&times;</button></div>`;
    document.body.appendChild(lb);
    document.getElementById('lightboxCloseBtn').addEventListener('click', closeImageLightbox);
    lb.addEventListener('click', function(ev){ if (ev.target === lb) closeImageLightbox(); });
  }
  const img = document.getElementById('lightboxImg');
  if (img) img.src = src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  const lb = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  if (img) img.src = '';
  if (lb) lb.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close image lightbox with Escape (keyboard handling present elsewhere)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageLightbox();
  }
});

// Touch/swipe support for detail modal carousel
let _touchStartX = 0;
document.addEventListener('touchstart', function(e){
  if (!document.getElementById('detailModal') || !document.getElementById('detailModal').classList.contains('active')) return;
  _touchStartX = e.touches[0].clientX;
}, {passive: true});
document.addEventListener('touchend', function(e){
  if (!document.getElementById('detailModal') || !document.getElementById('detailModal').classList.contains('active')) return;
  const touchEndX = e.changedTouches[0].clientX;
  const dx = touchEndX - _touchStartX;
  if (Math.abs(dx) > 50) {
    changeDetailSlide(dx < 0 ? 1 : -1);
  }
});

function closeDetailModal() {
  if(detailModal) {
    detailModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close modals on X or background click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    closeEnquiryModal();
    closeBookingModal();
    closeDetailModal();
  }
});

// ==================== HERO CAROUSEL ====================
let currentSlideIdx = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function applyHeroBackground(slide) {
  const bg = slide.dataset.bg;
  if (!bg || slide.classList.contains('bg-loaded')) return;
  slide.style.background = `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${bg}') center/cover`;
  slide.classList.add('bg-loaded');
}

function preloadHeroSlide(index) {
  const slide = slides[index];
  if (slide) applyHeroBackground(slide);
}

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));

  if (n >= slides.length) currentSlideIdx = 0;
  if (n < 0) currentSlideIdx = slides.length - 1;

  preloadHeroSlide(currentSlideIdx);
  const nextIndex = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  preloadHeroSlide(nextIndex);

  slides[currentSlideIdx].classList.add('active');
  indicators[currentSlideIdx].classList.add('active');
}

function nextSlide() {
  currentSlideIdx++;
  showSlide(currentSlideIdx);
}

function prevSlide() {
  currentSlideIdx--;
  showSlide(currentSlideIdx);
}

function currentSlide(n) {
  currentSlideIdx = n;
  showSlide(currentSlideIdx);
}

// Auto-rotate every 6 seconds
setInterval(nextSlide, 6000);

// ==================== REVIEWS/BLOGS CAROUSEL ====================
function nextReview() {
  const track = document.querySelector('.reviews-track');
  if (track) track.scrollBy({ left: 350, behavior: 'smooth' });
}
function prevReview() {
  const track = document.querySelector('.reviews-track');
  if (track) track.scrollBy({ left: -350, behavior: 'smooth' });
}
function nextBlog() {
  const track = document.querySelector('.blogs-track');
  if (track) track.scrollBy({ left: 350, behavior: 'smooth' });
}
function prevBlog() {
  const track = document.querySelector('.blogs-track');
  if (track) track.scrollBy({ left: -350, behavior: 'smooth' });
}

// ==================== PROPERTY FILTERING ====================
function filterProperties(category, event) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  document.querySelectorAll('.property-item').forEach(card => {
    if (card.classList.contains('hidden')) {
      return;
    }
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== FORM SUBMISSION WITH SUPABASE + EMAIL FALLBACK ====================
const COMPANY_EMAIL = 'marveltimez26@gmail.com';

function formToObject(form) {
  const data = {};
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.name) data[el.name] = el.value;
  });
  return data;
}

function showDbToast(message, type = 'success') {
  const existing = document.querySelector('.db-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'db-toast';
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
  toast.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
    color: #fff;
    padding: 15px 25px;
    border-radius: 10px;
    z-index: 9999;
    font-weight: 600;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    animation: slideInRight 0.4s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 350px;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function submitToFormSubmit(formData, subject) {
  const iframe = document.createElement('iframe');
  iframe.name = 'formsubmit-frame-' + Date.now();
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const form = document.createElement('form');
  form.action = 'https://formsubmit.co/' + COMPANY_EMAIL;
  form.method = 'POST';
  form.target = iframe.name;

  for (let [key, value] of Object.entries(formData)) {
    if (key.startsWith('_')) continue;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  [
    { name: '_subject', value: subject },
    { name: '_template', value: 'table' },
    { name: '_captcha', value: 'false' }
  ].forEach(c => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = c.name;
    input.value = c.value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    if (form.parentNode) document.body.removeChild(form);
    if (iframe.parentNode) document.body.removeChild(iframe);
  }, 8000);
}

async function handleFormSubmit(event, subject, closeCallback) {
  event.preventDefault();
  const form = event.target;
  const data = formToObject(form);
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.innerHTML : '';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  }

  let dbSuccess = false;

  if (window.tsDB && window.tsDB.isDbConfigured()) {
    let dbResult;
    if (subject.includes('Enquiry')) {
      dbResult = await window.tsDB.insertEnquiry(data);
    } else if (subject.includes('Booking')) {
      dbResult = await window.tsDB.insertBooking(data);
    } else {
      dbResult = await window.tsDB.insertContact(data);
    }
    dbSuccess = dbResult.success;
    if (!dbSuccess) {
      console.warn('[Form] DB insert failed:', dbResult.error);
    }
  }

  submitToFormSubmit(data, subject);

  if (dbSuccess) {
    showDbToast('Submitted successfully! We will contact you soon.');
  } else {
    showDbToast('Form submitted via email. Database not connected yet.', 'warning');
  }

  form.reset();
  if (typeof closeCallback === 'function') closeCallback();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

async function handleNewsletterSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.innerHTML : '';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  }

  let dbSuccess = false;

  if (window.tsDB && window.tsDB.isDbConfigured()) {
    const dbResult = await window.tsDB.insertNewsletter(email);
    dbSuccess = dbResult.success;
  }

  submitToFormSubmit({ email: email }, 'Newsletter Subscription');

  if (dbSuccess) {
    showDbToast('Subscribed successfully!');
  } else {
    showDbToast('Subscribed via email. Database not connected yet.', 'warning');
  }

  form.reset();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(100px); }
  }
`;
document.head.appendChild(toastStyles);

// ==================== UTILITY FUNCTIONS ====================
function openWhatsApp() {
  const phoneNumber = '+919092677377';
  const message = encodeURIComponent('Hello! I am interested in your properties and services.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ==================== BLOG DATA ====================
const blogData = {
  1: {
    title: 'Top 10 Luxury Properties in Dubai 2024',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15e7?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Dubai continues to be a global hub for luxury real estate. From the iconic Burj Khalifa residences to the exclusive Palm Jumeirah villas, the market offers unparalleled opportunities. In this comprehensive guide, we explore the top 10 luxury properties that define opulence in 2024. Each property features world-class amenities, breathtaking views, and exceptional investment potential. Whether you seek a waterfront apartment or a desert oasis villa, Dubai\'s property market has something for every discerning buyer.',
    highlights: [
      { icon: 'fa-building', text: 'Burj Khalifa Penthouses' },
      { icon: 'fa-water', text: 'Palm Jumeirah Villas' },
      { icon: 'fa-anchor', text: 'Dubai Marina Waterfront' }
    ]
  },
  2: {
    title: 'Resort Living: Benefits & Lifestyle Guide',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1495564151525-2a7f81d2ccff?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Resort living offers a unique blend of luxury, convenience, and community. Imagine waking up to pristine beaches, world-class spas, and gourmet dining just steps from your door. In the UAE and India, resort communities are redefining residential living. From private beach access to championship golf courses, resort properties provide an unmatched lifestyle. Our guide covers the key benefits, investment potential, and what to look for when choosing your resort home.',
    highlights: [
      { icon: 'fa-spa', text: 'Wellness & Spa Access' },
      { icon: 'fa-utensils', text: 'Fine Dining On-Site' },
      { icon: 'fa-users', text: 'Vibrant Community' }
    ]
  },
  3: {
    title: 'Real Estate Investment Trends 2024',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1560491676-04071c5f467b?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'The real estate landscape in 2024 is shaped by emerging trends in sustainability, smart technology, and changing buyer preferences. Dubai and India remain hotspots for international investors seeking high ROI. Key trends include eco-friendly developments, integrated smart home systems, and mixed-use communities. Our market analysis reveals prime locations poised for growth, helping investors make informed decisions in a dynamic market.',
    highlights: [
      { icon: 'fa-leaf', text: 'Sustainable Developments' },
      { icon: 'fa-microchip', text: 'Smart Home Integration' },
      { icon: 'fa-chart-line', text: 'High ROI Locations' }
    ]
  },
  4: {
    title: 'Coastal Living: Your Dream Home Guide',
    date: 'Mar 8, 2024',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'There is something magical about living by the sea. Coastal properties offer not just stunning views but a lifestyle centered around nature, relaxation, and recreation. From Kovalam\'s serene beaches to Dubai\'s vibrant coastline, our guide explores the best coastal living options. Learn about property types, price ranges, and the unique advantages of seaside homes for both personal enjoyment and investment.',
    highlights: [
      { icon: 'fa-sun', text: 'Beachfront Access' },
      { icon: 'fa-ship', text: 'Water Sports' },
      { icon: 'fa-umbrella-beach', text: 'Resort Lifestyle' }
    ]
  },
  5: {
    title: 'Smart Home Features in Luxury Properties',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Modern luxury homes are embracing cutting-edge technology to enhance comfort, security, and energy efficiency. Smart home features now include AI-powered climate control, biometric access systems, automated lighting, and integrated home theaters. In Dubai and India\'s premium developments, these technologies come standard. Discover how smart home innovations are transforming the way we live and adding significant value to properties.',
    highlights: [
      { icon: 'fa-fingerprint', text: 'Biometric Security' },
      { icon: 'fa-temperature-high', text: 'Climate Control' },
      { icon: 'fa-lightbulb', text: 'Automated Lighting' }
    ]
  },
  6: {
    title: 'Legal Documentation Guide for Property',
    date: 'Mar 1, 2024',
    image: 'https://images.unsplash.com/photo-1493536671697-6d302319b41e?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Navigating property documentation can be complex, especially for international buyers. This comprehensive guide covers the essential legal requirements for property transactions in both the UAE and India. From title deeds and NOCs to RERA registration and tax implications, we break down every document you need. Understanding these requirements ensures a smooth, secure transaction and protects your investment for years to come.',
    highlights: [
      { icon: 'fa-file-signature', text: 'Title Deeds' },
      { icon: 'fa-gavel', text: 'RERA Compliance' },
      { icon: 'fa-shield-alt', text: 'Buyer Protection' }
    ]
  }
};

// ==================== BLOG MODAL ====================
function openBlogModal(id) {
  const data = blogData[id];
  if (!data) return;
  
  const highlightsHtml = data.highlights.map(h => `
    <div class="blog-highlight-item">
      <i class="fas ${h.icon}"></i>
      <span>${h.text}</span>
    </div>
  `).join('');

  const modalBody = document.getElementById('detailModalBody');
  const modal = document.getElementById('detailModal');
  
  modalBody.innerHTML = `
    <div class="detail-hero">
      <img src="${data.image}" alt="${data.title}">
      <div class="detail-hero-overlay">
        <h2>${data.title}</h2>
        <p><i class="fas fa-calendar"></i> ${data.date} &nbsp;|&nbsp; <i class="fas fa-user"></i> ${data.author}</p>
      </div>
    </div>
    <div class="detail-body">
      <p style="color:#666;line-height:1.8;margin-bottom:20px;font-size:15px;">${data.content}</p>
      <h3 style="margin:20px 0 12px;color:var(--dark-color);"><i class="fas fa-star" style="color:var(--primary-color);margin-right:8px;"></i>Key Highlights</h3>
      <div class="detail-specs">${highlightsHtml}</div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="openEnquiryModal()"><i class="fas fa-phone"></i> Enquire Now</button>
        <button class="btn btn-secondary" onclick="closeDetailModal()"><i class="fas fa-times"></i> Close</button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (!section) return;
  const header = document.querySelector('.header');
  const headerOffset = header ? header.offsetHeight + 12 : 100;
  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==================== HAMBURGER & MOBILE MENU ====================
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const mobileNavClose = document.getElementById('mobileNavClose');
const overlay = document.getElementById('mobileNavOverlay');
const body = document.body;

if (hamburger && nav && overlay) {
  function closeMobileMenu() {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
    document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('active'));
  }

  function openMobileMenu() {
    nav.classList.add('show');
    overlay.classList.add('show');
    hamburger.classList.add('active');
    body.classList.add('menu-open');
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('show')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  overlay.addEventListener('click', closeMobileMenu);

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileMenu);
  }

  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    if (link.classList.contains('dropdown-toggle')) return;
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        closeMobileMenu();
        setTimeout(() => {
          scrollToSection(href);
        }, 80);
        return;
      }
      closeMobileMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}


// ==================== DROPDOWN MENU ====================
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parent = toggle.closest('.nav-dropdown');
    const menu = toggle.nextElementSibling;
    if (!parent || !menu) return;

    const isOpen = parent.classList.toggle('active');
    document.querySelectorAll('.nav-dropdown').forEach(drop => {
      if (drop !== parent) drop.classList.remove('active');
    });

    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('active'));
});

// ==================== SMOOTH SCROLL FOR ANCHORS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== NAVIGATION ACTIVE STATE ====================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ==================== LAZY LOADING ====================
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imgObserver.observe(img));
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 100px;
  right: 30px;
  background: var(--primary-color);
  color: var(--dark-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: none;
  z-index: 998;
  font-size: 18px;
  box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeEnquiryModal();
    closeBookingModal();
    closeDetailModal();
  }
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.loading = 'lazy';
  });

  const revealElements = document.querySelectorAll('section, .footer');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    if (!el.classList.contains('hero') && !el.classList.contains('header')) {
      el.classList.add('section-hidden');
      revealObserver.observe(el);
    }
  });

  // Initialize hero slide backgrounds lazily
  showSlide(0);
  // Fallback: if IntersectionObserver doesn't reveal sections (old browsers), ensure sections become visible
  setTimeout(() => {
    document.querySelectorAll('section.section-hidden, .footer.section-hidden').forEach(el => {
      el.classList.add('visible');
      el.classList.remove('section-hidden');
    });
  }, 800);
  // Reveal property cards using IntersectionObserver (no GSAP)
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('card-visible');
        cardObserver.unobserve(ent.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.property-card').forEach(card => {
    card.classList.add('card-hidden');
    cardObserver.observe(card);
  });
});

window.addEventListener('load', () => {
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    pageLoader.classList.add('loaded');
    setTimeout(() => {
      if (pageLoader.parentNode) pageLoader.parentNode.removeChild(pageLoader);
    }, 600);
  }
});

// Extra safety: remove any lingering page loader after 3s
setTimeout(() => {
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    pageLoader.classList.add('loaded');
    pageLoader.style.display = 'none';
    if (pageLoader.parentNode) pageLoader.parentNode.removeChild(pageLoader);
  }
}, 3000);
