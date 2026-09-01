# portfolio

Personal portfolio site for Irma Ward, Technical Project Manager and AI Enthusiast.

A responsive one page site built with plain HTML, CSS, and JavaScript. There is no build
step and there are no dependencies: open `index.html` in a browser to view it.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup and content (nav, hero, about, how I work, projects, skills, resume, off the clock, contact) |
| `styles.css` | Styling, color palette (indigo, violet, fuchsia accent, cool grays), photo frames, and animations |
| `script.js` | Smooth scroll, reveal on scroll, active nav highlighting, ripple effect, counters |
| `assets/headshot.jpg` | Hero headshot |
| `assets/about-tahoe.jpg` | Photo in the About section |
| `assets/contact-portrait.jpg` | Photo in the Contact section |
| `assets/hiking.jpg` `assets/travel.jpg` `assets/charlie.jpg` `assets/food.jpg` `assets/games.jpg` `assets/afterwords.jpg` | Off the Clock photos |
| `assets/IrmaWard_PM_AI.pdf` | Downloadable resume linked from the Resume section |

## Running locally

```bash
# from the project folder
open index.html          # macOS
# or serve it
python3 -m http.server   # then visit http://localhost:8000
```

## Still to customize

- Point the "Project Portfolio on GitHub" link at the specific repo
- Swap in a real link for "AI Reporting in the Atlassian Suite" if one exists publicly

---

