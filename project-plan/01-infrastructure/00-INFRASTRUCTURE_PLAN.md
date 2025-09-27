# 01: Infrastructure Plan

## MVP (Mobile-First Focus)

- **Current State:** No infrastructure changes are required for the MVP. The project is a single `index.html` file hosted on GitHub Pages.
- **Action:** Verify and document the current hosting setup.

## V1 (AI Backend Integration)

- **Hosting:**
  - **[Decision]** Choose a hosting platform for the AI backend (e.g., Vercel, Netlify, a cloud provider like GCP/AWS).
  - **[Task]** Set up deployment pipelines for the backend service.
- **API Service:**
  - **[Task]** Develop a serverless function or a lightweight server (e.g., Node.js with Express, Python with FastAPI) to handle API requests.
  - **[Spec]** The API will have a single endpoint: `POST /api/query`.
  - **[Security]** Implement rate limiting and other necessary security measures.
- **AI Model Integration:**
  - **[Task]** Connect the API service to the chosen AI model (e.g., via an SDK or a direct API call).
  - **[Privacy]** Ensure all communication with the AI model adheres to the project's ephemeral, privacy-first principles.
