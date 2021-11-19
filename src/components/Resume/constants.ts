/**
 * Bullets to render in Resume section
 */
export const resumeBullets: { label: string; logoSrc: string }[] = [
  { label: "Education", logoSrc: "education.svg" },
  { label: "Work History", logoSrc: "work-history.svg" },
  { label: "Programming Skills", logoSrc: "programming-skills.svg" },
  { label: "Projects", logoSrc: "projects.svg" },
  { label: "Interests", logoSrc: "interests.svg" },
];

/**
 * Skill list  to render in Resume section
 */
export const skillDetails: { skill: string; ratingPercentage: number }[] = [
  { skill: "JavaScript", ratingPercentage: 82 },
  { skill: "React JS", ratingPercentage: 82 },
  { skill: "Node JS", ratingPercentage: 80 },
  { skill: "HTML", ratingPercentage: 80 },
  { skill: "CSS", ratingPercentage: 80 },
];

/**
 * Project details  to render in Resume section
 */
export const projectsDetails: {
  title: string;
  duration: { fromDate: string; toDate: string };
  description: string;
  subHeading: string;
}[] = [
  {
    title: "Personal Portfolio Website",
    duration: { fromDate: "2021", toDate: "2021" },
    description:
      "A Personal Portfolio website to showcase all my details and projects at one place.",
    subHeading: "Skills: TypeScript, React, Bootstrap",
  },
  {
    title: "Developer Social Network ",
    duration: { fromDate: "2020", toDate: "2020" },
    description: "Full stack social network for developers",
    subHeading:
      "Skills:  MERN Stack, React, Javascript, Express, MongoDB, NodeJS",
  },
];
