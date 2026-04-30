/* =========================================
   terminal.js — Hero Terminal Typewriter
   ========================================= */

(function () {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  // Lines to type out — HTML strings with span classes for color
  const lines = [
    { text: '<span class="t-prompt">~</span> <span class="t-cmd">whoami</span>', delay: 300 },
    { text: '<span class="t-green">dhwani_patel</span> <span class="t-muted">// AI Engineer</span>', delay: 0 },
    { text: '', delay: 200 },
    { text: '<span class="t-prompt">~</span> <span class="t-cmd">cat profile.json</span>', delay: 600 },
    { text: '<span class="t-muted">{</span>', delay: 0 },
    { text: '  <span class="t-key">"role"</span><span class="t-muted">:</span> <span class="t-val">"AI Engineer"</span><span class="t-muted">,</span>', delay: 0 },
    { text: '  <span class="t-key">"gpa"</span><span class="t-muted">:</span> <span class="t-val">"4.0 / 4.0"</span><span class="t-muted">,</span>', delay: 0 },
    { text: '  <span class="t-key">"hackathon"</span><span class="t-muted">:</span> <span class="t-val">"Top 15 / 2400+"</span><span class="t-muted">,</span>', delay: 0 },
    { text: '  <span class="t-key">"impact"</span><span class="t-muted">:</span> <span class="t-val">"$25K/mo saved"</span><span class="t-muted">,</span>', delay: 0 },
    { text: '  <span class="t-key">"status"</span><span class="t-muted">:</span> <span class="t-green">"open to hire"</span>', delay: 0 },
    { text: '<span class="t-muted">}</span>', delay: 0 },
    { text: '', delay: 300 },
    { text: '<span class="t-prompt">~</span> <span class="t-cmd">ls skills/</span>', delay: 600 },
    { text: '<span class="t-cyan">LLMs</span>  <span class="t-violet">PyTorch</span>  <span class="t-rose">AWS</span>  <span class="t-amber">Python</span>  <span class="t-cyan">RAG</span>', delay: 0 },
    { text: '<span class="t-violet">LangChain</span>  <span class="t-rose">Docker</span>  <span class="t-cyan">Embeddings</span>', delay: 0 },
    { text: '', delay: 300 },
    { text: '<span class="t-prompt">~</span> <span class="t-cmd">echo "Ready to build something great."</span>', delay: 700 },
    { text: '<span class="t-green">Ready to build something great.</span>', delay: 0 },
    { text: '', delay: 200 },
    { text: '<span class="t-prompt">~</span> <span class="t-cursor"></span>', delay: 500, cursor: true },
  ];

  // Inline color classes used in terminal body (already defined in hero.css)
  // Added here for quick reference:
  // .t-cyan   { color: var(--cyan); }
  // .t-violet { color: var(--violet); }
  // .t-rose   { color: var(--rose); }
  // .t-amber  { color: var(--amber); }

  let lineIndex = 0;
  let accumulated = 0;

  function typeNextLine() {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    accumulated += line.delay;

    setTimeout(() => {
      const div = document.createElement('div');
      div.innerHTML = line.text;
      body.appendChild(div);

      // Auto-scroll terminal
      body.scrollTop = body.scrollHeight;

      lineIndex++;
      typeNextLine();
    }, accumulated);

    // Reset accumulated so only the delay of this line applies
    accumulated = 0;
  }

  // Start after a short page-load delay
  setTimeout(typeNextLine, 800);
})();
