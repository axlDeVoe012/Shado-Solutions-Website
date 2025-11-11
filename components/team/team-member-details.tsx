"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Mail,
  Globe,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/lib/team-data";

interface TeamMemberDetailsProps {
  member: TeamMember;
}

export default function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? "bg-black/50" : "bg-white/80";
  const cardBorder = isDark ? "border-white/10" : "border-gray-200";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const sectionBg = isDark ? "bg-black/30" : "bg-gray-50/80";

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} overflow-hidden`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative h-80 md:h-full w-full">
              <Image
                src={
                  member.image ||
                  "/placeholder.svg?height=400&width=400&text=Team+Member"
                }
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1
                className={`text-3xl md:text-4xl font-bold mb-2 ${textColor}`}
              >
                {member.name}
              </h1>
              <p className={`text-xl ${mutedTextColor} mb-4`}>{member.title}</p>

              <div className="flex items-center mb-6">
                <Briefcase className={`h-5 w-5 ${mutedTextColor} mr-2`} />
                <span className={mutedTextColor}>{member.department}</span>
                {member.location && (
                  <>
                    <span className={`mx-2 ${mutedTextColor}`}>•</span>
                    <MapPin className={`h-5 w-5 ${mutedTextColor} mr-2`} />
                    <span className={mutedTextColor}>{member.location}</span>
                  </>
                )}
              </div>

              <div className={`space-y-4 ${mutedTextColor} mb-8`}>
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {member.skills && member.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`${sectionBg} p-6 rounded-lg mb-8`}
                >
                  <h3 className={`text-lg font-bold mb-3 ${textColor}`}>
                    Skills & Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-tvh-blue/20 text-tvh-blue border border-tvh-blue/30"
                            : "bg-tvh-blue/10 text-tvh-blue border border-tvh-blue/20"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {member.email && (
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white/20 hover:bg-white/10"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                )}
                {member.linkedin && (
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white/20 hover:bg-white/10"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white/20 hover:bg-white/10"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    asChild
                  >
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                )}
                {member.website && (
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white/20 hover:bg-white/10"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    asChild
                  >
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="p-8 border-t border-dashed border-gray-200 dark:border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h3 className={`text-lg font-bold ${textColor}`}>
                Part of the {member.department} Team
              </h3>
              <p className={mutedTextColor}>
                {member.name} works with other talented individuals to make TVH
                a success.
              </p>
            </div>
            <Button
              className="bg-tvh-blue hover:bg-tvh-blue/80 text-white"
              asChild
            >
              <a href="/team">View All Team Members</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 text-center"
      >
        <Button
          variant="ghost"
          className={`${textColor} hover:bg-transparent hover:underline`}
          asChild
        >
          <a href="/">← Back to Home</a>
        </Button>
      </motion.div>
    </div>
  );
}
