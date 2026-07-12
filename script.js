/* ============================================
   HAPYSENSE — Luxury Travel Experiences
   script.js
   ============================================ */

/* ============ DATA ============ */

const basePackages = [
  { id: 'backpacker', name: 'Backpacker Vietnam', nameFr: 'Backpacker Vietnam', basePrice: 500, dur: '30 jours', desc: 'Nord au Sud, hostels, bus locaux, street food, treks. Le Vietnam vrai.', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=60', bg: '#1a1a2e' },
  { id: 'escape', name: 'Vietnam Escape', nameFr: 'Vietnam Escape', basePrice: 455, dur: '15 jours', desc: 'L\'essentiel du Vietnam : culture, nature, gastronomie.', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=60', bg: '#16213e' },
  { id: 'golden', name: 'Golden Triangle Asia', nameFr: 'Golden Triangle Asia', basePrice: 1260, dur: '18 jours', desc: 'Hôtels 3-4★, guide privé, activités premium.', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=60', bg: '#0f3460' },
  { id: 'premium', name: 'Premium Vietnam', nameFr: 'Premium Vietnam', basePrice: 4500, dur: 'Sur mesure', desc: 'Tout inclus, 5★, accompagnateur privé 24/7.', img: 'https://images.unsplash.com/photo-1559511260-66a72e1e2f25?w=400&q=60', bg: '#0a1628' },
  { id: 'coastal', name: 'Coastal Explorer', nameFr: 'Explorateur des Côtes', basePrice: 890, dur: '10 jours', desc: 'Plages, snorkeling, îles paradisiaques.', img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=400&q=60', bg: '#0e4d64' },
  { id: 'mekong', name: 'Mekong Delta', nameFr: 'Delta du Mékong', basePrice: 650, dur: '7 jours', desc: 'Marchés flottants, vergers, cuisine locale.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=60', bg: '#083241' },
  { id: 'express', name: 'Vietnam Express', nameFr: 'Vietnam Express', basePrice: 350, dur: '7 jours', desc: 'Les incontournables du Vietnam en une semaine.', img: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&q=60', bg: '#1a3a2e' },
  { id: 'honeymoon', name: 'Honeymoon Paradise', nameFr: 'Voyage de Rêve', basePrice: 2200, dur: '12 jours', desc: 'Romantique, resorts 5★, spa, dîners aux chandelles.', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=60', bg: '#2a1a2e' }
];

const activitiesList = [
  { id: 'cruise', name: 'Croisière Ha Long (2j)', price: 150, icon: 'fa-ship', cat: 'aventure' },
  { id: 'trek', name: 'Trek Sapa (2j)', price: 80, icon: 'fa-mountain', cat: 'aventure' },
  { id: 'diving', name: 'Plongée sous-marine', price: 60, icon: 'fa-water', cat: 'plage' },
  { id: 'cooking', name: 'Cours de cuisine', price: 40, icon: 'fa-utensils', cat: 'culture' },
  { id: 'spa', name: 'Massage spa (60min)', price: 50, icon: 'fa-spa', cat: 'détente' },
  { id: 'sampan', name: 'Balade en sampan', price: 30, icon: 'fa-ship', cat: 'culture' },
  { id: 'bike', name: 'Balade à vélo campagne', price: 20, icon: 'fa-bicycle', cat: 'aventure' },
  { id: 'streetfood', name: 'Tour street food', price: 35, icon: 'fa-drumstick-bite', cat: 'culture' },
  { id: 'sunset', name: 'Coucher de soleil en bateau', price: 45, icon: 'fa-sun', cat: 'détente' },
  { id: 'snorkeling', name: 'Snorkeling', price: 40, icon: 'fa-snorkel', cat: 'plage' },
  { id: 'temple', name: 'Visite temples & pagodes', price: 25, icon: 'fa-landmark', cat: 'culture' },
  { id: 'fishing', name: 'Pêche traditionnelle', price: 35, icon: 'fa-fish', cat: 'aventure' },
  { id: 'lantern', name: 'Atelier lanternes Hội An', price: 30, icon: 'fa-lightbulb', cat: 'culture' },
  { id: 'kayak', name: 'Kayak en baie', price: 45, icon: 'fa-oar', cat: 'aventure' },
  { id: 'market', name: 'Marché flottant Mékong', price: 35, icon: 'fa-store', cat: 'culture' },
  { id: 'golf', name: 'Golf (green fee)', price: 120, icon: 'fa-golf-ball', cat: 'détente' },
  { id: 'photo', name: 'Shooting photo pro', price: 90, icon: 'fa-camera', cat: 'culture' },
  { id: 'nightlife', name: 'Tour rooftops Saigon', price: 55, icon: 'fa-glass-cheers', cat: 'détente' }
];

const bpCustomers = [
  { name: 'Lucas M.', avatar: 'LM', trip: 'Sapa Budget Trek', tag: 'Backpacker', testimonial: 'Meilleure expérience de ma vie ! Le trek était incroyable et j\'ai rencontré des gens formidables. Budget ultra serré mais souvenirs inoubliables.', duration: '3 jours', countries: 'France' },
  { name: 'Emma & Sarah', avatar: 'ES', trip: 'Ha Long Budget', tag: 'Voyageuses solo', testimonial: 'La croisière en jonque était magique. Kayak, bivouac sur l\'île, coucher de soleil... Tout ça pour moins de 100€!', duration: '3 jours', countries: 'Australie' },
  { name: 'Carlos R.', avatar: 'CR', trip: 'Hoi On a Budget', tag: 'Digital Nomade', testimonial: 'Hội An est un paradis pour nomades digitaux. Free tour de la ville, street food délicieuse, et un cadre de travail inspirant.', duration: '2 semaines', countries: 'Espagne' },
  { name: 'Mai L.', avatar: 'ML', trip: 'Saigon Explorer', tag: 'Locale', testimonial: 'J\'ai redécouvert Saigon grâce à ce tour. Les rooftops, la street food, les tunnels... Une perspective unique sur ma propre ville.', duration: '4 jours', countries: 'Vietnam' }
];

const destinations = [
  { id: 'danang', name: 'Da Nang', nameFr: 'Da Nang', nameVi: 'Đà Nẵng', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80', rating: 4.8, price: 299, dur: '3-5 jours', desc: 'Plages paradisiaques, Bà Nà Hills, pont du Dragon' },
  { id: 'hoian', name: 'Hoi An', nameFr: 'Hội An', nameVi: 'Hội An', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', rating: 4.9, price: 249, dur: '3-4 jours', desc: 'Cité des lanternes, temples, tailleurs sur mesure' },
  { id: 'halong', name: 'Ha Long Bay', nameFr: 'Baie d\'Ha Long', nameVi: 'Vịnh Hạ Long', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', rating: 4.9, price: 399, dur: '2-3 jours', desc: 'Patrimoine UNESCO, jonques, îles karstiques' },
  { id: 'ninhbinh', name: 'Ninh Binh', nameFr: 'Ninh Bình', nameVi: 'Ninh Bình', img: 'https://images.unsplash.com/photo-1590650151156-0b1a11f4b70b?w=800&q=80', rating: 4.7, price: 179, dur: '2-3 jours', desc: 'Baie d\'Ha Long terrestre, temples anciens' },
  { id: 'sapa', name: 'Sapa', nameFr: 'Sa Pa', nameVi: 'Sa Pa', img: 'https://images.unsplash.com/photo-1528234004283-15f524b7efaa?w=800&q=80', rating: 4.8, price: 219, dur: '3-4 jours', desc: 'Rizières en terrasses, ethnies, trekking' },
  { id: 'hue', name: 'Hue', nameFr: 'Hué', nameVi: 'Huế', img: 'https://images.unsplash.com/photo-1564419435730-5b65e054a2df?w=800&q=80', rating: 4.7, price: 229, dur: '2-3 jours', desc: 'Cité impériale, tombeaux royaux, cuisine royale' },
  { id: 'hcmc', name: 'Ho Chi Minh City', nameFr: 'Hô Chi Minh', nameVi: 'Sài Gòn', img: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?w=800&q=80', rating: 4.6, price: 199, dur: '3-4 jours', desc: 'Nightlife, rooftops, tunnels de Củ Chi, marchés' },
  { id: 'hanoi', name: 'Hanoi', nameFr: 'Hanoï', nameVi: 'Hà Nội', img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80', rating: 4.8, price: 189, dur: '3-4 jours', desc: 'Capitale millénaire, temple de la Littérature, street food' },
  { id: 'phuquoc', name: 'Phu Quoc', nameFr: 'Phú Quốc', nameVi: 'Phú Quốc', img: 'https://images.unsplash.com/photo-1559511260-66a72e1e2f25?w=800&q=80', rating: 4.7, price: 349, dur: '4-6 jours', desc: 'Plages de rêve, resorts de luxe, coucher de soleil' }
];

const tours = [
  { id: 1, cat: ['backpacker', 'adventure'], img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', badge: 'Best Seller', badgeType: 'best', title: 'Backpacker Vietnam', titleFr: 'Backpacker Vietnam — 30 Jours', titleVi: 'Ba lô Việt Nam', desc: 'Le Vietnam authentique du Nord au Sud en 30 jours. Hostels, bus locaux, street food, treks, rencontres avec les ethnies. L\'aventure ultime du backpacker.', dur: '30 jours', price: 500, rating: 4.8, reviews: 1243, stars: 5, icons: ['🏠 Hostels', '🚌 Bus locaux', '🍜 Street food', '🥾 Treks', '🤝 Ethnies'], included: ['Tous les hostels', 'Petits-déjeuners', 'Guide local', 'Transports', 'Activités clés', 'Assistance 24/7'], notIncluded: ['Vols internationaux', 'Assurance voyage', 'Dîners', 'Pourboires', 'Visites optionnelles'], groupSize: '4-16 pers', languages: 'FR/EN/VI', timeline: [{ time: 'Semaine 1', title: 'Nord — Hanoï & Sapa', desc: 'Découverte de Hanoï, trek Sapa chez les Hmong, rizières en terrasses.' }, { time: 'Semaine 2', title: 'Centre — Hué & Hội An', desc: 'Cité impériale, lanternes de Hội An, cours de cuisine de rue.' }, { time: 'Semaine 3', title: 'Sud — Saigon & Mékong', desc: 'Tunnels Củ Chi, delta du Mékong, marchés flottants.' }, { time: 'Semaine 4', title: 'Phú Quốc & Retour', desc: 'Plages paradisiaques, snorkeling, marché de nuit, fin du voyage.' }] },
  { id: 2, cat: ['escape', 'culture'], img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', badge: 'Populaire', badgeType: 'popular', title: 'Vietnam Escape', titleFr: 'Vietnam Escape — 15 Jours', titleVi: 'Việt Nam 15 ngày', desc: 'L\'essentiel du Vietnam en 15 jours. Équilibre parfait entre culture, nature et gastronomie. Idéal pour une première découverte du pays.', dur: '15 jours', price: 455, rating: 4.7, reviews: 2341, stars: 5, icons: ['🏛 Culture', '🌅 Nature', '🍜 Gastronomie', '🏖 Détente'], included: ['Hébergement 3★', 'Petits-déjeuners', 'Guide francophone', 'Transports', 'Entrées sites'], notIncluded: ['Vols', 'Assurance voyage', 'Repas du soir', 'Pourboires'], groupSize: '2-12 pers', languages: 'FR/EN', timeline: [{ time: 'Jour 1-4', title: 'Hanoï & Ninh Bình', desc: 'Capitale millénaire, Temple de la Littérature, baie terrestre de Ninh Bình.' }, { time: 'Jour 5-8', title: 'Ha Long & Hué', desc: 'Croisière en baie d\'Ha Long, cité impériale de Hué.' }, { time: 'Jour 9-12', title: 'Hội An & Saigon', desc: 'Lanternes de Hội An, street food Saigon, tunnels Củ Chi.' }, { time: 'Jour 13-15', title: 'Mékong & Départ', desc: 'Delta du Mékong, marchés flottants, départ de Saigon.' }] },
  { id: 3, cat: ['luxury', 'culture'], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80', badge: 'Premium', badgeType: 'trending', title: 'Golden Triangle Asia', titleFr: 'Golden Triangle Asia — 18 Jours', titleVi: 'Tam giác vàng châu Á', desc: 'Le circuit royal du Nord au Sud du Vietnam. Hôtels 3-4 étoiles, guide privé, activités premium. Vivez le Vietnam en grand confort.', dur: '18 jours', price: 1260, rating: 4.9, reviews: 876, stars: 5, icons: ['🏨 4★', '👤 Guide privé', '🚐 Transport privé', '🍽 Gastronomie'], included: ['Hôtels 3-4★', 'Guide francophone privé', 'Tous repas', 'Transports privés', 'Activités premium', 'Spa offert'], notIncluded: ['Vols internationaux', 'Assurance', 'Pourboires', 'Dépenses personnelles'], groupSize: '2-8 pers', languages: 'FR/EN', timeline: [{ time: 'Jour 1-5', title: 'Hanoï & Ha Long', desc: 'City tour Hanoï, croisière luxe en baie d\'Ha Long.' }, { time: 'Jour 6-10', title: 'Sapa & Ninh Bình', desc: 'Trek premium à Sapa, sampan privé à Tam Cốc.' }, { time: 'Jour 11-14', title: 'Hué & Hội An', desc: 'Cité impériale, lanternes, tailleur sur mesure.' }, { time: 'Jour 15-18', title: 'Saigon & Phú Quốc', desc: 'Tunnels Củ Chi, resort 5★ à Phú Quốc.' }] },
  { id: 4, cat: ['luxury', 'premium'], img: 'https://images.unsplash.com/photo-1559511260-66a72e1e2f25?w=800&q=80', badge: 'Ultra Premium', badgeType: 'best', title: 'Premium Vietnam', titleFr: 'Premium Vietnam — Tout Inclus', titleVi: 'Việt Nam cao cấp', desc: 'Le voyage ultime. Tout inclus, accompagnement personnalisé 24/7, hôtels 5 étoiles, activités sur mesure. Vous choisissez, on s\'occupe de tout.', dur: 'Sur mesure', price: 4500, rating: 5.0, reviews: 432, stars: 5, icons: ['⭐ 5★', '👤 Accompagnateur', '🚁 Sur mesure', '🍾 Champagne'], included: ['Hôtels 5★', 'Accompagnateur privé 24/7', 'Tous repas & boissons', 'Vols internes', 'Toutes activités', 'Transferts VIP', 'Assurance complète'], notIncluded: ['Vols internationaux'], groupSize: '1-6 pers', languages: 'FR/EN/VI', timeline: [{ time: 'À la carte', title: 'Votre voyage, vos règles', desc: 'Créez l\'itinéraire de vos rêves avec votre concierge dédié. Tout est possible.' }] },
  { id: 5, cat: ['beach', 'nature'], img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80', badge: 'Détente', badgeType: 'popular', title: 'Coastal Explorer', titleFr: 'Explorateur des Côtes — 10 Jours', titleVi: 'Khám phá bờ biển', desc: 'Les plus belles plages du Vietnam : Đà Nẵng, Hội An, Nha Trang, Phú Quốc. Farniente, snorkeling, couchers de soleil magiques.', dur: '10 jours', price: 890, rating: 4.7, reviews: 654, stars: 4, icons: ['🏖 Plages', '🤿 Snorkeling', '🌅 Couchers soleil', '🛥 Excursions'], included: ['Hôtels 3-4★', 'Petits-déjeuners', 'Transferts', 'Excursions plage', 'Snorkeling'], notIncluded: ['Vols', 'Repas', 'Assurance', 'Boissons'], groupSize: '2-10 pers', languages: 'EN/VI', timeline: [{ time: 'Jour 1-3', title: 'Đà Nẵng', desc: 'Plages de sable blanc, Bà Nà Hills, pont d\'or.' }, { time: 'Jour 4-6', title: 'Hội An & Nha Trang', desc: 'Vieille ville aux lanternes, plongée sous-marine.' }, { time: 'Jour 7-10', title: 'Phú Quốc', desc: 'Resort bord de mer, snorkeling, marché de nuit.' }] },
  { id: 6, cat: ['culture', 'gastronomy'], img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', badge: 'Gastronomie', badgeType: 'trending', title: 'Mekong Delta Discovery', titleFr: 'Delta du Mékong — 7 Jours', titleVi: 'Khám phá Đồng bằng sông Cửu Long', desc: 'Immergez-vous dans le delta du Mékong : marchés flottants, vergers tropicaux, cuisine locale, hébergement chez l\'habitant.', dur: '7 jours', price: 650, rating: 4.6, reviews: 543, stars: 4, icons: ['🚤 Bateau', '🍜 Cuisine locale', '🌴 Vergers', '🏡 Chez l\'habitant'], included: ['Hébergement', 'Tous repas', 'Guide local', 'Excursions bateau', 'Cours de cuisine'], notIncluded: ['Vols', 'Assurance', 'Boissons', 'Pourboires'], groupSize: '2-10 pers', languages: 'FR/EN', timeline: [{ time: 'Jour 1', title: 'Saigon → Mỹ Tho', desc: 'Route vers le delta, déjeuner sur une île de verdure.' }, { time: 'Jour 2-4', title: 'Bến Tre & Cần Thơ', desc: 'Vergers de fruits tropicaux, marché flottant Cái Răng.' }, { time: 'Jour 5-7', title: 'Phú Quốc ou Retour', desc: 'Option plage à Phú Quốc ou retour sur Saigon.' }] },
  { id: 7, cat: ['adventure', 'culture'], img: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80', badge: 'Éclair', badgeType: 'popular', title: 'Vietnam Express', titleFr: 'Vietnam Express — 7 Jours', titleVi: 'Việt Nam tốc hành', desc: 'Les incontournables du Vietnam en une semaine. Idéal pour un court séjour riche en découvertes et en émotions.', dur: '7 jours', price: 350, rating: 4.5, reviews: 1876, stars: 4, icons: ['🏛 Culture', '🍜 Street food', '🚤 Ha Long', '🏖 Plage'], included: ['Hébergement 3★', 'Petits-déjeuners', 'Guide', 'Transports', 'Croisière Ha Long'], notIncluded: ['Vols', 'Assurance', 'Repas', 'Pourboires'], groupSize: '2-14 pers', languages: 'EN', timeline: [{ time: 'Jour 1-2', title: 'Hanoï', desc: 'Vieux quartier, Temple de la Littérature, egg coffee.' }, { time: 'Jour 3-4', title: 'Ha Long', desc: 'Croisière nocturne en baie d\'Ha Long.' }, { time: 'Jour 5-7', title: 'Hội An & Départ', desc: 'Lanternes, vieille ville, plage et départ.' }] },
  { id: 8, cat: ['romantic', 'luxury'], img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', badge: 'Romantique', badgeType: 'trending', title: 'Honeymoon Paradise', titleFr: 'Voyage de Rêve — 12 Jours', titleVi: 'Thiên đường tuần trăng mật', desc: 'Le voyage parfait pour les couples. Dîners aux chandelles, resorts de luxe, massages pour deux, couchers de soleil sur la plage.', dur: '12 jours', price: 2200, rating: 4.9, reviews: 389, stars: 5, icons: ['🍷 Dîners', '💆 Spa duo', '🏖 Plage privée', '🌅 Sunset'], included: ['Resorts 5★', 'Dîners romantiques', 'Massages en couple', 'Transferts privés', 'Guide privé'], notIncluded: ['Vols', 'Assurance', 'Spa supplémentaire'], groupSize: '2 pers', languages: 'FR/EN', timeline: [{ time: 'Jour 1-4', title: 'Hanoï & Ha Long', desc: 'City tour romantique, croisière privée au coucher du soleil.' }, { time: 'Jour 5-8', title: 'Hội An & Hué', desc: 'Lanternes, dîner aux chandelles, balade en sampan.' }, { time: 'Jour 9-12', title: 'Phú Quốc', desc: 'Resort privatifs, plage, spa, dîners sur le sable.' }] }
];

const reviews = [
  { name: 'Sophie Martin', avatar: 'SM', trip: 'Ha Long Luxury Cruise', text: 'Une expérience absolument incroyable. Du début à la fin, tout était parfait. Le personnel, la nourriture, les paysages... Un voyage de luxe qui restera gravé dans nos mémoires.', rating: 5 },
  { name: 'Jean-Pierre Dubois', avatar: 'JD', trip: 'Sapa Trek', text: 'Les rizières de Sa Pa sont à couper le souffle. Notre guide nous a fait découvrir des endroits magiques. Les nuits chez l\'habitant étaient authentiques et chaleureuses.', rating: 5 },
  { name: 'Marie & Thomas', avatar: 'MT', trip: 'Hoi An Discovery', text: 'Hội An est la plus belle ville que nous ayons visitée. Les lanternes la nuit sont féeriques. Le cours de cuisine était génial et le tailleur nous a fait des vêtements magnifiques.', rating: 5 },
  { name: 'Ahmed Benali', avatar: 'AB', trip: 'Saigon Explorer', text: 'Saigon est une ville électrisante. Les tunnels de Củ Chi sont impressionnants. La street food est divine. Guide parlant français impeccable.', rating: 4 },
  { name: 'Claire Lefevre', avatar: 'CL', trip: 'Phu Quoc Escape', text: 'Le resort était paradisiaque. Plage privée, eau cristalline, coucher de soleil magique. Le snorkeling était incroyable. Nous reviendrons !', rating: 5 },
  { name: 'Pierre Moreau', avatar: 'PM', trip: 'Ninh Binh Gems', text: 'Ninh Bình mérite vraiment le détour. La balade en sampan dans Tam Cốc était magique. Le point de vue de Múa offre une vue à 360° sur les rizières.', rating: 5 }
];

const blogPosts = [
  { cat: 'Culture', title: 'Les temples à ne pas manquer au Vietnam', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=60', excerpt: 'Du Temple de la Littérature à Hanoï aux pagodes de Hội An, découvrez les joyaux spirituels du Vietnam.', date: '12 Jan 2026', read: '5 min' },
  { cat: 'Gastronomie', title: 'Guide de la street food vietnamienne', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=60', excerpt: 'Pho, bánh mì, bún chả — plongez dans les saveurs authentiques du Vietnam.', date: '8 Jan 2026', read: '7 min' },
  { cat: 'Voyage', title: 'Quand partir au Vietnam ? Saisons et conseils', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=60', excerpt: 'Le guide complet pour choisir la meilleure période selon vos destinations et activités.', date: '3 Jan 2026', read: '6 min' }
];

/* ============ HELPERS ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const langMap = { en: 'name', fr: 'nameFr', vi: 'nameVi' };
let currentLang = 'fr';
let currentCurrency = 'USD';
const rates = { USD: 1, EUR: .92, VND: 25450 };

function t(str, lang = currentLang) {
  return str; // basic i18n via data attributes would be better
}

function formatPrice(price, currency = currentCurrency) {
  if (price == null) return 'Sur devis';
  const sym = { USD: '$', EUR: '€', VND: '₫' };
  const s = sym[currency] || '€';
  if (currency === 'VND') return Math.round(price * rates.VND).toLocaleString() + '₫';
  return s + Number(price).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function getLangName(dest) {
  return dest[langMap[currentLang]] || dest.name;
}
function getTourTitle(t) {
  const map = { en: 'title', fr: 'titleFr', vi: 'titleVi' };
  return t[map[currentLang]] || t.title;
}

/* ============ LOADING SCREEN ============ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = $('#loader');
    if (loader) loader.classList.add('hidden');
  }, 2000);
});

/* ============ HEADER ============ */
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = $('.header');
  if (!header) return;
  const y = window.scrollY;
  if (y > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  // Back to top
  const bt = $('#backTop');
  if (bt) {
    if (y > 500) bt.classList.add('show');
    else bt.classList.remove('show');
  }
});

/* ============ MOBILE MENU ============ */
function toggleMobile() {
  const menu = $('.mobile-menu');
  const overlay = $('.mobile-overlay');
  const toggle = $('.mobile-toggle');
  if (!menu) return;
  menu.classList.toggle('open');
  overlay.classList.toggle('show');
  toggle.classList.toggle('active');
}

function closeMobile() {
  const menu = $('.mobile-menu');
  const overlay = $('.mobile-overlay');
  const toggle = $('.mobile-toggle');
  if (!menu) return;
  menu.classList.remove('open');
  overlay.classList.remove('show');
  toggle.classList.remove('active');
}

/* ============ TOAST ============ */
function showToast(msg, icon = 'check-circle') {
  const t = $('#toast');
  if (!t) return;
  t.querySelector('i').className = `fas fa-${icon}`;
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

/* ============ MUSIC ============ */
let musicPlaying = false;
function toggleMusic() {
  const audio = $('#asiaMusic');
  const btn = $('#musicBtn');
  if (!audio) return;
  if (musicPlaying) {
    audio.pause();
    btn.innerHTML = '<i class="fas fa-music"></i>';
    btn.style.color = '';
  } else {
    audio.volume = 0.3;
    audio.play().then(() => {
      btn.innerHTML = '<i class="fas fa-pause"></i>';
      btn.style.color = 'var(--secondary)';
    }).catch(() => {
      showToast('Cliquez sur le lecteur pour lancer la musique', 'info-circle');
    });
  }
  musicPlaying = !musicPlaying;
}

/* ============ THEME ============ */
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('hs-theme', next);
  const icon = $('#themeIcon');
  if (icon) icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

const savedTheme = localStorage.getItem('hs-theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

/* ============ CURRENCY ============ */
function setCurrency(val) {
  currentCurrency = val;
  localStorage.setItem('hs-currency', val);
  renderTours();
  renderDestinations();
}
const savedCurrency = localStorage.getItem('hs-currency');
if (savedCurrency) currentCurrency = savedCurrency;

/* ============ LANGUAGE ============ */
function setLang(val) {
  currentLang = val;
  localStorage.setItem('hs-lang', val);
  renderDestinations();
  updateUILang();
}

function updateUILang() {
  const els = $$('[data-lang]');
  els.forEach(el => {
    const key = el.dataset.lang;
    // Simple UI text translation would go here
  });
}

/* ============ DESTINATIONS ============ */
function renderDestinations() {
  const grid = $('#destGrid');
  if (!grid) return;
  grid.innerHTML = destinations.map(d => `
    <div class="dest-card reveal" onclick="showToast('Découvrez nos circuits pour ' + '${getLangName(d)}', 'map-marker-alt')">
      <img src="${d.img}" alt="${getLangName(d)}" loading="lazy">
      <div class="dest-overlay"></div>
      <div class="dest-rating"><i class="fas fa-star"></i> ${d.rating}</div>
      <div class="dest-info">
        <h3>${getLangName(d)}</h3>
        <div class="dest-meta">
          <span><i class="far fa-clock"></i> ${d.dur}</span>
          <span><i class="fas fa-star"></i> ${d.rating}</span>
        </div>
        <div class="dest-price">${formatPrice(d.price)}</div>
      </div>
    </div>
  `).join('');
}

/* ============ TOURS ============ */
function renderTours(filter = 'all') {
  const grid = $('#tourGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? tours : tours.filter(t => t.cat.includes(filter));
  grid.innerHTML = filtered.map(t => `
    <div class="tour-card reveal" onclick="openTourDetail(${t.id})">
      <div class="tour-card-img">
        <img src="${t.img}" alt="${getTourTitle(t)}" loading="lazy">
        <span class="tour-badge ${t.badgeType}">${t.badge}</span>
        <div class="tour-wishlist" onclick="event.stopPropagation()"><i class="far fa-heart"></i></div>
      </div>
      <div class="tour-card-body">
        <div class="tm">
          <span><i class="far fa-clock"></i> ${t.dur}</span>
          <span><i class="fas fa-star"></i> ${t.rating} (${t.reviews})</span>
        </div>
        <h3>${getTourTitle(t)}</h3>
        <p class="tdesc">${t.desc}</p>
        <div class="tour-icons">
          ${t.icons.map(ic => `<span>${ic}</span>`).join('')}
        </div>
        <div class="tour-footer">
          <span class="price">${formatPrice(t.price)}</span>
          <div class="stars">${'★'.repeat(t.stars)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============ FILTERS ============ */
function setFilter(f) {
  $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  renderTours(f);
}

/* ============ TOUR DETAIL ============ */
function openTourDetail(id) {
  const t = tours.find(t => t.id === id);
  if (!t) return;
  const panel = $('#tourDetail');
  if (!panel) return;
  panel.innerHTML = `
    <button class="td-close" onclick="closeTourDetail()"><i class="fas fa-times"></i></button>
    <div class="td-inner">
      <div class="td-gallery">
        <div class="main"><img src="${t.img}" alt="${t.title}"></div>
        <div class="side">
          <div><img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=60" alt="" loading="lazy"></div>
          <div><img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=60" alt="" loading="lazy"></div>
          <div><img src="https://images.unsplash.com/photo-1528234004283-15f524b7efaa?w=400&q=60" alt="" loading="lazy"></div>
          <div><img src="https://images.unsplash.com/photo-1559511260-66a72e1e2f25?w=400&q=60" alt="" loading="lazy"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 300px;gap:40px">
        <div>
          <span class="tour-badge ${t.badgeType}" style="display:inline-block;margin-bottom:8px">${t.badge}</span>
          <h2 style="font-family:var(--font-serif);font-size:1.6rem;font-weight:400;margin-bottom:6px">${getTourTitle(t)}</h2>
          <p style="font-size:.8rem;color:var(--text2);line-height:1.6;margin-bottom:16px">${t.desc}</p>
          <div class="td-meta">
            <div class="td-meta-item"><div class="v">${formatPrice(t.price)}</div><div class="l">${formatPrice(t.price).includes('Sur') ? 'Sur mesure' : 'Par personne'}</div></div>
            <div class="td-meta-item"><div class="v">${t.dur}</div><div class="l">Durée</div></div>
            <div class="td-meta-item"><div class="v">${t.rating}★</div><div class="l">${t.reviews} avis</div></div>
            <div class="td-meta-item"><div class="v">${t.groupSize}</div><div class="l">Participants</div></div>
            <div class="td-meta-item"><div class="v">${t.languages}</div><div class="l">Langues</div></div>
          </div>
          <div class="td-highlights">${t.icons.map(ic => `<span>${ic}</span>`).join('')}</div>
          <div class="td-tabs">
            <button class="td-tab active" onclick="switchTab(this,'itin')">Programme</button>
            <button class="td-tab" onclick="switchTab(this,'incl')">Inclus/Exclu</button>
            <button class="td-tab" onclick="switchTab(this,'map')">Carte</button>
            <button class="td-tab" onclick="switchTab(this,'reviews')">Avis</button>
          </div>
          <!-- Itinerary -->
          <div class="td-section active" id="tab-itin">
            <div class="td-itinerary">
              ${t.timeline.map((step, i) => `
                <div class="step">
                  <div class="num">${i+1}</div>
                  <div><h4>${step.time} — ${step.title}</h4><p>${step.desc}</p></div>
                </div>
              `).join('')}
            </div>
          </div>
          <!-- Included/Excluded -->
          <div class="td-section" id="tab-incl">
            <div class="td-included">
              <div class="check">
                <h4><i class="fas fa-check-circle" style="color:var(--secondary)"></i> Inclus</h4>
                ${t.included.map(i => `<li><i style="color:var(--secondary)" class="fas fa-check"></i> ${i}</li>`).join('')}
              </div>
              <div class="cross">
                <h4><i class="fas fa-times-circle" style="color:var(--accent)"></i> Non inclus</h4>
                ${t.notIncluded.map(i => `<li><i style="color:var(--accent)" class="fas fa-times"></i> ${i}</li>`).join('')}
              </div>
            </div>
          </div>
          <!-- Map -->
          <div class="td-section" id="tab-map">
            <div class="td-map" id="tourMap"></div>
          </div>
          <!-- Reviews -->
          <div class="td-section" id="tab-reviews">
            ${reviews.slice(0,3).map(r => `
              <div class="td-review-card">
                <div class="rs">${'★'.repeat(r.rating)}</div>
                <p>"${r.text.slice(0,100)}..."</p>
                <div class="ra2">
                  <div class="av">${r.avatar}</div>
                  <div><div style="font-size:.7rem;font-weight:500">${r.name}</div><div style="font-size:.5rem;color:var(--text3)">${r.trip}</div></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <!-- Sticky Booking -->
        <div class="td-booking-sticky">
          <div class="td-booking-card">
            <div class="bp">${formatPrice(t.price)}</div>
            <p style="font-size:.55rem;color:var(--text3);margin:4px 0 12px">Devis personnalisé gratuit</p>
            <input type="date" class="calendar" id="tdDate" min="${new Date().toISOString().split('T')[0]}">
            <div class="guests">
              <button onclick="changeGuests(-1)">−</button>
              <span id="tdGuests">2</span>
              <button onclick="changeGuests(1)">+</button>
            </div>
            <button class="btn-submit" style="width:100%;justify-content:center" onclick="closeTourDetail();openBooking(${id})"><i class="fas fa-calendar-check"></i> Réserver</button>
            <div style="display:flex;gap:8px;justify-content:center;margin-top:10px;font-size:.65rem;color:var(--text3)">
              <span><i class="fab fa-paypal"></i></span>
              <span><i class="fas fa-credit-card"></i></span>
              <span><i class="fas fa-lock"></i> Sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Init map after DOM update
  setTimeout(() => initTourMap(), 300);
}

let tdGuestCount = 2;
function changeGuests(delta) {
  tdGuestCount = Math.max(1, Math.min(20, tdGuestCount + delta));
  const el = $('#tdGuests');
  if (el) el.textContent = tdGuestCount;
}

function switchTab(btn, tabId) {
  $$('.td-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  $$('.td-section').forEach(s => s.classList.remove('active'));
  const target = $('#tab-' + tabId);
  if (target) target.classList.add('active');
  if (tabId === 'map') setTimeout(() => initTourMap(), 200);
}

function initTourMap() {
  const container = $('#tourMap');
  if (!container || container._map) return;
  try {
    const map = L.map(container).setView([14.0583, 108.2772], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '&copy; OpenStreetMap'
    }).addTo(map);
    // Markers for destinations
    const markers = [
      { lat: 21.0285, lng: 105.8542, name: 'Hanoï' },
      { lat: 20.9101, lng: 107.1839, name: 'Baie d\'Ha Long' },
      { lat: 15.8801, lng: 108.3380, name: 'Hội An' },
      { lat: 16.4637, lng: 107.5909, name: 'Hué' },
      { lat: 22.3359, lng: 103.8404, name: 'Sa Pa' },
      { lat: 20.2195, lng: 105.9104, name: 'Ninh Bình' },
      { lat: 10.8231, lng: 106.6297, name: 'Saigon' },
      { lat: 10.2899, lng: 103.9840, name: 'Phú Quốc' }
    ];
    markers.forEach(m => {
      L.marker([m.lat, m.lng]).addTo(map)
        .bindPopup(`<strong>${m.name}</strong><br>Circuit disponible`);
    });
    container._map = map;
    setTimeout(() => map.invalidateSize(), 300);
  } catch(e) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3)"><i class="fas fa-map-marked-alt" style="font-size:2rem;display:block;margin-bottom:8px"></i>Carte interactive — <a href="https://www.openstreetmap.org/?mlat=14.06&mlon=108.28#map=6/14.06/108.28" target="_blank" style="color:var(--primary)">Voir sur OpenStreetMap</a></div>';
  }
}

function closeTourDetail() {
  const panel = $('#tourDetail');
  if (panel) panel.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============ BOOKING MODAL ============ */
function openBooking(tourId = null) {
  const modal = $('#bookingModal');
  if (!modal) return;
  modal.classList.add('show');
  if (tourId) {
    const sel = modal.querySelector('select[name="tour"]');
    if (sel && sel.options[tourId]) sel.selectedIndex = tourId;
  }
}

function closeBooking() {
  const modal = $('#bookingModal');
  if (modal) modal.classList.remove('show');
}

function submitBooking(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const obj = {};
  data.forEach((v, k) => obj[k] = v);
  console.log('Booking:', obj);
  showToast('Réservation reçue ! Confirmation envoyée par email.', 'check-circle');
  closeBooking();
}

/* ============ REVIEWS ============ */
function renderReviews() {
  const grid = $('#reviewGrid');
  if (!grid) return;
  grid.innerHTML = reviews.map(r => `
    <div class="review-card reveal">
      <div class="stars">${'★'.repeat(r.rating)}</div>
      <q>"${r.text}"</q>
      <div class="ra">
        <div class="av">${r.avatar}</div>
        <div class="ri">
          <h4>${r.name}</h4>
          <p>${r.trip}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============ BLOG ============ */
function renderBlog() {
  const grid = $('#blogGrid');
  if (!grid) return;
  grid.innerHTML = blogPosts.map(p => `
    <div class="blog-card reveal" onclick="showToast('Article: ${p.title}', 'newspaper')">
      <div class="blog-card-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
      <div class="blog-card-body">
        <div class="blog-cat">${p.cat}</div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="blog-meta">
          <span><i class="far fa-calendar"></i> ${p.date}</span>
          <span><i class="far fa-clock"></i> ${p.read}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============ COUNTERS ============ */
function animateCounters() {
  $$('.stat-num').forEach(el => {
    const target = parseInt(el.textContent.replace(/[^0-9]/g, ''));
    if (!target) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      el.textContent = current.toLocaleString() + (el.textContent.includes('★') ? '★' : '');
    }, 25);
    el._counter = interval;
  });
}

/* ============ SCROLL REVEAL ============ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counters once
        if (entry.target.classList.contains('stats-row') && !entry.target._counted) {
          entry.target._counted = true;
          animateCounters();
        }
      }
    });
  }, { threshold: .1, rootMargin: '0px 0px -50px 0px' });
  $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
}

/* ============ MOUSE FOLLOWER ============ */
function initCursor() {
  const dot = document.createElement('div');
  dot.className = 'cursor-follower';
  document.body.appendChild(dot);
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function moveDot() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    requestAnimationFrame(moveDot);
  }
  moveDot();
  // Hover effect on clickable elements
  $$('a, button, .tour-card, .dest-card, .blog-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hover'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
  });
}

/* ============ ADMIN PANEL ============ */
function toggleAdmin() {
  const panel = $('#adminPanel');
  if (panel) panel.classList.toggle('open');
}

function saveTourEdit() {
  const id = parseInt($('#adminTourId').value);
  const idx = tours.findIndex(t => t.id === id);
  if (idx === -1) { showToast('Tour ID invalide', 'times-circle'); return; }
  tours[idx].title = $('#adminTitle').value || tours[idx].title;
  tours[idx].price = parseInt($('#adminPrice').value) || tours[idx].price;
  tours[idx].dur = $('#adminDur').value || tours[idx].dur;
  showToast('Tour mis à jour !', 'check-circle');
  renderTours();
  updateAdminList();
}

function updateAdminList() {
  const sel = $('#adminTourId');
  if (!sel) return;
  sel.innerHTML = tours.map(t => `<option value="${t.id}">#${t.id} — ${t.title}</option>`).join('');
}

function loadTourAdmin() {
  const id = parseInt($('#adminTourId').value);
  const t = tours.find(t => t.id === id);
  if (!t) return;
  $('#adminTitle').value = t.title;
  $('#adminPrice').value = t.price;
  $('#adminDur').value = t.dur;
}

/* ============ CONTACT FORM ============ */
function submitContact(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const obj = {};
  data.forEach((v, k) => obj[k] = v);
  console.log('Contact:', obj);
  showToast('Message envoyé ! Nous vous répondons sous 24h.', 'check-circle');
  e.target.reset();
}

/* ============ FAQ ============ */
function toggleFaq(el) {
  el.classList.toggle('open');
}

/* ============ COOKIE CONSENT ============ */
function acceptCookies() {
  localStorage.setItem('hs-cookies', 'accepted');
  $('#cookieConsent').classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('hs-cookies', 'declined');
  $('#cookieConsent').classList.remove('show');
}

/* ============ PAYMENT GATEWAYS ============ */
function payWith(method) {
  const names = { paypal: 'PayPal', stripe: 'Stripe', checkout: '2Checkout' };
  showToast(`Redirection vers ${names[method] || method}...`, 'credit-card');
  // In production, redirect to payment gateway:
  // window.location.href = `https://www.paypal.com/checkout?...`;
}

/* ============ NEWSLETTER ============ */
function submitNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value.trim()) {
    showToast('Merci ! Vous êtes inscrit à notre newsletter.', 'check-circle');
    input.value = '';
  }
}

/* ============ TRIP CONFIGURATOR ============ */
let configState = { package: null, activities: [], total: 0 };

function selectPackage(id) {
  configState.package = id;
  configState.activities = [];
  renderConfigurator();
}

function toggleActivity(id) {
  const idx = configState.activities.indexOf(id);
  if (idx > -1) configState.activities.splice(idx, 1);
  else configState.activities.push(id);
  renderConfigurator();
}

function getTotal() {
  const pkg = basePackages.find(p => p.id === configState.package);
  let total = pkg ? pkg.basePrice : 0;
  configState.activities.forEach(aid => {
    const act = activitiesList.find(a => a.id === aid);
    if (act) total += act.price;
  });
  return total;
}

function renderConfigurator() {
  const container = $('#builderContainer');
  if (!container) return;
  const pkg = basePackages.find(p => p.id === configState.package);
  const total = getTotal();

  container.innerHTML = `
    <div class="config-step">
      <h3>1. Choisis ton pack de base</h3>
      <div class="config-packages">
        ${basePackages.map(p => `
          <div class="config-pkg ${configState.package === p.id ? 'selected' : ''}" onclick="selectPackage('${p.id}')">
            <img src="${p.img}" alt="${p.nameFr}" loading="lazy">
            <div class="config-pkg-info">
              <h4>${p.nameFr}</h4>
              <span class="config-pkg-price">${formatPrice(p.basePrice)}</span>
              <span class="config-pkg-dur">${p.dur}</span>
              <p>${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${pkg ? `
    <div class="config-step">
      <h3>2. Ajoute des activités <span style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:400">(optionnel — prix variable)</span></h3>
      <div class="config-activities">
        ${activitiesList.map(a => {
          const selected = configState.activities.includes(a.id);
          return `
            <div class="config-act ${selected ? 'selected' : ''}" onclick="toggleActivity('${a.id}')">
              <div class="config-act-check">${selected ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}</div>
              <i class="fas ${a.icon}"></i>
              <div class="config-act-info">
                <span class="config-act-name">${a.name}</span>
                <span class="config-act-price">+${formatPrice(a.price)}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="config-step config-summary">
      <h3>3. Récapitulatif</h3>
      <div class="config-total-card">
        <div class="config-total-row">
          <span>Pack : ${pkg.nameFr}</span>
          <span>${formatPrice(pkg.basePrice)}</span>
        </div>
        ${configState.activities.map(aid => {
          const act = activitiesList.find(a => a.id === aid);
          return act ? `
            <div class="config-total-row config-total-act">
              <span><i class="fas ${act.icon}" style="width:16px;opacity:.5"></i> ${act.name}</span>
              <span>+${formatPrice(act.price)}</span>
            </div>
          ` : '';
        }).join('')}
        <div class="config-total-divider"></div>
        <div class="config-total-row config-total-final">
          <span>Total</span>
          <span>${formatPrice(total)}</span>
        </div>
      </div>
      <div class="config-actions">
        <button class="builder-next" onclick="configCheckout()"><i class="fas fa-credit-card"></i> Checkout</button>
        <button class="builder-prev" onclick="configContact()" style="border-color:var(--secondary);color:var(--secondary)"><i class="fas fa-comments"></i> Contacter un conseiller</button>
        <button class="builder-prev" onclick="resetConfig()" style="background:transparent;border:none;color:rgba(255,255,255,.3)"><i class="fas fa-redo"></i> Recommencer</button>
      </div>
    </div>
    ` : ''}
  `;
}

function configCheckout() {
  const total = getTotal();
  showToast(`🛒 Redirection vers le paiement (${formatPrice(total)})...`, 'credit-card');
  openBooking();
}

function configContact() {
  const total = getTotal();
  const pkg = basePackages.find(p => p.id === configState.package);
  showToast(`📩 Un conseiller vous contacte pour "${pkg ? pkg.nameFr : 'Votre voyage'}" (${formatPrice(total)})`, 'comments');
  openBooking();
}

function resetConfig() {
  configState = { package: null, activities: [], total: 0 };
  renderConfigurator();
}
function initBuilder() { renderConfigurator(); }

/* ============ BACKPACKER CUSTOMERS ============ */
function renderBpCustomers() {
  const grid = $('#bpGrid');
  if (!grid) return;
  grid.innerHTML = bpCustomers.map(c => `
    <div class="bp-card reveal">
      <div class="bp-tag">${c.tag}</div>
      <div class="bp-avatar">${c.avatar}</div>
      <h4>${c.name}</h4>
      <p>${c.trip} · ${c.duration} · ${c.countries}</p>
      <div class="bp-testimonial">"${c.testimonial}"</div>
    </div>
  `).join('');
}

/* ============ PARALLAX SCROLL ============ */
function initParallax() {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    $$('.parallax-bg').forEach(el => {
      const speed = parseFloat(el.dataset.speed || .3);
      el.style.transform = `translateY(${y * speed}px)`;
    });
  });
}

/* ============ 3D TILT ============ */
function initTilt() {
  $$('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = (x / r.width - .5) * 10, ry = (y / r.height - .5) * 10;
      card.style.setProperty('--rx', rx);
      card.style.setProperty('--ry', ry);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', 0);
      card.style.setProperty('--ry', 0);
    });
  });
}

/* ============ TEXT REVEAL ON SCROLL ============ */
function initTextReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        const spans = entry.target.querySelectorAll('span');
        spans.forEach((s, i) => s.style.setProperty('--i', i));
      }
    });
  }, { threshold: .3 });
  $$('.text-reveal').forEach(el => obs.observe(el));
}

/* ============ SMOOTH SECTION COLOR TRANSITION ============ */
function initSectionTransitions() {
  const sections = $$('.section-alt, .hero, .cta, .builder-section, .bp-customers');
  const update = () => {
    const y = window.scrollY + window.innerHeight / 2;
    sections.forEach(s => {
      const r = s.getBoundingClientRect();
      const center = r.top + r.height / 2;
      // subtle color influence based on section
    });
  };
  window.addEventListener('scroll', update);
}

/* ============ MAGNETIC BUTTONS ============ */
function initMagnetic() {
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * .3}px, ${y * .3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderTours();
  renderReviews();
  renderBlog();
  initReveal();
  initCursor();
  updateAdminList();

  // Set currency selects
  $$('.currency-select').forEach(sel => {
    sel.value = currentCurrency;
    sel.addEventListener('change', () => setCurrency(sel.value));
  });

  // Set lang selects
  $$('.lang-select').forEach(sel => {
    sel.value = currentLang;
    sel.addEventListener('change', () => setLang(sel.value));
  });

  // Wishlist toggle
  document.addEventListener('click', e => {
    const heart = e.target.closest('.tour-wishlist');
    if (heart) {
      e.stopPropagation();
      heart.querySelector('i').classList.toggle('far');
      heart.querySelector('i').classList.toggle('fas');
      showToast(heart.querySelector('i').classList.contains('fas') ? 'Ajouté aux favoris ❤️' : 'Retiré des favoris');
    }
  });

  // Testimonials flip effect
  $$('.review-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
  });

  // Cookie consent
  if (!localStorage.getItem('hs-cookies')) {
    setTimeout(() => {
      const cc = $('#cookieConsent');
      if (cc) cc.classList.add('show');
    }, 1500);
  }

  // Load Leaflet if map is needed
  if (typeof L === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }

  // NEW FEATURES
  initBuilder();
  initParallax();
  initTilt();
  initTextReveal();
  initSectionTransitions();
  initMagnetic();
  renderBpCustomers();
});
