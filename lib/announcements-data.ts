export interface Announcement {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  priority: "high" | "medium" | "low";
  category?: string;
  link?: {
    text: string;
    url: string;
    download?: string;
  };
}

export const announcementsData: Announcement[] = [
  {
    id: "tvh-challenges-2025",
    title: "TVH 2025 Challenge Statements Now Available",
    date: "September 20, 2025",
    summary:
      "Official problem statements released for Tshwane Varsity Hackathon 2025",
    content: [
      "Explore real-world urban challenges faced by City of Tshwane departments",
      "Develop innovative solutions for municipal infrastructure protection and urban safety",
      "Address water conservation challenges in formal and informal car wash businesses",
      "Create tech-enabled solutions for township economic revitalization",
      "Work on health informatics, education operations, and emerging technology trends",
    ],
    priority: "low",
    category: "challenges",
    link: {
      text: "Download Problem Statements PDF",
      url: "/assets/docs/2025 TVH CoT Challenges _Final.pdf.pdf",
      download: "2025_TVH_CoT_Challenges _Final.pdf.pdf",
    },
  },
  {
    id: "tvh-2025-09",
    title: "Tshwane Varsity Hackathon Program 2025",
    date: "September 21-23, 2025",
    summary:
      "Innovate for urban challenges across health, safety, service delivery and township economies",
    content: [
      "Join the premier hackathon addressing real-world urban challenges in Tshwane",
      "Develop solutions for municipal infrastructure protection, water conservation, township economic revitalization, and more",
      "Collaborate with students from multiple universities and industry experts",
      "Win prizes and potential implementation opportunities with City of Tshwane",
    ],
    priority: "low",
    category: "hackathon",
    link: {
      text: "View Challenge Themes",
      url: "/assets/docs/2025 TVH Programme_Final.pdf",
      download: "2025_TVH_Programme_Final.pdf",
    },
  },
  {
    id: "ann-2024-01",
    title: "Design Thinking ",
    date: "June 26, 2025",
    summary: "Empower students to think outside the box",
    content: ["To Empower students to think outside the box"],
    priority: "medium",
    category: "registration",
    link: {
      text: "Register Now",
      url: "/register",
    },
  },
  {
    id: "ann-2024-02",
    title: "TVH Launch",
    date: "May 15, 2025",
    summary:
      "To empower hackers with practical techniques to develop ideas and implement through agile framework.",
    content: [
      "To empower hackers with practical techniques to develop ideas and implement through agile framework.",
    ],
    priority: "medium",
    category: "",
    link: {
      text: "Learn More About Our Sponsors",
      url: "/#sponsors",
    },
  },
  {
    id: "ann-2024-03",
    title: "7th Annual TVH Event ",
    date: "September 21-23, 2025",
    summary:
      "To provide gauteng students with a playground to implement their ideas.",
    content: [
      "Are you an industry professional with expertise in software development, design, product management, or entrepreneurship? We invite you to join TVH 2025 as a mentor or judge!",
      "Mentors will provide guidance and support to participating teams throughout the hackathon, helping them refine their ideas, overcome technical challenges, and prepare their presentations.",
      "Judges will evaluate the final projects based on innovation, technical complexity, design, and potential impact.",
      "This is a fantastic opportunity to give back to the tech community, discover emerging talent, and be part of South Africa's premier inter-university hackathon.",
      "Applications for mentors and judges are open until September 21-23, 2025.",
    ],
    priority: "medium",
    category: "volunteers",
    link: {
      text: "",
      url: "/",
    },
  },
  {
    id: "ann-2024-04",
    title: "2024 Challenge Themes Revealed",
    date: "April 15, 2024",
    summary:
      "Discover the exciting challenge themes for this year's hackathon!",
    content: [
      "We're excited to reveal the challenge themes for TVH 2024! This year, participants will have the opportunity to tackle problems in the following areas:",
      "1. Climate Tech: Develop solutions that address climate change, promote sustainability, or reduce environmental impact.",
      "2. HealthTech: Create innovative applications that improve healthcare delivery, patient outcomes, or medical research.",
      "3. EdTech: Build tools that enhance learning experiences, improve educational access, or support teachers and students.",
      "4. Financial Inclusion: Design solutions that make financial services more accessible to underserved communities.",
      "5. Open Innovation: A category for any other innovative ideas that don't fit into the above themes.",
      "Teams will choose one theme to focus on during the hackathon. Each theme will have specific challenges and criteria provided by our sponsors and partners.",
    ],
    priority: "medium",
    category: "challenges",
    link: {
      text: "Explore Challenge Details",
      url: "/challenges",
    },
  },
  {
    id: "ann-2024-05",
    title: "Workshop Schedule Released",
    date: "April 10, 2024",
    summary: "Check out the exciting workshops planned for TVH 2024!",
    content: [
      "We've finalized our workshop schedule for TVH 2024, and we're thrilled to share it with you! These workshops will provide valuable skills and knowledge to help you succeed during the hackathon and beyond.",
      "Workshops include:",
      "• Introduction to AI with TensorFlow by Google Developers",
      "• Rapid Prototyping with Figma by DesignHub",
      "• Building Scalable Applications with AWS by Amazon Web Services",
      "• Blockchain Fundamentals by Ethereum Foundation",
      "• Effective Pitching Techniques by Startup South Africa",
      "All workshops will be held during the hackathon and are open to all participants. No prior registration is required, but space may be limited, so arrive early!",
    ],
    priority: "low",
    category: "workshops",
    link: {
      text: "View Full Workshop Schedule",
      url: "/workshops",
    },
  },
  {
    id: "ann-2024-06",
    title: "TVH 2023 Impact Report Released",
    date: "April 5, 2024",
    summary:
      "See the amazing impact of last year's hackathon in our comprehensive report.",
    content: [
      "We're proud to share the TVH 2023 Impact Report, which highlights the achievements, outcomes, and impact of last year's hackathon.",
      "Key highlights from the report:",
      "• 500+ participants from 15 universities across South Africa",
      "• 120+ projects completed during the 48-hour hackathon",
      "• 30% of projects continued development after the hackathon",
      "• 5 projects secured funding for further development",
      "• 40+ job offers extended to participants by sponsor companies",
      "• R150,000 in prizes awarded to winning teams",
      "The report also includes testimonials from participants, sponsors, and university partners, as well as case studies of the most successful projects.",
      "We're incredibly proud of what the TVH community accomplished last year and can't wait to see what amazing innovations will emerge from TVH 2024!",
    ],
    priority: "low",
    category: "reports",
    link: {
      text: "Download the Full Report",
      url: "/reports/tvh-2023-impact",
    },
  },
  {
    id: "ann-2024-07",
    title: "New Venue Announced for TVH 2024",
    date: "March 30, 2024",
    summary:
      "We're excited to announce our new, larger venue for this year's hackathon!",
    content: [
      "Due to the growing popularity of TVH and increased participation, we're thrilled to announce that TVH 2024 will be held at the Innovation Hub in Johannesburg!",
      "This state-of-the-art facility offers:",
      "• Spacious hacking areas with plenty of room for all teams",
      "• Multiple workshop and presentation spaces",
      "• High-speed internet and reliable power supply",
      "• 24-hour access and security",
      "• On-site catering facilities",
      "• Convenient location with ample parking and public transport access",
      "The new venue will allow us to accommodate more participants, provide better facilities, and create an even more exciting and comfortable hackathon experience.",
      "We can't wait to welcome you to our new home in October!",
    ],
    priority: "medium",
    category: "logistics",
    link: {
      text: "View Venue Details and Directions",
      url: "/venue",
    },
  },
  {
    id: "ann-2024-08",
    title: "TVH Alumni Network Launch",
    date: "March 25, 2024",
    summary:
      "Introducing the TVH Alumni Network - connecting past participants for ongoing collaboration and opportunities.",
    content: [
      "We're excited to announce the launch of the TVH Alumni Network, a community platform for past TVH participants to connect, collaborate, and access exclusive opportunities!",
      "The TVH Alumni Network offers:",
      "• A private online community for networking and knowledge sharing",
      "• Exclusive job and internship opportunities from our sponsor companies",
      "• Mentorship programs connecting junior and senior professionals",
      "• Special events and workshops throughout the year",
      "• Early access to TVH tickets and special alumni activities during the hackathon",
      "If you've participated in any previous edition of TVH, you're eligible to join the Alumni Network. Simply register using the email address you used for your hackathon registration.",
      "We believe that the TVH experience shouldn't end after the hackathon, and the Alumni Network is our way of fostering ongoing connections and growth within our community.",
    ],
    priority: "low",
    category: "community",
    link: {
      text: "Join the Alumni Network",
      url: "/alumni",
    },
  },
];
