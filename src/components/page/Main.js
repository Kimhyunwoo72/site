import React from "react";
import { setState, useEffect } from "react";
import "../../assets/scss/style.scss";
import Header from "../basic/Header";
import Footer from "../basic/Footer";
import Slider from "../page/Slider";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import Banner from "../page/Banner";

function Main() {
  useEffect(() => {
    gsap.to(".main_bg", {
      duration: 1.2,
      delay: 0.2,
      ease: "power2.inOut",
      height: 0,
    });
    gsap.to(".banner_bg", {
      duration: 1.2,
      delay: 0.3,
      ease: "power2.inOut",
      height: 0,
    });

    gsap.to(".about_desc", {
      scrollTrigger: {
        trigger: ".main_about",
        markers: true,
        start: "5% center",
      },
      stagger: 0.2,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <>
      <Header />
      <main>
        <div className="main_bg"></div>
        <section className="banner_wrap">
          <article className="banner">
            <div className="banner_bg"></div>
            <div className="banner_text">
              <h1>OnAndYou</h1>
              <p>
                MOHEIM creates “new standard” <br /> to enrich your everyday
                life.
              </p>
            </div>
          </article>
        </section>
        <section className="main_about">
          <article>
            <span className="text_left">about us</span>
            <span className="text_right">
              <div className="right_title">
                <span className="right_desc">
                  <span className="about_desc">MOHEIM creates</span>
                </span>
                <br />
                <span className="right_desc right_desc2">
                  <span className="about_desc">“new standard” to</span>
                </span>
                <br />
                <span className="right_desc right_desc3">
                  <span className="about_desc">enrich your everyday life.</span>
                </span>
              </div>
              <p>
                The common denominator in MOHEIM's designs is minimalism and
                simplicity, and a desire to fit smoothly into people's lives. We
                use traditional techniques and advanced technology to give shape
                to our products with an ethical approach in line with the times.
                MOHEIM is a brand that creates "new standards" to enrich the
                lives of those who own our products.
              </p>
            </span>
          </article>
        </section>

        <section className="inside">
          <h2>inside</h2>
          <Slider />
        </section>

        <section className="shops">
          <div className="designers">
            <div className="designers_left">
              <h3>designers</h3>
            </div>
            <div className="designers_right">
              <p>About Designers</p>
              <span>
                <Link>
                  VIEW ALL <img src="img/arrow.svg" alt="arrow" />
                </Link>
              </span>
            </div>
          </div>
          <div className="findShops">
            <div className="findShops_left">
              <h3>shops</h3>
            </div>
            <div className="findShops_right">
              <p>Find Shops</p>
              <span>
                <Link>
                  VIEW ALL <img src="img/arrow.svg" alt="arrow" />
                </Link>
              </span>
            </div>
          </div>
        </section>

        <section className="imgSec">
          <div className="imgSec1"></div>
          <div className="imgSec2"></div>
          <div className="imgSec3">
            <div className="imgSec3_img"></div>
          </div>
        </section>

        <section className="news">
          <h2>NEWS</h2>
          <ul>
            <li>
              <Link>
                <span className="news_day">2023.01.25</span>
                <span className="news_title">event</span>
                <span className="news_desc">
                  OnAndYou 헤어샵 친구와 함께라면 추가 20% 할인행사
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="news_day">2023.01.25</span>
                <span className="news_title">event</span>
                <span className="news_desc">OnAndYou 헤어샵 오픈행사 안내</span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="news_day">2023.01.25</span>
                <span className="news_title">OPEN</span>
                <span className="news_desc">OnAndYou 헤어샵 Grand open</span>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
