# **Project Bible & Design Specification: ask.report**

Version: 1.1  
Date: September 25, 2025  
Status: Live at ask.report

## **0\. Executive Summary**

ask.report is a **minimalist, AI-powered knowledge tool** wrapped in an **ambient, generative art experience**. It uses a real-time **WebGL particle simulation** as a reactive background that visualizes the "novelty" of information, creating a symbiotic interface between the user, the AI, and the data stream. Inspired by **demoscene culture**, the project prioritizes a clean, immersive, and visually captivating experience. The **MVP** is a fully functional web app with the core particle visualizer and AI query interface, with a primary immediate goal of achieving full mobile responsiveness.

## **1\. Vision & Philosophy**

### **1.1. Core Concept**

ask.report is envisioned as more than a simple search interface; it is an ambient, generative art experience fused with an AI-powered knowledge tool. It aims to be a "librarian for the collective unconscious," providing answers while immersing the user in a dynamic, reactive visual environment that represents the "novelty" or "interestingness" of the information being processed.

### **1.2. Guiding Principles**

* **Minimalism:** The UI must be clean, uncluttered, and intuitive, ensuring the focus remains on the user's query and the generative background. Every element must have a purpose.  
* **Ambient Experience:** The tool should be visually captivating even when idle. The WebGL background serves as a primary feature, not just decoration. It should feel alive.  
* **Reactivity:** The visuals must react to user interaction, data fetching, and the "novelty" of the results, creating a symbiotic relationship between the user, the AI, and the interface.  
* **Inspiration:** The project draws heavy inspiration from the demoscene and tracker music culture—a world of creative coding, procedural generation, and pushing technical limits for artistic expression.

### **1.3. The "Big Idea"**

To create a tool that *feels* like you're plugging into a vast, abstract stream of information. The particle system is a visual metaphor for this stream, and the AI is the lens that focuses it into coherent answers.

## **2\. Core Features**

### **2.1. Generative WebGL Background**

The heart of the experience is the real-time particle simulation rendered on an HTML canvas.

* **Technology:** WebGL, custom GLSL shaders (vertex and fragment).  
* **Functionality:**  
  * A massive number of particles (N=524288) are simulated on the GPU.  
  * The simulation uses a "step" function to update particle states based on forces like drag, noise, and user interaction.  
  * It employs a **double-buffer** technique for efficient, high-performance state updates.  
  * **Novelty Engine:** A key feature where a **Probe** samples the particle system to measure its chaotic state. This novelty metric directly influences the UI's accent color.  
  * **User Interaction:** The background reacts to mouse/touch movements, creating ripples and disturbances in the particle field.

### **2.2. AI Query Interface**

The primary utility of the site is its function as a front-end for a powerful AI model.

* **UI Components:**  
  * A single, central input field for user queries.  
  * An "Ask" button to submit the query.  
  * A dedicated area for displaying the AI's response.  
  * A "Copy" button to easily capture the generated report.  
* **Interaction Flow:**  
  1. User types a question.  
  2. User clicks "Ask."  
  3. The UI enters a "loading" or "thinking" state.  
  4. A request is sent to the AI backend.  
  5. The response is streamed or loaded into the results panel.  
  6. The generative background may react to the process (e.g., increased activity).

### **2.3. Control & Navigation**

* **Speed/Rewind Slider:** Allows the user to control the flow of time within the particle simulation.  
* **Brand Logo (ask.report):** A clickable element in the top-left with a dynamic glow effect.

## **3\. Design & Aesthetics**

### **3.1. Visual Identity**

* **Theme:** Dark, futuristic, minimalist.  
* **Color Palette:**  
  * Background (--bg): \#0b0b0f  
  * Foreground (--fg): \#eaeaea  
  * Accent (--accent): \#7ae3ff (Dynamically updated)  
  * Glow (--glow): Linked to the accent color.  
* **Typography:** Clean, modern, system-agnostic sans-serif font stack.

### **3.2. Layout**

* **Desktop:** A clean, centered layout. The generative canvas is always full-screen.  
* **Mobile:** Needs significant work. The layout must adapt to a single-column view with easily tappable controls.

## **4\. Technical Specification**

### **4.1. Frontend**

* **Stack:** Single index.html file using vanilla JavaScript (ES6+), HTML5, and CSS3.  
* **Graphics:** WebGL.  
* **Styling:** Inline CSS with extensive use of CSS variables for theming.

### **4.2. API Specification & Data Flow (Anticipated)**

* **Endpoint:** POST /api/query  
* **Request Body:**  
  {  
    "query": "User's question text here"  
  }

* **Response Body (Streaming):** Server-Sent Events (SSE) or chunked response for real-time text generation.  
* **Response Body (Complete):**  
  {  
    "report\_id": "unique\_id\_string",  
    "content": "Full text of the AI's response.",  
    "metadata": { ... }  
  }

* **Error Handling:** Standard HTTP status codes (e.g., 429 for rate limiting, 500 for server errors).

### **4.3. Governance**

* **License:** GNU Affero General Public License (AGPL).  
* **Hosting:** GitHub Pages.  
* **Privacy:** No user queries or generated reports are stored or logged long-term. The interaction is ephemeral.

## **5\. Glossary**

* **Double-Buffer:** A GPU technique using two textures to read from one (the current state) and write to another (the next state) in a single pass, allowing for complex simulations without race conditions.  
* **Novelty Engine:** The system responsible for measuring the "interestingness" or chaotic state of the particle simulation.  
* **Probe:** A small set of pixels sampled from the simulation texture. The variance in their color/position data over time is used to calculate the novelty score.

## **6\. Project Roadmap & Goals**

### **6.1. Current State (v1.1)**

* The core generative art background is fully functional and optimized.  
* The novelty engine and reactive accent color are implemented.  
* The desktop UI layout is in place.  
* The site is live and operational.

### **6.2. Immediate Goals (Next Steps)**

1. **Full Mobile Responsiveness (High Priority):**  
   * Implement a hamburger menu for navigation/controls.  
   * Ensure correct styling and positioning of UI elements on mobile viewports.  
   * Test and fix touch interactions.

### **6.3. Mid-Term Goals**

* **AI Backend Integration:** Fully wire up the frontend to a live AI model.  
* **Audio Integration:** Explore adding a generative audio component influenced by the novelty engine.  
* **URL-based Queries:** Implement functionality for queries to be sharable via URL parameters.

### **6.4. Long-Term Ambitions ("Blue Sky")**

* **Multiple Visualizers:** Allow users to switch between different generative art algorithms.  
* **Deeper Demoscene Integration:** Incorporate more visual effects.  
* **History & Sessions:** Allow users to view and manage past queries.  
* **API for Devs:** Expose the novelty engine or visualizer as an API.