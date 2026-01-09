import "./globals.css";

export default function Home() {
  return (
    <main className="container">
      {/* NAVBAR */}
      <nav className="nav">
        <h2 className="logo">MyLanding</h2>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#tech">Tech</a>
          <button className="navBtn">Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Build Fast. Deploy Anywhere.</h1>
        <p>
          A simple Next.js landing page containerized with Docker to help you
          learn modern deployment and DevOps fundamentals.
        </p>
        <div className="heroButtons">
          <button className="cta">Launch Project</button>
          <button className="secondary">View on GitHub</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <h2>Why This Project?</h2>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Simple & Clean</h3>
            <p>No frameworks, no magic. Just Next.js and plain CSS.</p>
          </div>
          <div className="featureCard">
            <h3>Dockerized</h3>
            <p>Run the app anywhere using a single Docker command.</p>
          </div>
          <div className="featureCard">
            <h3>DevOps Ready</h3>
            <p>Perfect foundation for CI/CD and cloud deployment.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Clone the repository from GitHub.</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Build the Docker image.</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Run the container and access the app.</p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech" id="tech">
        <h2>Tech Stack</h2>
        <ul>
          <li>Next.js (App Router)</li>
          <li>JavaScript</li>
          <li>Plain CSS</li>
          <li>Docker</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="finalCta">
        <h2>Ready to Learn Docker?</h2>
        <p>Clone the project and start containerizing your apps today.</p>
        <button className="cta">Get Started Now</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MyLanding. Built with Next.js & Docker.</p>
      </footer>
    </main>
  );
}