## File contents

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irma Ward | Technical Project Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script>document.documentElement.classList.add('js');</script>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Irma Ward</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#values">How I Work</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#off-the-clock">Off the Clock</a></li>
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
            <p class="hero-subtitle">Technical Project Manager | Software Delivery | AI Workflow Implementation</p>
            <p class="hero-description">
                10+ years leading software delivery and deploying AI enabled workflow solutions across engineering,
                DevOps, and QA. I manage schedules, risks, and stakeholders from build through release.
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
            <h2 class="section-title reveal">About Me</h2>
            <div class="about-content">
                <div class="about-text reveal">
                    <p class="about-lead">
                        I am passionate about project management because I thrive in collaboration, working alongside
                        teams to improve the processes that build better products. Ten years of leading software delivery
                        has shown me that the best outcomes come from building trust, asking the hard questions early, and
                        bringing the right people together to solve problems none of us could crack alone.
                    </p>
                    <p>
                        I'm a Technical Project Manager with 10+ years leading software delivery across engineering,
                        DevOps, and QA. I specialize in deploying AI enabled workflow solutions that make reporting, QA,
                        and localization faster and more consistent.
                    </p>
                    <p>
                        My work centers on managing schedules, risks, dependencies, and stakeholder communication in Agile
                        environments. I also drive AI adoption through practical tooling and measurable process
                        improvements from build through release.
                    </p>
                    <p>
                        I've delivered live mobile and web applications end to end, coordinated releases with partners like
                        the Apple App Store and Google Play, and produced executive status reporting that improves release
                        visibility and risk escalation.
                    </p>
                </div>
                <div class="about-photo reveal">
                    <img src="assets/about-tahoe.jpg" alt="Irma Ward on a boardwalk trail near Lake Tahoe">
                </div>
            </div>
            <div class="about-highlights reveal-stagger">
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
    </section>

    <!-- Philosophy Section -->
    <section id="values" class="philosophy">
        <div class="container">
            <h2 class="section-title reveal">How I Work</h2>
            <p class="philosophy-intro reveal">A few things you can count on when we work together.</p>
            <div class="philosophy-grid reveal-stagger">
                <div class="philosophy-card">
                    <span class="philosophy-icon">🤝</span>
                    <h3>Collaboration over hierarchy</h3>
                    <p>The best answers come from the whole team, not the org chart, so I build the room where everyone can contribute.</p>
                </div>
                <div class="philosophy-card">
                    <span class="philosophy-icon">🎯</span>
                    <h3>Clear goals and priorities</h3>
                    <p>Everyone knows the target, the milestones along the way, and how we will measure done, so the team can move without waiting on me.</p>
                </div>
                <div class="philosophy-card">
                    <span class="philosophy-icon">🧠</span>
                    <h3>Curiosity and problem solving</h3>
                    <p>I dig into how things actually work and ask the uncomfortable questions early, so the hard problems do not surprise us later.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title reveal">Featured Projects</h2>
            <div class="projects-grid reveal-stagger">
                <!-- Project: AfterWords -->
                <div class="project-card">
                    <div class="project-header" style="background: linear-gradient(135deg, #4f46e5, #7c3aed);">
                        <h3>AfterWords</h3>
                    </div>
                    <div class="project-body">
                        <p>
                            A web application built end to end with AI development tools. It explores how AI
                            can speed up design, iteration, and delivery for a small product team.
                        </p>
                        <div class="project-details">
                            <span class="badge">Vibe Coding</span>
                            <span class="badge">AI Tooling</span>
                            <span class="badge">Rapid Prototyping</span>
                        </div>
                        <a href="https://afterwords-support.lovable.app/" class="project-link" target="_blank">
                            Visit AfterWords →
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
                            Coordinated AI assisted reporting workflows in Jira and Confluence to improve release
                            visibility, surfacing blockers, dependencies, and delivery progress for executive stakeholders.
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
                            A growing collection of practical AI and automation projects, from workflow agents to reporting
                            tooling, documenting real experiments in AI implementation.
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
            <h2 class="section-title reveal">Skills & Expertise</h2>
            <div class="skills-grid reveal-stagger">
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
                        <li>End to End Implementation</li>
                        <li>Release Coordination</li>
                        <li>App Store &amp; Google Play Deployment</li>
                        <li>Deployment Readiness</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>AI Workflow Implementation</h3>
                    <ul>
                        <li>AI Automation</li>
                        <li>AI Assisted QA</li>
                        <li>AI Reporting Workflows</li>
                        <li>AI Adoption &amp; Enablement</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Leadership &amp; Communication</h3>
                    <ul>
                        <li>Cross Functional Leadership</li>
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
            <h2 class="section-title reveal">Resume &amp; Background</h2>
            <div class="resume-content">
                <div class="resume-left reveal">
                    <h3>Education</h3>
                    <div class="resume-item">
                        <h4>Bachelor of Science, Computer Science</h4>
                        <p class="resume-year">DeVry University</p>
                    </div>

                    <h3 style="margin-top: 2rem;">Experience Highlights</h3>
                    <div class="resume-item">
                        <h4>Sr. Deployment Project Manager, AI Delivery &amp; Software Implementation</h4>
                        <p class="resume-year">Scopely (Remote) • Jul 2023 to Mar 2026</p>
                        <p>
                            Led enterprise AI initiatives including AI assisted QA automation and improved AI reporting
                            workflows in Jira and Confluence, and coordinated end to end AI enabled delivery across
                            Engineering, DevOps, QA, Production, and Live Ops.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Deployment Project Manager, Software Delivery</h4>
                        <p class="resume-year">Scopely (Remote) • Feb 2021 to Jul 2023</p>
                        <p>
                            Managed software implementation and deployment for live mobile and web applications from build
                            through release, coordinating schedules with Apple App Store Connect and Google Play Console
                            across concurrent projects.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Associate Producer &amp; Technical Project Coordinator</h4>
                        <p class="resume-year">Microsoft / The Initiative • Dec 2018 to Sep 2020</p>
                        <p>
                            Coordinated software development milestones across engineering, design, and production; built
                            schedules, tracked risks, and created Jira workflows that improved delivery visibility and
                            stakeholder alignment.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Producer</h4>
                        <p class="resume-year">Lucid Sight • May 2018 to Oct 2018</p>
                        <p>
                            Led software teams spanning engineering, QA, and production to deliver mobile and PC
                            applications, resolving delivery issues and protecting schedules along the way.
                        </p>
                    </div>
                    <div class="resume-item">
                        <h4>Associate Producer</h4>
                        <p class="resume-year">Deluxe Entertainment • Nov 2015 to Apr 2018</p>
                        <p>
                            Supported enterprise software delivery across North America, Europe, and APAC, coordinating
                            localization, publishing, and deployment readiness across technical teams.
                        </p>
                    </div>
                </div>

                <div class="resume-right reveal-stagger">
                    <div class="resume-download">
                        <h3>Download Full Resume</h3>
                        <p>The complete rundown of my experience delivering software and implementing AI workflows.</p>
                        <a href="assets/IrmaWard_PM_AI.pdf" class="btn btn-primary" download>Download PDF</a>
                    </div>
                    <div class="resume-note">
                        <h3>Certifications &amp; Languages</h3>
                        <p><strong>Certifications</strong></p>
                        <ul class="resume-note-list">
                            <li>
                                <a href="https://www.udemy.com/certificate/UC-52bb67dd-0468-4aef-92c9-328d9e9c293a/" target="_blank" rel="noopener">Succeed in the Age of AI</a>
                            </li>
                            <li>
                                <a href="https://www.udemy.com/certificate/UC-a608ba04-d9a9-426a-a63d-e0dffb17490f/" target="_blank" rel="noopener">Intro to AI Agents and Agentic AI</a>
                            </li>
                        </ul>
                        <p><strong>Languages</strong><br>English, Spanish</p>
                        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Off the Clock Section -->
    <section id="off-the-clock" class="pastimes">
        <div class="container">
            <h2 class="section-title reveal">Off the Clock</h2>
            <p class="pastimes-intro reveal">The things that keep me curious when I step away from the keyboard.</p>
            <div class="pastimes-grid reveal-stagger">
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/hiking.jpg" alt="Irma and her husband on a desert hiking trail" style="object-position: center 60%;">
                    <div class="pastime-body">
                        <h3>Hiking</h3>
                        <p>Most weekends I am out on a trail somewhere, chasing a good view and any excuse to be outside for a few hours.</p>
                    </div>
                </div>
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/travel.jpg" alt="Irma and her husband at a waterfall lookout" style="object-position: center 28%;">
                    <div class="pastime-body">
                        <h3>Travel</h3>
                        <p>I love landing somewhere new, getting a little lost on purpose, and coming home with a longer list of places to visit.</p>
                    </div>
                </div>
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/charlie.jpg" alt="Charlie, a small black dog, sitting on a patio couch" style="object-position: center 42%;">
                    <div class="pastime-body">
                        <h3>Charlie O'clock</h3>
                        <p>My husband and I have a standing tour of the parks around town with Charlie, and he makes sure none of us talks our way out of a walk.</p>
                    </div>
                </div>
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/food.jpg" alt="A plated sushi and seared tuna dish at a restaurant" style="object-position: center 45%;">
                    <div class="pastime-body">
                        <h3>Food adventures</h3>
                        <p>My husband and I seek out new restaurants and cuisines together, and ordering something we cannot pronounce is half the fun.</p>
                    </div>
                </div>
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/games.jpg" alt="A cozy camp-building game with a campfire and tent" style="object-position: center 40%;">
                    <div class="pastime-body">
                        <h3>Adventuring in video games</h3>
                        <p>I still love getting lost in a good game, whether it is a sprawling open world or something small and clever on a weeknight.</p>
                    </div>
                </div>
                <div class="pastime-card">
                    <img class="pastime-photo" src="assets/afterwords.jpg" alt="The AfterWords landing page, a project by Irma Ward" style="object-position: left top;">
                    <div class="pastime-body">
                        <h3>Experimenting with AI</h3>
                        <p>Off the clock I build with AI tools. AfterWords is one of those, an app I designed and shipped to see what these models can do.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title reveal">Let's Connect</h2>
            <div class="contact-content reveal">
                <img src="assets/contact-portrait.jpg" alt="Irma Ward" class="contact-portrait">
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
                    <a href="https://www.linkedin.com/in/irmaward" class="contact-link" target="_blank">
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
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style: none;
    gap: 1rem 1.5rem;
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

