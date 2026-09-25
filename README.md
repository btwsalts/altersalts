# Muhammad Umer — Personal Portfolio

A bold, experimental personal portfolio website for **Muhammad Umer**, presenting creative and technical services through a minimal, high-contrast interface.

The portfolio combines **graphic design, video editing, web development, and UI/UX** with an interactive 3D computer model built using Three.js.

## ✦ What It Is

This project is a personal portfolio / digital identity website.

Its purpose is to provide visitors with:

- A quick introduction
- A list of services
- Portfolio/work navigation
- CV access
- About page
- Contact page
- Client/brand showcase
- Interactive 3D visual
- Video content

## Services

The homepage presents four main service areas:

1. **Graphic Designing**
2. **Video Editing**
3. **Web Development**
4. **UI & UX**

The copy is intentionally short and portfolio-oriented.

## Main Features

- Responsive portfolio landing page
- Minimal black-and-white visual language
- Experimental editorial layout
- Custom animated cursor
- Decorative caution-tape element
- Interactive 3D computer model
- Auto-rotating 3D model
- OrbitControls interaction
- Client/logo carousel
- Video showcase
- Separate About, Work, CV and Contact pages
- Responsive mobile layout

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | UI interactions |
| Three.js | 3D rendering |
| GLTFLoader | Loading the 3D model |
| OrbitControls | 3D camera interaction |
| Google Fonts | Typography |

The project does not require a traditional frontend framework.

## 3D Viewer

The homepage contains an interactive Three.js viewer.

The implementation:

1. Creates a Three.js scene.
2. Creates a perspective camera.
3. Creates a WebGL renderer.
4. Adds hemisphere and directional lighting.
5. Enables OrbitControls.
6. Loads `computer.glb`.
7. Calculates the model's dimensions.
8. Automatically scales and centers the model.
9. Positions the camera.
10. Continuously renders and rotates the scene.

The result is a lightweight interactive 3D hero element rather than a static image.

## Visual Direction

The portfolio uses a deliberately experimental design language:

- Black and white base
- Strong typography
- Large display headings
- Monospace metadata
- Rounded interface elements
- High-contrast cards
- Subtle shadows
- Motion and interaction
- Red/black caution-tape accent

The aesthetic is closer to a creative developer/design portfolio than a traditional corporate CV.

## Project Structure

```text
altersalts/
├── index.html
├── Aboutme.html
├── work.html
├── cv.html
├── contact.html
├── style.css
├── cursor.js
├── computer.glb
├── k2.mp4
├── Logos/
└── favicon.ico
```

## Running Locally

Because the project loads a GLB model and external ES modules, running it through a local HTTP server is recommended.

For example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## External Dependencies

The 3D implementation imports Three.js modules from the unpkg CDN.

Google Fonts are also loaded externally.

The portfolio therefore requires network access for those external resources unless they are downloaded and served locally.

## Portfolio Value

This project demonstrates a useful combination of creative and technical skills:

- Web design
- Responsive frontend development
- JavaScript
- Three.js
- 3D asset integration
- UI/UX
- Animation
- Interactive portfolio design
- Asset organization

The 3D viewer is particularly useful as a portfolio differentiator because it demonstrates that the project goes beyond standard HTML/CSS presentation.

## Future Improvements

- Add real project case studies.
- Build a dedicated project filtering system.
- Add detailed work pages.
- Optimize the GLB model for faster loading.
- Add a loading progress indicator.
- Add reduced-motion support.
- Self-host Three.js dependencies for reliability.
- Add proper contact form handling.
- Add SEO metadata.
- Add Open Graph/social sharing metadata.
- Add accessibility improvements.
- Add performance monitoring.
- Add deployment automation.

## Author

Built by **Muhammad Umer / btwsalts**.
