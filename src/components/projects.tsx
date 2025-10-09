import Navbar from './navbar';
import { ProjectCard } from './Cards/projectCard';
import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiAmazondynamodb,
  SiAmazon,
  SiNodedotjs,
  SiPython,
  SiAmazoncognito,
  SiHtml5,
  SiLatex,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa6';
import { TbSql, TbBrandCpp } from 'react-icons/tb';
import { AiOutlineOpenAI } from 'react-icons/ai';

export default function Projects() {
  const techStack = [
    { name: 'TypeScript', icon: <SiTypescript size={28} className="text-blue-500" /> },
    { name: 'React', icon: <SiReact size={28} className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    { name: 'Firebase', icon: <SiFirebase size={28} className="text-yellow-400" /> },
    { name: 'AWS Lambda', icon: <SiAmazon size={28} className="text-orange-400" /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb size={28} className="text-blue-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={28} className="text-green-500" /> },
    { name: 'Python', icon: <SiPython size={28} className="text-yellow-500" /> },
    { name: 'Amazon Cognito', icon: <SiAmazoncognito size={28} className="text-purple-500" /> },
    { name: 'HTML5', icon: <SiHtml5 size={28} className="text-orange-500" /> },
    { name: 'Java', icon: <FaJava size={28} className="text-red-500" /> },
    { name: 'SQL', icon: <TbSql size={28} className="text-blue-600" /> },
    { name: 'LaTeX', icon: <SiLatex size={28} className="text-blue-700" /> },
    { name: 'C++', icon: <TbBrandCpp size={28} className="text-blue-800" /> },
    { name: 'OpenAI', icon: <AiOutlineOpenAI size={28} className="text-blue-900" /> },
  ];

  const projects = [
    {
      Name: 'OpenLabel',
      Description: 'OpenLabel is a mobile app that lets users scan grocery store items and instantly tells them whether each product aligns with their personal preferences.',
      Link: 'https://github.com/siddharthsiva/OpenLabel?tab=readme-ov-file',
    },
    {
      Name: 'Alethia',
      Description: 'Aletheia is an AI-powered app that helps users manage medications, parse medical documents, and compare insurance plans. ',
      Link: 'https://github.com/siddharthsiva/aletheia',
    },
    {
      Name: 'Ai-mood music',
      Description: 'ai-mood-music is a Python + Next.js app that uses AI (via webcam or text) to detect your mood and generate a matching music playlist.',
      Link: 'https://github.com/siddharthsiva/ai-mood-music',
    },
    {
      Name: 'Mini-Shell',
      Description: 'mini-shell is a C-based shell that supports commands, piping, redirection, and built-in functions like cd and echo.',
      Link: 'https://github.com/siddharthsiva/mini-shell',
    },
    {
      Name: 'Mini Google',
      Description: 'A lightweight local search engine implemented in C using raw sockets and POSIX threads. It runs a simple multithreaded HTTP server that allows users to search for keywords inside text files stored in a data/ directory.',
      Link: 'https://github.com/siddharthsiva/mini-google',
    },
    {
      Name: 'NebulaDB',
      Description: 'NebulaDB is a high-performance C++ in-memory database with SQL-like queries, B+ Tree indexing, transactions, concurrency control, and CLI/REST interfaces.',
      Link: 'https://github.com/siddharthsiva/NebulaDB',
    },
    {
      Name: 'ClimateLens',
      Description: 'ClimateLens is an interactive R Shiny dashboard that visualizes key climate change indicators using real-world data.',
      Link: 'https://github.com/siddharthsiva/climate-lens',
    },
    {
      Name: 'Cipher Cracker',
      Description: 'CipherCracker is a JavaFX app for encrypting, decrypting, and cracking Caesar and Vigenère ciphers with a simple GUI and built-in cryptanalysis tools.',
      Link: 'https://github.com/siddharthsiva/CipherCracker',
    },
    {
      Name: 'Insight-Vault',
      Description: 'InsightVault is a full-stack TypeScript app for secure user login and personal note management, built with React, Node.js, and PostgreSQL.',
      Link: 'https://github.com/siddharthsiva/insight-vault',
    },
    {
      Name: 'StudySync',
      Description: 'StudySync is a full-stack TypeScript app for AI-generated flashcard quizzes with category filters, timers, and manual or batch creation.',
      Link: 'https://github.com/siddharthsiva/StudySync',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar />

      <div className="flex flex-grow px-6 py-10 gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/4 text-white flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1">
                {tech.icon}
                <span className="text-xs text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full md:w-3/4 flex flex-col gap-10">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  Name={project.Name}
                  Description={project.Description}
                  Link={project.Link}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}