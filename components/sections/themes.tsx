  "use client";

  import { motion } from "framer-motion";
  import { useTheme } from "next-themes";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import {
    Heart,
    Shield,
    Settings,
    GraduationCap,
    TrendingUp,
    WormIcon as Virus,
    AlertTriangle,
    Zap,
    BookOpen,
    CreditCard,
    Users,
    Trash2,
    DollarSign,
    Monitor,
    Database,
    Wifi,
    Download
  } from "lucide-react";

  export default function Themes() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const textColor = isDark ? "text-white" : "text-gray-900";
    const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600";
    const cardBg = isDark ? "bg-black/50" : "bg-white/80";
    const cardBorder = isDark ? "border-white/10" : "border-gray-200";
    const bgGradient = isDark
      ? "bg-gradient-to-b from-black/95 to-black"
      : "bg-gradient-to-b from-gray-50 to-white";

    // Theme data structure
    const themesData = [
      {
        category: "Health",
        icon: <Heart className="h-5 w-5" />,
        color: "tvh-red",
        topics: ["COVID-19"],
      },
      {
        category: "Safety",
        icon: <Shield className="h-5 w-5" />,
        color: "tvh-blue",
        topics: ["Campus Safety", "Abduction", "GBV&F"],
      },
      {
        category: "Service Delivery",
        icon: <Settings className="h-5 w-5" />,
        color: "tvh-yellow",
        topics: ["Energy & Water", "Waste & Sanitation", "Revenue Collection"],
      },
      {
        category: "Education",
        icon: <GraduationCap className="h-5 w-5" />,
        color: "purple-600",
        topics: ["@COVID-19 related", "Academic Operations", "LMS/CMS"],
      },
      {
        category: "TVH Trends",
        icon: <TrendingUp className="h-5 w-5" />,
        color: "green-600",
        topics: ["Fin-Tech", "Data Science", "IoT"],
      },
    ];

    // Icon mapping for topics
    const topicIcons = {
      "COVID-19": <Virus className="h-4 w-4" />,
      "Campus Safety": <Shield className="h-4 w-4" />,
      Abduction: <AlertTriangle className="h-4 w-4" />,
      "GBV&F": <Users className="h-4 w-4" />,
      "Energy & Water": <Zap className="h-4 w-4" />,
      "Waste & Sanitation": <Trash2 className="h-4 w-4" />,
      "Revenue Collection": <DollarSign className="h-4 w-4" />,
      "@COVID-19 related": <Virus className="h-4 w-4" />,
      "Academic Operations": <BookOpen className="h-4 w-4" />,
      "LMS/CMS": <Monitor className="h-4 w-4" />,
      "Fin-Tech": <CreditCard className="h-4 w-4" />,
      "Data Science": <Database className="h-4 w-4" />,
      IoT: <Wifi className="h-4 w-4" />,
    };

    return (
      <section
        id="themes"
        className={`py-20 md:py-32 relative overflow-hidden ${bgGradient}`}
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
              isDark ? "bg-tvh-red/10" : "bg-tvh-red/5"
            } blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${
              isDark ? "bg-tvh-blue/10" : "bg-tvh-blue/5"
            } blur-3xl`}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
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
              Hackathon <span className="gradient-text">Themes</span>
            </h2>
            <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto mb-8`}>
              Choose from these exciting challenge themes to focus your
              innovation. Each theme addresses real-world problems and offers
              opportunities to create meaningful solutions.
            </p>

             <a
              href={"/assets/docs/2025 TVH CoT Challenges _Final.pdf.pdf"}
              download="2025 TVH CoT Challenges _Final.pdf.pdf"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-tvh-blue text-white font-medium shadow hover:bg-tvh-blue/80 transition"
            >
              <Download className="h-5 w-5" />
              Download Challange
            </a> 
          </motion.div>

          {/* Themes Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} overflow-hidden`}
          >
            {/* Table Header */}
            <div
              className={`p-6 border-b ${
                isDark ? "border-white/10" : "border-gray-200"
              }`}
            >
              <h3 className={`text-2xl font-bold ${textColor} mb-2`}>
                Challenge Categories & Topics
              </h3>
              <p className={mutedTextColor}>
                Select a theme that aligns with your team's interests and
                expertise
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className={`border-b ${
                      isDark ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    {themesData.map((theme, index) => (
                      <th
                        key={theme.category}
                        className={`p-6 text-left ${textColor} font-semibold`}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className={`p-2 rounded-lg bg-${theme.color}/20 text-${theme.color}`}
                          >
                            {theme.icon}
                          </div>
                          <span>{theme.category}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Calculate max topics to determine number of rows */}
                  {Array.from({
                    length: Math.max(
                      ...themesData.map((theme) => theme.topics.length)
                    ),
                  }).map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-b ${
                        isDark ? "border-white/10" : "border-gray-200"
                      } last:border-b-0`}
                    >
                      {themesData.map((theme, colIndex) => (
                        <td
                          key={`${theme.category}-${rowIndex}`}
                          className="p-6 align-top"
                        >
                          {theme.topics[rowIndex] && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: colIndex * 0.1 + rowIndex * 0.05,
                              }}
                              viewport={{ once: true }}
                              className={`flex items-center space-x-2 p-3 rounded-lg ${
                                isDark
                                  ? "bg-black/30 hover:bg-black/50"
                                  : "bg-gray-50 hover:bg-gray-100"
                              } transition-colors cursor-pointer group`}
                            >
                              <div
                                className={`text-${theme.color} group-hover:scale-110 transition-transform`}
                              >
                                {topicIcons[theme.topics[rowIndex]]}
                              </div>
                              <span
                                className={`${mutedTextColor} group-hover:${textColor} transition-colors`}
                              >
                                {theme.topics[rowIndex]}
                              </span>
                            </motion.div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-6 space-y-6">
              {themesData.map((theme, index) => (
                <motion.div
                  key={theme.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`${
                      isDark ? "bg-black/30" : "bg-gray-50"
                    } border-none`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center space-x-2">
                        <div
                          className={`p-2 rounded-lg bg-${theme.color}/20 text-${theme.color}`}
                        >
                          {theme.icon}
                        </div>
                        <span className={textColor}>{theme.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {theme.topics.map((topic, topicIndex) => (
                          <div
                            key={topic}
                            className={`flex items-center space-x-2 p-2 rounded-lg ${
                              isDark ? "bg-black/50" : "bg-white"
                            } transition-colors`}
                          >
                            <div className={`text-${theme.color}`}>
                              {topicIcons[topic]}
                            </div>
                            <span className={mutedTextColor}>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className={`${cardBg} backdrop-blur-sm border ${cardBorder}`}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-tvh-red/20 text-tvh-red w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
                  Choose Your Focus
                </h3>
                <p className={`text-sm ${mutedTextColor}`}>
                  Select one theme that resonates with your team's passion and
                  expertise
                </p>
              </CardContent>
            </Card>

            <Card className={`${cardBg} backdrop-blur-sm border ${cardBorder}`}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-tvh-blue/20 text-tvh-blue w-fit mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
                  Real Impact
                </h3>
                <p className={`text-sm ${mutedTextColor}`}>
                  All themes address genuine challenges faced by communities and
                  institutions
                </p>
              </CardContent>
            </Card>

            <Card className={`${cardBg} backdrop-blur-sm border ${cardBorder}`}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-tvh-yellow/20 text-tvh-yellow w-fit mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
                  Innovation Opportunity
                </h3>
                <p className={`text-sm ${mutedTextColor}`}>
                  Each theme offers unique opportunities for creative and
                  technical innovation
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }
