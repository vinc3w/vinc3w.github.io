export const category = {
  DESIGN: "Design",
  DEVELOPMENT: "Development",
};

export const role = {
  DESIGNER: "Designer",
  DEVELOPER: "Developer",
};

export const ADDITIONAL_TYPE = {
  IMAGE: 1,
  TEXT: 2,
};

export default [
  {
    title: "JobHub",
    image: "https://raw.githubusercontent.com/vinc3w/JobHub/main/public/assets/home.png",
    color: "#f2dfc7",
    category: [category.DESIGN, category.DEVELOPMENT],
    role: [role.DEVELOPER],
    duration: {
      from: 1692576000,
      to: 1702857600,
    },
    description: "This is my Web Development Assignment Project to create a website with an integrated personal portfolio management system.",
    tools: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Brevo",
    ],
    sourceCodeLink: "https://github.com/vinc3w/JobHub",
    additional: [
      {
        type: ADDITIONAL_TYPE.TEXT,
        label: "Features",
        value: "Authentication, Filter/Sort/Search/Pagination of portfolios, Account moderation for admins, Notification system, Profile System",
      },
    ],
    featured: true,
  },
  {
    title: "ComSales Management",
    image: "https://raw.githubusercontent.com/vinc3w/ComSales-Management/refs/heads/main/preview/dashboard.png",
    color: "#ececef",
    category: [category.DESIGN, category.DEVELOPMENT],
    role: [role.DESIGNER, role.DEVELOPER],
    duration: {
      from: 1705276800,
      to: 1722902400,
    },
    description: "For my final year project, My team and I developed a comprehensive management system tailored for real estate agents to efficiently track their commission cases and earnings. The system simplifies the management of financial data, improves organization, and ensures accurate reporting to support agents in their daily operations. Admins are also able to manage their employees and track their progress.",
    tools: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "REACT",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    sourceCodeLink: "https://github.com/vinc3w/ComSales-Management",
    additional: [
      {
        type: ADDITIONAL_TYPE.TEXT,
        label: "Methodology",
        value: "My team and I used the waterfall methodology throughout the project.",
      },
    ],
    featured: true,
  },
];
