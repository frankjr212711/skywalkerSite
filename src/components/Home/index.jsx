import "./styles.css";
import { FeaturedSection } from "../FeaturedSection";
import { Footer } from "../Footer";
import { Header } from "../Header/index";
import { Hero } from "../Hero/index";
import { IntroSection } from "../IntroSection";

import img1 from "~/assets/images/sky-img-03.png"
import img2 from "~/assets/images/gjr-img-030.jpg"
import img3 from "~/assets/images/lib-ritello-mini.jpg"






const featuredData = [
  {
    titleOne: "GET YOUR MODERN HOME",
    titleTwo: "CONTEMPORY DESIGNS",
    textOne:
      "Whether you want to change the world or nurture your own neighborhood, GJR is the place to begin. With more than 50 designs to choose from, there's something for everyone.",
      videoPath: img1,
    btnLink: "/gjr",
    bgColor: "#f2f2f2",
    txtColor: "#111",
    btnBgColor: "#f00",
  },
  {
    titleOne: "WHY DRINK JUST ANY WATER?",
    titleTwo: "WHEN YOU CAN DRINK SKYWALKER",
    textOne:
      "Whether you want to change the world or nurture your own neighborhood, GJR is the place to begin. With more than 50 designs to choose from, there's something for everyone.",
      videoPath: img2,
    btnLink: "/skywalker",
    bgColor: "#111",
    txtColor: "#fff",
  },
  {
    titleOne: "FETCH, DRINK CLEAN WATER RIGHT FROM THE TAB",
    titleTwo: "BREATHE PURIFIED AIR WHY NOT",
    textOne:
      "Whether you want to change the world or nurture your own neighborhood, GJR is the place to begin. With more than 50 designs to choose from, there's something for everyone.",
      videoPath: img3,
    btnLink: "/librex",
    bgColor: "#f2f2f2",
    txtColor: "#111",
    btnBgColor: "#111",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <IntroSection />
      <FeaturedSection data={featuredData} />

      <Footer />
    </div>
  );
};

export default Home;
