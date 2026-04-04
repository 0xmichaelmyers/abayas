export interface Collection {
  slug: string;
  title: string;
  description: string;
  philosophy: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: 'signature',
    title: 'The Signature Series',
    description: 'Iconic silhouettes that represent the architectural soul of our house.',
    philosophy: 'Our house signature revolves around the balance of structure and movement. Each piece is a fundamental expression of our design language—unveiling beauty through precision.',
    image: '/Signature-Abayas-collection-image.png'
  },
  {
    slug: 'occasion',
    title: 'The Occasion Room',
    description: 'Breathtaking designs for the moments that deserve to be remembered.',
    philosophy: 'Elevation is a ritual. For our occasion pieces, we prioritize fluidity and the play of light over satin textures, ensuring every entrance is an architectural statement.',
    image: '/Occasion-Abayas-collection-image.png'
  },
  {
    slug: 'embellished',
    title: 'The Hand-Crafted Detail',
    description: 'Intricate beadwork and subtle luxury hand-stitched by our finest artisans.',
    philosophy: 'The hand of the maker is visible in every stitch. We believe in the beauty of the microscopic—the subtle sparkle that only reveals itself when the light and movement align.',
    image: '/Embellished-Abayas-collection-image.png'
  },
  {
    slug: 'pleated',
    title: 'The Pleated Drape',
    description: 'Fluid grace expressed through microscopic folds and sophisticated texture.',
    philosophy: 'Pleating provides an infinite canvas for movement. By manipulating the fabric into architectural folds, we create a silhouette that expands and contracts with the wearer\'s grace.',
    image: '/Pleated-Abayas-collection-image.png'
  },
  {
    slug: 'minimalist',
    title: 'The Pure Minimalist',
    description: 'Silent luxury found in the purity of line and absence of clutter.',
    philosophy: 'True luxury is quiet. We strip away the unnecessary to reveal the essential beauty of the form. No distractions, only the purest expression of modest fashion.',
    image: '/Minimal-Abayas-collection-image.png'
  },
  {
    slug: 'statement-black',
    title: 'The Statement Black',
    description: 'Bold, unapologetic expressions of the ultimate timeless hue.',
    philosophy: 'Black is not a color—it is a statement of intent. We utilize the deepest pitch-black fabrics to create shadows and highlights that emphasize the architectural silhouette.',
    image: '/Statement-Black-collection-image.png'
  },
  {
    slug: 'limited-edition',
    title: 'The Limited Archive',
    description: 'Exclusive pieces woven from the most precious textiles in existence.',
    philosophy: 'Rarity is a form of luxury. This archive contains our most experimental and precious works, produced in strictly limited runs that will never be replicated.',
    image: '/Limited-Edition-collection-image.png'
  },
  {
    slug: 'evening',
    title: 'The Celestial Evening',
    description: 'Dramatic trains and deep palettes curated for the luminous night.',
    philosophy: 'The night requires a different weight. Our evening gowns are designed with floor-sweeping grace and deep, moody palettes that mirror the celestial sky.',
    image: '/Evening-Abayas-collection-images.png'
  },
]
