# Quick Reference Guide

## 📁 File Structure

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Auto-deploy to GitHub Pages
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Navigation bar
│   │   ├── Hero.tsx                # Landing section
│   │   ├── About.tsx               # About/Mission
│   │   ├── Projects.tsx            # Project showcase
│   │   ├── Publications.tsx        # Research papers
│   │   ├── Team.tsx                # Team members
│   │   └── Footer.tsx              # Footer/Links
│   ├── globals.css                 # Tailwind + global styles
│   ├── layout.tsx                  # Root HTML layout
│   └── page.tsx                    # Home page
├── data/
│   ├── projects.js                 # Project data
│   ├── team.js                     # Team member data
│   └── publications.js             # Publication data
├── public/                         # Static assets (add images here)
├── package.json                    # Dependencies
├── next.config.js                  # Next.js static export config
├── tailwind.config.js              # Tailwind CSS customization
├── tsconfig.json                   # TypeScript config
├── .eslintrc.json                  # Linting rules
├── .gitignore                      # Git ignore patterns
├── README.md                       # Project documentation
└── SETUP.md                        # Setup & deployment guide
```

## 🚀 Next Steps

### 1. Install & Test Locally (5 min)
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### 2. Update Your Data (10 min)
Edit these files with your actual content:
- **`data/projects.js`** - Add 1-2 real project descriptions & links
- **`data/team.js`** - Add actual team members, emails, bios
- **`data/publications.js`** - Add your research papers

### 3. Add Images (5 min)
- Create `public/projects/` folder
- Add project images (JPG/PNG)
- Update `data/projects.js` with image paths

### 4. Customize Colors (2 min)
Edit `tailwind.config.js`:
```js
colors: {
  'primary': '#YOUR_COLOR_HEX',      // Change from #1e40af
  'secondary': '#YOUR_COLOR_HEX',    // Change from #7c3aed
}
```
Default: Blue (#1e40af) + Purple (#7c3aed)

### 5. Deploy (5 min)
```bash
npm run build
```
Commit & push all files to `main` branch. GitHub Actions will deploy automatically!

## 🎨 Customization Hotspots

| Want to change... | Edit file... | Notes... |
|---|---|---|
| Site colors | `tailwind.config.js` | Primary, secondary colors |
| Fonts | `app/globals.css` | Add Google Fonts, etc. |
| Navigation items | `app/components/Header.tsx` | Update sidebar links |
| Section titles | `app/components/*.tsx` | Change h2 text |
| Team info | `data/team.js` | Name, role, email, bio |
| Projects | `data/projects.js` | Title, description, links |
| Publications | `data/publications.js` | Title, authors, journal |
| Logo/Branding | `app/components/Header.tsx` | Update H logo section |

## 📝 Data Format Reference

### Projects (data/projects.js)
```js
{
  id: 1,
  title: "Project Name",
  description: "Brief description",
  demoUrl: "https://example.com",
  tags: ["Tag1", "Tag2"],
  image: "/projects/image.jpg"
}
```

### Team (data/team.js)
```js
{
  id: 1,
  name: "Dr. John Smith",
  role: "Principal Investigator",
  email: "john@university.edu",
  bio: "Expert in..."
}
```

### Publications (data/publications.js)
```js
{
  id: 1,
  title: "Research Title",
  authors: "Smith et al.",
  year: 2024,
  journal: "Journal Name",
  doi: "https://doi.org/...",
  link: "https://example.com"
}
```

## 🐛 Common Issues & Fixes

| Issue | Fix |
|---|---|
| Port 3000 already in use | `npx next dev -p 3001` (use different port) |
| Images not showing | Check path in data files, ensure files exist in `/public/` |
| Styling looks broken | Run `npm install` and `npm run dev` again |
| GitHub Pages won't deploy | Check `.github/workflows/deploy.yml` exists, push to `main` |
| TypeScript errors | Run `npm run build` to see full errors |

## 💻 Commands

```bash
npm install          # Install dependencies (do this first)
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code for issues
```

## 🔗 Resources

- **[SETUP.md](SETUP.md)** - Detailed setup & GitHub Pages instructions
- **[README.md](README.md)** - Project overview
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)

---
**Need help?** Check SETUP.md for detailed instructions!
