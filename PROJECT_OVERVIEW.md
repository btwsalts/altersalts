# Muhammad Umer Portfolio — Technical Overview

## Architecture

The project is a multi-page static portfolio.

```text
index.html
   │
   ├── Hero / introduction
   ├── Services
   ├── Contact information
   ├── Client/logo carousel
   └── 3D viewer
        │
        └── Three.js
             ├── Scene
             ├── Camera
             ├── Lights
             ├── Renderer
             ├── GLTFLoader
             └── OrbitControls

Other pages
   ├── Aboutme.html
   ├── work.html
   ├── cv.html
   └── contact.html
```

## 3D Rendering Pipeline

The main technical feature is the interactive 3D model.

### Initialization

The page creates:

- `THREE.Scene`
- `THREE.PerspectiveCamera`
- `THREE.WebGLRenderer`

The renderer uses transparency so the model can sit naturally inside the page design.

### Lighting

The scene uses:

- Hemisphere light
- Directional key light
- Directional fill light

This provides enough illumination for the GLB model without introducing a complicated lighting system.

### Controls

OrbitControls are configured with:

- Damping
- Disabled pan
- Disabled zoom
- Automatic rotation

This keeps the interaction visually controlled while still allowing the model to rotate.

### Model Loading

`GLTFLoader` loads:

```text
computer.glb
```

After loading, the script calculates the model's bounding box, scales it to a predictable size, recenters it, and positions the camera automatically.

This is useful because the model does not need to be manually positioned for one exact asset size.

## UI Layer

The CSS creates the portfolio's visual identity.

Major patterns include:

- CSS variables for colors
- Responsive grid layouts
- Fluid typography
- Rounded buttons/cards
- Breakpoints for tablet/mobile
- Hover transitions
- Fixed decorative elements
- Responsive 3D canvas

## Interactive Elements

### Custom cursor

`cursor.js` provides the custom cursor behavior on pointer-based devices.

Touch devices hide the cursor using a media query.

### Logo carousel

The homepage duplicates the logo sequence and animates the track continuously with CSS.

Hovering over the carousel pauses the animation.

### Video

The homepage includes a looping muted video element using:

```text
k2.mp4
```

This acts as an additional visual/content block.

## Engineering Strengths

- Simple deployment model
- No build process
- Clear separation between HTML/CSS/JS
- Responsive design
- Real 3D rendering
- Automatic model sizing
- Interactive controls
- Graceful model-loading status
- Touch-aware cursor behavior
- Reusable visual components

## Technical Considerations

### Performance

Three.js/WebGL can be more expensive than ordinary DOM content. The project already limits renderer pixel ratio, which helps on high-DPI displays.

Further optimization could include:

- GLB compression
- Texture optimization
- Lazy loading
- Reduced render complexity
- Conditional loading on mobile

### Accessibility

The 3D viewer is primarily visual. The portfolio should keep meaningful text alternatives and navigation independent of the 3D content.

### Dependency reliability

The project currently loads Three.js from a CDN. Pinning versions, self-hosting dependencies, or using an established package/build workflow would provide greater control for production deployment.

## Recommended Roadmap

### Step 1 — Portfolio content
Add detailed case studies showing:

- Problem
- Approach
- Tools
- Process
- Result

### Step 2 — Technical cleanup
- Separate Three.js logic into its own JS module
- Centralize constants
- Add reusable components/patterns
- Improve asset naming

### Step 3 — Performance
- Compress `computer.glb`
- Optimize `k2.mp4`
- Lazy-load non-critical media
- Add loading progress

### Step 4 — Production
- Real contact backend
- SEO
- Analytics
- Accessibility audit
- Deployment pipeline

## Summary

The project is a creative portfolio that deliberately combines conventional frontend development with **3D WebGL interaction**.

Its strongest technical feature is the automatic Three.js model setup, while its strongest design characteristic is the high-contrast experimental visual identity.
