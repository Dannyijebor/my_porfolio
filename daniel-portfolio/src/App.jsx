import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "Glitchcraft Studios",
    category: "Game Studio · Saudi Arabia",
    description:
      "An immersive digital platform built for a game studio in Saudi Arabia, bringing games, worlds, community and interactive technology into one ecosystem.",
    tags: ["Web Development", "WebGL", "Artificial Intelligence", "Product"],
    url: "https://www.glitchcraftstudiosa.com/",
    visual: "glitchcraft",
    featured: true,
  },
  {
    number: "02",
    title: "Epic Games Store",
    category: "Digital Product · Frontend",
    description:
      "Frontend work focused on the storefront experience, game discovery, digital products and the interaction layer of a major gaming platform.",
    tags: ["Frontend Development", "Product", "User Experience"],
    url: "https://store.epicgames.com/",
    visual: "epic",
  },
  {
    number: "03",
    title: "ChanVault",
    category: "Data · Blockchain",
    description:
      "A web-based data solution designed to make the transition from hard-copy documents to secure digital records seamless, with blockchain-backed infrastructure.",
    tags: ["Data Science", "Blockchain", "Digital Transformation"],
    url: "https://chain-vault-vaultcore.vercel.app/",
    visual: "vault",
  },
];

const otherProjects = [
  {
    title: "Coded L@NG",
    category: "Digital Platform",
    description:
      "A digital platform connecting people, opportunities and a supportive community around growth and intentional development.",
    url: "https://www.codedlng.com/",
  },
];

function Snowfield({ theme }) {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const createFlakes = () => {
      const count = window.innerWidth < 700 ? 55 : 120;

      setFlakes(
        Array.from({ length: count }, (_, index) => ({
          id: index,
          left: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 18 + 12,
          delay: Math.random() * -30,
          drift: Math.random() * 180 - 90,
          opacity: Math.random() * 0.55 + 0.12,
        }))
      );
    };

    createFlakes();
    window.addEventListener("resize", createFlakes);

    return () => window.removeEventListener("resize", createFlakes);
  }, []);

  return (
    <div className={`snowfield ${theme}`} aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            "--drift": `${flake.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

function ProjectVisual({ project }) {
  const imageMap = {
    glitchcraft: "/photos/glitchcraft.jpg",
    epic: "/photos/epic_store.jpg",
    vault: "/photos/chainvault.jpg",
    chainvault: "/photos/chainvault.jpg",
    codedlng: "/photos/codedlng.jpg",
  };

  const image = project.image || imageMap[project.visual];

  return (
    <div className="project-visual">
      {image ? (
        <img
          src={image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      ) : (
        <div className="project-visual-fallback">
          <span>{project.title}</span>
        </div>
      )}

      <div className="project-image-overlay">
        <span>VIEW PROJECT</span>
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`Open ${project.title}`}
    >
      <ProjectVisual project={project} />

      <div className="project-card-content">
        <div className="project-card-top">
          <div>
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>
          </div>

          <ArrowUpRight
            className="project-arrow"
            size={20}
          />
        </div>

        <p>{project.description}</p>
      </div>
    </a>
  )
}
function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <Snowfield theme={theme} />

      <header className="navbar">
        <a href="#top" className="logo">
          DG<span>.</span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#capabilities">What I Do</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Start a project
          <ArrowUpRight size={15} />
        </a>
      </header>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark and light mode"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <main>
        <section id="top" className="hero">
          <div className="hero-content">
            <div className="profile-photo-wrap">
              <div className="profile-photo-ring">
                <img
                  src="/photos/profile.jpeg"
                  alt="Daniel Gadase Ijebor"
                  className="profile-photo"
                />
              </div>
            </div>

            <div className="eyebrow">
              <span className="status-dot" />
              WEB DEVELOPMENT · DATA SCIENCE · ARTIFICIAL INTELLIGENCE · GAME DEVELOPMENT
            </div>

            <h1>
              I build brands,
              <br />
              <em>solutions & worlds.</em>
            </h1>

            <p className="hero-description">
              I create digital experiences, intelligent systems and
              interactive worlds for companies with something worth building.
              Not just websites. Not just software. Experiences designed to
              leave a lasting mark.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="secondary-button">
                Let's build something
              </a>
            </div>
          </div>


        </section>

        <section id="work" className="work-section">
          <div className="section-intro">
            <span className="section-label">SELECTED WORK</span>

            <h2>
              Built to be experienced,
              <br />
              not just viewed.
            </h2>

            <p>
              Platforms, products and digital experiences built across web
              development, data science, artificial intelligence and games.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="other-projects">
            <div className="other-projects-heading">
              <span className="section-label">OTHER PROJECTS</span>
              <span>More things I've helped bring to life.</span>
            </div>

            {otherProjects.map((project) => (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="other-project"
                key={project.title}
              >
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <ArrowUpRight size={25} />
              </a>
            ))}
          </div>
        </section>

        <section id="capabilities" className="capabilities-section">
          <div className="section-intro">
            <span className="section-label">WHAT I DO</span>

            <h2>
              Different disciplines.
              <br />
              One vision.
            </h2>
          </div>

          <div className="capability-list">
            <div>
              <span>01</span>
              <h3>Web Development</h3>
              <p>
                Websites, platforms, web applications and immersive digital
                experiences designed around people, brands and business
                objectives.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Data Science</h3>
              <p>
                Data analysis, visualization, predictive modelling, data
                pipelines and intelligent solutions that transform information
                into useful decisions.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Artificial Intelligence</h3>
              <p>
                Practical artificial intelligence integrated into products,
                platforms, support experiences and business workflows.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Game Development</h3>
              <p>
                Interactive games, playable experiences, digital worlds and
                technology that makes products feel alive.
              </p>
            </div>
          </div>
        </section>

        <section className="photo-section">
          <div className="photo-heading">
            <span className="section-label">BEHIND THE WORK</span>

            <h2>
              The person
              <br />
              behind the pixels.
            </h2>

            <p>
              Technology is what I build with. Curiosity is what keeps me
              building.
            </p>
          </div>

          <div className="photo-gallery">
            <div className="photo-slot profile-photo">
              <img
                src="/photos/profile.jpeg"
                alt="Daniel"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span>YOUR PHOTO</span>
            </div>
            
          </div>
        </section>

        <section id="about" className="about-section">
          <span className="section-label">THE IDEA</span>

          <h2>
            I don't just build websites.
            <br />
            <span>I build what comes after the idea.</span>
          </h2>

          <p>
            Brands need more than beautiful pages. They need experiences,
            systems and technology that give people a reason to remember them.
            My work sits at the intersection of design, technology, data and
            imagination.
          </p>
        </section>

        <section id="contact" className="contact-section">
          <span className="section-label">START SOMETHING</span>

          <h2>
            Have something
            <br />
            <em>worth building?</em>
          </h2>

          <p>
            Tell me what you're imagining. Let's turn the idea into something
            people remember.
          </p>

          <div className="contact-actions">
            <a href="mailto:hello@danielijebor.com" className="contact-button">
              <Mail size={17} />
              Start a conversation
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://x.com/dannyijebor"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              X
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-ijebor-biz"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <span className="linkedin-mark">in</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>DG.</span>
        <span>Building brands, solutions & worlds.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
