import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Faker Feha Gamming App",
    category: "UI/UX — App Design",
    tools: "Figma, Adobe Illustrator",
    description: "Faker Feha is a social multiplayer trivia platform that connects users worldwide for fun, real-time Q&A challenges.",
    image: "/work/App-Design/Appdesign-1.png",
    link: "#",
  },
  {
    title: "Virtual Clinic & Booking Platform",
    category: "UI/UX — App Design",
    tools: "Figma, Prototyping",
    description: "A digital healthcare app designed to simplify doctor appointments and facilitate remote treatments through seamless video and audio consultations.",
    image: "/work/App-Design/Appdesign-2.png",
    link: "#",
  },
  {
    title: "Jamiye",
    category: "UI/UX — App Design",
    tools: "Figma, Design System",
    description: "An intuitive digital platform providing students with instant access to categorized shopping discounts and exclusive brand coupons.",
    image: "/work/App-Design/Appdesign-3.png",
    link: "#",
  },
  {
    title: "Construction Marketplace",
    category: "UI/UX — App Design",
    tools: "Figma, Prototyping",
    description: "A dedicated mobile shopping platform designed to make ordering essential home-building materials fast, visually clear, and accessible.",
    image: "/work/App-Design/Appdesign-4.png",
    link: "#",
  },
  {
    title: "TAS entertainment",
    category: "Web Design — UI",
    tools: "Figma, Web Design",
    description: "A highly visual website designed for a family fun park, highlighting magical wonderland experiences, ticket bookings, and interactive kids' zones.",
    image: "/work/Web-Design/Webdesign-1.png",
    link: "#",
  },
  {
    title: "Ent Conference 2025",
    category: "Web Design — UI",
    tools: "Figma, Web Design",
    description: "A clean, professional landing page designed for a medical conference.",
    image: "/work/Web-Design/Webdesign-2.png",
    link: "#",
  },
  {
    title: "Residential Hotel",
    category: "Web Design — Dashboard UI",
    tools: "Figma, Design System",
    description: "An intuitive hospitality website showcasing luxury stays and easy booking.",
    image: "/work/Web-Design/Webdesign-3.png",
    link: "#",
  },
  {
    title: "Lunara Coffee",
    category: "Branding — Logo Design",
    tools: "Photoshop, Illustrator",
    description: "A custom logo design and comprehensive visual branding project, showcasing the brand's aesthetic across physical packaging.",
    image: "/work/Branding/Branding-1.png",
    link: "#",
  },
  {
    title: "Aurevya",
    category: "Branding — Logo Design",
    tools: "Illustrator, Typography",
    description: "An elegant logo and brand identity crafted for a sophisticated artificial jewelry line.",
    image: "/work/Logos/Logo-3.png",
    link: "#",
  },
  {
    title: "Amira",
    category: "Branding — Logo Design",
    tools: "Illustrator, Photoshop",
    description: "A premium brand identity and logo design for Amira, a fine gold and diamond jewelry firm.",
    image: "/work/Logos/Logo-4.png",
    link: "#",
  },
  {
    title: "Lunara Coffee Branding",
    category: "Branding — Packaging",
    tools: "Illustrator, Photoshop",
    image: "/work/Branding/Branding-2.png",
    link: "#",
  },
  {
    title: "Corporate Signage & Identity",
    category: "Branding — Environmental Design",
    tools: "Illustrator, Photoshop",
    image: "/work/Branding/Branding-3.png",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{(index + 1).toString().padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.description && (
                          <p className="project-description">{project.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
