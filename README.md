# portfolio

Personal portfolio site for Irma — Technical Project Manager & AI Enthusiast.

A single-page, responsive site built with plain HTML, CSS, and JavaScript. No build
step or dependencies: open `index.html` in a browser to view it.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content (nav, hero, about, projects, skills, resume, contact) |
| `styles.css` | Styling, color palette (blues / cyan / light orange), and animations |
| `script.js` | Smooth scroll, scroll-triggered fade-ins, active nav highlighting, ripple effect, counters |

## Running locally

```bash
# from the project folder
open index.html          # macOS
# or serve it
python3 -m http.server   # then visit http://localhost:8000
```

## Still to customize

- Replace the placeholder headshot (`https://via.placeholder.com/200`)
- Fill in real education / experience details in the Resume section
- Update LinkedIn and Twitter URLs (`YOUR_PROFILE`)
- Point the "Vibe Coding" and case-study links at real destinations
- Add a real resume PDF for the download button

---

## File contents

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irma - Product Manager & Game Development Leader</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Irma</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-image-wrapper">
                <img src="https://via.placeholder.com/200?text=Your+Headshot" alt="Irma" class="hero-image">
            </div>
            <h1 class="hero-title">Hey, I'm Irma 👋</h1>
            <p class="hero-subtitle">Product Manager | Game Development Leader | Collaborative Problem Solver</p>
            <p class="hero-description">
                12 years leading game development teams. I turn complex ideas into shipped products that people love.
            </p>
            <div class="hero-cta">
                <a href="#projects" class="btn btn-primary">See My Work</a>
                <a href="#contact" class="btn btn-secondary">Let's Connect</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        I'm a Project Manager with a BA in Computer Science and 12 years of hands-on experience in game development.
                        I thrive at the intersection of strategy and execution, where I can collaborate with cross-functional teams to
                        bring ambitious ideas to life.
                    </p>
                    <p>
                        My background spans managing complex development cycles, leading diverse teams, and solving problems through
                        a collaborative lens. I believe the best products come from listening, understanding, and working together toward
                        shared goals.
                    </p>
                    <p>
                        When I'm not managing projects, you'll find me exploring new tools, automating workflows, or diving into how
                        technology can solve real problems.
                    </p>
                </div>
                <div class="about-highlights">
                    <div class="highlight-card">
                        <div class="highlight-number">12+</div>
                        <div class="highlight-label">Years in Game Dev</div>
                    </div>
                    <div class="highlight-card">
                        <div class="highlight-number">∞</div>
                        <div class="highlight-label">Enthusiasm for Collaboration</div>
                    </div>
                    <div class="highlight-card">
                        <div class="highlight-number">BA</div>
                        <div class="highlight-label">Computer Science</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                <!-- Project 1: Job Collector Agent -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #0ea5e9, #06b6d4);">
                        <h3>Job Collector Agent</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            Automated AI agent that scrapes job listings from Indeed & Google Jobs, filters by criteria,
                            and outputs to an Excel file updated 2x daily on weekdays.
                        </p>
                        <div class="project-details">
                            <span class="badge">Node.js</span>
                            <span class="badge">GitHub Actions</span>
                            <span class="badge">Automation</span>
                        </div>
                        <a href="https://github.com/Irma-Ward/job-collector" class="project-link" target="_blank">
                            View on GitHub →
                        </a>
                    </div>
                </div>

                <!-- Project 2: Vibe Coding Project -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #f97316, #fb923c);">
                        <h3>Vibe Coding</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            A creative coding exploration project that brings ideas to life through visual design and interactivity.
                            Built with a focus on user experience and welcoming aesthetics.
                        </p>
                        <div class="project-details">
                            <span class="badge">Design</span>
                            <span class="badge">UX</span>
                            <span class="badge">Interactive</span>
                        </div>
                        <a href="#" class="project-link" target="_blank">
                            View Project →
                        </a>
                    </div>
                </div>

                <!-- Project 3: Portfolio Template -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #06b6d4, #0ea5e9);">
                        <h3>PM Leadership Case Study</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            A deep dive into a major game development project: scope, team structure, challenges faced,
                            and how collaborative problem-solving led to successful delivery.
                        </p>
                        <div class="project-details">
                            <span class="badge">Leadership</span>
                            <span class="badge">Game Dev</span>
                            <span class="badge">Strategy</span>
                        </div>
                        <a href="#" class="project-link">
                            Read Case Study →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Project Management</h3>
                    <ul>
                        <li>Agile & Scrum</li>
                        <li>Stakeholder Management</li>
                        <li>Resource Planning</li>
                        <li>Risk Management</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Game Development</h3>
                    <ul>
                        <li>Game Production</li>
                        <li>Team Leadership</li>
                        <li>Cross-functional Collaboration</li>
                        <li>Launch Strategy</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Leadership & Collaboration</h3>
                    <ul>
                        <li>Team Building</li>
                        <li>Communication</li>
                        <li>Conflict Resolution</li>
                        <li>Mentorship</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Technical Literacy</h3>
                    <ul>
                        <li>Understanding Code</li>
                        <li>Automation & Tools</li>
                        <li>Data & Analytics</li>
                        <li>Technical Specs</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume">
        <div class="container">
            <h2 class="section-title">Resume & Background</h2>
            <div class="resume-content">
                <div class="resume-left">
                    <h3>Education</h3>
                    <div class="resume-item">
                        <h4>Bachelor of Arts in Computer Science</h4>
                        <p class="resume-year">Your University • Year</p>
                        <p>Brief description of your degree focus or achievements.</p>
                    </div>

                    <h3 style="margin-top: 2rem;">Experience Highlights</h3>
                    <div class="resume-item">
                        <h4>Senior Project Manager / Lead</h4>
                        <p class="resume-year">Game Studio • Years</p>
                        <p>Led cross-functional teams, managed multi-year projects, shipped titles successfully.</p>
                    </div>
                    <div class="resume-item">
                        <h4>Project Manager</h4>
                        <p class="resume-year">Game Company • Years</p>
                        <p>Managed production cycles, coordinated with stakeholders, optimized team workflows.</p>
                    </div>
                </div>

                <div class="resume-right">
                    <div class="resume-download">
                        <h3>Download Full Resume</h3>
                        <p>Get the complete details of my experience, education, and accomplishments.</p>
                        <a href="#" class="btn btn-primary" download>Download PDF</a>
                    </div>
                    <div class="resume-note">
                        <h3>Let's Chat</h3>
                        <p>
                            Interested in learning more? I'm always happy to discuss how my experience can contribute
                            to your team's success.
                        </p>
                        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Let's Connect</h2>
            <div class="contact-content">
                <p>I'm always open to conversations about game development, product management, and collaboration opportunities.</p>
                <div class="contact-links">
                    <a href="mailto:iwardgamer@gmail.com" class="contact-link">
                        <span class="contact-icon">✉️</span> Email
                    </a>
                    <a href="https://github.com/Irma-Ward" class="contact-link" target="_blank">
                        <span class="contact-icon">💻</span> GitHub
                    </a>
                    <a href="https://linkedin.com/in/YOUR_PROFILE" class="contact-link" target="_blank">
                        <span class="contact-icon">💼</span> LinkedIn
                    </a>
                    <a href="https://twitter.com/YOUR_PROFILE" class="contact-link" target="_blank">
                        <span class="contact-icon">🐦</span> Twitter
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Irma. Crafted with collaboration and care.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### styles.css

