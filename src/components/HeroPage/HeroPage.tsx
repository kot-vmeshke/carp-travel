import './HeroPage.css';
const HeroPage = () => {
  return (
    <section className="hero">
      <div className="container">
        <header className="hero-header">
          <img src="/Logo.svg" alt="" />
          <nav>
            <ul className="hero-nav-list">
              <li>
                <a href="" className="hero-nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hero-nav-item">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hero-nav-item">
                  Career
                </a>
              </li>
              <li>
                <a href="" className="hero-nav-item">
                  Gallery
                </a>
              </li>
              <li>
                <a href="" className="hero-nav-item">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <div className="content-left">
            <h1 className="hero-title">
              <b>Uncover</b> Carpathian's Secrets
            </h1>
            <div className="hero-subtitle">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </div>
          </div>
          <div className="content-right">
            <div className="hero-date">
              <img src="/data.svg" alt="" width="273" />
            </div>
            <div className="hero-descr">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </div>
            <a href="#" className="hero-button">
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroPage };

