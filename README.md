# AI Slides Template

A modern, AI-powered slide presentation template using Next.js, React, and Tailwind CSS. Create beautiful presentations quickly with the help of AI.

## Live Demo

Check out the live demo: [AI Slides Template Demo](https://YOUR_USERNAME.github.io/ai-slides-template/)

![AI Slides Template Demo](https://via.placeholder.com/800x400?text=AI+Slides+Template)

## Features

- 🧠 **AI-Powered Workflow** - Use AI to help generate and structure your presentations
- 📑 **Document-Based** - Add your content as documents and let AI transform them into slides
- 🎨 **Beautiful Design** - Modern, responsive slides that work on any device
- 🚀 **Easy Deployment** - Deploy to GitHub Pages or your preferred hosting platform
- 🔧 **Fully Customizable** - Modify colors, layouts, and styles to match your needs

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

### Installation

1. Clone this repository or use it as a template:

```bash
git clone https://github.com/YOUR_USERNAME/ai-slides-template.git
cd ai-slides-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your presentation.

## Creating Your Presentation

1. **Add your content**:
   - Place your content in the `docs/` folder
   - Edit `docs/context.md` with your presentation content
   - Modify `docs/guidelines.txt` with your design preferences
   - Add images to `docs/images/` if needed

2. **Collaborate with AI**:
   - Use Claude in Cursor with Agent Mode enabled
   - Ask Claude to help you update the slides based on your content

3. **Customize your slides**:
   - Modify slide components in `src/components/`
   - Adjust colors, layouts, and styling to match your preferences
   - Preview changes in real-time with the development server

4. **Deploy your presentation**:
   - Run `npm run deploy` to build for production
   - Follow the instructions in the "Publishing" section to deploy to GitHub Pages

## How It Works

This template uses:

- **Next.js** for the React framework
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **AI assistance** via Claude in Cursor

The workflow encourages a document-first approach where you focus on your content, and AI helps transform it into a polished presentation.

## Folder Structure

```
ai-slides-template/
├── docs/                # Your content goes here
│   ├── context.md       # Main presentation content
│   ├── guidelines.txt   # Design preferences and guidelines
│   └── images/          # Images for your slides
├── src/                 # Source code
│   ├── app/             # Next.js app 
│   │   └── page.tsx     # Main entry point
│   └── components/      # Slide components
│       ├── intro_slide.tsx
│       ├── how_it_works_slide.tsx
│       └── ...
├── public/              # Static assets
└── ...
```

## Customization

You can customize almost every aspect of the presentation:

- **Colors**: Edit the color classes in the components
- **Layout**: Modify the grid layouts and component organization
- **Transitions**: Adjust the Framer Motion animations
- **Typography**: Change the font sizes, weights, and styles using Tailwind classes
- **Structure**: Edit the slide order and sections in `page.tsx`

## Publishing

### GitHub Pages

1. Push your presentation to GitHub
2. Run `npm run deploy` to build for GitHub Pages
3. Configure GitHub Pages in your repository settings
4. Your presentation will be published at `https://YOUR_USERNAME.github.io/your-presentation`

### Other Hosting Options

You can also deploy to:
- Vercel
- Netlify
- AWS S3/CloudFront
- Any static hosting service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This template was created with the help of Claude
- Built with Next.js, React, and Tailwind CSS 