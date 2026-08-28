# portfolio

Personal portfolio site for Irma Ward — Technical Project Manager & AI Enthusiast.

A single-page, responsive site built with plain HTML, CSS, and JavaScript. No build step or
dependencies: open `index.html` in a browser to view it.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup and content (nav, hero, about, projects, skills, resume, contact) |
| `styles.css` | Styling, color palette (indigo / violet / fuchsia accent, cool grays), and animations |
| `script.js` | Smooth scroll, scroll-triggered fade-ins, active nav highlighting, ripple effect, counters |
| `assets/headshot.jpg` | Hero headshot |
| `assets/IrmaWard_PM_AI.pdf` | Downloadable resume linked from the Resume section |

## Running locally

```bash
# from the project folder
open index.html          # macOS
# or serve it
python3 -m http.server   # then visit http://localhost:8000
```

## Still to customize

- Confirm the LinkedIn URL (`https://www.linkedin.com/in/irma-ward` is a placeholder guess)
- Point the "Afterwords" and "Project Portfolio on GitHub" links at the specific repos
- Swap in a real repo/link for "AI Reporting in the Atlassian Suite" if one exists publicly

---

## File contents

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irma Ward - AI Technical Project Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Irma Ward</div>
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
                <img src="assets/headshot.jpg" alt="Irma Ward" class="hero-image">
            </div>
            <h1 class="hero-title">Hi, I'm Irma Ward 👋</h1>
            <p class="hero-subtitle">AI Technical Project Manager | Software Delivery | AI Workflow Implementation</p>
            <p class="hero-description">
                10+ years leading software delivery and deploying AI-enabled workflow solutions across engineering,
                DevOps, and QA — managing schedules, risks, and stakeholders from build through release.
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
                        I'm an AI Technical Project Manager with 10+ years leading software delivery across engineering,
                        DevOps, and QA. I specialize in deploying AI-enabled workflow solutions that make reporting, QA,
                        and localization faster and more consistent.
                    </p>
                    <p>
                        My work centers on managing schedules, risks, dependencies, and stakeholder communication in Agile
                        environments — and on driving AI adoption through practical tooling and measurable process
                        improvements from build through release.
                    </p>
                    <p>
                        I've delivered live mobile and web applications end to end, coordinated releases with partners like
                        the Apple App Store and Google Play, and produced executive status reporting that improves release
                        visibility and risk escalation.
                    </p>
                </div>
                <div class="about-highlights">
                    <div class="highlight-card">
                        <div class="highlight-number">10+</div>
                        <div class="highlight-label">Years Leading Software Delivery</div>
                    </div>
                    <div class="highlight-card">
                        <div class="highlight-number">AI</div>
                        <div class="highlight-label">Workflow Implementation</div>
                    </div>
                    <div class="highlight-card">
                        <div class="highlight-number">BS</div>
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
                <!-- Project: Afterwords -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #4f46e5, #7c3aed);">
                        <h3>Afterwords</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            A vibe-coded application built end to end with AI development tools — an exploration of how AI
                            can accelerate design, iteration, and delivery for a small product team.
                        </p>
                        <div class="project-details">
                            <span class="badge">Vibe-Coding</span>
                            <span class="badge">AI Tooling</span>
                            <span class="badge">Rapid Prototyping</span>
                        </div>
                        <a href="https://github.com/Irma-Ward" class="project-link" target="_blank">
                            View on GitHub →
                        </a>
                    </div>
                </div>

                <!-- Project: AI Reporting in the Atlassian Suite -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #7c3aed, #c026d3);">
                        <h3>AI Reporting in the Atlassian Suite</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            Coordinated AI-assisted reporting workflows in Jira and Confluence to improve release
                            visibility — surfacing blockers, dependencies, and delivery progress for executive stakeholders.
                        </p>
                        <div class="project-details">
                            <span class="badge">Jira</span>
                            <span class="badge">Confluence</span>
                            <span class="badge">AI Automation</span>
                        </div>
                        <a href="#contact" class="project-link">
                            Ask Me About It →
                        </a>
                    </div>
                </div>

                <!-- Project: Project Portfolio on GitHub -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #c026d3, #4f46e5);">
                        <h3>Project Portfolio on GitHub</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            A growing collection of hands-on AI and automation projects — from workflow agents to reporting
                            tooling — documenting practical experiments in AI implementation.
                        </p>
                        <div class="project-details">
                            <span class="badge">GitHub</span>
                            <span class="badge">AI Projects</span>
                            <span class="badge">Automation</span>
                        </div>
                        <a href="https://github.com/Irma-Ward" class="project-link" target="_blank">
                            Browse Repositories →
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
                        <li>AI Project Management</li>
                        <li>Project Planning</li>
                        <li>Risk & Dependency Management</li>
                        <li>Agile &amp; Scrum</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Software Delivery</h3>
                    <ul>
                        <li>End-to-End Implementation</li>
                        <li>Release Coordination</li>
                        <li>App Store &amp; Google Play Deployment</li>
                        <li>Deployment Readiness</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>AI Workflow Implementation</h3>
                    <ul>
                        <li>AI Automation</li>
                        <li>AI-Assisted QA</li>
                        <li>AI Reporting Workflows</li>
                        <li>AI Adoption &amp; Enablement</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Leadership &amp; Communication</h3>
                    <ul>
                        <li>Cross-Functional Leadership</li>
                        <li>Stakeholder Communication</li>
                        <li>Executive Status Reporting</li>
                        <li>Mentoring &amp; Coaching</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume">
        <div class="container">
            <h2 class="section-title">Resume &amp; Background</h2>
            <div class="resume-content">
                <div class="resume-left">
                    <h3>Education</h3>
                    <div class="resume-item">
                        <h4>Bachelor of Science, Computer Science</h4>
                        <p class="resume-year">DeVry University</p>
                    </div>

                    <h3 style="margin-top: 2rem;">Experience Highlights</h3>
                    <div class="resume-item">
                        <h4>Sr. Deployment Project Manager — AI Delivery &amp; Software Implementation</h4>
                        <p class="resume-year">Scopely (Remote) • Jul 2023 – Mar 2026</p>
                        <p>
                            Led enterprise AI initiatives — AI-assisted QA automation and improved AI reporting workflows
                            in Jira and Confluence — and coordinated end-to-end AI-enabled delivery across Engineering,
                            DevOps, QA, Production, and Live Ops.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Deployment Project Manager — Software Delivery</h4>
                        <p class="resume-year">Scopely (Remote) • Feb 2021 – Jul 2023</p>
                        <p>
                            Managed end-to-end software implementation and deployment for live mobile and web applications,
                            coordinating release schedules with Apple App Store Connect and Google Play Console across
                            concurrent projects.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Associate Producer &amp; Technical Project Coordinator</h4>
                        <p class="resume-year">Microsoft / The Initiative • Dec 2018 – Sep 2020</p>
                        <p>
                            Coordinated software development milestones across engineering, design, and production; built
                            schedules, tracked risks, and created Jira workflows that improved delivery visibility and
                            stakeholder alignment.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Producer</h4>
                        <p class="resume-year">Lucid Sight • May 2018 – Oct 2018</p>
                        <p>
                            Led cross-functional software teams delivering mobile and PC applications, partnering with
                            engineering and QA to resolve delivery issues and protect schedules.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Associate Producer</h4>
                        <p class="resume-year">Deluxe Entertainment • Nov 2015 – Apr 2018</p>
                        <p>
                            Supported enterprise software delivery across North America, Europe, and APAC, coordinating
                            localization, publishing, and deployment readiness across technical teams.
                        </p>
                    </div>
                </div>

                <div class="resume-right">
                    <div class="resume-download">
                        <h3>Download Full Resume</h3>
                        <p>The complete rundown of my experience delivering software and implementing AI workflows.</p>
                        <a href="assets/IrmaWard_PM_AI.pdf" class="btn btn-primary" download>Download PDF</a>
                    </div>
                    <div class="resume-note">
                        <h3>Certifications &amp; Languages</h3>
                        <p>
                            <strong>Certifications:</strong> Succeed in the Age of AI · Intro to AI Agents and Agentic AI<br>
                            <strong>Languages:</strong> English · Spanish
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
                <p>
                    Based in San Marcos, CA and open to remote. I'm always up for a conversation about software delivery,
                    AI workflow implementation, and technical project management.
                </p>
                <div class="contact-links">
                    <a href="mailto:iwardgamer@gmail.com" class="contact-link">
                        <span class="contact-icon">✉️</span> Email
                    </a>
                    <a href="https://github.com/Irma-Ward" class="contact-link" target="_blank">
                        <span class="contact-icon">💻</span> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/irma-ward" class="contact-link" target="_blank">
                        <span class="contact-icon">💼</span> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 Irma Ward. Crafted with collaboration and care.</p>
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
   Color Palette: Indigo, Violet, Fuchsia accent, Cool Grays
   ========================================== */

/* Reset & Variables */
:root {
    /* Primary Colors - Indigo + Violet */
    --cyan: #7c3aed;          /* violet (secondary) */
    --cyan-light: #ede9fe;    /* violet-100 */
    --blue: #4f46e5;          /* indigo (primary) */
    --blue-light: #e0e7ff;    /* indigo-100 */
    --orange: #c026d3;        /* fuchsia (accent) */
    --orange-light: #fae8ff;  /* fuchsia-100 */
    --white: #ffffff;
    --light-bg: #f8fafc;
    --light-gray: #e2e8f0;
    --gray: #4b5563;          /* cool gray-600 */
    --dark: #1e1b4b;          /* indigo-950 */

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
    box-shadow: var(--shadow-lg), 0 0 30px rgba(124, 58, 237, 0.3);
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
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.3);
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
    background: linear-gradient(135deg, var(--orange-light), rgba(192, 38, 211, 0.1));
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
    'background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 10px 20px; border-radius: 5px; font-size: 14px; font-weight: bold;'
);
console.log(
    '%c Built with collaboration and care 🤝',
    'color: #7c3aed; font-size: 12px; font-style: italic;'
);
```
