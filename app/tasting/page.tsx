import Link from "next/link";

const wineTypes = ["Rotwein", "Weisswein", "Rosé", "Schaumwein", "Süss & gespritet"];

export default function TastingPage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand"><span className="brand-mark">W</span>Wine Tasting Coach</Link>
        <nav className="nav"><Link href="/">Home</Link><Link href="/tasting">Tasting</Link></nav>
      </header>

      <div className="page">
        <div className="section-head">
          <div><div className="eyebrow">Tasting V1</div><h2>Neue Verkostung</h2></div>
        </div>

        <div className="notice">Dieser Screen ist bereits die neue Produktstruktur. Als Nächstes verbinden wir ihn mit Supabase Auth und der Datenbank; danach ersetzen wir die Platzhalter schrittweise durch unsere vollständige Verkostungslogik.</div>

        <section className="card form-card section">
          <div className="form-grid">
            <div className="field full">
              <label>Weinart</label>
              <div className="type-grid">
                {wineTypes.map((type, index) => <div className={`type-pill ${index === 0 ? "active" : ""}`} key={type}>{type}</div>)}
              </div>
            </div>
            <div className="field"><label>Weinname</label><input placeholder="z. B. Chablis 1er Cru Les Vaillons" /></div>
            <div className="field"><label>Produzent</label><input placeholder="z. B. Albert Bichot" /></div>
            <div className="field"><label>Region / Land</label><input placeholder="Chablis, Frankreich" /></div>
            <div className="field"><label>Jahrgang</label><input placeholder="2023" /></div>
            <div className="field"><label>Rebsorte(n)</label><input placeholder="Chardonnay" /></div>
            <div className="field"><label>Modus</label><select defaultValue="free"><option value="free">Freies Verkosten</option><option value="blind">Blind Tasting</option><option value="exam">Exam Training</option></select></div>
            <div className="field full"><label>Notizen</label><textarea rows={5} placeholder="Erste Beobachtungen …" /></div>
            <div className="field full"><button className="button primary" type="button">Tasting anlegen</button></div>
          </div>
        </section>
      </div>
    </main>
  );
}
