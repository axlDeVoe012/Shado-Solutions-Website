"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { FloatingPaper } from "@/components/floating-paper";
import { FlickeringGrid } from "../ui/flickering-grid";

export default function Timeline() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timelineEvents = [
    {
      day: "Day 1",
      date: "September 21, 2025",
      events: [
        {
          time: "11:00",
          title: "Arrival & Registration",
          description: "Arrival & Registration",
        },
        {
          time: "12:00 – 12:15",
          title: "FoICT Deanery",
          description: "Deanery",
        },
        {
          time: "12:15 – 12:25",
          title: "Welcome By: TVH",
          description:
            "Mr. Quintin Magaseng: TVH Chief Organizer and FoICT Lecturer",
        },
        {
          time: "12:25 – 12:40",
          title: "Significance of Hackathon Collaboration with CoT ",
          description:
            "Cllr Dr Nasiphi Moya : Executive Mayor: City of Tshwane Metropolitan Municipality",
        },
        {
          time: "12:40 – 13:00",
          title: "Address by Sponsors: MTN",
          description:
            "MTN & Faculty of Electrical and Building Engineering (FEBE) TBC",
        },
        {
          time: "13:00 – 13:15",
          title: "Message of support: DVC: Research, Innovation and Engagement",
          description:
            "Dr Rita Raseleka: Director: Research and Innovation TUT",
        },
        {
          time: "13:15 – 14:15",
          title: "Lunch & Entertainment ",
          description: "",
        },
        {
          time: "14:15 – 14:45",
          title: "UHS Research",
          description:
            "Mr. Mashitishi Phurutsi: FoICT Lecturer, ICT FYFU Unit Manage, UHS Chief of Delegation. ",
        },
        {
          time: "14:45 – 15:20",
          title: "Procedure & Group allocations",
          description: "Mr. Simon Sekele: TVH Registrar and FoICT Lecturer",
        },
        {
          time: "15:20 – 15:40",
          title: "Market Places (description & breaking down of problems) ",
          description:
            "Mr Sipho Nxasane: Senior Internal Innovation Specialist in the CoT ",
        },
        {
          time: "15:40",
          title: "Hack-Away",
          description: "TVH Organizing Team",
        },
        { time: "", title: "Midnight Pitching", description: "MC: Lesetja" },
      ],
    },
    {
      day: "Day 2",
      date: "September 22, 2025",
      events: [
        {
          time: "00:00 – 02:00",
          title: "Midnight Pitching & Opening Remarks",
          description: "MC: Lesetja",
        },
        {
          time: "02:00 – 12:00",
          title: "Hack-Away",
          description: "TVH Organizing Team",
        },
        { time: "", title: "Midday Pitch", description: "MC: Mpumi Pule" },
        {
          time: "12:00 - 12:05",
          title: "Opening Remarks",
          description: "MC: Mpumi Pule",
        },
        {
          time: "12:05 - 12:10",
          title: "Moeketsi Kema: Former TVH hackers - FoICT",
          description: "All",
        },
        {
          time: "12:10 – 14:00",
          title: "Midday Pitch & Opening Remarks",
          description: "MC: Mpumi Pule",
        },
        {
          time: "14:00 – 00:00",
          title: "Hack Away",
          description: "Hacking Teams",
        },
        {
          time: "",
          title: "Midnight Pitching & Opening Remarks",
          description: "MC: Karabelo Motaung ",
        },
      ],
    },
    {
      day: "Day 3",
      date: "September 23, 2025",
      events: [
        {
          time: "00:00 – 02:00",
          title: "Midnight Pitching & Opening Remarks",
          description: "MC: Karabelo Motaung ",
        },
        {
          time: "02:00 – 09:00",
          title: "Final Hack-Away",
          description: "Hacking Teams",
        },
        {
          time: "09:00 – 09:15",
          title: "Opening Remarks",
          description: "Ms. Morongoe Mashoeng: TVH 1st Chief Organizer",
        },
        {
          time: "09:15 – 12:15",
          title: "Final Presentations",
          description: "Hackers",
        },
        {
          time: "12:15 – 12:45",
          title: "Adjudication & Invitation of Top Five",
          description: "Adjudicator",
        },
        {
          time: "12:45 – 13:00",
          title: "Closing Remarks and Vote of Thanks",
          description: "Ms. Dibuseng Modise: TVH 2nd Chief Organizer",
        },
        {
          time: "13:00",
          title: "Lunch & Entertainment",
          description: "",
        },
      ],
    },
  ];

  const bgGradient = isDark
    ? "bg-gradient-to-b from-black/95 to-black"
    : "bg-gradient-to-b from-gray-50 to-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const cardBg = isDark ? "bg-black/50" : "bg-white/80";
  const cardBorder = isDark ? "border-white/10" : "border-gray-200";

  return (
    <section
      id="timeline"
      className="py-20 md:py-32 relative overflow-hidden theme-transition"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-blue/10" : "bg-tvh-blue/5"
          } blur-3xl`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${textColor}`}
          >
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            Your guide to the 52-hour hackathon journey. From kickoff to awards,
            here's what to expect.
          </p>

          <a
            href={"/assets/docs/2025 TVH Programme_Final.pdf"}
            download="2025_TVH_Programme_Final.pdf"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-tvh-blue text-white font-medium shadow hover:bg-tvh-blue/80 transition"
          >
            <Download className="h-5 w-5" />
            Download Programme
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm rounded-xl ${cardBorder} overflow-hidden`}
            >
              <div
                className={`p-6 ${
                  dayIndex === 0
                    ? "bg-tvh-red/20 border-b border-tvh-red/30"
                    : dayIndex === 1
                    ? "bg-tvh-yellow/10 border-b border-tvh-yellow/30"
                    : "bg-tvh-blue/20 border-b border-tvh-blue/30"
                }`}
              >
                <h3 className={`text-2xl font-bold ${textColor} mb-2`}>
                  {day.day}
                </h3>
                <div
                  className={`flex items-center ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{day.date}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <motion.li
                      key={`${event.title}-${event.time}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + eventIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className={`relative pl-6 border-l-2 ${
                        isDark ? "border-gray-700" : "border-gray-300"
                      } hover:border-tvh-yellow transition-colors`}
                    >
                      <div
                        className={`absolute -left-[5px] top-0 h-2 w-2 rounded-full ${
                          isDark ? "bg-gray-700" : "bg-gray-300"
                        } group-hover:bg-tvh-yellow`}
                      ></div>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-500"
                        } flex items-center mb-1`}
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-sm">{event.time}</span>
                      </p>
                      <h4 className={`${textColor} font-medium mb-1`}>
                        {event.title}
                      </h4>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-500"
                        } text-sm flex items-center`}
                      >
                        {/* <MapPin className="h-3 w-3 mr-1" /> */}
                        {event.description}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
