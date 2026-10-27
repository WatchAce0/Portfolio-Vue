<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const menuOpen = ref(false)
const activeSection = ref('work')
const copied = ref(false)
let observer, sectionObserver, copyTimer
const email = 'joe.p.digioia@gmail.com'
async function copyEmail() {
  try { await navigator.clipboard.writeText(email); copied.value = true; clearTimeout(copyTimer); copyTimer = setTimeout(() => copied.value = false, 2500) }
  catch { window.location.href = `mailto:${email}` }
}
function printResume() { window.print() }
function navigate(id) { activeSection.value = id; menuOpen.value = false }
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }), { threshold: .08 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  sectionObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) activeSection.value = e.target.id }), { rootMargin: '-15% 0px -55% 0px' })
  document.querySelectorAll('main section[id]').forEach(el => sectionObserver.observe(el))
})
onBeforeUnmount(() => { observer?.disconnect(); sectionObserver?.disconnect(); clearTimeout(copyTimer) })
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="#" aria-label="Joe DiGioia home">joe digioia<span>✳</span></a>
    <nav id="mobile-menu" :class="{ open: menuOpen }" aria-label="Main navigation">
      <a href="#work" :class="{ active: activeSection === 'work' }" @click="navigate('work')">Selected work</a>
      <a href="#experience" :class="{ active: activeSection === 'experience' }" @click="navigate('experience')">Experience</a>
      <a href="#about" :class="{ active: activeSection === 'about' }" @click="navigate('about')">About</a>
    </nav>
    <div class="header-right"><a class="header-contact" href="mailto:joe.p.digioia@gmail.com">Say hello <span>↗</span></a><a class="header-avatar" href="#about" aria-label="About Joe" @click="navigate('about')"><img src="/joe-pixel.png" alt="Joe’s pixel avatar" width="40" height="40"></a></div>
    <button class="menu-button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close −' : 'Menu +' }}</button>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-topline"><span><i class="status-dot"></i> PITTSBURGH, PENNSYLVANIA</span><span>INDEPENDENT MIND. HANDS-ON BUILDER.</span></div>
      <div class="hero-main">
        <div class="hero-copy">
          <p class="eyebrow">DESIGN / DEVELOPMENT / BUSINESS</p>
          <h1 id="hero-title">Good ideas.<br><em>Made real.</em><span class="headline-star" aria-hidden="true">✳</span></h1>
          <p class="hero-description">I'm Joe. I build digital products, shape brands, and help businesses tell a better story. Usually with a few too many tabs open.</p>
          <a href="#work" class="button dark">Explore my work <span>↘</span></a>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="art-top"><span>THE WAY I WORK</span><span>FIG. 01</span></div>
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="art-cross cross-one">+</div><div class="art-cross cross-two">+</div>
          <div class="art-label label-idea">THE IDEA</div>
          <div class="art-core"><span>Think it.<br>Make it.<br><em>Keep going.</em></span></div>
          <div class="art-label label-live">OUT IN THE WORLD ↗</div>
          <div class="art-bottom"><span>STRATEGY × CREATIVITY × CODE</span><span class="art-dot"></span></div>
        </div>
      </div>
      <div class="hero-bottom"><span>A little creative. A little technical. All in.</span><a href="#work">SCROLL TO EXPLORE <span>↓</span></a></div>
    </section>

    <section id="work" class="work-section section-pad">
      <div class="section-heading reveal"><div><p class="eyebrow">01 / BUILT FROM THE GROUND UP</p><h2>My current<br><em>rabbit holes.</em></h2></div><p>Two ideas I wanted to exist.<br>So I started building them.</p></div>
      <article class="project project-street reveal">
        <a class="project-visual street-visual" href="https://sidestreetpgh.com" target="_blank" rel="noopener noreferrer" aria-label="Explore Side Street (opens in a new tab)">
          <div class="visual-top"><span>SIDE STREET / PITTSBURGH</span><span class="live-pill"><i></i> LIVE PROJECT</span></div>
          <div class="street-map" aria-hidden="true"><div class="river"></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><span class="map-label label-north">NORTH SIDE</span><span class="map-label label-strip">STRIP DISTRICT</span><span class="map-label label-downtown">DOWNTOWN</span><span class="map-pin pin-one">✳</span><span class="map-pin pin-two">↗</span><span class="map-pin pin-three">+</span></div>
          <div class="street-title"><img src="/side-street-mark.svg" alt="" width="64" height="64"><span>SIDE<br>STREET</span><b>↗</b></div><div class="visual-bottom"><span>GOOD SPOTS. GREAT DEALS.</span><span>40.4406° N · 79.9959° W</span></div>
        </a>
        <div class="project-info"><div class="project-number">01</div><div><h3>Side Street</h3><p>A better answer to “what should we do?”</p></div><a class="round-link" href="https://sidestreetpgh.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Side Street">↗</a></div>
        <div class="project-details"><p>A map-first guide to Pittsburgh's local businesses, deals, and events. Find a new spot, see what's happening nearby, and spend less time hunting through social feeds.</p><div class="project-tags"><span>Product & UX</span><span>Development</span><span>Brand & artwork</span></div></div>
      </article>
      <article class="project project-soconu reveal">
        <a class="project-visual soconu-visual" href="https://www.soconu.com" target="_blank" rel="noopener noreferrer" aria-label="Play Soconu (opens in a new tab)">
          <div class="visual-top"><span>SOCONU / NUMBER PUZZLE</span><span class="live-pill"><i></i> LIVE PROJECT</span></div>
          <div class="soconu-particles" aria-hidden="true"><span v-for="n in 44" :key="n" :style="{left: ((n * 37) % 96 + 2) + '%', top: ((n * 23) % 90 + 4) + '%', fontSize: (6 + (n % 5) * 2) + 'px', opacity: .3 + (n % 6) / 9, animationDelay: -(n % 8) + 's'}">{{ (n * 7) % 10 }}</span></div>
          <div class="soconu-live-brand"><span class="soconu-live-title">Soconu</span><div class="soconu-live-nav"><span>How to Play</span><span>Leaderboard</span></div><span class="soconu-play-label">Play</span></div>
          <div class="visual-bottom"><span>NINE NUMBERS. THREE CHANCES.</span><span>PLAY SOCONU ↗</span></div>
        </a>
        <div class="project-info"><div class="project-number">02</div><div><h3>Soconu</h3><p>Simple rules. A stubborn little challenge.</p></div><a class="round-link" href="https://www.soconu.com" target="_blank" rel="noopener noreferrer" aria-label="Play Soconu">↗</a></div>
        <div class="project-details"><p>Three attempts. A 3×3 grid. Color feedback tells you whether to go higher or lower. A number puzzle built around the very reasonable lie: “Okay, just one more.”</p><div class="project-tags"><span>Game design</span><span>UI & interaction</span><span>Development</span></div></div>
      </article>
    </section>

    <section id="experience" class="experience section-pad">
      <div class="section-heading reveal"><div><p class="eyebrow">02 / THE DAY-TO-DAY</p><h2>Complex work.<br><em>Clear stories.</em></h2></div><p>Bringing design, marketing, and business<br>development to precision manufacturing.</p></div>
      <div class="role-intro reveal"><span class="role-badge">CURRENT ROLE</span><h3>Director of Business<br>Development & Marketing</h3><p>Independent consultant · Conturo Prototyping & Kin-Tech Manufacturing<br><span>January 2026 — Present · Previously September 2024 — July 2025</span></p></div>
      <div class="company-grid">
        <article class="company-card reveal"><div class="company-top"><span>PRECISION MACHINING</span><span>↗</span></div><h3>CONTURO<span>PROTOTYPING</span></h3><p class="company-summary">Making the work behind the parts visible.</p><p>I help tell the story of a Pittsburgh precision machining business through its website, shop and event videos, social content, and recruiting materials. On the business side, I research prospects and develop relationships with teams that need machining and prototyping support.</p><ul><li>Website messaging & digital presence</li><li>Video, photography & technical storytelling</li><li>Prospecting, outreach & business development</li></ul><a class="text-link" href="https://www.conturo.com" target="_blank" rel="noopener noreferrer">Visit Conturo <span>↗</span></a></article>
        <article class="company-card kin-tech reveal"><div class="company-top"><span>END-TO-END MANUFACTURING</span><span>↗</span></div><h3>KIN-TECH<span>MANUFACTURING</span></h3><p class="company-summary">Manufacturing Certainty.</p><p>I've worked on positioning Kin-Tech as an engineering-first manufacturing partner, translating a complex offering into a clearer brand and website. My work spans messaging, website design, explainer videos, sales content, and outreach that connects the company's capabilities to customer needs.</p><ul><li>Brand positioning & website redesign</li><li>Explainer videos & capabilities content</li><li>Marketing strategy & sales support</li></ul><a class="text-link" href="https://www.kin-techmfg.com" target="_blank" rel="noopener noreferrer">Visit Kin-Tech <span>↗</span></a></article>
      </div>
      <div class="experience-note reveal"><span aria-hidden="true">↳</span><p>My role connects the technical work to the people who need it—from understanding the offering to making the website, content, and conversation make sense.</p></div>
    </section>

    <section id="about" class="about section-pad">
      <div class="about-photo reveal"><img src="/joe-pixel.png" alt="Pixel art avatar of Joe DiGioia" loading="lazy" width="600" height="720"><div class="photo-caption"><span>JOE DIGIOIA</span><span>PITTSBURGH, PA ↗</span></div><span class="photo-sticker" aria-hidden="true">✳</span></div>
      <div class="about-copy reveal"><p class="eyebrow">03 / A LITTLE ABOUT ME</p><h2>I like wearing<br><em>a few hats.</em></h2><p class="about-lead">Designer. Developer. Business development guy. Sometimes all before lunch.</p><p>My background is in multimedia, and I've spent my career moving between creative work and the business side of things. I like understanding the whole picture, then getting my hands into the details.</p><p>That might mean making a manufacturer's capabilities easier to understand, designing a better way to explore Pittsburgh, or figuring out why a tiny number game is so hard to stop playing.</p><div class="toolbox"><span class="eyebrow">IN THE TOOLBOX</span><p>React / Next.js / Vue / JavaScript / Tailwind CSS / Firebase / Adobe Creative Cloud / Video & photography</p></div><div class="education"><span>Duquesne University</span><p>BA, Multimedia Development · Cum Laude</p></div><button class="text-link print-link" @click="printResume">Print / save résumé <span>↗</span></button></div>
    </section>

    <section id="contact" class="contact section-pad"><div class="contact-top reveal"><p class="eyebrow">HAVE A GOOD IDEA?</p><a href="mailto:joe.p.digioia@gmail.com" class="contact-title">Let's make<br><em>something.</em><span>↗</span></a></div><div class="contact-bottom"><a href="mailto:joe.p.digioia@gmail.com">joe.p.digioia@gmail.com</a><button @click="copyEmail" aria-live="polite">{{ copied ? 'Copied ✓' : 'Copy email ↗' }}</button><div><a href="https://github.com/WatchAce0" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/joe-digioia-420a9a2a/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></section>
  </main>
  <footer><a class="wordmark" href="#">joe digioia<span>✳</span></a><span>BUILT WITH INTENTION. IN PITTSBURGH.</span><span>© {{ new Date().getFullYear() }} JOE DIGIOIA</span></footer>
</template>
