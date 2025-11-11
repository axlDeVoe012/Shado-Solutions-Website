"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

type PaperProps = {
  x: number;
  y: number;
  xKeyframes: number[];
  yKeyframes: number[];
  duration: number;
};

export function FloatingPaper({ count = 5 }) {
  const [papers, setPapers] = useState<PaperProps[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newPapers = Array.from({ length: count }).map(() => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const xKeyframes = [
        Math.random() * width,
        Math.random() * width,
        Math.random() * width,
      ];
      const yKeyframes = [
        Math.random() * height,
        Math.random() * height,
        Math.random() * height,
      ];
      const duration = 20 + Math.random() * 10;

      return {
        x: startX,
        y: startY,
        xKeyframes,
        yKeyframes,
        duration,
      };
    });

    setPapers(newPapers);
  }, [count]);

  if (papers.length === 0) return null; // Prevent hydration mismatch

  return (
    <div className="relative w-full h-full">
      {papers.map((paper, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: paper.x,
            y: paper.y,
          }}
          animate={{
            x: paper.xKeyframes,
            y: paper.yKeyframes,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: paper.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-purple-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