.about-text p {
    font-size: 1.1rem;
    color: var(--gray);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-text p.about-lead {
    font-size: 1.3rem;
    font-weight: 500;
    font-style: italic;
    color: var(--dark);
    border-left: 3px solid var(--cyan);
    padding-left: 1.25rem;
    margin-bottom: 2rem;
}

.about-photo img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    aspect-ratio: 4 / 5;
}

.about-highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
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

/* Philosophy / How I Work Section */
.philosophy {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
}

.philosophy-intro {
    text-align: center;
    color: var(--gray);
    font-size: 1.1rem;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
}

.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.philosophy-card {
    padding: 2rem;
    background: var(--white);
    border-radius: 12px;
    box-shadow: var(--shadow-sm);
    text-align: center;
    transition: var(--transition);
}

.philosophy-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.philosophy-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 1rem;
}

.philosophy-card h3 {
    color: var(--blue);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.philosophy-card p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.7;
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

.resume-note-list {
    list-style: none;
    margin-bottom: 1rem;
}

.resume-note-list li {
    padding: 0.35rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
}

.resume-note-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--cyan);
    font-weight: bold;
}

.resume-note a:not(.btn) {
    color: var(--blue);
    font-weight: 600;
    text-decoration: none;
}

.resume-note a:not(.btn):hover {
    color: var(--cyan);
    text-decoration: underline;
}

