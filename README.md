

Here is the comprehensive `README.md` content for your **Mohammed Ilyas Portfolio Website**. You can copy this directly into a file named `README.md` in your project folder.

***

```markdown
# Mohammed Ilyas | Creative Portfolio

A modern, high-performance portfolio website featuring advanced **Glassmorphism** design, **3D Tilt interactions**, and fluid animations. Built with pure HTML, CSS, and JavaScript to demonstrate frontend mastery without relying on heavy frameworks.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🌟 Key Features

This project stands out due to its attention to detail and interactive elements:

-   **Glassmorphism UI:** Heavy use of `backdrop-filter`, `rgba` colors, and borders to create a frosted glass aesthetic.
-   **3D Tilt Effect:** Cards tilt in 3D space based on mouse position using JavaScript trigonometry calculations.
-   **Custom Cursor:** A custom dot and ring cursor that follows user movement with a fluid lag effect.
-   **Typewriter Animation:** Dynamic text cycling in the hero section ("Mohammed Ilyas", "Web Developer", etc.).
-   **SPA Architecture:** Simulates a multi-page experience (Home, Skills, Projects, Contact) within a single HTML file for seamless transitions.
-   **Responsive Design:** Fully fluid layout that adapts to mobile, tablet, and desktop screens.

---

## 🛠 Technologies Used

-   **HTML5:** Semantic markup.
-   **CSS3:** Advanced variables (Custom Properties), Flexbox, Grid, Keyframe Animations, and Transforms.
-   **JavaScript (Vanilla):** DOM manipulation, Event Listeners, and Logic for routing/animations.
-   **External Assets:**
    -   [FontAwesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) (Icons)
    -   [Google Fonts](https://fonts.googleapis.com) (Outfit & Space Mono)

---

## 🚀 Installation & Setup

Since this project is lightweight and requires no build tools, setup is instant.

1.  **Clone or Download** the project files.
2.  Navigate to the project folder.
3.  Open `index.html` in your preferred web browser (Chrome, Firefox, Safari).

```bash
# If using git
git clone https://github.com/yourusername/mohammed-ilyas-portfolio.git
cd mohammed-ilyas-portfolio
```

---

## 📖 Usage Guide

### Navigation
-   **Desktop:** Click the links in the top navigation bar.
-   **Mobile:** Click the hamburger menu icon (top right) to reveal the navigation drawer.

### Interactions
-   **Hover over Cards:** Move your mouse over the "Projects" or "Skills" cards to see the 3D tilt effect.
-   **Contact Form:** The form currently simulates a submission. Click "Send Message" to see the success Toast notification.

---

## ⚙ Customization

This project is designed to be easily personalized.

### 1. Changing Name & Branding
Open `index.html` and search for "Mohammed Ilyas". Replace instances in the following locations:
-   `<nav>` Logo section.
-   Hero Section `<h1>`.
-   JavaScript Typewriter array (in `<script>` tag).
-   Footer.

### 2. Modifying Colors
All colors are defined in the `:root` section of the `<style>` tag. Change these variables to instantly theme the entire site:

```css
:root {
    --primary: #6366f1;    /* Main Blue */
    --secondary: #ec4899;  /* Pink Accent */
    --bg-dark: #0f172a;    /* Background */
    /* ... add more here */
}
```

### 3. Replacing Images
The project currently uses `picsum.photos` for placeholders. To use your own images:
1.  Create an `images/` folder.
2.  Place your images there (e.g., `project1.jpg`).
3.  Update the `src` attribute in the HTML:
    ```html
    <!-- Change from -->
    <img src="https://picsum.photos/..." />
    
    <!-- To -->
    <img src="images/project1.jpg" />
    ```

---

## 📂 Project Structure

```text
/mohammed-ilyas-portfolio
│
├── index.html          # Main HTML structure (contains all "pages")
├── README.md           # This file
│
└── assets/             (Optional - recommended for production)
    ├── css/
    │   └── style.css   # Move <style> content here for scalability
    ├── js/
    │   └── script.js   # Move <script> content here
    └── images/         # Your project screenshots and avatars
```

---

## 🐛 Known Issues & Future Enhancements

-   **Contact Form:** Currently a frontend demo. To make it functional, integrate a backend service like Formspree or EmailJS.
-   **Performance:** On very low-end devices, the `backdrop-filter` and cursor animations might need to be disabled via media queries.

**Planned Updates:**
-   [ ] Dark/Light mode toggle.
-   [ ] Integration of a backend API for the blog section.
-   [ ] Loading screen animation.

---

## 👨‍💻 Author

**Mohammed Ilyas**
*Creative Frontend Developer*

-   GitHub: [@yourusername](https://github.com/yourusername)
-   LinkedIn: [your-linkedin](https://linkedin.com/in/yourprofile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note:** This project was designed to demonstrate modern CSS capabilities and vanilla JavaScript performance. Feel free to fork and modify it for your own portfolio!
```
