import webDesignAnimation from "../Images/web_design_animation.json";
import webResponsiveAnimation from "../Images/web_app_animation.json";
import webAppAnimation from "../Images/webAppDevelopment.json";

export const navlinkData = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/project",
    text: "Projects",
  },
  {
    url: "/tech",
    text: "Tech",
  },
  {
    url: "/service",
    text: "Services",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

export const techData = [
  {
    name: "HTML",
    src: "../publicImages/tech/html.png",
  },
  {
    name: "CSS",
    src: "./publicImages/tech/css.png",
  },
  {
    name: "JavaScript",
    src: "./publicImages/tech/js.png",
  },
  {
    name: "React",
    src: "./publicImages/tech/react.png",
  },
  {
    name: "Tailwind",
    src: "./publicImages/tech/tailwind.png",
  },
  {
    name: "Git",
    src: "/publicImages/tech/git.png",
  },
  {
    name: "MongoDB",
    src: "/publicImages/tech/mongo.png",
  },
  {
    name: "Node",
    src: "/publicImages/tech/node.png",
  },
];

export const serviceData = [
  {
    id: 1,
    animation: webDesignAnimation,
    title: "Web Design",
    description:
      "Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation and ease of use.",
  },
  {
    id: 2,
    animation: webAppAnimation,
    title: "Web App Development",
    description:
      "Turning ideas into innovative web solutions that drive results ensuring seamless functionality, scalability and user satisfaction.",
  },
  {
    id: 1,
    animation: webResponsiveAnimation,
    title: "Responsive Layouts",
    description:
      "One stop for all your devices. Code that handles mobile devices to tablets to your laptop and monitor screens.",
  },
];

export const projectsData = [
  {
    id: 1,
    cover: "../publicImages/projects/myEmailBox.png",
    name: "Brand",
    category: "React Js",
    title: "My Email Box",
    githubLink:
      "https://github.com/geekieujjwal/EmailApp-reactJs-practice-set-10",
    liveLink: "https://email-app-geekieujjwal.vercel.app/",
  },
  {
    id: 2,
    cover: "../publicImages/projects/darlinnTodo.png",
    name: "Brand",
    category: "React Js",
    title: "Darlinn Todo",
    githubLink: "https://github.com/geekieujjwal/To-Do",
    liveLink: "https://to-do-geekieujjwal.vercel.app/",
  },
  {
    id: 3,
    cover: "../publicImages/projects/bookApp.png",
    name: "Brand",
    category: "React Js",
    title: "My Bookshelf",
    githubLink:
      "https://github.com/geekieujjwal/books-app-react-js-practice-set-9",
    liveLink: "https://books-app-geekieujjwal.vercel.app/",
  },
  {
    id: 4,
    cover: "../publicImages/projects/ipAddressTracker.png",
    name: "Brand",
    category: "Vanilla Js",
    title: "IP Address Tracker",
    githubLink: "https://github.com/geekieujjwal/IP-address-tracker",
    liveLink: "https://ip-address-tracker-geekieujjwal.vercel.app/",
  },
  {
    id: 5,
    cover: "../publicImages/projects/colorSchemeGenerator.png",
    name: "Brand",
    category: "Vanilla Js",
    title: "Color Scheme Generator",
    githubLink: "https://github.com/geekieujjwal/color-scheme-generator",
    liveLink: "https://color-scheme-generator-geekieujjwal.vercel.app/",
  },
  {
    id: 6,
    cover: "../publicImages/projects/movieWatchlist.png",
    name: "Brand",
    category: "Vanilla Js",
    title: "Movie Watchlist",
    githubLink: "https://github.com/geekieujjwal/movie-watchlist",
    liveLink: "https://movie-watchlist-geekieujjwal.vercel.app/",
  },
  //   {
  //     id: ,
  //     cover: "../publicImages/projects/fullStack.png",
  //     name: "Brand",
  //     category: "Full Stack",
  //     title: "",
  //     githubLink: "",
  //     liveLink: "",
  //   },
];

export const blogData = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./publicImages/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "../publicImages/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "../publicImages/blog/b3.png",
  },
];
