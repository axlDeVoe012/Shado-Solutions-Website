export interface GalleryImage {
  id: string
  title: string
  description: string
  year: string
  image: string
  category?: string
  layout?: {
    gridArea: string
    priority: number
  }
}

// Helper function to generate placeholder image URLs with specific dimensions
function getPlaceholderImage(width: number, height: number, text: string): string {
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

// Generate gallery data with placeholder images
export const galleryData: GalleryImage[] = [
  // 2025 Images
  {
    id: "2025-1",
    title: "TVH 2025 Launch Ceremony",
    description: "The last phase where we let all the baloons go up in the air",
    year: "2025",
    image: "../assets/img/Gallery/2025/1.webp",
    category: "ceremony",
  },
  {
    id: "2025-2",
    title: "TVH 2025 Launch Ceremony",
    description: " The Dean Of ICT",
    year: "2025",
    image: "../assets/img/Gallery/2025/2.webp",
    category: "hacking",
  },
  {
    id: "2025-3",
    title: "TVH 2025 Launch Ceremony",
    description: "2025 Painting/Drawing",
    year: "2025",
    image: "../assets/img/Gallery/2025/3.webp",
    category: "teams",
  },
  {
    id: "2025-4",
    title: "TVH 2025 Launch Ceremony",
    description: "The 7th Hackathon Launch Ceremony",
    year: "2025",
    image: "../assets/img/Gallery/2025/4.webp",
    category: "ceremony",
  },
  {
    id: "2025-5",
    title: "TVH 2025 Launch Ceremony",
    description: "The presentation of TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/5.webp",
    category: "teams",
  },
  {
    id: "2025-6",
    title: "TVH 2025 Launch Ceremony",
    description: "The presentation of TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/6.webp",
    category: "presentations",
  },
  {
    id: "2025-7",
    title: "TVH 2025 Launch Ceremony",
    description: "The presentation of TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/7.webp",
    category: "ceremony",
  },
  {
    id: "2025-8",
    title: "TVH 2025 Launch Ceremony",
    description: "Dean Of ICT and his Wife",
    year: "2025",
    image: "../assets/img/Gallery/2025/8.webp",
    category: "ceremony",
  },
  {
    id: "2025-9",
    title: "TVH 2025 Launch Ceremony",
    description: "The presentation of TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/9.webp",
    category: "ceremony",
  },
  {
    id: "2025-10",
    title: "TVH 2025 Launch Ceremony",
    description: "Singer performing at the event",
    year: "2025",
    image: "../assets/img/Gallery/2025/10.webp",
    category: "ceremony",
  },
  {
    id: "2025-11",
    title: "TVH 2025 Launch Ceremony",
    description: "TVH 2025 Launch",
    year: "2025",
    image: "../assets/img/Gallery/2025/11.webp",
    category: "ceremony",
  },
  {
    id: "2025-12",
    title: "TVH 2025 Launch Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/7.webp",
    category: "ceremony",
  },
  // 2024 Images
  {
    id: "2024-1",
    title: "Opening Ceremony 2024",
    description:
      "The grand opening of TVH 2024 with university representatives and sponsors",
    year: "2024",
    image: "/assets/img/gallery/IMG_0121.webp",
    category: "ceremony",
  },
  {
    id: "2024-2",
    title: "Coding Marathon",
    description:
      "Students deep in concentration during the 48-hour coding marathon",
    year: "2018",
    image: "/assets/img/portfolio/18_6.webp",
    category: "hacking",
  },
  {
    id: "2024-3",
    title: "Team Collaboration",
    description: "Teams working together to solve complex problems",
    year: "2019",
    image: "/assets/img/portfolio/19_1.webp",
    category: "teams",
  },
  {
    id: "2024-4",
    title: "Workshop Session",
    description: "Integration workshop led by industry experts",
    year: "2019",
    image: "/assets/img/portfolio/19_4.webp",
    category: "workshops",
  },
  {
    id: "2024-5",
    title: "Project Presentations",
    description: "Teams presenting their final projects to the judges",
    year: "2024",
    image: "/assets/img/gallery/IMG_9990.webp",
    category: "presentations",
  },
  {
    id: "2024-6",
    title: "Award Ceremony",
    description: "Celebrating the winners of TVH 2024",
    year: "2019",
    image: "/assets/img/portfolio/19_5.webp",
    category: "ceremony",
  },

  // 2023 Images
  {
    id: "2023-1",
    title: "Opening Day 2023",
    description: "Participants gathering for the kickoff of TVH 2023",
    year: "2023",
    image: "/assets/img/portfolio/23_19.webp",
    category: "ceremony",
  },
  {
    id: "2023-2",
    title: "Midnight Coding",
    description: "Late night coding sessions during the hackathon",
    year: "2023",
    image: "/assets/img/portfolio/tvh8.webp",
    category: "hacking",
  },
  {
    id: "2023-3",
    title: "Mentorship Session",
    description: "Industry mentors providing guidance to participants",
    year: "2023",
    image: "/assets/img/portfolio/5.webp",
    category: "workshops",
  },
  {
    id: "2023-4",
    title: "Team Brainstorming",
    description: "Creative ideation session among team members",
    year: "2023",
    image: "/assets/img/slide/s4.webp",
    category: "teams",
  },
  {
    id: "2023-5",
    title: "Final Demos",
    description: "Teams demonstrating their projects to the audience",
    year: "2023",
    image: "/assets/img/portfolio/tvh5.webp",
    category: "presentations",
  },

  // 2022 Images
  {
    id: "2022-1",
    title: "Award Ceremony",
    description: "Celebrating the achievements of TVH 2024 participants",
    year: "2024",
    image: "/assets/img/Gallery/2024/1.webp",
    category: "ceremony",
  },
  {
    id: "2022-2",
    title: "Collaborative Coding",
    description: "Students working together on complex coding challenges",
    year: "2024",
    image: "/assets/img/Gallery/2024/2.webp",
    category: "hacking",
  },
  {
    id: "2022-3",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/3.webp",
    category: "workshops",
  },
  {
    id: "2022-4",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/4.webp",
    category: "presentations",
  },

  // 2021 Images
  {
    id: "2021-1",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/5.webp",
    category: "ceremony",
  },
  {
    id: "2021-2",
    title: "Collaboration",
    description: "Teams collaborating during the hackathon",
    year: "2024",
    image: "/assets/img/Gallery/2024/6.webp",
    category: "teams",
  },
  {
    id: "2021-3",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/7.webp",
    category: "workshops",
  },
  {
    id: "2021-4",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/8.webp",
    category: "presentations",
  },

  // 2020 Images
];
