# 📊 Kishore T - Personal Portfolio Website

> **Aspiring Data Analyst** • Turning Data Into Meaningful Insights  
> BBA Graduate (2026, 66.67%) • Sir Issac Newton Arts & Science College • Pursuing MBA  
> Nagapattinam, Tamil Nadu, India

A custom-designed, premium, interactive portfolio website crafted from scratch using **React.js**, **Vite**, and modern responsive CSS. Built specifically for applying to **Data Analyst**, **Business Intelligence (BI)**, and entry-level IT positions.

---

## 🌟 Key Features

- **Unique Data-Inspired Aesthetic**: Modern deep navy/charcoal dark theme with cyan, electric blue, and violet accents.
- **Interactive Hero Dashboard**: Live SVG bar charts, simulated KPI metrics, and floating analytics technology nodes (Excel, Power BI, MySQL, Python). Clearly marked **DEMO DATA**.
- **Interactive Skills Explorer**: Dedicated cards for **Microsoft Excel**, **Power BI**, **MySQL**, and **Python**. Click any skill card to open deep learning notes, practical applications, and sample formulas/queries.
- **Projects Showcase ("Things I've Been Building")**: 
  - **MySQL E-Commerce Database Analysis** (multi-table joins, customer spending, RFM queries)
  - **Power BI Sales & Margin Dashboard** (DAX measures, star schema, dynamic slicers)
  - **Excel Data Cleaning & Analysis Model** (XLOOKUP, Pivot Tables, conditional models)
  - **Python Data Exploration Script** (data parsing, statistical summaries, clean functions)
  - Detailed project modals with code previews, simulated datasets, and GitHub repository links.
- **Academic Timeline**: Clean, elegant timeline detailing BBA at Sir Issac Newton Arts & Science College (2026, 66.67%) and current MBA studies.
- **Learning Journey Roadmap**: Honest, editable milestone progression path ("Currently Learning, Always Growing").
- **Resume Hub**: Digital resume modal preview with print support, direct PDF download (`/resume.pdf`), and celebration confetti.
- **Contact & Direct Outreach**: Interactive form with real-time validation, client mailto fallback, one-click email copying, and social links.
- **Polish & Accessibility**: Working Light/Dark theme toggle (saved to `localStorage`), scroll progress bar, active navigation highlighting, floating back-to-top button, and reduced-motion support.

---

## 🚀 Quick Start Guide (VS Code)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

### Step 1: Open the Project in VS Code
1. Launch VS Code.
2. Go to **File** &rarr; **Open Folder...** and select `d:\portfolio`.
3. Open the integrated terminal (`Ctrl + ~` or **Terminal** &rarr; **New Terminal**).

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore your portfolio!

### Step 4: Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

---

## 📁 Project Directory Structure

