export type Project = {
  title: string;
  description: string;
  skills: string;
  imageUrl: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Developer Social Network",
    description: "This was the first React project I worked on",
    skills: "React, JavaScript, MongoDB, ExpressJS, NodeJS",
    imageUrl:
      "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
    imageAlt: "App image alt placeholder",
  },
  {
    title: "REST API",
    description: "Awesome REST API",
    skills: "NodeJS, JavaScript",
    imageUrl:
      "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
    imageAlt: "App image alt placeholder",
  },
  {
    title: "Cool Mobile App",
    description: "Awesome mobile app",
    skills: "React Native",
    imageUrl:
      "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
    imageAlt: "App image alt placeholder",
  },
];
