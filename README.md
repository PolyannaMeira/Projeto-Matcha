# Projeto-Matcha — Scroll-Driven Image Transitions (GSAP + ScrollTrigger)

**Projeto-Matcha** is a small front-end project to practice scroll-driven image transitions using **GSAP** and the **ScrollTrigger** plugin. The hero section layers a matcha glass, spoon, and leaves behind the big “MATCHA” heading; as you scroll into the next section, a GSAP timeline scrubs these elements out of the way (position, rotation, scale). A second timeline animates product cards in from the left and right with gentle rotations, handing off smoothly from the hero to the catalog.

## Key Ideas
- **Scroll-linked timelines** (scrubbed) for precise, reversible motion.
- **Layering & readability**: heading above imagery (z-index); decorative images use partial opacity.
- **Transforms over layout shifts**: prefer `translate/scale/rotate` for performance vs. `top/left`.
- **Simple, responsive CSS** (gradients + clamps) so sizes adapt across screens.

## Stack
- HTML/CSS
- GSAP 3 + ScrollTrigger (CDN)

## Quick Start
1. Open `index.html` in a browser (or use VS Code + Live Server).
2. Ensure the CDN scripts load before `script.js`:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
   <script src="script.js"></script>
   ```
3. (Optional) Enable `markers: true` in `script.js` to debug scroll ranges.


