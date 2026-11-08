/* ============================================================
   Moty — portfolio logic
   Без зависимостей: рендер витрины, фильтры, модалка, темы, языки.
   ============================================================ */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const STORE_KEY = "moty:prefs";

  const saved = (() => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); }
    catch (e) { return {}; }
  })();

  const state = {
    lang: saved.lang === "en" ? "en" : "ru",
    theme: saved.theme === "light" ? "light" : "dark",
    filter: "all",
    query: "",
    openId: null,
    lastFocus: null
  };

  const t = (key) => (UI[state.lang] && UI[state.lang][key]) || key;
  const txt = (project) => project[state.lang];
  const catLabel = (id) => {
    const cat = CATEGORIES.find((c) => c.id === id);
    return cat ? cat[state.lang] : id;
  };
  const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

  /* ---------------- theme & language ---------------- */

  function persist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ lang: state.lang, theme: state.theme })); }
    catch (e) { /* приватный режим — просто не запоминаем */ }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", state.theme === "light" ? "#f5f6fb" : "#06070b");
    const btn = $("#theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", t(state.theme === "light" ? "themeToDark" : "themeToLight"));
      btn.setAttribute("title", t(state.theme === "light" ? "themeToDark" : "themeToLight"));
      btn.setAttribute("aria-pressed", String(state.theme === "light"));
    }
  }

  function applyLang() {
    document.documentElement.lang = state.lang;
    document.title = t("title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta"));

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (UI[state.lang][key]) el.textContent = UI[state.lang][key];
    });

    $$("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });

    const search = $("#search");
    if (search) search.placeholder = t("searchPlaceholder");

    $("#modal-details-label").textContent = t("details");
    $("#modal-stack-label").textContent = t("stack");
    $("#modal-year-label").textContent = t("year");
    $("#modal-prev").setAttribute("aria-label", t("prev"));
    $("#modal-next").setAttribute("aria-label", t("next"));
    $(".modal-close").setAttribute("aria-label", t("close"));
    $("#menu-toggle").setAttribute("aria-label", t("openMenu"));

    applyTheme();
    renderAll();
  }

  /* ---------------- rendering ---------------- */

  function artHTML(kind) {
    if (kind === "dashboard") {
      return `<span class="art art--dashboard">
        <span class="mock-window">
          <span class="mock-bar"><i></i><i></i><i></i></span>
          <span class="mock-body">
            <span class="mock-side"><b></b><b></b><b></b><b></b><b></b></span>
            <span class="mock-main">
              <span class="mock-row"><b></b><b></b><b></b></span>
              <span class="mock-chart"><i></i><i></i><i></i><i></i><i></i><i></i></span>
            </span>
          </span>
        </span>
      </span>`;
    }
    if (kind === "maze") {
      return `<span class="art art--maze">
        <span class="maze-path">
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <path d="M20 20h160v40H60v40h80v40H40v40h120" fill="none" stroke="rgba(111,231,245,.9)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="20" cy="20" r="8" fill="#b6f36b"/>
            <circle cx="160" cy="180" r="8" fill="#ff8ac4"/>
          </svg>
        </span>
        <span class="art-label">maze game</span>
      </span>`;
    }
    if (kind === "gift") {
      return `<span class="art art--gift">
        <span class="gift"><span class="gift-lid"></span><span class="gift-bow"></span></span>
        <span class="art-label">tap to open</span>
      </span>`;
    }
    if (kind === "swatches") {
      return `<span class="art art--swatches">
        <span class="swatch-bands"><i></i><i></i><i></i><i></i></span>
        <span class="swatch-num">253<small>products</small></span>
      </span>`;
    }
    if (kind === "chat") {
      return `<span class="art art--chat">
        <span class="chat-mock">
          <b>Привет! Какая сегодня погода?</b>
          <b>В Челябинске −3 °C, снег ❄️</b>
          <b>А расскажи шутку 😄</b>
          <b>Держи: ...</b>
        </span>
      </span>`;
    }
    return "";
  }

  function mediaHTML(p) {
    const label = esc(txt(p).title);
    if (p.image && p.phone) {
      return `<span class="phone-bg" style="background-image:url('${esc(p.image)}')"></span>
        <span class="phone-frame"><img src="${esc(p.image)}" alt="" loading="lazy" /></span>
        <span class="phone-notch"></span>`;
    }
    if (p.image) {
      return `<img src="${esc(p.image)}" alt="Превью проекта ${label}" loading="lazy" />`;
    }
    return artHTML(p.art);
  }

  function cardHTML(p, index) {
    const tx = txt(p);
    const tags = p.tags.slice(0, 3).map((tag) => `<li class="tag">${esc(tag)}</li>`);
    if (p.tags.length > 3) tags.push(`<li class="tag tag--more">+${p.tags.length - 3}</li>`);

    const demo = p.demo
      ? `<a class="chip-link" href="${esc(p.demo)}" target="_blank" rel="noopener">${t("demo")}
           <svg class="icon" aria-hidden="true"><use href="#i-arrow-up"/></svg></a>`
      : "";

    return `<article class="card reveal${p.featured ? " card--wide" : ""}" style="--d:${Math.min(index * 40, 240)}ms" data-id="${p.id}">
      <button class="card-media${p.phone ? " card-media--phone" : ""}" type="button" data-open="${p.id}" aria-label="${esc(tx.title)} — ${t("view")}">
        ${mediaHTML(p)}
        <span class="card-badge">${p.year}</span>
        <span class="card-veil"><span class="veil-btn">${t("view")}
          <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span></span>
      </button>
      <div class="card-body">
        <div class="card-top">
          <span class="card-cat">${esc(catLabel(p.category))}</span>
          <span class="card-year">${p.year}</span>
        </div>
        <h3 class="card-title"><button type="button" data-open="${p.id}">${esc(tx.title)}
          <svg class="icon" aria-hidden="true"><use href="#i-arrow-up"/></svg></button></h3>
        <p class="card-blurb">${esc(tx.blurb)}</p>
        <ul class="tag-list">${tags.join("")}</ul>
        <div class="card-links">
          ${demo}
          <a class="chip-link${p.demo ? " chip-link--muted" : ""}" href="${esc(p.repo)}" target="_blank" rel="noopener">${t("repo")}
            <svg class="icon" aria-hidden="true"><use href="#i-arrow-up"/></svg></a>
        </div>
      </div>
    </article>`;
  }

  function renderFilters() {
    const host = $("#filters");
    host.innerHTML = CATEGORIES.map((cat) => {
      const count = cat.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat.id).length;
      return `<button class="filter-chip" type="button" data-filter="${cat.id}" aria-pressed="${state.filter === cat.id}">
        ${esc(cat[state.lang])}<span>${count}</span></button>`;
    }).join("");
  }

  function renderStack() {
    $("#stack-grid").innerHTML = STACK.map((group, i) => `
      <article class="stack-card reveal" style="--d:${i * 60}ms">
        <span class="stack-index">${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(group[state.lang])}</h3>
        <p class="stack-note">${esc(state.lang === "ru" ? group.noteRu : group.noteEn)}</p>
        <div class="stack-items">${group.items.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
      </article>`).join("");
  }

  function matches(p) {
    if (state.filter !== "all" && p.category !== state.filter) return false;
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    const haystack = [
      p.name, p.year, ...p.tags,
      p.ru.title, p.ru.subtitle, p.ru.blurb, ...p.ru.details,
      p.en.title, p.en.subtitle, p.en.blurb, ...p.en.details
    ].join(" ").toLowerCase();
    return q.split(/\s+/).every((part) => haystack.includes(part));
  }

  function renderProjects() {
    const list = PROJECTS.filter(matches);
    const grid = $("#project-grid");
    grid.innerHTML = list.map(cardHTML).join("");

    const empty = $("#empty");
    empty.hidden = list.length > 0;

    const results = $("#results");
    results.textContent = `${String(list.length).padStart(2, "0")} / ${PROJECTS.length} ${t("results")}`;

    const reset = $("#reset");
    reset.hidden = state.filter === "all" && !state.query;
    $$("[data-reset]").forEach((b) => { if (b.id !== "reset") b.hidden = false; });

    observeReveals();
    updateLiveCount();
  }

  function updateLiveCount() {
    const el = $("#live-count");
    if (el) el.textContent = PROJECTS.filter((p) => p.demo).length;
  }

  function renderAll() {
    renderFilters();
    renderProjects();
    renderStack();
    if (state.openId) fillModal(state.openId);
  }

  /* ---------------- reveal on scroll ---------------- */

  let revealObserver = null;
  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  }

  function observeReveals() {
    $$(".reveal:not(.is-in)").forEach((el) => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-in");
    });
  }

  /* ---------------- modal ---------------- */

  const modal = $("#modal");
  const modalMedia = $("#modal-media");
  const modalDemo = $("#modal-demo");
  const modalRepo = $("#modal-repo");

  function currentList() {
    return PROJECTS.filter(matches);
  }

  function fillModal(id) {
    const p = PROJECTS.find((item) => item.id === id);
    if (!p) return;
    const tx = txt(p);

    $("#modal-kicker").textContent = `${catLabel(p.category)} · ${p.year}`;
    $("#modal-title").textContent = tx.title;
    $("#modal-sub").textContent = tx.subtitle;
    $("#modal-blurb").textContent = tx.blurb;
    $("#modal-details").innerHTML = tx.details.map((line) => `<li>${esc(line)}</li>`).join("");
    $("#modal-tags").innerHTML = p.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join("");
    $("#modal-year").textContent = p.year;

    const gallery = p.gallery && p.gallery.length ? p.gallery : null;
    modalMedia.className = "modal-media" + (p.phone ? " modal-media--phone" : "");
    modalMedia.innerHTML = gallery
      ? `<img id="modal-main-img" src="${esc(gallery[0])}" alt="Превью проекта ${esc(tx.title)}" />`
      : (p.image ? `<img src="${esc(p.image)}" alt="Превью проекта ${esc(tx.title)}" />` : artHTML(p.art));

    let thumbs = $("#modal-gallery");
    if (gallery && gallery.length > 1) {
      if (!thumbs) {
        thumbs = document.createElement("div");
        thumbs.className = "modal-gallery";
        thumbs.id = "modal-gallery";
        modalMedia.insertAdjacentElement("afterend", thumbs);
      }
      thumbs.hidden = false;
      thumbs.innerHTML = gallery.map((src, i) => `
        <button type="button" data-shot="${esc(src)}" aria-pressed="${i === 0}" aria-label="Скриншот ${i + 1}">
          <img src="${esc(src)}" alt="" loading="lazy" />
        </button>`).join("");
    } else if (thumbs) {
      thumbs.hidden = true;
      thumbs.innerHTML = "";
    }

    modalDemo.hidden = !p.demo;
    if (p.demo) modalDemo.href = p.demo;
    modalRepo.href = p.repo;

    state.openId = id;
  }

  function openModal(id) {
    state.lastFocus = document.activeElement;
    fillModal(id);
    modal.hidden = false;
    document.body.classList.add("is-locked");
    const close = $(".modal-close");
    if (close) close.focus({ preventScroll: true });
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    state.openId = null;
    if (state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus({ preventScroll: true });
    }
  }

  function stepModal(dir) {
    const list = currentList();
    if (!list.length) return;
    const index = list.findIndex((p) => p.id === state.openId);
    const next = list[(index + dir + list.length) % list.length];
    fillModal(next.id);
  }

  /* ---------------- events ---------------- */

  $("#theme-toggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
    persist();
  });

  $$("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      persist();
      applyLang();
    });
  });

  $("#filters").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-filter]");
    if (!chip) return;
    state.filter = chip.dataset.filter;
    renderFilters();
    renderProjects();
  });

  let searchTimer = 0;
  $("#search").addEventListener("input", (event) => {
    const value = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = value;
      renderProjects();
    }, 110);
  });

  document.addEventListener("keydown", (event) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if (event.key === "/" && !typing) {
      event.preventDefault();
      $("#search").focus();
    }
    if (event.key === "Escape") {
      if (!modal.hidden) closeModal();
      else if (document.body.classList.contains("nav-open")) toggleMenu(false);
    }
    if (!modal.hidden && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
      stepModal(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  function resetFilters() {
    state.filter = "all";
    state.query = "";
    const input = $("#search");
    if (input) input.value = "";
    renderFilters();
    renderProjects();
  }
  $("#reset").addEventListener("click", resetFilters);
  $$("[data-reset]").forEach((btn) => btn.addEventListener("click", resetFilters));

  $("#project-grid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open]");
    if (trigger) {
      event.preventDefault();
      openModal(trigger.dataset.open);
    }
  });

  // pointer glow on cards
  $("#project-grid").addEventListener("pointermove", (event) => {
    const card = event.target.closest(".card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  $$("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  $("#modal-prev").addEventListener("click", () => stepModal(-1));
  $("#modal-next").addEventListener("click", () => stepModal(1));

  $("#modal-media").addEventListener("click", (event) => {
    const shot = event.target.closest("[data-shot]");
    if (!shot) return;
    const src = shot.dataset.shot;
    const main = $("#modal-main-img");
    if (main) main.src = src;
    $$("[data-shot]").forEach((b) => b.setAttribute("aria-pressed", String(b === shot)));
  });

  // focus trap inside dialog
  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusables = $$('a[href], button:not([disabled]):not([hidden])', modal).filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  // mobile menu
  const menuBtn = $("#menu-toggle");
  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", () => toggleMenu());
  $$(".main-nav a").forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

  // header state + scroll spy
  const header = $(".site-header");
  const sections = ["works", "stack", "about", "contact"].map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = $$(".main-nav a");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((section) => spy.observe(section));
  }

  // copy email
  const toast = $("#toast");
  let toastTimer = 0;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  $("#copy-email").addEventListener("click", async () => {
    const email = "matwey6633@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      showToast(t("copied"));
    } catch (e) {
      const area = document.createElement("textarea");
      area.value = email;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy"); showToast(t("copied")); } catch (err) { showToast(email); }
      area.remove();
    }
  });

  /* ---------------- boot ---------------- */
  applyLang();

  // external links: add rel/target where missing
  $$('a[href^="http"]').forEach((a) => {
    if (!a.target) a.target = "_blank";
    if (!a.rel) a.rel = "noopener";
  });
})();