```css
/* ==========================================
   PORTFOLIO - STYLES & ANIMATIONS
   Color Palette: Lights, Blues, Cyan, Light Oranges
   ========================================== */

/* Reset & Variables */
:root {
    /* Primary Colors */
    --cyan: #06b6d4;
    --cyan-light: #cffafe;
    --blue: #0ea5e9;
    --blue-light: #e0f2fe;
    --orange: #f97316;
    --orange-light: #fed7aa;
    --white: #ffffff;
    --light-bg: #f8fafc;
    --light-gray: #e2e8f0;
    --gray: #64748b;
    --dark: #1e293b;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

    /* Transitions */
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background-color: var(--white);
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* ==========================================
   NAVIGATION
   ========================================== */
.navbar {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
    z-index: 100;
    animation: slideDown 0.6s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--blue), var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    position: relative;
    transition: var(--transition);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--blue), var(--cyan));
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

/* ==========================================
   HERO SECTION
   ========================================== */
.hero {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, var(--light-bg), var(--blue-light));
    animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.hero-image-wrapper {
    margin-bottom: 2rem;
    animation: scaleIn 0.8s ease 0.2s both;
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.hero-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--cyan);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(6, 182, 212, 0.3);
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--blue), var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideUp 0.8s ease 0.3s both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--cyan);
    margin-bottom: 1rem;
    animation: slideUp 0.8s ease 0.4s both;
}

.hero-description {
    font-size: 1.1rem;
    color: var(--gray);
    margin-bottom: 2rem;
    line-height: 1.8;
    animation: slideUp 0.8s ease 0.5s both;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: slideUp 0.8s ease 0.6s both;
}

/* ==========================================
   BUTTONS
   ========================================== */
.btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background: linear-gradient(135deg, var(--blue), var(--cyan));
    color: var(--white);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(14, 165, 233, 0.3);
}

.btn-secondary {
    background: transparent;
    color: var(--blue);
    border: 2px solid var(--blue);
}

.btn-secondary:hover {
    background: var(--blue-light);
    transform: translateY(-2px);
}

/* ==========================================
   SECTION STYLING
   ========================================== */
.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--dark);
    background: linear-gradient(135deg, var(--blue), var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideUp 0.8s ease both;
}

/* About Section */
.about {
    padding: 5rem 2rem;
    background-color: var(--white);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text {
    animation: slideUp 0.8s ease both;
}

.about-text p {
    font-size: 1.1rem;
    color: var(--gray);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    animation: slideUp 0.8s ease 0.2s both;
}

.highlight-card {
    padding: 2rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
    border-radius: 12px;
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.highlight-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.highlight-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--blue), var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.highlight-label {
    color: var(--gray);
    font-size: 0.95rem;
    margin-top: 0.5rem;
}

/* Projects Section */
.projects {
    padding: 5rem 2rem;
    background-color: var(--light-bg);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    animation: slideUp 0.8s ease both;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.project-header {
    padding: 2rem;
    color: var(--white);
}

.project-header h3 {
    font-size: 1.5rem;
}

.project-body {
    padding: 2rem;
}

.project-body p {
    color: var(--gray);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.project-details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
    color: var(--blue);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-link {
    display: inline-block;
    color: var(--blue);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.project-link:hover {
    color: var(--cyan);
    transform: translateX(5px);
}

/* Skills Section */
.skills {
    padding: 5rem 2rem;
    background-color: var(--white);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-category {
    padding: 2rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
    border-radius: 12px;
    box-shadow: var(--shadow-sm);
    animation: slideUp 0.8s ease both;
    transition: var(--transition);
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.skill-category h3 {
    color: var(--blue);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    color: var(--dark);
    padding: 0.5rem 0;
    font-weight: 500;
    position: relative;
    padding-left: 1.5rem;
}

.skill-category li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--cyan);
    font-weight: bold;
}

/* Resume Section */
.resume {
    padding: 5rem 2rem;
    background-color: var(--light-bg);
}

.resume-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.resume-left {
    animation: slideUp 0.8s ease both;
}

.resume-item {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--light-gray);
}

.resume-item:last-child {
    border-bottom: none;
}

.resume-item h4 {
    color: var(--dark);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.resume-year {
    color: var(--cyan);
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.resume-item p {
    color: var(--gray);
    line-height: 1.8;
}

.resume-right {
    animation: slideUp 0.8s ease 0.2s both;
}

.resume-download,
.resume-note {
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
}

.resume-download {
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
}

.resume-note {
    background: linear-gradient(135deg, var(--orange-light), rgba(249, 115, 22, 0.1));
}

.resume-download h3,
.resume-note h3 {
    margin-bottom: 1rem;
    color: var(--dark);
}

.resume-download p,
.resume-note p {
    color: var(--gray);
    margin-bottom: 1rem;
    line-height: 1.8;
}

/* Contact Section */
.contact {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
}

.contact-content {
    text-align: center;
    animation: slideUp 0.8s ease both;
}

.contact-content p {
    font-size: 1.1rem;
    color: var(--dark);
    margin-bottom: 2rem;
}

.contact-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: var(--white);
    color: var(--blue);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
}

.contact-link:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    background: var(--orange-light);
    color: var(--orange);
}

.contact-icon {
    font-size: 1.3rem;
}

/* Footer */
.footer {
    padding: 2rem;
    background: var(--dark);
    color: var(--white);
    text-align: center;
}

/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .hero-cta {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        text-align: center;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    .resume-content {
        grid-template-columns: 1fr;
    }

    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .contact-links {
        gap: 1rem;
    }

    .contact-link {
        flex: 1;
        min-width: 150px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }

    .hero {
        padding: 3rem 1rem;
    }

    .hero-image {
        width: 150px;
        height: 150px;
    }

    .hero-title {
        font-size: 1.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .nav-links {
        display: none;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .highlight-card {
        padding: 1.5rem;
    }
}

/* ==========================================
   ANIMATIONS ON SCROLL (Enhanced)
   ========================================== */
.project-card,
.skill-category,
.resume-item {
    opacity: 0;
    animation: slideUp 0.8s ease forwards;
}

.projects-grid .project-card:nth-child(1) {
    animation-delay: 0s;
}

.projects-grid .project-card:nth-child(2) {
    animation-delay: 0.1s;
}

.projects-grid .project-card:nth-child(3) {
    animation-delay: 0.2s;
}

.skills-grid .skill-category:nth-child(1) {
    animation-delay: 0s;
}

.skills-grid .skill-category:nth-child(2) {
    animation-delay: 0.1s;
}

.skills-grid .skill-category:nth-child(3) {
    animation-delay: 0.2s;
}

.skills-grid .skill-category:nth-child(4) {
    animation-delay: 0.3s;
}
```

