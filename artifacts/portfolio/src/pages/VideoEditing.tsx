import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft, FiExternalLink, FiPlay } from "react-icons/fi";
import { useState } from "react";
import { videoProjects } from "../data/projects";

const PLATFORM_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  Instagram: { bg: "bg-gradient-to-r from-purple-500 to-pink-500", text: "text-white", label: "Instagram Reels" },
  YouTube:   { bg: "bg-red-600", text: "text-white", label: "YouTube" },
};

export default function VideoEditing() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-green/60 hover:text-gold transition-colors text-sm font-medium"
            data-testid="back-btn"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase block mb-4">My Work</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark-green leading-tight">
            Video Editing &<br />
            <em className="text-gold">Videography</em>
          </h1>
          <p className="mt-6 text-dark-green/60 max-w-xl leading-relaxed">
            A curated collection of cinematic video projects — from commercial productions and music videos to travel documentaries and brand storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {videoProjects.map((project, i) => {
            const isReels = project.format === "reels";
            const platformStyle = PLATFORM_STYLES[project.platform ?? "YouTube"] ?? PLATFORM_STYLES["YouTube"];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-dark-green/10 transition-all duration-300 flex flex-col"
                data-testid={`video-card-${project.id}`}
              >
                <div className={`relative overflow-hidden ${isReels ? "aspect-[9/16]" : "aspect-video"}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-dark-green/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white"
                    >
                      <FiPlay size={20} className="ml-0.5" />
                    </motion.div>
                  </div>

                  <span className={`absolute top-2.5 left-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${platformStyle.bg} ${platformStyle.text}`}>
                    {platformStyle.label}
                  </span>

                  {isReels && (
                    <span className="absolute bottom-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
                      1080 × 1920
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-heading text-sm font-semibold text-dark-green mb-1 leading-snug">{project.title}</h3>
                  <p className="text-dark-green/55 text-xs leading-relaxed mb-3 flex-1">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-dark-green text-cream text-xs font-medium rounded-full hover:bg-gold transition-colors duration-300 self-start"
                    data-testid={`video-watch-btn-${project.id}`}
                  >
                    {isReels ? "View Reel" : "Watch on YouTube"} <FiExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
