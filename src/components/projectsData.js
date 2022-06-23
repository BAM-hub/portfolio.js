import gamerSite from "../assets/gamerSite.png";
import laragigs from "../assets/laragigs.png";
import smartTransport from "../assets/smartTransport.png";

export const PROJECTS_DATA = [
  {
    image: gamerSite,
    name: "gamerSite",
    frontend: ["React", "Redux", "Socketio-client", "axios"],
    backend: [
      "expressHTTP",
      "socketio",
      "JWT",
      "GridFS",
      "multer",
      "Bcryptjs",
      "MongoDB - mongoose",
    ],
    about:
      "Website for gamers to chat and share their favourite games. in this project my main focus was building a fullstack MERN website with live communication. In this project I learnt alot about websockets from socketio documentation, I used Figgma for Design And GridFS for image uploading.",
  },
  {
    image: laragigs,
    name: "laragigs",
    frontend: ["NONE"],
    backend: ["Laravel", "Blade", "MySQL"],
    about:
      "This project was based on Traversy Media's repo, I changed the relationships (did som Normalization and changed some of the app functionality), I also did some changes in the views to match the new scema and I also modified factories.",
  },
  // {
  //   image: smartTransport,
  //   name: "smartTransport",
  //   frontend: [
  //     "React Native",
  //     "Context api",
  //     "socketio-client",
  //     "MapView",
  //     "React Native getLocatio",
  //     "Road api - Distance api",
  //   ],
  //   backend: ["expressHTTP", "socketio", "cors"],
  //   about:
  //     "Mobile app for tansports. This project is made for users to enhance the transports experience. As a user you would see buses around you and book seats you would also see the buss line, time to reach  and distance. As  a driver you would recive ride requests and see your line.",
  // },
];
