

# TVH – Tshwane Varsity Hackathon

TVH (Tshwane Varsity Hackathon) is South Africa's premier inter-university hackathon competition. This web application serves as the official platform for the event, providing information about the hackathon, schedules, sponsors, FAQs, and more, all wrapped in a modern, interactive, and visually engaging UI.

## Features

- ✨ **Dynamic Animated Backgrounds:** Eye-catching animated beams, particles, and grid effects using custom React components.
- 🏆 **Event Information:** Dedicated sections for event details, timeline, sponsors, FAQs, and announcements.
- 🎨 **Theme Support:** Light and dark mode with smooth transitions.
- 📱 **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- 🧩 **Reusable UI Components:** Built with a large set of modular, accessible, and customizable UI components.
- ⚡ **Performance Optimized:** Built with Next.js and Tailwind CSS for fast load times and smooth user experience.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tvh.git
   cd tvh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

## How to Run

### Development

Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production

Build and start the production server:
```bash
npm run build
npm start
```

## Technologies Used

- **Next.js** (v15) – React framework for SSR and static sites
- **React** (v19)
- **TypeScript**
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** & **motion** – Animations and transitions
- **Radix UI** – Accessible UI primitives
- **shadcn/ui** – Component library
- **date-fns** – Date utilities
- **zod** – TypeScript-first schema validation
- **Other libraries:** clsx, lucide-react, recharts, embla-carousel-react, and more

## Usage Example

The homepage (`/`) features a dynamic animated background and the following sections:
- Hero
- About
- Timeline
- Announcements
- Sponsors
- FAQ
- Contact

You can customize or extend these sections by editing files in `components/sections/`.

## Folder Structure

```
.
├── app/                # Next.js app directory (pages, layouts)
├── components/         # Reusable UI and section components
│   ├── ui/             # UI primitives and animated backgrounds
│   └── sections/       # Main page sections (hero, about, etc.)
├── public/             # Static assets
├── styles/             # Global and component styles
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── package.json
└── tailwind.config.ts
```

## Contribution Guidelines

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

