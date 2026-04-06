import { useState } from "react";

export default function App() {
  const [skillTab, setSkillTab] = useState("data");
  const [projectTab, setProjectTab] = useState("overview");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const project = {
    title: "Modeling Pokémon Types with Deep and Lightweight CNNs",
    description:
      "Built an image classification project to predict Pokémon primary types using only image data. Compared EfficientNetV2B0 and MobileNetV2 under transfer learning settings, and used Grad-CAM to interpret model attention.",
    tags: ["Python", "Deep Learning", "CNN", "Transfer Learning", "Grad-CAM"],
    link: "/pokemon-project.pdf",
    overview: [
      "Compared EfficientNetV2B0 and MobileNetV2 under transfer learning settings.",
      "Focused on classifying Pokémon primary types from image data only.",
      "Used Grad-CAM to visualize model attention and improve interpretability.",
    ],
    highlights: [
      "EfficientNetV2B0 achieved stronger validation performance and better generalization.",
      "MobileNetV2 was lighter and faster, making it more deployment-friendly.",
      "The project combined model comparison with visual explanation.",
    ],
  };

  const skillGroups = {
    data: [
      "Python",
      "SQL",
      "Data Analysis",
      "Data Visualization",
      "Statistics",
      "Excel",
    ],
    ml: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Transfer Learning",
      "Model Evaluation",
      "Feature Engineering",
    ],
    business: [
      "Risk Analytics",
      "Financial Analytics",
      "Business Analysis",
      "Dashboarding",
      "Insight Communication",
      "Problem Solving",
    ],
  };

  const interests = [
    "Photography",
    "Travel",
    "Visual Storytelling",
    "Exploring Cities",
    "Aesthetic Design",
    "Creative Observation",
  ];

  const photoGallery = [
    { src: "/photo1.jpg", title: "Photo 01" },
    { src: "/photo2.jpg", title: "Photo 02" },
    { src: "/photo3.jpg", title: "Photo 03" },
    { src: "/photo4.jpg", title: "Photo 04" },
    { src: "/photo5.jpg", title: "Photo 05" },
    { src: "/photo6.jpg", title: "Photo 06" },
    { src: "/photo7.jpg", title: "Photo 07" },
    { src: "/photo8.jpg", title: "Photo 08" },
    { src: "/photo9.jpg", title: "Photo 09" },
    { src: "/photo10.jpg", title: "Photo 10" },
    { src: "/photo11.jpg", title: "Photo 11" },
    { src: "/photo12.jpg", title: "Photo 12" },
    { src: "/photo13.jpg", title: "Photo 13" },
    { src: "/photo14.jpg", title: "Photo 14" },
    { src: "/photo15.jpg", title: "Photo 15" },
    { src: "/photo16.jpg", title: "Photo 16" },
    { src: "/photo17.jpg", title: "Photo 17" },
    { src: "/photo18.jpg", title: "Photo 18" },
    { src: "/photo19.jpg", title: "Photo 19" },
    { src: "/photo20.jpg", title: "Photo 20" },
    { src: "/photo21.jpg", title: "Photo 21" },
    { src: "/photo22.jpg", title: "Photo 22" },
    { src: "/photo23.jpg", title: "Photo 23" },
    { src: "/photo24.jpg", title: "Photo 24" },
    { src: "/photo25.jpg", title: "Photo 24" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Yinghao Liu (Ruby)
            </h1>
            <p className="text-sm text-slate-500">
              Data Analytics · Data Science · Risk Analytics
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-sky-600">
              About
            </a>
            <a href="#projects" className="transition hover:text-sky-600">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-sky-600">
              Skills
            </a>
            <a href="#interests" className="transition hover:text-sky-600">
              Interests
            </a>
            <a href="#photography" className="transition hover:text-sky-600">
              Photography
            </a>
            <a href="#contact" className="transition hover:text-sky-600">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white transition hover:-translate-y-0.5"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-[-50px] h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-24">
            <div className="space-y-7">
              <span className="inline-flex rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
                Data Analytics · Data Science · Risk Analytics · Financial Analytics
              </span>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                  Columbia Statistics Graduate
                </p>
                <h2 className="max-w-xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                  Hi, I’m Yinghao Liu.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  I recently completed my Master’s program in Statistics at Columbia
                  University. I have experience in data analysis, machine learning,
                  and building data-driven applications through internships and
                  academic projects. I enjoy turning messy data into practical,
                  decision-supporting insights.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300"
                >
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-2xl border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300"
                >
                  Download Resume
                </a>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">Analytics</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Domain</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">Risk / Finance</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Tools</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">Python / SQL</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/profile.jpg"
                    alt="Yinghao Liu profile"
                    className="h-[430px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-950/70 via-sky-900/20 to-transparent p-5">
                    <p className="text-lg font-semibold text-white">Yinghao Liu (Ruby)</p>
                    <p className="text-sm text-white/90">
                      Statistics · Data Science · Risk Analytics
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-4">
                    <p className="text-slate-500">Focus</p>
                    <p className="mt-1 font-semibold text-slate-900">Data & Risk</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 p-4">
                    <p className="text-slate-500">Location</p>
                    <p className="mt-1 font-semibold text-slate-900">New York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                About
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Building data products with analytical thinking
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-sm backdrop-blur">
              <p className="text-base leading-8 text-slate-600">
                My background combines statistics, data analysis, machine learning,
                and practical business problem-solving. Through internships and
                academic projects, I have worked on analytical workflows that move
                from raw data cleaning to model development and finally to clear,
                decision-oriented output.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                I am especially interested in roles where I can apply quantitative
                thinking, communicate insights clearly, and help teams make better
                decisions with data.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                Projects
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Featured Project
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              A graduate deep learning project focused on image classification,
              transfer learning, and visual explanation.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 shadow-xl shadow-sky-100">
            <div className="grid gap-0 lg:grid-cols-[320px,1fr]">
              <div className="flex items-center justify-center bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 p-8">
                <div className="w-full max-w-[260px] overflow-hidden rounded-[1.5rem] shadow-lg">
                  <img
                    src="/pokemon-cover.jpg"
                    alt="Pokémon project cover"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 p-8 md:p-10 lg:border-l lg:border-t-0">
                <div className="inline-flex rounded-full bg-gradient-to-r from-sky-100 to-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
                  Deep Learning Project
                </div>

                <h4 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {project.title}
                </h4>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setProjectTab("overview")}
                    className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                      projectTab === "overview"
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setProjectTab("highlights")}
                    className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                      projectTab === "highlights"
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    Highlights
                  </button>
                </div>

                <div className="mt-6 grid gap-3">
                  {(projectTab === "overview" ? project.overview : project.highlights).map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-gradient-to-r from-slate-50 to-sky-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">Project Type</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      Computer Vision
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">Main Models</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      EfficientNetV2B0 · MobileNetV2
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">Key Angle</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      Performance + Interpretability
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    View PDF Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Skills
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Tools and Expertise
          </h3>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSkillTab("data")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                skillTab === "data"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              Data
            </button>
            <button
              onClick={() => setSkillTab("ml")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                skillTab === "ml"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              ML
            </button>
            <button
              onClick={() => setSkillTab("business")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                skillTab === "business"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              Business
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skillGroups[skillTab].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/70 bg-white/92 px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Interests
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Beyond Work
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Outside of analytics and modeling, I enjoy creative activities that help me
            observe the world from different perspectives. Photography is one of my
            favorite hobbies because it combines aesthetics, patience, and storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="photography" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                Photography
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Selected Works
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              A curated collection of my photography work. Click any image to preview it
              in a larger view.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {photoGallery.map((photo) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/92 text-left shadow-lg shadow-sky-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-slate-800">{photo.title}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <div className="rounded-[2rem] border border-white/70 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Let’s Connect
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              I’m currently interested in opportunities related to data analytics,
              data science, risk analytics, and financial analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:yl5645@columbia.edu"
                className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/yinghao-liu-675744300/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Rubylau0804/teacher-eval-platform2.0"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-slate-500">Email</p>
                <p className="mt-1 font-medium text-slate-900">yl5645@columbia.edu</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-slate-500">LinkedIn</p>
                <p className="mt-1 font-medium text-slate-900">yinghao-liu-675744300</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-slate-500">GitHub</p>
                <p className="mt-1 font-medium text-slate-900">Rubylau0804</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/50 bg-white/65 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Yinghao Liu. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-900 shadow"
            >
              Close
            </button>

            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-3 text-center text-sm text-white/90">
              {selectedPhoto.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}