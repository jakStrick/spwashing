import Image from "next/image";
import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { getBusinessInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Printable Flyer | Strickland Pressure Washing Services",
  description: "A printable one-page flyer for Strickland Pressure Washing Services.",
  robots: { index: false, follow: false },
};

const services = [
  {
    name: "House Washing",
    detail: "Gentle soft-wash that lifts mildew and prolongs your paint.",
  },
  {
    name: "Outdoor Siding",
    detail: "Mold, mildew, and years of buildup removed safely.",
  },
  {
    name: "Driveway Cleaning",
    detail: "Powerful concrete cleaning that pulls out set-in stains.",
  },
  {
    name: "Deck & Fence Cleaning",
    detail: "Revives tired wood without chewing up the grain.",
  },
  {
    name: "Concrete Sealing",
    detail: "Protects surfaces from weather and extends their life.",
  },
  {
    name: "Vehicle Washing",
    detail: "Low-pressure exterior wash for cars, RVs, and fleets.",
  },
];

const beforeAfter = [
  {
    before: "/images/portfolio/spw11.webp",
    after: "/images/portfolio/spw10.webp",
    caption: "Brick steps",
  },
  {
    before: "/images/portfolio/spw5.webp",
    after: "/images/portfolio/spw7.webp",
    caption: "Paver driveway",
  },
];

const stats = [
  { n: "2020", l: "Serving Portland since" },
  { n: "50+", l: "Jobs completed" },
  { n: "5.0", l: "★ Average review rating" },
  { n: "Free", l: "Same-day phone quotes" },
];

const CheckMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12l6 6L20 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DropCorner = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => (
  <svg className={`corner ${position}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1.5S3.5 12.4 3.5 18a8.5 8.5 0 0 0 17 0C20.5 12.4 12 1.5 12 1.5Z" />
  </svg>
);

export default function FlyerPage() {
  const businessInfo = getBusinessInfo();
  const website = businessInfo.website.replace(/^https?:\/\//, "");

  return (
    <div className="flyer-stage">
      <style>{FLYER_CSS}</style>

      <div className="flyer-shell">
        <div className="toolbar">
          <span>
            Strickland Pressure Washing &mdash; one-page flyer &middot; 8.5&Prime;
            &times; 11&Prime;
          </span>
          <PrintButton className="flyer-print-btn">Print / Save PDF</PrintButton>
        </div>

        <div className="sheet">
          <div className="frame">
            <div className="frame-inner">
              <DropCorner position="tl" />
              <DropCorner position="tr" />
              <DropCorner position="bl" />
              <DropCorner position="br" />

              {/* Masthead */}
              <header className="masthead">
                <div className="mast-left">
                  <Image
                    className="mast-logo"
                    src="/images/logo/stricklandPressure.jpg"
                    alt="Strickland Pressure Washing Services logo"
                    width={260}
                    height={260}
                  />
                  <div className="mast-divider" />
                  <div className="wordmark">
                    <div className="name">
                      <span className="ini">S</span>TRICKLAND
                    </div>
                    <div className="sub">PRESSURE&nbsp;WASHING&nbsp;SERVICES</div>
                    <div className="meta">
                      Portland &middot; Beaverton &middot; Family-run since 2020
                    </div>
                  </div>
                </div>
                <svg
                  className="badge"
                  viewBox="0 0 300 300"
                  aria-label="100% Satisfaction Guaranteed"
                >
                  <circle cx="150" cy="150" r="140" fill="#fff" />
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="#f5c542"
                    strokeWidth="4"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="128"
                    fill="none"
                    stroke="#f5c542"
                    strokeWidth="1.5"
                  />
                  <circle cx="150" cy="150" r="122" fill="#1e3a8a" />
                  <polygon
                    points="150,44 156,60 173,60 159,71 164,88 150,77 136,88 141,71 127,60 144,60"
                    fill="#f5c542"
                  />
                  <polygon
                    points="150,256 156,240 173,240 159,229 164,212 150,223 136,212 141,229 127,240 144,240"
                    fill="#73acf2"
                  />
                  <polygon
                    points="44,150 60,156 60,173 71,159 88,164 77,150 88,136 71,141 60,127 60,144"
                    fill="#73acf2"
                  />
                  <polygon
                    points="256,150 240,156 240,173 229,159 212,164 223,150 212,136 229,141 240,127 240,144"
                    fill="#73acf2"
                  />
                  <text
                    x="150"
                    y="132"
                    fontFamily="Geist, Arial, sans-serif"
                    fontSize="54"
                    fontWeight="900"
                    textAnchor="middle"
                    fill="#fff"
                  >
                    100%
                  </text>
                  <text
                    x="150"
                    y="160"
                    fontFamily="Geist, Arial, sans-serif"
                    fontSize="17"
                    fontWeight="800"
                    letterSpacing="1"
                    textAnchor="middle"
                    fill="#73acf2"
                  >
                    SATISFACTION
                  </text>
                  <text
                    x="150"
                    y="182"
                    fontFamily="Geist, Arial, sans-serif"
                    fontSize="17"
                    fontWeight="800"
                    letterSpacing="1"
                    textAnchor="middle"
                    fill="#73acf2"
                  >
                    GUARANTEED
                  </text>
                  <g transform="translate(150,214)">
                    <circle r="19" fill="#fff" />
                    <path
                      d="M-8 0 L-2 6 L9 -7"
                      stroke="#1e3a8a"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </svg>
              </header>

              {/* Offer */}
              <div className="offer">
                <span className="big">SAVE 10% ON YOUR FIRST JOB</span>
                <span className="rule" />
                <span className="small">
                  Mention this flyer when you book &mdash; limited-time offer
                </span>
              </div>

              {/* Headline */}
              <section className="lede">
                <div className="lede-text">
                  <h1>
                    A cleaner home, <em>done right the first time.</em>
                  </h1>
                  <p>
                    Portland winters leave green mildew on the siding, black
                    streaks down the driveway, and grime on the deck you stopped
                    noticing. We take it all back to clean &mdash; soft-washing
                    where it belongs, real pressure where it&rsquo;s needed
                    &mdash; with eco-friendly solutions that are safe for your
                    plants, pets, and paint. One call, a free quote over the
                    phone, and most jobs scheduled the same week.
                  </p>
                </div>
                <div className="owner">
                  <Image
                    className="owner-img"
                    src="/images/me/me.webp"
                    alt="Sadzi Strickland, owner of Strickland Pressure Washing"
                    width={200}
                    height={200}
                  />
                  <span>
                    Sadzi Strickland
                    <br />
                    Owner &middot; Operator
                  </span>
                </div>
              </section>

              {/* Results */}
              <section className="results">
                <div className="cap">
                  <p className="eyebrow">Real results from your neighbors</p>
                  <span className="note">
                    Before &amp; after, two recent Portland-metro jobs
                  </span>
                </div>
                <div className="ba-grid">
                  {beforeAfter.map((pair) => (
                    <div className="ba" key={pair.caption}>
                      <div className="ba-half">
                        <span className="ba-tag before">Before</span>
                        <Image
                          className="ba-img"
                          src={pair.before}
                          alt={`${pair.caption} before pressure washing`}
                          width={480}
                          height={360}
                        />
                      </div>
                      <div className="ba-half">
                        <span className="ba-tag after">After</span>
                        <Image
                          className="ba-img"
                          src={pair.after}
                          alt={`${pair.caption} after pressure washing`}
                          width={480}
                          height={360}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section className="services">
                <p className="eyebrow">What we clean</p>
                <div className="svc-grid">
                  {services.map((service) => (
                    <div className="svc" key={service.name}>
                      <b>
                        <CheckMark />
                        {service.name}
                      </b>
                      <small>{service.detail}</small>
                    </div>
                  ))}
                </div>
              </section>

              {/* Proof + testimonial */}
              <section className="proof">
                <div className="stats">
                  {stats.map((stat) => (
                    <div className="stat" key={stat.l}>
                      <span className="n">{stat.n}</span>
                      <span className="l">{stat.l}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="quote">
                  <div className="stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2l3 6.9 7.5.7-5.6 5 1.7 7.4L12 18l-6.6 4 1.7-7.4-5.6-5 7.5-.7z" />
                      </svg>
                    ))}
                  </div>
                  <p className="qt">
                    I would recommend Strickland Pressure Washing to anyone in
                    Portland. They did an amazing job and were so professional
                    throughout the entire process.
                  </p>
                  <cite>Olivia T. &mdash; Vernonia, OR</cite>
                </blockquote>
              </section>

              {/* Contact footer */}
              <footer className="foot">
                <div className="kick">Call or text for your free quote</div>
                <div className="phone">{businessInfo.phone}</div>
                <div className="contact">
                  {website}
                  <span>&bull;</span>
                  {businessInfo.email}
                </div>
                <div className="chips">
                  <b className="fill">Free Quotes</b>
                  <b>Eco-Friendly</b>
                  <b>Same-Week Service</b>
                  <b>No Contracts</b>
                </div>
                <div className="guarantee">
                  {businessInfo.serviceAreas.join(" · ")} &nbsp;&mdash;&nbsp;
                  100% Satisfaction Guaranteed
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FLYER_CSS = `
  .flyer-stage {
    --navy: #1e3a8a;
    --navy-deep: #152a63;
    --navy-ink: #0f2050;
    --red: #dc2626;
    --sky: #73acf2;
    --sky-soft: #bcd6fb;
    --paper: #ffffff;
    --panel: #f5f7fb;
    --panel-line: #e2e7f1;
    --ink: #111827;
    --ink-soft: #4b5563;
    --ink-faint: #8a93a3;
    --gold: #f5c542;
    --sans: var(--font-geist-sans), "Segoe UI", system-ui, -apple-system,
      Arial, sans-serif;
    --mono: var(--font-geist-mono), ui-monospace, "Cascadia Code", Consolas,
      monospace;
    background: #e6e8ef;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 32px 20px 60px;
    font-family: var(--sans);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }
  .flyer-stage * { box-sizing: border-box; }
  .flyer-shell { width: 8.5in; }

  .flyer-stage .toolbar {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #6b7280;
  }
  .flyer-stage .flyer-print-btn {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #fff;
    background: var(--navy);
    border: 0;
    padding: 8px 16px;
    border-radius: 999px;
    cursor: pointer;
  }
  .flyer-stage .flyer-print-btn:hover { background: var(--navy-deep); }

  .flyer-stage .sheet {
    width: 8.5in;
    height: 11in;
    background: var(--paper);
    position: relative;
    box-shadow: 0 24px 60px -18px rgba(15, 23, 42, 0.45),
      0 4px 14px rgba(15, 23, 42, 0.16);
    overflow: hidden;
  }

  .flyer-stage .frame {
    position: absolute;
    inset: 0.26in;
    border: 3px solid var(--navy);
    padding: 6px;
  }
  .flyer-stage .frame::after {
    content: "";
    position: absolute;
    inset: 6px;
    border: 1px solid var(--sky);
    pointer-events: none;
  }
  .flyer-stage .frame-inner {
    position: relative;
    height: 100%;
    border: 1px solid var(--sky-soft);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .flyer-stage .corner {
    position: absolute;
    width: 22px;
    height: 22px;
    fill: var(--navy);
    z-index: 5;
  }
  .flyer-stage .corner.tl { top: -4px; left: -4px; }
  .flyer-stage .corner.tr { top: -4px; right: -4px; transform: scaleX(-1); }
  .flyer-stage .corner.bl { bottom: -4px; left: -4px; transform: scaleY(-1); }
  .flyer-stage .corner.br { bottom: -4px; right: -4px; transform: scale(-1, -1); }

  .flyer-stage .eyebrow {
    font-family: var(--mono);
    font-size: 9.5px;
    font-weight: 600;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin: 0;
  }

  .flyer-stage .masthead {
    background: linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%);
    color: #fff;
    padding: 13px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: inset 0 -3px 0 rgba(9, 17, 42, 0.55);
  }
  .flyer-stage .mast-left { display: flex; align-items: center; gap: 15px; }
  .flyer-stage .mast-logo {
    width: 66px;
    height: 66px;
    flex-shrink: 0;
    border-radius: 999px;
    background: #fff;
    padding: 5px;
    object-fit: contain;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.28);
  }
  .flyer-stage .mast-divider {
    width: 1px;
    align-self: stretch;
    margin: 4px 0;
    background: rgba(115, 172, 242, 0.4);
  }
  .flyer-stage .wordmark { line-height: 1; }
  .flyer-stage .wordmark .name {
    font-size: 33px;
    font-weight: 900;
    letter-spacing: -0.018em;
  }
  .flyer-stage .wordmark .name .ini { color: var(--sky); }
  .flyer-stage .wordmark .sub {
    margin-top: 5px;
    font-family: var(--mono);
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.34em;
    color: var(--sky-soft);
  }
  .flyer-stage .wordmark .meta {
    margin-top: 7px;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c8d6f0;
  }
  .flyer-stage .badge { width: 88px; height: 88px; flex-shrink: 0; }

  .flyer-stage .offer {
    background: var(--red);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 8px 18px;
    text-align: center;
  }
  .flyer-stage .offer .big {
    font-size: 19px;
    font-weight: 900;
    letter-spacing: 0.02em;
  }
  .flyer-stage .offer .small {
    font-size: 11.5px;
    font-weight: 500;
    color: #ffe2e2;
  }
  .flyer-stage .offer .rule {
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
  }

  .flyer-stage .lede {
    padding: 16px 22px 14px;
    display: flex;
    gap: 18px;
    align-items: center;
  }
  .flyer-stage .lede-text h1 {
    margin: 0;
    font-size: 26px;
    line-height: 1.06;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-wrap: balance;
    color: var(--ink);
  }
  .flyer-stage .lede-text h1 em { color: var(--navy); font-style: normal; }
  .flyer-stage .lede-text p {
    margin: 8px 0 0;
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--ink-soft);
    max-width: 62ch;
  }
  .flyer-stage .owner { flex-shrink: 0; width: 96px; text-align: center; }
  .flyer-stage .owner-img {
    width: 78px;
    height: 78px;
    border-radius: 999px;
    object-fit: cover;
    border: 3px solid var(--navy);
    display: block;
    margin: 0 auto;
  }
  .flyer-stage .owner span {
    display: block;
    margin-top: 5px;
    font-family: var(--mono);
    font-size: 8.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
    line-height: 1.3;
  }

  .flyer-stage .results { padding: 4px 22px 14px; }
  .flyer-stage .results .cap {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 7px;
  }
  .flyer-stage .results .cap .note {
    font-size: 10px;
    color: var(--ink-faint);
    font-style: italic;
  }
  .flyer-stage .ba-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .flyer-stage .ba {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid var(--panel-line);
    overflow: hidden;
  }
  .flyer-stage .ba-half { position: relative; }
  .flyer-stage .ba-half + .ba-half { border-left: 2px solid var(--paper); }
  .flyer-stage .ba-img {
    display: block;
    width: 100%;
    height: 104px;
    object-fit: cover;
  }
  .flyer-stage .ba-tag {
    position: absolute;
    top: 6px;
    left: 6px;
    font-family: var(--mono);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    padding: 3px 6px 2px;
    border-radius: 2px;
  }
  .flyer-stage .ba-tag.before { background: var(--navy); }
  .flyer-stage .ba-tag.after { background: var(--red); }

  .flyer-stage .services {
    background: var(--panel);
    border-top: 1px solid var(--panel-line);
    border-bottom: 1px solid var(--panel-line);
    padding: 13px 22px 15px;
  }
  .flyer-stage .services .eyebrow { text-align: center; margin-bottom: 10px; }
  .flyer-stage .svc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 10px;
  }
  .flyer-stage .svc {
    background: var(--paper);
    border: 1px solid var(--panel-line);
    border-left: 3px solid var(--navy);
    padding: 7px 9px;
  }
  .flyer-stage .svc b {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--ink);
  }
  .flyer-stage .svc b svg {
    width: 11px;
    height: 11px;
    flex-shrink: 0;
    fill: none;
    stroke: var(--red);
    stroke-width: 3;
  }
  .flyer-stage .svc small {
    display: block;
    margin-top: 3px;
    font-size: 9px;
    line-height: 1.42;
    color: var(--ink-soft);
  }

  .flyer-stage .proof {
    display: grid;
    grid-template-columns: 0.86fr 1.14fr;
  }
  .flyer-stage .stats {
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-right: 1px solid var(--panel-line);
  }
  .flyer-stage .stat { display: flex; align-items: baseline; gap: 9px; }
  .flyer-stage .stat .n {
    font-family: var(--mono);
    font-size: 19px;
    font-weight: 700;
    color: var(--navy);
    font-variant-numeric: tabular-nums;
    min-width: 64px;
  }
  .flyer-stage .stat .l {
    font-size: 9.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .flyer-stage .quote {
    padding: 14px 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flyer-stage .stars { display: flex; gap: 2px; margin-bottom: 6px; }
  .flyer-stage .stars svg { width: 13px; height: 13px; fill: var(--gold); }
  .flyer-stage .quote p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: var(--ink);
    font-weight: 500;
  }
  .flyer-stage .quote .qt::before { content: "\\201C"; }
  .flyer-stage .quote .qt::after { content: "\\201D"; }
  .flyer-stage .quote cite {
    display: block;
    margin-top: 7px;
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-faint);
    font-style: normal;
  }

  .flyer-stage .foot {
    margin-top: auto;
    background: linear-gradient(180deg, var(--navy) 0%, var(--navy-ink) 100%);
    color: #fff;
    padding: 15px 22px 16px;
    text-align: center;
  }
  .flyer-stage .foot .kick {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--sky-soft);
  }
  .flyer-stage .foot .phone {
    font-family: var(--mono);
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.1;
    margin: 3px 0 2px;
  }
  .flyer-stage .foot .contact {
    font-size: 10.5px;
    letter-spacing: 0.04em;
    color: #c8d6f0;
  }
  .flyer-stage .foot .contact span { color: var(--sky); padding: 0 6px; }
  .flyer-stage .chips {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 11px;
  }
  .flyer-stage .chips b {
    font-family: var(--mono);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 1px solid rgba(115, 172, 242, 0.5);
    color: #fff;
  }
  .flyer-stage .chips b.fill { background: var(--red); border-color: var(--red); }
  .flyer-stage .foot .guarantee {
    margin-top: 10px;
    font-size: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #9fb4dd;
  }

  @media print {
    @page { size: letter; margin: 0; }
    .flyer-stage {
      padding: 0;
      background: #fff;
      min-height: 0;
    }
    .flyer-stage .toolbar { display: none; }
    .flyer-stage .sheet { box-shadow: none; }
    .flyer-stage * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
