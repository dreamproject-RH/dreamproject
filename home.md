<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#172e36">
  <title>D.R.E.A.M. Research &amp; Rehabilitation</title>
  <style>
    :root {
      color-scheme: dark;
      font-family: Arial, Helvetica, sans-serif;
      background: #202020;
      color: #e9edef;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
    }

    body {
      min-width: 320px;
      min-height: 100vh;
      margin: 0;
      padding: 0 3px;
    }

    .page {
      min-height: 100vh;
      overflow: hidden;
      border: 1px solid #3a4144;
      border-radius: 0 0 12px 12px;
      background: #303030;
    }

    .hero {
      padding: 20px 20px 19px;
      background: #172e36;
    }

    .site-header {
      position: relative;
      display: flex;
      min-height: 72px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #566267;
      padding-bottom: 19px;
    }

    .brand {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      color: inherit;
      text-decoration: none;
    }

    .brand-mark-frame {
      position: relative;
      display: block;
      width: 140px;
      height: 31px;
      overflow: hidden;
    }

    .brand-mark {
      position: absolute;
      top: -91px;
      left: -42px;
      display: block;
      width: 224px;
      height: 224px;
      max-width: none;
      mix-blend-mode: screen;
    }

    .brand-subtitle {
      margin: 0;
      font-size: 14px;
      line-height: 1.2;
    }

    .signin-button {
      display: inline-flex;
      align-items: center;
      margin-left: auto;
      padding: 8px 20px;
      border-radius: 6px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.2s ease;
    }

    .signin-button:hover {
      background: #314c55;
    }

    .menu-button {
      display: grid;
      width: 40px;
      height: 40px;
      flex: 0 0 40px;
      place-items: center;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: #e9edef;
      cursor: pointer;
      margin-left: 8px;
    }

    .menu-button:hover,
    .menu-button:focus-visible {
      background: #29434c;
    }

    .menu-button:focus-visible,
    a:focus-visible {
      outline: 2px solid #88c6e2;
      outline-offset: 3px;
    }

    .menu-icon,
    .menu-icon::after {
      display: block;
      width: 19px;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      content: "";
    }

    .menu-icon {
      position: relative;
    }

    .menu-icon::after {
      position: absolute;
      top: 7px;
      left: 0;
    }

    .menu-panel {
      position: absolute;
      z-index: 1;
      top: 61px;
      right: 0;
      display: grid;
      min-width: 190px;
      gap: 2px;
      padding: 8px;
      border: 1px solid #53646a;
      border-radius: 8px;
      background: #203840;
      box-shadow: 0 8px 24px #0005;
    }

    .menu-panel[hidden] {
      display: none;
    }

    .menu-panel a {
      padding: 10px 12px;
      border-radius: 5px;
      color: #e9edef;
      font-size: 14px;
      text-decoration: none;
    }

    .menu-panel a:hover {
      background: #314c55;
    }

    .intro {
      padding-top: 22px;
    }

    .eyebrow {
      margin: 0 0 15px;
      color: #8bc8e3;
      font-size: 14px;
      line-height: 1.25;
    }

    h1 {
      margin: 0 0 12px;
      color: #f2f4f5;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;
    }

    .lead {
      max-width: 850px;
      margin: 0 0 10px;
      color: #e4e8e9;
      font-size: 20px;
      line-height: 1.65;
    }

    .programme-link {
      display: flex;
      min-height: 64px;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: #dce8eb;
      color: #102e3b;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      transition: background-color 150ms ease;
    }

    .programme-link:hover {
      background: #f0f5f6;
    }

    .details {
      padding: 24px 16px 5px;
      background: #303030;
    }

    .feature-list {
      display: grid;
      gap: 18px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .feature {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr);
      align-items: start;
      gap: 10px;
    }

    .feature-icon {
      width: 24px;
      height: 24px;
      margin-top: 13px;
      color: #c5c9ca;
    }

    .feature:first-child .feature-icon {
      color: #38d987;
    }

    .feature h2 {
      margin: 0 0 9px;
      color: #f0f0f0;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.35;
    }

    .feature p {
      margin: 0;
      color: #d7d7d7;
      font-size: 18px;
      line-height: 1.45;
    }

    footer {
      margin-top: 15px;
      color: #d7d7d7;
      font-size: 14px;
      line-height: 1.4;
    }

    @media (max-width: 520px) {
      .hero {
        padding: 16px 16px 18px;
      }

      .site-header {
        min-height: 68px;
        padding-bottom: 15px;
      }

      .brand-mark-frame {
        width: 120px;
        height: 27px;
      }

      .brand-mark {
        top: -78px;
        left: -36px;
        width: 192px;
        height: 192px;
      }

      .brand-subtitle {
        font-size: 12px;
      }

      .intro {
        padding-top: 20px;
      }

      .eyebrow {
        font-size: 12px;
      }

      h1 {
        font-size: 26px;
      }

      .lead {
        font-size: 17px;
        line-height: 1.55;
      }

      .programme-link {
        min-height: 58px;
        font-size: 17px;
      }

      .details {
        padding: 18px 13px 14px;
      }

      .feature-list {
        gap: 19px;
      }

      .feature h2,
      .feature p {
        font-size: 16px;
      }

     

    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero" aria-labelledby="page-title">
      <header class="site-header">
        <a class="brand" href="#top" aria-label="D.R.E.A.M. Research and Rehabilitation home">
          <span class="brand-mark-frame">
            <img class="brand-mark" src="Geometric%20DREAM%20Wordmark%20on%20Black.png" alt="DREAM">
          </span>
          <span class="brand-subtitle">RESEARCH &amp; REHABILITATION</span>
        </a>
        <a class="signin-button" href="staffsignin.html">Staff Portal</a>
        <button class="menu-button" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-menu">
          <span class="menu-icon" aria-hidden="true"></span>
        </button>

        <nav class="menu-panel" id="site-menu" aria-label="Main navigation" hidden>
          <a href="safety.html">Safety and rehabilitation</a>
          <a href="registration.html">Registration</a>
          <a href="meetourstaff.html">Meet Our Staff</a>
          <a href="aboutus.html">About us</a>
        </nav>
      </header>

      <div class="intro" id="top">
        <p class="eyebrow">DEPARTMENT OF REFUGEE EVALUATION &amp; ANOMALOUS MIND STUDIES</p>
        <h1 id="page-title">The Safe Haven for Lucid Dreamers.</h1>
        <p class="lead">Providing shelter, care, and specialised support for individuals experiencing extraordinary lucid dreaming phenomena.</p>
        <a class="programme-link" id="programme" href="aboutus.html">OUR REFUGEE PROGRAMME</a>
      </div>
    </section>

    <section class="details" aria-label="Our commitments">
      <ul class="feature-list">
        <li class="feature" id="safety">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2.8 20 6v5.5c0 5-3.4 8.5-8 9.8-4.6-1.3-8-4.8-8-9.8V6l8-3.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div>
            <h2>Safety and rehabilitation</h2>
            <p>A monitored, supportive environment for people with unusual sleep experiences.</p>
          </div>
        </li>
        <li class="feature" id="research">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 4.5a3 3 0 0 0-5.2 2A3.6 3.6 0 0 0 3 13a3.6 3.6 0 0 0 4.5 5.5A3 3 0 0 0 12 17V7a3 3 0 0 0-3-2.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M15 4.5a3 3 0 0 1 5.2 2A3.6 3.6 0 0 1 21 13a3.6 3.6 0 0 1-4.5 5.5A3 3 0 0 1 12 17V7a3 3 0 0 1 3-2.5ZM8 9l2 1m6-1-2 1m-5 5 2-1m6 1-2-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <div>
            <h2>Sleep research</h2>
            <p>Advancing our understanding of consciousness and lucid dreaming.</p>
          </div>
        </li>
        <li class="feature" id="beginning">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="9" cy="7" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20M16 4.5a3 3 0 0 1 0 5.8m2 3.2a5 5 0 0 1 2.5 4.3V20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div>
            <h2>A new beginning</h2>
            <p>Confidential support for individuals seeking refuge.</p>
          </div>
        </li>
      </ul>
      <footer>D.R.E.A.M. Research Facility · Established 1998 · All rights reserved.</footer>
    </section>
  </main>
  <script>
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector("#site-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
      menu.hidden = isExpanded;
    });

    menu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
      }
    });
  </script>
</body>
</html>
