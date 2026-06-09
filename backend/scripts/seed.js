const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Project = require("../models/Project");
const Skill = require("../models/Skill");

const seedDatabase = async () => {
  try {
    const mongoURL =
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

    console.log("Connecting to MongoDB for seeding...");
    await mongoose.connect(mongoURL);
    console.log("✅ Database connected successfully.");

    // Clear existing data
    console.log("Clearing existing projects and skills...");
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log("✅ Collections cleared.");

    // Seed Projects
    console.log("Seeding projects...");
    const sampleProjects = [
      {
        title: "Full-Stack Portfolio Website",
        description: "A professional, responsive portfolio website built to showcase my technical projects, detailed profile, and contact endpoints. Serves dynamically managed content for skills, projects, and contact form submissions using a Node.js/Express backend coupled with a MongoDB database layer.",
        image: "http://localhost:5000/public/uploads/profile.png",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
        liveDemo: "http://localhost:5173",
        sourceCode: "https://github.com/shreyas/portfolio",
        featured: true,
      },
      {
        title: "E-Commerce Storefront",
        description: "An interactive full-stack storefront application implementing dynamic product catalogs, a state-managed shopping cart, secure administrative dashboard, user authentication, and Stripe payment transactions integration.",
        image: "🛒",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
        liveDemo: "https://example.com",
        sourceCode: "https://github.com/shreyas/ecommerce",
        featured: true,
      },
      {
        title: "Task Management Board",
        description: "A collaborative scrum-style board enabling real-time task creation, team updates, card status drag-and-drop events, user workspaces, and custom tags for group productivity.",
        image: "✅",
        technologies: ["JavaScript", "HTML", "CSS", "Node.js", "MongoDB"],
        liveDemo: "https://example.com",
        sourceCode: "https://github.com/shreyas/task-manager",
        featured: false,
      },
    ];

    await Project.insertMany(sampleProjects);
    console.log(`✅ Seeded ${sampleProjects.length} projects.`);

    // Seed Skills
    console.log("Seeding skills...");
    const sampleSkills = [
      {
        name: "HTML",
        icon: "🔖",
        proficiency: 95,
        description: "Semantic HTML5 structure",
        category: "frontend",
      },
      {
        name: "CSS",
        icon: "🎨",
        proficiency: 90,
        description: "Responsive layouts, flexbox, grid, animations",
        category: "frontend",
      },
      {
        name: "JavaScript",
        icon: "⚡",
        proficiency: 92,
        description: "ES6+, asynchronous flow, fetch API, DOM manipulation",
        category: "frontend",
      },
      {
        name: "React.js",
        icon: "⚛️",
        proficiency: 88,
        description: "Functional components, custom hooks, context, state management",
        category: "frontend",
      },
      {
        name: "Node.js",
        icon: "🟢",
        proficiency: 85,
        description: "Asynchronous runtime environments, npm module ecosystem",
        category: "backend",
      },
      {
        name: "Express.js",
        icon: "🚀",
        proficiency: 83,
        description: "Modular API routes, logging, global and local middleware",
        category: "backend",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        proficiency: 82,
        description: "Mongoose schema design, queries, validation rules",
        category: "database",
      },
    ];

    await Skill.insertMany(sampleSkills);
    console.log(`✅ Seeded ${sampleSkills.length} skills.`);

    console.log("\n🎉 Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
