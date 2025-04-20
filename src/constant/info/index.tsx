export type Experience = {
    role?: string;        // ทำให้ role เป็น optional
    company?: string;     // ทำให้ company เป็น optional
    period?: string;      // ทำให้ period เป็น optional
    description?: string[]; // ทำให้ description เป็น optional
}

export const words = [
    "Software Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Web Developer",
    // "Software Engineer",
]

export const experiences: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "T-BOX Co. , Ltd.",
        period: "25 November 2024 - 14 March 2025",
        description: [
            "Developed a demo for the Versa App, an ICO Portal Platform, ", 
            "implementing features like user onboarding, token listing, and push notifications with WebSocket integration.",
            "Collaborated with the team on design implementation, developing mock APIs using Express.js",
            "Used Flutter for cross-platform development and Riverpod for state management, following Clean Architecture principles for maintainability and scalability.",
        ]
    },
//   {
//         role: "Web Developer Intern",
//         company: "ABC Co. , Ltd.",
//         period: "XX September 2X24 - XX November 2X24",
//         description: [
//         "worked on a project to build a responsive website for a startup company.",
//         "Collaborated with a team of developers to design and implement a user-friendly interface for a web application.",
//         "Used React.js to build a dynamic and interactive user interface, ensuring a seamless user experience.",
//         "Using Backend API from Node.js with Express.js And MongoDB to store and retrieve data from the database.",
//         ]
//     },
]