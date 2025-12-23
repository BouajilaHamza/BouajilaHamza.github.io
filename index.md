---
layout: default
title: "Portfolio"
description: "Hamza Bouajila — AI Engineer specializing in Large Language Models and Embodied Systems."
---

<div class="container">
  <header class="top">
    <div class="brand">
      <span class="dot" aria-hidden="true"></span>
      <span>Hamza Bouajila</span>
    </div>
    <nav class="nav" aria-label="Primary">
      <a href="#projects">Projects</a>
      <a href="#research">Research</a>
      <a href="#skills">Skills</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero" aria-label="Hero">
    <div class="hero-grid">
      <div>
        <h1>Hamza Bouajila – AI Engineer Specializing in Large Language Models and Embodied Systems</h1>
        <p>
          I build production-grade LLM systems: fast inference, reliable evaluation, and robotics-ready policies.
          Minimalism isn’t aesthetic—it’s engineering discipline.
        </p>
      </div>

      <aside class="hero-card" aria-label="Links">
        <h2>Contact</h2>
        <div class="links">
          <a class="pill" href="https://github.com/REPLACE_ME" target="_blank" rel="noopener noreferrer">
            <span class="label">GitHub</span>
            <span class="value">@REPLACE_ME</span>
          </a>
          <a class="pill" href="mailto:REPLACE_ME@example.com">
            <span class="label">Email</span>
            <span class="value">REPLACE_ME@example.com</span>
          </a>
          <a class="pill" href="https://www.linkedin.com/in/REPLACE_ME/" target="_blank" rel="noopener noreferrer">
            <span class="label">LinkedIn</span>
            <span class="value">/in/REPLACE_ME</span>
          </a>
        </div>
      </aside>
    </div>
  </section>

  <section id="projects" class="section" aria-label="Projects">
    <h2 class="section-title">Selected Projects</h2>
    <p class="section-subtitle">
      A timeline of work across Arabic NLP, LLM efficiency, and embodied learning—built to ship, measure, and iterate.
    </p>

    <div class="timeline">
      {%- for p in site.data.projects -%}
      <article class="project">
        <div class="thumb" aria-hidden="true">
          <img src="{{ p.thumbnail | relative_url }}" alt="" loading="lazy" decoding="async" />
        </div>
        <div>
          <h3>{{ p.title }}</h3>
          <div class="meta">{{ p.period }} · {{ p.blurb }}</div>

          {%- if p.highlights and p.highlights.size > 0 -%}
          <ul class="meta" style="margin: 10px 0 0; padding-left: 18px;">
            {%- for h in p.highlights -%}
            <li>{{ h }}</li>
            {%- endfor -%}
          </ul>
          {%- endif -%}

          {%- if p.tags and p.tags.size > 0 -%}
          <div class="tags" aria-label="Tags">
            {%- for t in p.tags -%}
            <span class="tag">{{ t }}</span>
            {%- endfor -%}
          </div>
          {%- endif -%}

          <div class="actions" aria-label="Links">
            <a class="btn" href="{{ p.repo_url }}" target="_blank" rel="noopener noreferrer">Code</a>
            {%- if p.demo_url and p.demo_url != "" -%}
            <a class="btn secondary" href="{{ p.demo_url }}" target="_blank" rel="noopener noreferrer">Demo</a>
            {%- endif -%}
          </div>
        </div>
      </article>
      {%- endfor -%}
    </div>
  </section>

  <section id="research" class="section" aria-label="Research">
    <h2 class="section-title">Research</h2>
    <p class="section-subtitle">
      Research interests: LLM efficiency (distillation/serving), multilingual Arabic NLP, and embodied VLA systems.
      This section is structured like a lab page: concise statements, links to artifacts, and reproducible code.
    </p>

    <div class="papers" role="list">
      {%- for r in site.data.research -%}
      <article class="paper" role="listitem">
        <div class="paper-top">
          <div>
            <div class="paper-title">{{ r.title }}</div>
            <div class="paper-meta">{{ r.authors }} · {{ r.year }} · {{ r.status }}</div>
          </div>
        </div>

        <p class="paper-summary">{{ r.summary }}</p>

        {%- if r.tags and r.tags.size > 0 -%}
        <div class="tags" aria-label="Tags">
          {%- for t in r.tags -%}
          <span class="tag">{{ t }}</span>
          {%- endfor -%}
        </div>
        {%- endif -%}

        <div class="actions" aria-label="Links">
          {%- if r.paper_url and r.paper_url != "" -%}
          <a class="btn" href="{{ r.paper_url }}" target="_blank" rel="noopener noreferrer">Paper</a>
          {%- endif -%}
          {%- if r.slides_url and r.slides_url != "" -%}
          <a class="btn secondary" href="{{ r.slides_url }}" target="_blank" rel="noopener noreferrer">Slides</a>
          {%- endif -%}
          {%- if r.code_url and r.code_url != "" -%}
          <a class="btn secondary" href="{{ r.code_url }}" target="_blank" rel="noopener noreferrer">Code</a>
          {%- endif -%}
        </div>
      </article>
      {%- endfor -%}
    </div>
  </section>

  <section id="skills" class="section" aria-label="Skills">
    <h2 class="section-title">Skills</h2>
    <p class="section-subtitle">Tools I ship with—kept sharp for real systems.</p>

    <div class="skills">
      <div class="skill" style="--level: 0.92">
        <div class="skill-top"><strong>PyTorch</strong><small>training &amp; inference</small></div>
        <div class="bar"><span></span></div>
      </div>
      <div class="skill" style="--level: 0.9">
        <div class="skill-top"><strong>Hugging Face</strong><small>Transformers · datasets</small></div>
        <div class="bar"><span></span></div>
      </div>
      <div class="skill" style="--level: 0.84">
        <div class="skill-top"><strong>PyBullet</strong><small>robotics simulation</small></div>
        <div class="bar"><span></span></div>
      </div>
      <div class="skill" style="--level: 0.83">
        <div class="skill-top"><strong>RL</strong><small>control · evaluation</small></div>
        <div class="bar"><span></span></div>
      </div>
      <div class="skill" style="--level: 0.9">
        <div class="skill-top"><strong>Multilingual NLP</strong><small>Arabic-first</small></div>
        <div class="bar"><span></span></div>
      </div>
      <div class="skill" style="--level: 0.86">
        <div class="skill-top"><strong>LLM Efficiency</strong><small>distill · export · serve</small></div>
        <div class="bar"><span></span></div>
      </div>
    </div>
  </section>

  <section id="services" class="section" aria-label="Services">
    <h2 class="section-title">Freelance Services</h2>
    <p class="section-subtitle">
      Senior-level execution for teams that need LLM systems that are fast, correct, and maintainable.
    </p>

    <div class="contact">
      <div class="card">
        <h3 style="margin: 0 0 8px;">What I deliver</h3>
        <ul class="meta" style="margin: 10px 0 0; padding-left: 18px;">
          <li>LLM inference optimization (distillation, quantization readiness, export, profiling)</li>
          <li>Evaluation &amp; monitoring (golden sets, regressions, metrics you can trust)</li>
          <li>Arabic / multilingual NLP systems (normalization, dialect ID, translation pipelines)</li>
          <li>Embodied learning tooling (simulation loops, VLA fine-tuning, reproducible baselines)</li>
        </ul>
      </div>

      <div class="card">
        <h3 style="margin: 0 0 8px;">How projects run</h3>
        <ul class="meta" style="margin: 10px 0 0; padding-left: 18px;">
          <li>Clear scope → measurable success criteria → weekly milestones</li>
          <li>Readable code, tests where it matters, and docs your team can maintain</li>
          <li>Pragmatic delivery: no fluff, no overengineering</li>
        </ul>
        <div class="actions" style="margin-top: 14px;">
          <a class="btn" href="#contact">Start a project</a>
          <a class="btn secondary" href="mailto:REPLACE_ME@example.com">Email</a>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section" aria-label="Contact">
    <h2 class="section-title">Contact</h2>
    <p class="section-subtitle">If it needs to run fast, scale, and stay correct—let’s talk.</p>

    <div class="contact">
      <div class="card">
        <h3 style="margin: 0 0 8px;">What I’m best at</h3>
        <p class="meta" style="margin: 0;">
          Production-grade LLM pipelines, evaluation you can trust, and embodied learning stacks that don’t crumble at
          deployment time.
        </p>
        <div class="actions" style="margin-top: 14px;">
          <a class="btn" href="mailto:REPLACE_ME@example.com">Email me</a>
          <a class="btn secondary" href="https://github.com/REPLACE_ME" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div class="card">
        <form data-contact-form data-mailto="REPLACE_ME@example.com" action="">
          <label for="name">Name</label>
          <input id="name" name="name" autocomplete="name" />

          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" />

          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <div class="actions" style="margin-top: 14px;">
            <button class="btn" type="submit">Send</button>
            <a class="btn secondary" href="https://www.linkedin.com/in/REPLACE_ME/" target="_blank" rel="noopener noreferrer"
              >LinkedIn</a
            >
          </div>
          <p class="meta" style="margin: 10px 0 0;">
            Tip: set a Formspree endpoint by replacing the form <code>action</code> attribute.
          </p>
        </form>
      </div>
    </div>

    <footer class="footer" aria-label="Footer">
      <div class="fine">© {{ "now" | date: "%Y" }} Hamza Bouajila. Built for speed.</div>
      <div class="mini" aria-label="Footer links">
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  </section>
</div>
