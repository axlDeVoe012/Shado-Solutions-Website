// Centralized assets management
export const assets = {
  // Logos
  logos: {
    main: "/assets/img/logo.png",
    secondary: "/assets/img/logo2.png",
    light: "/assets/img/lg.png",
    dark: "/assets/img/lg2.png",
    slide: "/assets/img/slide/slide-1_1.webp",
  },

  // Hero section
  hero: {
    background: "/assets/img/hero-bg.jpg",
    background1: "/assets/img/hero-bg1.png",
  },

  // Team members
  team: {
    siviwe: "/assets/img/team/siviwe.webp",
    silver: "/assets/img/team/silver.webp",
    qeen: "/assets/img/team/qeen.webp",
    nonku: "/assets/img/team/nonku.webp",
    masego: "/assets/img/team/Masego2.webp",
    dipono: "/assets/img/team/dipono.jpg",
    ayu: "/assets/img/team/ayu.webp",
    simon: "/assets/img/team/simon.webp",
    sako: "/assets/img/team/sako.webp",
    itu: "/assets/img/team/itu.webp",
  },

  // Slideshow images
  slides: {
    tvh1: "/assets/img/slide/tvh1.webp",
    tvh2: "/assets/img/slide/tvh2.webp",
    tvh3: "/assets/img/slide/tvh3.webp",
    tvh4: "/assets/img/slide/tvh4.webp",
    slide1: "/assets/img/slide/slide-1.webp",
    slide2: "/assets/img/slide/slide-2.webp",
    slide4: "/assets/img/slide/s4.webp",
  },

  // Tshwane related images
  tshwane: {
    house: "/assets/img/slide/TshwaneHouse.webp",
    house2: "/assets/img/slide/Tshwane House2.webp",
    councilChamber: "/assets/img/slide/Tshwane Council Chamber.webp",
    jakaranda: "/assets/img/slide/Tshwane-Jakaranda.webp",
    jakaranda2: "/assets/img/slide/Tshwane-Jakaranda-2.webp",
    tshwane1: "/assets/img/slide/Tshwane 1.webp",
  },

  // Pretoria related images
  pretoria: {
    pta1: "/assets/img/slide/PTA1.webp",
    pta2: "/assets/img/slide/PTA2.webp",
    pta3: "/assets/img/slide/PTA3.webp",
    pta4: "/assets/img/slide/PTA4.webp",
    pta5: "/assets/img/slide/PTA5.webp",
    pta6: "/assets/img/slide/PTA6.webp",
    pta7: "/assets/img/slide/PTA7.webp",
    pta8: "/assets/img/slide/PTA8.webp",
  },

  // Miscellaneous images
  misc: {
    poster: "/assets/img/poster.png",
    twitter: "/assets/img/tw.png",
    cot: "/assets/img/cot.png",
    index10: "/assets/img/index-10.png",
  },

  // Team icons and UI elements
  icons: {
    watch: "/assets/img/team/watch.webp",
    phone: "/assets/img/team/phone.webp",
    flickr: "/assets/img/team/flickr.webp",
    aws: "/assets/img/team/aws.webp",
  },

  // Placeholder images for development
  placeholders: {
    person: "/placeholder.svg?height=400&width=400",
    logo: "/placeholder.svg?height=200&width=200",
    wide: "/placeholder.svg?height=400&width=800",
    square: "/placeholder.svg?height=400&width=400",
  },
};

// Placeholder function to use until real images are available
export function getPlaceholder(width: number, height: number): string {
  return `/placeholder.svg?height=${height}&width=${width}`;
}