### script.js

```javascript
/* ==========================================
   PORTFOLIO - ANIMATIONS & INTERACTIVITY
   ========================================== */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for valid anchor links (not empty hrefs)
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class when element comes into view
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.project-card, .skill-category').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--blue);
        font-weight: 700;
    }
`;
document.head.appendChild(style);

// Parallax effect on hero section (subtle)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// Hover effects for interactive elements
document.querySelectorAll('.project-card, .highlight-card, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when highlight cards are in view
const highlightCards = document.querySelectorAll('.highlight-number');
let countersAnimated = false;

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            highlightCards.forEach(card => {
                const text = card.textContent;
                // Only animate numbers, skip symbols like "∞"
                if (!isNaN(parseInt(text))) {
                    animateCounter(card, parseInt(text));
                }
            });
            countersAnimated = true;
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (highlightCards.length > 0) {
    counterObserver.observe(highlightCards[0].closest('.highlight-card'));
}

// Mobile menu toggle (optional - for future mobile nav enhancements)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        // Add mobile-specific behavior here if needed
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Console welcome message
console.log(
    '%c Welcome to Irma\'s Portfolio! ',
    'background: linear-gradient(135deg, #0ea5e9, #06b6d4); color: white; padding: 10px 20px; border-radius: 5px; font-size: 14px; font-weight: bold;'
);
console.log(
    '%c Built with collaboration and care 🤝',
    'color: #06b6d4; font-size: 12px; font-style: italic;'
);
```
