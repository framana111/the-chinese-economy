// China map (political <-> physical) and iconic-image loop, built from placeholders in the slide markdown.
// Data: china-map-data.js (province paths projected in the same frame as china-relief.jpg, Natural Earth, public domain).
(function () {
  var BASE = document.currentScript.src.replace(/[^/]*$/, "");

  /* ---------- map ---------- */
  function buildMap(el) {
    var D = window.CHINA_MAP; if (!D) return;
    el.classList.add("cm");
    el.dataset.mode = el.dataset.mode || "political";
    var units = D.units.map(function (u) { return '<path' + (u.id === "Taiwan" ? ' class="cm-out"' : '') + ' d="' + u.d + '"><title>' + u.id + '</title></path>'; }).join("");
    var cities = D.cities.map(function (c) { return '<circle cx="' + c.x + '" cy="' + c.y + '" r="9"><title>' + c.name + '</title></circle>'; }).join("");
    el.innerHTML =
      '<div class="cm-frame">' +
      '<img class="cm-relief" src="' + BASE + 'china-relief.jpg" alt="">' +
      '<svg class="cm-svg" viewBox="0 0 ' + D.w + ' ' + D.h + '"><g class="cm-units">' + units + '</g><g class="cm-cities">' + cities + '</g></svg>' +
      '<div class="cm-toggle"><button data-mode="political">Political</button><button data-mode="physical">Physical</button></div>' +
      '</div>';
    el.querySelectorAll(".cm-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { setMode(el, b.dataset.mode); });
    });
    if (el.dataset.line === "aihui-tengchong") addLine(el, D);
    if (el.dataset.toggle === "off") { var tg = el.querySelector(".cm-toggle"); if (tg) tg.style.display = "none"; }
    setMode(el, el.dataset.mode);
  }
  // Aihui-Tengchong line (Naughton 2007, ch. 1, Figure 1.1): halves the area, 6% of the population to the west, 94% to the east.
  function addLine(el, D) {
    var pr = function (lon, lat) { return [(lon - D.lon0) * D.k * D.px, (D.lat1 - lat) * D.px]; };
    var a = pr(127.5, 49.98), t = pr(98.5, 25.02);
    var dx = t[0] - a[0], dy = t[1] - a[1];
    var top = [a[0] - dx * (a[1] / dy), 0], bot = [t[0] + dx * ((D.h - t[1]) / dy), D.h];
    var svg = el.querySelector(".cm-svg");
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "cm-line");
    g.innerHTML =
      '<polygon class="cm-west" points="0,0 ' + top[0].toFixed(1) + ',0 ' + bot[0].toFixed(1) + ',' + D.h + ' 0,' + D.h + '"/>' +
      '<line x1="' + top[0].toFixed(1) + '" y1="0" x2="' + bot[0].toFixed(1) + '" y2="' + D.h + '"/>' +
      '<circle cx="' + a[0].toFixed(1) + '" cy="' + a[1].toFixed(1) + '" r="8"/><circle cx="' + t[0].toFixed(1) + '" cy="' + t[1].toFixed(1) + '" r="8"/>' +
      '<text x="' + (a[0] + 16).toFixed(1) + '" y="' + (a[1] - 12).toFixed(1) + '">Aihui</text>' +
      '<text x="' + (t[0] + 16).toFixed(1) + '" y="' + (t[1] + 30).toFixed(1) + '">Tengchong</text>' +
      '<text class="big" x="50" y="330">West: 6% of the population</text>' +
      '<text class="big e" x="1230" y="1010">East: 94%</text>';
    svg.appendChild(g);
  }
  function setMode(el, mode) {
    el.dataset.mode = mode;
    el.querySelectorAll(".cm-toggle button").forEach(function (b) { b.classList.toggle("on", b.dataset.mode === mode); });
  }

  /* ---------- iconic images loop ---------- */
  var PLACEHOLDERS = ["Great Wall", "Industrial robots", "Chinese astronauts", "Ports and containers", "Skyscrapers", "High-speed rail"];
  function buildLoop(el) {
    el.classList.add("il");
    var src = el.dataset.src ? new URL(el.dataset.src, location.href).href : BASE + "iconic/manifest.json";
    fetch(src).then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; }).then(function (items) {
      var base = src.replace(/[^/]*$/, "");
      var placeholder = !items.length;
      if (placeholder) { items = PLACEHOLDERS.map(function (t) { return { title: t + " (images could not be loaded)" }; }); }
      if (new URLSearchParams(location.search).get("pdf") === "1" && !placeholder) {      // PDF export: one still picture, 5 x 4 tiles, instead of the loop
        el.classList.add("il-print");
        el.innerHTML = '<div class="il-mosaic">' + items.map(function (it) { return '<div style="background-image:url(\'' + base + it.file + '\')"></div>'; }).join("") + '</div>' +
          '<div class="il-mosaic-note">' + items.length + ' images. Credits and licences: course website, Credits page</div>';
        return;
      }
      el.innerHTML = '<div class="il-frame">' +
        items.map(function (it) {
          return it.file
            ? '<div class="il-slide" style="background-image:url(\'' + base + it.file + '\')"><div class="il-cap">' + (it.title || "") + '<small>' + (it.credit || "") + (it.license ? " · " + it.license : "") + '</small></div></div>'
            : '<div class="il-slide ph" style="background:hsl(' + (items.indexOf(it) * 53) + ',35%,22%)">' + it.title + '</div>';
        }).join("") +
        '<button class="il-play" aria-label="Play">&#9654;</button><div class="il-count"></div></div>';
      var slides = el.querySelectorAll(".il-slide"), i = 0, timer = null, count = el.querySelector(".il-count");
      function show(k) { slides.forEach(function (s, j) { s.classList.toggle("on", j === k); }); count.textContent = (k + 1) + " / " + slides.length; }
      function stop() { clearInterval(timer); timer = null; el.classList.remove("playing"); }
      function play() { if (timer) return; el.classList.add("playing"); i = (i + 1) % slides.length; show(i); timer = setInterval(function () { i = (i + 1) % slides.length; show(i); }, 3000); }
      el._ilStop = stop;
      if (window.Reveal && Reveal.layout) Reveal.layout();   // the frame is built after reveal's first layout (slow network): re-centre the slide
      el.querySelector(".il-play").addEventListener("click", function () { timer ? stop() : play(); });
      el.querySelector(".il-frame").addEventListener("click", function (e) { if (e.target.closest(".il-play")) return; if (timer) stop(); });
      show(0);
    });
  }

  /* ---------- reveal wiring ---------- */
  function init() {
    document.querySelectorAll(".china-map").forEach(buildMap);
    document.querySelectorAll(".iconic-loop").forEach(buildLoop);
    if (window.Reveal && Reveal.layout) Reveal.layout();
  }
  function fragMap(e, shown) {
    if (!e.fragment || !e.fragment.classList.contains("map-physical")) return;
    var sec = e.fragment.closest("section"), m = sec && sec.querySelector(".china-map");
    if (m) setMode(m, shown ? "physical" : "political");
  }
  if (window.Reveal) {
    Reveal.on("ready", init);
    Reveal.on("fragmentshown", function (e) { fragMap(e, true); });
    Reveal.on("fragmenthidden", function (e) { fragMap(e, false); });
    Reveal.on("slidechanged", function (e) { document.querySelectorAll(".iconic-loop").forEach(function (l) { if (l._ilStop && !(e && e.currentSlide && e.currentSlide.contains(l))) l._ilStop(); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "m" && e.key !== "M") return;
      var cur = Reveal.getCurrentSlide(), m = cur && cur.querySelector(".china-map");
      if (m) setMode(m, m.dataset.mode === "political" ? "physical" : "political");
    });
  }
})();
