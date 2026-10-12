# Zaki Abdussalam Alfajary — Engineering Portfolio

Interactive software engineering portfolio showcasing production web applications, distributed backend architectures, Progressive Web Apps (PWA), asynchronous task workflows, and applied machine learning models.

[![Live Deployment](https://img.shields.io/badge/Vercel-Live%20Portfolio-black?style=flat&logo=vercel)](https://portfolio-zaki-one.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat&logo=github)](https://github.com/zakski-bit)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/zaki-abdussalam)

- **Production URL**: [https://portfolio-zaki-one.vercel.app](https://portfolio-zaki-one.vercel.app)
- **Official CV Document**: [`docs/CV_Zaki_Abdussalam_Alfajary.pdf`](docs/CV_Zaki_Abdussalam_Alfajary.pdf)

## Featured Engineering Projects

1. **[LDK FIKRI PNJ](https://github.com/zakski-bit/Ldk-Fikri)** — *Fullstack Campus Outreach Portal*
   - **Stack**: Next.js 15 (React 19 App Router), TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth & Storage), Vercel.
   - **Highlights**: Mosque endowment module with interactive waqf calculators, prayer time synchronization, and administrative back-office.

2. **[DicoStory](https://github.com/zakski-bit/dicostory)** — *Progressive Web App with Offline Sync & Geospatial Mapping*
   - **Stack**: Vanilla JS (ES6+), Vite, Service Worker, Leaflet.js, IndexedDB Outbox, Web Push (VAPID).
   - **Highlights**: Offline-first outbox synchronization, interactive geospatial mapping, and camera media capture.

3. **[DicoEvent V2](https://github.com/zakski-bit/dicoevent-rest-api)** — *Scalable Event Management RESTful API*
   - **Stack**: Python 3.10, Django 4.2 LTS, DRF, PostgreSQL, Redis, Celery, RabbitMQ, MinIO S3, Docker.
   - **Highlights**: Redis caching invalidation, background reminder workers, MinIO media storage, and 233 automated Newman tests.

4. **[ANTARA CRM & Digital Media Portal](https://github.com/zakski-bit/antara-crm-system)** — *Enterprise Media CRM & Licensing Portal*
   - **Stack**: PHP, MariaDB, Docker Compose, Nginx Reverse Proxy, Bootstrap 5.
   - **Highlights**: Two-factor OTP authentication, multi-role RBAC, corporate licensing for news assets, and automated billing.

5. **[Forum API V2](https://github.com/zakski-bit/forum-api)** — *Clean Architecture, CI/CD & Security Hardening*
   - **Stack**: Node.js, Hapi.js, PostgreSQL, Jest (100% Coverage), GitHub Actions, AWS EC2, Nginx SSL/TLS.
   - **Highlights**: Clean Architecture across 4 decoupled layers, PostgreSQL service containers in CI, SSH deployment, and DDoS rate-limiting (90 req/min).

6. **[WhatsApp Desktop Automation](https://github.com/zakski-bit/wa-desktop-automation)** — *Batch Messaging Utility*
   - **Stack**: Python 3.10, Win32 API Hooking, Protocol Handlers, CSV/XLSX Parser.
   - **Highlights**: Native URI protocol dispatching (`whatsapp://send`), low-level hardware scan-code injection (0x1C), and anti-spam jitter pacing.

7. **[Bitcoin 24-Hour Price Forecasting](https://github.com/zakski-bit/bitcoin-seq2seq-forecasting)** — *Deep Learning Time-Series Model*
   - **Stack**: TensorFlow 2.15, Keras 3, Python, Chart.js.
   - **Highlights**: Custom Seq2Seq LSTM with Multi-Head Self-Attention, low-level `tf.GradientTape` training loop, and 97.08% error reduction over baseline.

8. **[CineMatch](https://github.com/zakski-bit/movie-recommender-system)** — *End-to-End Movie Recommender System*
   - **Stack**: TensorFlow, Scikit-Learn, MovieLens 100K Dataset.
   - **Highlights**: Hybrid engine combining Content-Based TF-IDF Cosine Similarity (100% Precision@10) and neural embedding Collaborative Filtering (`RecommenderNet`).

9. **[Dicoding Forum App](https://github.com/zakski-bit/forumapp)** — *React, Redux Toolkit & Automation Testing*
   - **Stack**: React 18, Redux Toolkit, Jest, Cypress (E2E), Storybook, GitHub Actions.
   - **Highlights**: Centralized state with optimistic UI updates, comprehensive Jest unit/integration tests, Cypress browser automation, and isolated Storybook catalog.

10. **[Notes App](https://github.com/zakski-bit/notes-app)** — *Vanilla Web Components & RESTful API Architecture*
    - **Stack**: Vanilla JS (ES6+), W3C Web Components (Shadow DOM), Webpack 5.
    - **Highlights**: Framework-free Custom Elements, real-time client validation, and responsive CSS Grid.

## Repository Structure

```
├── docs/                      # Official credentials and curriculum vitae
│   └── CV_Zaki_Abdussalam_Alfajary.pdf
├── img/                       # Optimized web assets & thumbnails
├── index.html                 # Semantic single-page application markup
├── style.css                  # Modern responsive design & dark mode styles
├── script.js                  # Marquee slider, case study modal & interactive controls
└── README.md                  # Technical portfolio documentation
```

## Local Development

```bash
# Clone the repository
git clone https://github.com/zakski-bit/Portofolio.git
cd Portofolio

# Serve locally
python -m http.server 3000
```
Navigate to `http://localhost:3000` in your web browser.

## License

MIT License. See [LICENSE](LICENSE) for details.