```
d:\portfolio/
├── public/
│   ├── favicon.svg             # Custom glowing 'K' chart favicon
│   ├── avatar-placeholder.svg  # Friendly tech analyst profile avatar
│   └── resume.pdf              # Starter resume PDF (replace with yours!)
├── src/
│   ├── assets/                 # Graphics and brand assets
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky nav with progress bar & mobile drawer
│   │   ├── Footer.jsx          # Comprehensive footer with quick links
│   │   ├── ThemeToggle.jsx     # Dark / Light mode toggle
│   │   ├── TechIcon.jsx        # Official brand SVG icons (Excel, Power BI, MySQL, Python)
│   │   ├── Modal.jsx           # Accessible dialog with ESC listener
│   │   ├── Toast.jsx           # Floating notifications (email copy, downloads)
│   │   └── BackToTop.jsx       # Floating scroll-to-top button
│   ├── data/                   # ✏️ EDITABLE DATA FILES (keep updated!)
│   │   ├── personal.js         # Name, bio, email, LinkedIn, GitHub, tagline
│   │   ├── skills.js           # The 4 core tools, topics, practice notes, snippets
│   │   ├── projects.js         # Project titles, tools, learning outcomes, code
│   │   ├── education.js        # BBA, MBA, college details, score
│   │   └── journey.js          # Milestones and learning roadmap
│   ├── sections/               # High-level page sections
│   │   ├── HeroSection.jsx     # Greeting, intro, interactive demo dashboard
│   │   ├── AboutSection.jsx    # Business + analytics narrative & 4 core pillars
│   │   ├── EducationSection.jsx# Timeline with BBA & current MBA
│   │   ├── SkillsSection.jsx   # Interactive filterable skill cards & modal
│   │   ├── ProjectsSection.jsx # 4 detailed project showcases
│   │   ├── JourneySection.jsx  # Growth milestones & progress path
│   │   ├── ResumeSection.jsx   # Qualifications preview & PDF download
│   │   └── ContactSection.jsx  # Validation form, mailto fallback, contact cards
│   ├── styles/                 # Modular CSS architecture
│   │   ├── variables.css       # Color palettes, dark/light themes, typography
│   │   ├── base.css            # Ambient background pattern, resets, containers
│   │   ├── components.css      # Glass cards, buttons, badges, code box
│   │   ├── animations.css      # Floating micro-interactions, fade-ins
│   │   └── responsive.css      # Breakpoints for mobile, tablet, and desktop
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx                # React root mount
│   └── index.css               # Global stylesheet imports
├── index.html                  # HTML entry point with SEO metadata
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies and build scripts
```

---

## ✏️ How to Customize Your Content

All your personal details, skills, and projects are centralized in `src/data/` so you can update them without touching any React component markup!

### 1. Replacing Your Photograph
1. Save your photograph (e.g. `profile.jpg` or `profile.png`) into the `public/` directory.
2. Open `src/sections/HeroSection.jsx` and look for the profile image `<img src="/avatar-placeholder.svg" ... />`.
3. Change `/avatar-placeholder.svg` to `/profile.jpg`.
4. Save the file. The browser will update immediately!

### 2. Replacing Your Resume PDF
1. Export your real resume as a PDF file named `resume.pdf`.
2. Copy it into the `public/` folder, replacing the existing placeholder `public/resume.pdf`.
3. That's it! Both the **Download PDF** button and the **Resume Preview** modal link to this file automatically.

### 3. Updating Your Contact Links & Bio
Open `src/data/personal.js`:
```javascript
contact: {
  email: "your.real.email@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile-url",
  github: "https://github.com/your-username",
}
```

### 4. Adding or Editing Skills & Topics
Open `src/data/skills.js`:
- Edit the `topics` array under Excel, Power BI, MySQL, or Python as you learn new features.
- Update `currentFocus` to describe whatever you are practicing this week.

### 5. Adding Real GitHub Project Links
Open `src/data/projects.js`:
- Locate the project you've uploaded to GitHub.
- Update `githubUrl` to point to your real repository (e.g., `https://github.com/yourname/sql-analysis`).

---

## 🌐 Deploying to the Web (Free)

### Deploying to Vercel (Recommended)
1. Push your portfolio code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kishore T Data Analyst Portfolio"
   git branch -M main
   git remote add origin https://github.com/kishorepvm05/portfolio-kishore.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and select your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Your portfolio will be live at `https://your-name.vercel.app` in under 1 minute!

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com/) and log in.
2. Click **Add new site** &rarr; **Import an existing project** &rarr; **GitHub**.
3. Select your repository.
4. Set Build Command: `npm run build`
5. Set Publish Directory: `dist`
6. Click **Deploy site**.

---

## 🔒 Professional & Ethical Standard

- All sample data and simulated charts in the hero visual and project showcases are clearly identified with the **DEMO DATA** badge.
- No certifications, work experience, or proficiency percentages have been fabricated.
- Education is presented with 100% honesty: BBA (2026, 66.67%) and MBA (Current Studies) at Sir Issac Newton Arts and Science College.

---

Designed with ❤️ for Kishore T • Built for Data Analytics excellence.