/* Off the Clock Section */
.pastimes {
    padding: 5rem 2rem;
    background-color: var(--white);
}

.pastimes-intro {
    text-align: center;
    color: var(--gray);
    font-size: 1.1rem;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
}

.pastimes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

@media (max-width: 900px) {
    .pastimes-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .pastimes-grid {
        grid-template-columns: 1fr;
    }
}

.pastime-card {
    display: flex;
    flex-direction: column;
    padding: 0.9rem;
    background: var(--light-bg);
    border-radius: 14px;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.pastime-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.pastime-photo {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    margin-bottom: 1rem;
    object-fit: cover;
    display: block;
}

.pastime-body {
    padding: 0 0.6rem 0.4rem;
}

.pastime-body h3 {
    color: var(--blue);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.pastime-body p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.7;
}

/* ==========================================
   PHOTO FRAMES (every picture on the page)
   ========================================== */
.hero-image,
.about-photo img,
.pastime-photo,
.contact-portrait {
    padding: 6px;
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    box-shadow: var(--shadow-md);
}

/* Contact Section */
.contact {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, var(--blue-light), var(--cyan-light));
}

.contact-content {
    text-align: center;
}

.contact-portrait {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    margin-bottom: 1.5rem;
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
        flex-wrap: wrap;
        justify-content: flex-end;
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
   REVEAL ON SCROLL
   ========================================== */
/* keep sideways-flying cards from nudging a scrollbar mid-animation */
section {
    overflow-x: clip;
}

.js .reveal,
.js .reveal-stagger > * {
    opacity: 0;
    translate: 0 90px;
    scale: 0.9;
    filter: blur(12px);
    transition: opacity 0.6s ease,
                translate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                filter 0.7s ease,
                transform 0.3s ease, box-shadow 0.3s ease;
}

/* Directional: staggered children fly in alternately from the sides */
.js .reveal-stagger > *:nth-child(odd) { translate: -80px 30px; }
.js .reveal-stagger > *:nth-child(even) { translate: 80px 30px; }

.js .reveal.is-visible,
.js .reveal-stagger.is-visible > * {
    opacity: 1;
    translate: 0;
    scale: 1;
    filter: blur(0);
}

.reveal-stagger.is-visible > *:nth-child(2) { transition-delay: 0.12s; }
.reveal-stagger.is-visible > *:nth-child(3) { transition-delay: 0.24s; }
.reveal-stagger.is-visible > *:nth-child(4) { transition-delay: 0.36s; }
.reveal-stagger.is-visible > *:nth-child(5) { transition-delay: 0.48s; }
.reveal-stagger.is-visible > *:nth-child(6) { transition-delay: 0.60s; }
.reveal-stagger.is-visible > *:nth-child(n+7) { transition-delay: 0.68s; }

@media (prefers-reduced-motion: reduce) {
    .js .reveal,
    .js .reveal-stagger > *,
    .js .reveal-stagger > *:nth-child(odd),
    .js .reveal-stagger > *:nth-child(even) {
        opacity: 1;
        translate: 0;
        scale: 1;
        filter: none;
        transition: none;
    }
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

// Reveal elements as they scroll into view
const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealTargets.length && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -120px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));
} else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
}

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
