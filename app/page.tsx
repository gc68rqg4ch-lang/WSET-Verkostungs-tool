import Link from "next/link";

const features = [
  ["01", "Strukturiert verkosten", "Ein klarer Ablauf für Rot-, Weiss-, Rosé-, Schaum- sowie Süss- und gespritete Weine."],
  ["02", "Blind trainieren", "Eigene Einschätzung festhalten, Wein auflösen und später mit einem Referenzprofil vergleichen."],
  ["03", "Fortschritt sehen", "Tastings, Aromaerkennung und wiederkehrende Fehleinschätzungen langfristig auswerten."],
  ["04", "Aromen trainieren", "Geruchstraining mit Trefferquoten und persönlicher Schwächenanalyse."],
  ["05", "Library aufbauen", "Weine, Jahrgänge und mehrere Verkostungen desselben Weins sauber voneinander trennen."],
  ["06", "Coach nutzen", "Später erhält jede Verkostung konkretes Feedback zu Präzision, Struktur und Qualitätsbegründung."],
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand"><span className="brand-mark">W</span>Wine Tasting Coach</Link>
        <nav className="nav">
          <Link href="/tasting">Tasting</Link>
          <a href="#features">Funktionen</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </header>

      <div className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Prototype → Product V1</div>
            <h1>Wein verkosten. Lernen. Besser werden.</h1>
            <p>Eine professionelle digitale Verkostungs- und Trainingsplattform für Weinlernende – mit strukturierter Erfassung, Blind Tasting, Aroma-Training, Library und später persönlichem Coach.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/tasting">Erstes Tasting starten</Link>
              <a className="button" href="#features">V1 ansehen</a>
            </div>
          </div>

          <aside className="card hero-card">
            <div>
              <div className="eyebrow">V1 Fokus</div>
              <div className="hero-stat">6</div>
              <p>Kernmodule statt überladener Wein-App.</p>
            </div>
            <div className="hero-list">
              <div>Tasting</div><div>Library</div><div>Blind Tasting</div><div>Aroma Training</div><div>Progress</div><div>Coach</div>
            </div>
          </aside>
        </section>

        <section className="section" id="features">
          <div className="section-head"><div><div className="eyebrow">Produktumfang</div><h2>Was Version 1 können soll</h2></div></div>
          <div className="grid">
            {features.map(([n,title,text]) => (
              <article className="card feature" key={n}>
                <div className="number">{n}</div><strong>{title}</strong><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="card feature">
            <div className="eyebrow">Aktueller Bauabschnitt</div>
            <h2>Cloud-Grundlage zuerst</h2>
            <p>Der erste vertikale Durchstich wird Login → Tasting → Speichern → Library. Danach bauen wir Blind Tasting, Aroma Training, Fortschritt und Coach darauf auf.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
