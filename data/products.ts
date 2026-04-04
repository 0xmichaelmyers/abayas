export interface Product {
  id: string;
  slug: string;
  name: string;
  price: string;
  img: string;
  tag: string | null;
  description: string;
  gallery: string[];
  details: string[];
  collectionSlug: string;
}

export const products: Product[] = [
  // Signature
  { 
    id: 'signature-abaya-1',
    slug: 'signature-abaya-1',
    name: 'The Sovereign Signature', 
    price: '4,500', 
    img: '/Signature-Abayas-collection-image.png', 
    tag: 'Iconic',
    description: 'The definitive expression of our house codes. Crafted with an architectural silhouette that defines modern modest luxury.',
    gallery: ['/Signature-Abayas-collection-image.png', '/Signature-Abayas-1.png', '/Signature-Abayas-2.png'],
    details: ['Premium wrinkle-free fabric', 'Breathable and lightweight', 'Signature modest fit'],
    collectionSlug: 'signature'
  },
  { 
    id: 'signature-abaya-2',
    slug: 'signature-abaya-2',
    name: 'Atelier Classic', 
    price: '4,200', 
    img: '/Signature-Abayas-1.png', 
    tag: 'New',
    description: 'A refined version of our classic silhouette, emphasizing ease of movement and balanced proportions.',
    gallery: ['/Signature-Abayas-1.png', '/Signature-Abayas-collection-image.png'],
    details: ['Daily luxury weight', 'Hand-finished edges', 'Minimalist detailing'],
    collectionSlug: 'signature'
  },

  // Occasion
  { 
    id: 'occasion-abaya-1',
    slug: 'occasion-abaya-1',
    name: 'Royal Drape', 
    price: '5,200', 
    img: '/Occasion-Abayas-collection-image.png', 
    tag: 'Bestseller',
    description: 'Dressed for every moment, the Occasion Abaya features a flowy, elegant silhouette that makes you stand out at any special event.',
    gallery: ['/Occasion-Abayas-collection-image.png', '/Product-1.png', '/Product-2.png'],
    details: ['Luxury satin finish', 'Includes matching belt', 'Elegant drapey sleeves'],
    collectionSlug: 'occasion'
  },

  // Embellished
  { 
    id: 'embellished-abaya-1',
    slug: 'embellished-abaya-1',
    name: 'Midnight Pearl', 
    price: '4,800', 
    img: '/Embellished-Abayas-collection-image.png', 
    tag: 'Handcrafted',
    description: 'Intricate detail, pure luxury. This Embellished Abaya is meticulously hand-beaded to provide a stunning visual texture.',
    gallery: ['/Embellished-Abayas-collection-image.png', '/Product-3.png', '/Product-4.png'],
    details: ['Hand-sewn embellishments', 'Premium Nada fabric', 'Gentle cold wash only'],
    collectionSlug: 'embellished'
  },

  // Pleated
  { 
    id: 'pleated-abaya-1',
    slug: 'pleated-abaya-1',
    name: 'Infinite Fold', 
    price: '3,900', 
    img: '/Pleated-Abayas-collection-image.png', 
    tag: null,
    description: 'Fluid grace in every fold. Our Pleated Abaya offers exceptional movement and a sophisticated profile suitable for any time of day.',
    gallery: ['/Pleated-Abayas-collection-image.png', '/collection-1.png', '/collection-2.png'],
    details: ['Micro-pleated georgette', 'Opaque and layered', 'Subtle flared hem'],
    collectionSlug: 'pleated'
  },

  // Minimalist
  { 
    id: 'minimal-abaya-1',
    slug: 'minimal-abaya-1',
    name: 'Pure Essence', 
    price: '3,200', 
    img: '/Minimal-Abayas-collection-image.png', 
    tag: 'Essential',
    description: 'Understated, effortless elegance. The Minimal Abaya brings simplicity back to the forefront of modern modest fashion.',
    gallery: ['/Minimal-Abayas-collection-image.png', '/Product-1.png', '/Product-4.png'],
    details: ['Everyday casual fit', 'Soft cotton-blend', 'Concealed front pockets'],
    collectionSlug: 'minimalist'
  },

  // Statement Black
  { 
    id: 'statement-black-abaya-1',
    slug: 'statement-black-abaya-1',
    name: 'Noir Architectural', 
    price: '4,100', 
    img: '/Statement-Black-collection-image.png', 
    tag: 'Bold',
    description: 'Bold. Timeless. Unapologetic. The true black hue of this abaya ensures an elegant statement is made without a single word.',
    gallery: ['/Statement-Black-collection-image.png', '/rectangle-2.png', '/rectangle-3.png'],
    details: ['Pitch black coloring', 'Wrinkle-resistant', 'Flowing open-front optional design'],
    collectionSlug: 'statement-black'
  },

  // Limited Edition
  { 
    id: 'limited-edition-abaya-1',
    slug: 'limited-edition-abaya-1',
    name: 'Heritage Gold', 
    price: '6,500', 
    img: '/Limited-Edition-collection-image.png', 
    tag: 'Exclusive',
    description: 'Exclusive pieces, rare beauty. Woven from the finest threads available, this highly limited run is the crown jewel of our collection.',
    gallery: ['/Limited-Edition-collection-image.png', '/collection-3.png', '/heritage-image.png'],
    details: ['Limited to 50 pieces', 'Pure silk blend', 'Exclusive embroidery pattern'],
    collectionSlug: 'limited-edition'
  },

  // Evening
  { 
    id: 'evening-abaya-1',
    slug: 'evening-abaya-1',
    name: 'Celestial Train', 
    price: '5,500', 
    img: '/Evening-Abayas-collection-images.png', 
    tag: null,
    description: 'For your most luminous nights. Deep hues and a dramatic train make the Evening Abaya perfect for galas, dinners, and events.',
    gallery: ['/Evening-Abayas-collection-images.png', '/Product-2.png', '/Product-3.png'],
    details: ['Rich color palette', 'Floor-sweeping train', 'Custom tailoring available'],
    collectionSlug: 'evening'
  },
]
