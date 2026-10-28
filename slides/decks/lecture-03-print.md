
# The Chinese Economy
### A Journey into History and Economics
<small>Lecture 3: How do economists estimate causal effects? From Mao to the reforms</small>

---

## Last week, by hand
<!-- .slide: class="dense" -->

<div style="font-size:.66em;line-height:1.35;max-width:860px;margin:0 auto;text-align:left">
<p style="margin:0 0 .5em">On the board: the table of last week. Deaths per 1,000 people, illustrative numbers.</p>
<table style="margin:0 auto;border-collapse:collapse;font-variant-numeric:tabular-nums">
<tr><th style="padding:.3em .9em"></th><th style="padding:.3em .9em">Normal years</th><th style="padding:.3em .9em">Famine years</th><th style="padding:.3em .9em">Change</th></tr>
<tr><td style="padding:.3em .9em"><strong>High</strong> expected grain</td><td style="padding:.3em .9em;text-align:center">10</td><td style="padding:.3em .9em;text-align:center">22</td><td style="padding:.3em .9em;text-align:center">+12</td></tr>
<tr><td style="padding:.3em .9em"><strong>Low</strong> expected grain</td><td style="padding:.3em .9em;text-align:center">11</td><td style="padding:.3em .9em;text-align:center">18</td><td style="padding:.3em .9em;text-align:center">+7</td></tr>
</table>
<p class="fragment" style="margin:.8em 0 0;color:#ffcf5a;font-weight:700">Difference in differences: +12 − 7 = +5. But why may we subtract the low-grain change?</p>
</div>

---

## The assumption
<!-- .slide: class="dense" -->

<div style="position:relative;width:860px;height:330px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mp0ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mp08fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mp0ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mp0fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mp08a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mp08ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><line x1="100" y1="360" x2="760" y2="360" stroke="#8a8a8a" stroke-width="2"/><line x1="100" y1="360" x2="100" y2="22" stroke="#8a8a8a" stroke-width="2"/><line x1="92" y1="360" x2="100" y2="360" stroke="#8a8a8a" stroke-width="2"/><text x="86" y="366" fill="#8a8a8a" text-anchor="end" font-size="18" font-weight="400">0</text><line x1="92" y1="230" x2="100" y2="230" stroke="#8a8a8a" stroke-width="2"/><text x="86" y="236" fill="#8a8a8a" text-anchor="end" font-size="18" font-weight="400">10</text><line x1="92" y1="100" x2="100" y2="100" stroke="#8a8a8a" stroke-width="2"/><text x="86" y="106" fill="#8a8a8a" text-anchor="end" font-size="18" font-weight="400">20</text><text transform="rotate(-90 40 191)" x="40" y="191" fill="#8a8a8a" text-anchor="middle" font-size="17" font-weight="400">deaths per 1,000</text><text transform="rotate(-90 62 191)" x="62" y="191" fill="#8a8a8a" text-anchor="middle" font-size="15" font-weight="400">(illustrative)</text><text x="160" y="395" fill="#fff" text-anchor="middle" font-size="20" font-weight="600">normal years</text><text x="680" y="395" fill="#fff" text-anchor="middle" font-size="20" font-weight="600">famine years</text><line x1="160" y1="217" x2="680" y2="126" stroke="#fff" stroke-width="5"/><line x1="160" y1="230" x2="680" y2="74" stroke="#ffcf5a" stroke-width="5"/><text x="700" y="80" fill="#ffcf5a" text-anchor="start" font-size="20" font-weight="700">high grain: 22</text><text x="700" y="132" fill="#fff" text-anchor="start" font-size="20" font-weight="700">low grain: 18</text><text x="140" y="248" fill="#ffcf5a" text-anchor="end" font-size="20" font-weight="700">10</text><text x="140" y="215" fill="#fff" text-anchor="end" font-size="20" font-weight="700">11</text></svg><svg class="fl fragment" data-fragment-index="1" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mp1ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mp18fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mp1ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mp1fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mp18a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mp18ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><line x1="160" y1="230" x2="680" y2="139" stroke="#ffcf5a" stroke-width="4" stroke-dasharray="10 8"/><text x="700" y="161" fill="#ffcf5a" text-anchor="start" font-size="18" font-weight="400">without the famine shock: 17</text></svg><svg class="fl fragment" data-fragment-index="2" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mp2ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mp28fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mp2ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mp2fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mp28a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mp28ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><line x1="680" y1="139" x2="680" y2="74" stroke="#8fc59a" stroke-width="7"/><text x="664" y="184.5" fill="#8fc59a" text-anchor="end" font-size="22" font-weight="700">effect +5</text></svg></div>

<div class="fragment" data-fragment-index="3" style="font-size:.62em;margin-top:.3em;line-height:1.35">
<p style="margin:0"><em><strong>Parallel trends</strong></em>: without the treatment, the two groups would have <em><strong>moved together</strong></em>. Their gap may exist, but — net of the treatment — it would stay <strong>fixed over time</strong>.</p>
<p style="margin:.5em 0 0">It is an <span style="display:inline-block;background:#ffcf5a;color:#1b1b1b;font-weight:700;padding:.05em .45em;border-radius:6px">Assumption</span>: it has to be true if we want to retrieve a causal effect.</p>
</div>

---

## 1961-76 — Readjustment, Third Front, Cultural Revolution
<!-- .slide: class="dense" -->

- **1961-63** readjustment: investment chopped back, about 20 million workers sent to the countryside
- **1964-66** Third Front: a new expansion into the interior
- **1966-76** Cultural Revolution: 17 million urban school-leavers sent to the countryside (*xiafang*); schools and universities closed
- **1976**: Mao dies

---

## 1968-78: young people sent to the countryside
<!-- .slide: class="dense" -->

- About **16-17 million urban youths** were sent to live and work in villages during the Cultural Revolution
- Who went was not random: **family background**, schooling, politics, and household rules (often one child could stay in the city)
- Most came back after 1978

<p style="margin-top:1.6em;font-size:1.1em;color:#ffcf5a;font-weight:700">Question: did the years in the countryside change their lives?</p>

---

## 1976-78 — The turn
<!-- .slide: class="dense" -->

- Growth had accelerated under the Big Push — but even more in Taiwan and Hong Kong, far ahead of the PRC by 1978
- That demonstration effect convinced Chinese leaders to reform and open up
- **December 1978**: Third Plenum — ease the terms of trade with agriculture, "give farmers a chance to catch their breath"
- Deng Xiaoping consolidates power; *gaige kaifang*, reform and opening

---

## 1978-84: the land goes back to households
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:24px">
<ul style="font-size:.54em;line-height:1.3;margin:0;text-align:left;width:440px;flex:none">
<li><strong>Household Responsibility System</strong>: the collective's land is contracted to families; above the quota, they keep what they grow</li>
<li>First experiments: <strong>Anhui, 1978</strong>, after a severe drought. Then province by province, county by county, until 1984</li>
<li>Meanwhile, <strong>1979</strong>: the state raises the price it pays for quota grain by about 20%</li>
<li>Official grain yields: <strong>+43%</strong> from 1978 to 1984</li>
<li class="fragment">The reform did not arrive everywhere at once: a <strong>staggered rollout</strong>. For an economist, a gift</li>
</ul>
<figure style="margin:0;flex:none;text-align:center;width:338px"><img src="assets/hrs/fk-fig1.png" style="width:330px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Ferguson and Kim (2026), Fig. 1: farm output and yields; share of counties that started the reform; procurement prices (1976 = 100)</figcaption></figure>
</div>

---

## What was the causal effect of the transition?
<!-- .slide: class="dense" -->

<ul>
<li>The ideal experiment: <strong>two Chinas</strong> in 1978, identical; one reforms, one does not</li>
<li class="fragment">There is <strong>one</strong> China. And everything changed <strong>at once</strong>: land, prices, leaders, trade, the opening to the world</li>
<li class="fragment">No comparison group, no lottery, no counterfactual we can approach</li>
</ul>

---

## Wittgenstein
<!-- .element: style="display:none" -->
<!-- .slide: data-background-color="#111" -->

<blockquote style="font-size:1.05em;width:80%">Whereof one cannot speak, thereof one must be silent.</blockquote>
<p style="font-size:.55em;opacity:.75">Ludwig Wittgenstein, <em>Tractatus Logico-Philosophicus</em>, proposition 7 (1921; English translation by C. K. Ogden, 1922)</p>
<p class="fragment" style="font-size:.7em;color:#ffcf5a;font-weight:700;margin-top:1.4em">…unless we cut the question into pieces we can answer</p>

---

## Pieces we can answer
<!-- .slide: class="dense" -->

<table style="font-size:.5em;line-height:1.28;border-collapse:collapse;margin:0 auto;max-width:990px">
<tr><th style="padding:.3em .55em;text-align:left;vertical-align:top">Question</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">Who could be compared with whom?</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">Method</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">Paper</th></tr>
<tr class="fragment"><td style="padding:.3em .55em;text-align:left;vertical-align:top">Did the years in the countryside change the sent-down youths' lives?</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">brothers and sisters: one sent, one not</td><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>matching</strong></td><td style="padding:.3em .55em;text-align:left;vertical-align:top">Xie, Jiang, Greenman, "Did Send-down Experience Benefit Youth?" (2008)</td></tr>
<tr class="fragment"><td style="padding:.3em .55em;text-align:left;vertical-align:top">Did giving the land back to households change who was born?</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">families in the same county and year, before and after the reform</td><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>difference in differences</strong>, year by year; nature's lottery</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">Almond, Li, Zhang, "Land Reform and Sex Selection in China" (2019)</td></tr>
<tr class="fragment"><td style="padding:.3em .55em;text-align:left;vertical-align:top">Did it raise yields?</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">early and late reformers alike in what we see; fields just across a provincial border, before and after</td><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>regression, propensity score</strong>; difference in differences at the border</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">Ferguson, Kim, "What Started China's Miracle? The View from Outer Space" (2026)</td></tr>
</table>

---

## Three ways to close the back door
<!-- .slide: class="dense" -->

<div style="position:relative;width:760px;height:228px;margin:0 auto .3em"><svg class="fl" viewBox="0 0 1000 300" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mfwffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mfw8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mfwef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mfwfff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mfw8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mfw8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="170" y="100" width="160" height="50" rx="10" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="250.0" y="133.0" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">D: treatment</text><rect x="670" y="100" width="160" height="50" rx="10" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="750.0" y="133.0" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Y: outcome</text><rect x="420" y="8" width="160" height="46" rx="10" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="500.0" y="39.0" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">X: seen</text><rect x="420" y="200" width="160" height="46" rx="10" fill="#1b1b1b" stroke="#8a8a8a" stroke-width="3" stroke-dasharray="8 6"/><text x="500.0" y="231.0" fill="#8a8a8a" text-anchor="middle" font-size="22" font-weight="700">U: unseen</text><line x1="332" y1="125" x2="666" y2="125" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mfwffcf5a)"/><line x1="420" y1="40" x2="292" y2="98" stroke="#fff" stroke-width="4" marker-end="url(#mfwfff)"/><line x1="580" y1="40" x2="708" y2="98" stroke="#fff" stroke-width="4" marker-end="url(#mfwfff)"/><line x1="420" y1="214" x2="292" y2="152" stroke="#8a8a8a" stroke-width="4" stroke-dasharray="10 7" marker-end="url(#mfw8a8a8a)"/><line x1="580" y1="214" x2="708" y2="152" stroke="#8a8a8a" stroke-width="4" stroke-dasharray="10 7" marker-end="url(#mfw8a8a8a)"/></svg><svg class="fl fragment fade-out" data-fragment-index="1" viewBox="0 0 1000 300" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mfw0ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mfw08fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mfw0ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mfw0fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mfw08a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mfw08ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><g stroke="#8fc59a" stroke-width="5"><line x1="341" y1="56" x2="369" y2="84"/><line x1="341" y1="84" x2="369" y2="56"/></g><g stroke="#8fc59a" stroke-width="5"><line x1="341" y1="168" x2="369" y2="196"/><line x1="341" y1="196" x2="369" y2="168"/></g><text x="500" y="292" fill="#8fc59a" text-anchor="middle" font-size="20" font-weight="700">Lottery: every arrow into D is cut</text></svg><svg class="fl fragment fade-in-then-out" data-fragment-index="1" viewBox="0 0 1000 300" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mfw1ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mfw18fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mfw1ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mfw1fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mfw18a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mfw18ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="410" y="0" width="180" height="62" rx="14" fill="none" stroke="#8fc59a" stroke-width="4" stroke-dasharray="5 5"/><g stroke="#8fc59a" stroke-width="5"><line x1="341" y1="56" x2="369" y2="84"/><line x1="341" y1="84" x2="369" y2="56"/></g><g stroke="#8fc59a" stroke-width="5"><line x1="631" y1="56" x2="659" y2="84"/><line x1="631" y1="84" x2="659" y2="56"/></g><line x1="420" y1="214" x2="292" y2="152" stroke="#ef8a6f" stroke-width="5" stroke-dasharray="10 7" marker-end="url(#mfw1ef8a6f)"/><line x1="580" y1="214" x2="708" y2="152" stroke="#ef8a6f" stroke-width="5" stroke-dasharray="10 7" marker-end="url(#mfw1ef8a6f)"/><text x="500" y="292" fill="#8fc59a" text-anchor="middle" font-size="20" font-weight="700">Matching: hold X fixed. U stays open</text></svg><svg class="fl fragment" data-fragment-index="2" viewBox="0 0 1000 300" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mfw2ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mfw28fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mfw2ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mfw2fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mfw28a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mfw28ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><g stroke="#8fc59a" stroke-width="5"><line x1="341" y1="168" x2="369" y2="196"/><line x1="341" y1="196" x2="369" y2="168"/></g><g stroke="#8fc59a" stroke-width="5"><line x1="631" y1="168" x2="659" y2="196"/><line x1="631" y1="196" x2="659" y2="168"/></g><text x="500" y="272" fill="#8fc59a" text-anchor="middle" font-size="19" font-weight="600"></text><text x="500" y="292" fill="#8fc59a" text-anchor="middle" font-size="20" font-weight="700">DiD: U cancels, if it does not change over time</text></svg></div>

<table style="font-size:.46em;line-height:1.25;border-collapse:collapse;margin:0 auto;max-width:980px">
<tr><th style="padding:.3em .55em;text-align:left;vertical-align:top">Strategy</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">What it does in the graph</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">What we must assume</th></tr>
<tr><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Lottery</strong></td><td style="padding:.3em .55em;text-align:left;vertical-align:top">cuts every arrow into D</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">the draw is really random</td></tr>
<tr class="fragment" data-fragment-index="1"><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Matching</strong></td><td style="padding:.3em .55em;text-align:left;vertical-align:top">holds fixed the X we can see: compare like with like</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">no back door runs through what we cannot see</td></tr>
<tr class="fragment" data-fragment-index="2"><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Difference in differences</strong></td><td style="padding:.3em .55em;text-align:left;vertical-align:top">lets an unseen U through, if it does not change over time</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">parallel trends</td></tr>
</table>

---

## Matching: compare like with like
<!-- .slide: class="dense" -->

<div style="position:relative;width:860px;height:330px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mmaffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mma8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mmaef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mmafff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mma8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mma8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="40" y="150" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="155.0" y="184" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Family</text><text x="155.0" y="211" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">background</text><rect x="390" y="40" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="88" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Sent down</text><rect x="390" y="270" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="304" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Education,</text><text x="505.0" y="331" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">income</text><line x1="272" y1="170" x2="388" y2="98" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mmaef8a6f)"/><line x1="272" y1="210" x2="388" y2="292" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mmaef8a6f)"/><line x1="505" y1="122" x2="505" y2="266" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mmaffcf5a)"/><text x="560" y="200" fill="#ffcf5a" text-anchor="start" font-size="20" font-weight="700">effect?</text></svg><svg class="fl fragment" data-fragment-index="1" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mmbffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mmb8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mmbef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mmbfff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mmb8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mmb8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="720" y="40" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="845.0" y="74" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Rule: one child</text><text x="845.0" y="101" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">stays in the city</text><line x1="718" y1="80" x2="624" y2="80" stroke="#8fc59a" stroke-width="4" marker-end="url(#mmb8fc59a)"/></svg><svg class="fl fragment" data-fragment-index="2" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mmcffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mmc8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mmcef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mmcfff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mmc8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mmc8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="28" y="138" width="254" height="104" rx="16" fill="none" stroke="#8fc59a" stroke-width="4" stroke-dasharray="5 5"/><text x="155" y="272" fill="#8fc59a" text-anchor="middle" font-size="19" font-weight="700">same family: held fixed</text><g stroke="#8fc59a" stroke-width="5"><line x1="316" y1="120" x2="344" y2="148"/><line x1="316" y1="148" x2="344" y2="120"/></g><g stroke="#8fc59a" stroke-width="5"><line x1="316" y1="236" x2="344" y2="264"/><line x1="316" y1="264" x2="344" y2="236"/></g></svg></div>

<p class="fragment" data-fragment-index="3" style="font-size:.6em;margin-top:.3em">Compare a sent-down youth with someone <strong>as similar as possible</strong> who stayed: same city, same age... ideally <strong>the same family</strong></p>

---

## Sent-down youths: two comparisons
<!-- .slide: class="dense" -->

<ul>
<li><strong>Naive</strong>: among people who were sent down for a short time, <strong>15.2%</strong> reached college; among those never sent down, <strong>10.9%</strong>. Was the countryside good for them?</li>
<li class="fragment"><strong>Siblings</strong>: 344 pairs of brothers and sisters, one sent down and one not. <strong>No discernible difference</strong> in any of four measures of socioeconomic status</li>
<li class="fragment">The first gap was <strong>selection</strong>, not an effect</li>
</ul>

<p style="font-size:.45em;opacity:.7;margin-top:1em">Xie, Jiang and Greenman (2008), <em>Social Science Research</em> 37(2): survey of 1999 in Shanghai, Wuhan and Xi'an</p>

---

## Difference in differences, in the graph
<!-- .slide: class="dense" -->

<div style="position:relative;width:860px;height:330px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mdaffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mda8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mdaef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mdafff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mda8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mda8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="40" y="150" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#8a8a8a" stroke-width="3"/><text x="155.0" y="184" fill="#8a8a8a" text-anchor="middle" font-size="22" font-weight="700">U: fixed</text><text x="155.0" y="211" fill="#8a8a8a" text-anchor="middle" font-size="22" font-weight="700">differences</text><rect x="390" y="40" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="88" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Treatment D</text><rect x="390" y="270" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="318" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Outcome Y</text><line x1="272" y1="170" x2="388" y2="98" stroke="#8a8a8a" stroke-width="4" marker-end="url(#mda8a8a8a)"/><line x1="272" y1="210" x2="388" y2="292" stroke="#8a8a8a" stroke-width="4" marker-end="url(#mda8a8a8a)"/><line x1="505" y1="122" x2="505" y2="266" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mdaffcf5a)"/></svg><svg class="fl fragment" data-fragment-index="1" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mdbffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mdb8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mdbef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mdbfff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mdb8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mdb8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><text x="150" y="270" fill="#8fc59a" text-anchor="middle" font-size="19" font-weight="700">constant over time:</text><text x="150" y="294" fill="#8fc59a" text-anchor="middle" font-size="19" font-weight="700">cancels in the change</text><g stroke="#8fc59a" stroke-width="5"><line x1="316" y1="120" x2="344" y2="148"/><line x1="316" y1="148" x2="344" y2="120"/></g><g stroke="#8fc59a" stroke-width="5"><line x1="316" y1="236" x2="344" y2="264"/><line x1="316" y1="264" x2="344" y2="236"/></g></svg><svg class="fl fragment" data-fragment-index="2" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mdcffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mdc8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mdcef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mdcfff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mdc8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mdc8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="720" y="150" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#ef8a6f" stroke-width="3"/><text x="845.0" y="184" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">Something else that</text><text x="845.0" y="211" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">changes over time</text><line x1="718" y1="210" x2="622" y2="292" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mdcef8a6f)"/><text x="845" y="262" fill="#ef8a6f" text-anchor="middle" font-size="19" font-weight="700">not cancelled!</text></svg></div>

<p class="fragment" data-fragment-index="3" style="font-size:.6em;margin-top:.3em">DiD survives what we cannot see, <strong>if it stays put</strong>. It fails with what <strong>moves at the same time</strong> as the treatment</p>

---

## Land Reform and Sex Selection in China
<!-- .slide: class="dense" -->

<p style="font-size:.62em;margin:-.3em 0 .1em;opacity:.9">Douglas Almond, Hongbin Li, Shuang Zhang</p>
<p style="font-size:.5em;margin:0 0 .7em;opacity:.7">JPE, 2019</p>

<ul>
<li>In a normal population about <strong>105 boys</strong> are born for every 100 girls</li>
<li>In China the sex ratio at birth rose from <strong>1.06 in 1978</strong> to <strong>1.20 in 2000</strong>: hundreds of thousands of "missing girls" every year</li>
<li>The usual suspects: ultrasound made sex selection cheaper; families had fewer children (the One Child Policy)</li>
<li class="fragment">But the rise <strong>started around 1980</strong>, when ultrasound was rare in the countryside and fertility was roughly flat. <strong>Something else</strong> started then</li>
<li class="fragment">The candidate: the <strong>land reform</strong> of 1978-84, which raised rural incomes</li>
</ul>

---

## Question and data
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:24px">
<ul style="font-size:.54em;line-height:1.3;margin:0;text-align:left;width:420px;flex:none">
<li><strong>Question</strong>: did giving land back to households increase sex selection?</li>
<li><strong>Treatment</strong>: the year the reform started in each county, from the <strong>county histories</strong> (gazetteers) of 914 counties, half of rural China. The same histories give the year the One Child Policy started</li>
<li><strong>Outcome</strong>: the sex of children born 1974-86, from the <strong>1990 census</strong>. Within each family, children are ordered by birth date: first child, second child...</li>
<li>Few people had moved (hukou): children are counted where they were born</li>
</ul>
<figure style="margin:0;flex:none;text-align:center;width:438px"><img src="assets/hrs/alz-fig2.png" style="width:430px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Almond, Li and Zhang, Fig. 2: share of counties that had started land reform (solid) and the One Child Policy (dashed); provinces with ultrasound in the capital (dotted)</figcaption></figure>
</div>

---

## Strategy
<!-- .slide: class="dense" -->

<div style="font-size:.56em;line-height:1.3;max-width:900px;margin:0 auto;text-align:left">
<p style="margin:0 0 .4em">Line up each county on <strong>its own</strong> reform year (year 0). Then compare, in the <strong>same county and the same year</strong>, three kinds of births:</p>
<table style="margin:0 auto;border-collapse:collapse;font-variant-numeric:tabular-nums">
<tr><th style="padding:.3em .8em">Share of boys among...</th><th style="padding:.3em .8em">Before reform</th><th style="padding:.3em .8em">After reform</th><th style="padding:.3em .8em">Change</th></tr>
<tr><td style="padding:.3em .8em">first children <span style="opacity:.7">(nature decides)</span></td><td style="padding:.3em .8em;text-align:center">0.51</td><td style="padding:.3em .8em;text-align:center">0.51</td><td style="padding:.3em .8em;text-align:center">0</td></tr>
<tr><td style="padding:.3em .8em">second children <strong>after a boy</strong> <span style="opacity:.7">(little reason to select)</span></td><td style="padding:.3em .8em;text-align:center">0.50</td><td style="padding:.3em .8em;text-align:center">0.50</td><td style="padding:.3em .8em;text-align:center">0</td></tr>
<tr><td style="padding:.3em .8em">second children <strong>after a girl</strong> <span style="opacity:.7">(a reason to select)</span></td><td style="padding:.3em .8em;text-align:center">0.53</td><td style="padding:.3em .8em;text-align:center">0.56</td><td style="padding:.3em .8em;text-align:center;color:#ffcf5a;font-weight:700;border-bottom-color:#fff">+0.03</td></tr>
</table>
<ul style="margin:.6em 0 0;font-size:1em">
<li class="fragment"><strong>Difference in differences</strong>: the change after a girl (+3 points) minus the change after a boy (0). A shock that hit the whole county that year moves both rows</li>
<li class="fragment">The assumption: without the reform, girl-first and boy-first families would have kept the <strong>same gap</strong> (parallel trends)</li>
<li class="fragment">Year by year instead of before/after: an <strong>event study</strong>. Flat lines before year 0 make the assumption believable</li>
</ul>
</div>

---

## Nature's lottery
<!-- .slide: class="dense" -->

<div style="position:relative;width:820px;height:330px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mnl0ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mnl08fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mnl0ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mnl0fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mnl08a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mnl08ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="20" y="40" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="145.0" y="74" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">First child</text><text x="145.0" y="101" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">is a girl</text><rect x="380" y="40" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="74" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">No son yet:</text><text x="505.0" y="101" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">a reason to select</text><rect x="740" y="150" width="240" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="860.0" y="184" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Sex of the</text><text x="860.0" y="211" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">second child</text><rect x="380" y="260" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="294" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Land reform:</text><text x="505.0" y="321" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">more income</text><line x1="272" y1="80" x2="378" y2="80" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mnl0ffcf5a)"/><line x1="632" y1="95" x2="738" y2="170" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mnl0ffcf5a)"/><line x1="632" y1="290" x2="738" y2="212" stroke="#fff" stroke-width="4" marker-end="url(#mnl0fff)"/></svg><svg class="fl fragment" data-fragment-index="1" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mnl1ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mnl18fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mnl1ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mnl1fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mnl18a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mnl18ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="20" y="268" width="250" height="70" rx="12" fill="#1b1b1b" stroke="#8a8a8a" stroke-width="3" stroke-dasharray="8 6"/><text x="145" y="298" fill="#8a8a8a" text-anchor="middle" font-size="20" font-weight="700">Family wealth,</text><text x="145" y="322" fill="#8a8a8a" text-anchor="middle" font-size="20" font-weight="700">tastes...</text><line x1="145" y1="266" x2="145" y2="124" stroke="#8a8a8a" stroke-width="3" stroke-dasharray="10 7" marker-end="url(#mnl18a8a8a)"/><g stroke="#8fc59a" stroke-width="5"><line x1="131" y1="181" x2="159" y2="209"/><line x1="131" y1="209" x2="159" y2="181"/></g><text x="160" y="250" fill="#8fc59a" text-anchor="middle" font-size="19" font-weight="600"></text><text x="250" y="200" fill="#8fc59a" text-anchor="start" font-size="18" font-weight="700">nature decides:</text><text x="250" y="222" fill="#8fc59a" text-anchor="start" font-size="18" font-weight="700">no arrow in</text></svg></div>

<ul style="font-size:.54em;line-height:1.3;max-width:880px;margin:.2em auto 0">
<li>The sex of the first child is decided by <strong>nature</strong>: about 1.05 boys per girl, before and after the reform</li>
<li class="fragment" data-fragment-index="1">Nothing about the family pushes it one way or the other: no arrow comes in</li>
<li class="fragment" data-fragment-index="2">It moves the <strong>reason to select</strong>, and touches the second child only through it. That is the logic of an <strong>instrument</strong></li>
<li class="fragment" data-fragment-index="3">The threat: families with a first girl being different in other ways. Normal first births (1.05) are the evidence against it</li>
</ul>

---

## Results
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:24px">
<ul style="font-size:.56em;line-height:1.3;margin:0;text-align:left;width:380px;flex:none">
<li>Red: second children after a <strong>first girl</strong>. Flat before the reform, then from about <strong>1.1 to 1.3 boys per girl</strong> within four years</li>
<li>Black: second children after a <strong>first boy</strong>. Nothing happens</li>
<li>First children (not shown): stable at about 1.05</li>
<li class="fragment">Size: about <strong>half</strong> of the rise in rural sex ratios 1978-86, roughly <strong>one million missing girls</strong></li>
</ul>
<figure style="margin:0;flex:none;text-align:center;width:468px"><img src="assets/hrs/alz-fig4b.png" style="width:460px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Almond, Li and Zhang, Fig. 4b: sex ratio of second children by year of birth relative to land reform (0 = reform year)</figcaption></figure>
</div>

<p class="fragment" style="font-size:.5em;margin-top:.4em">You have already seen an event study: Meng, Qian and Yared's Figure 3, around the famine</p>

---

## Is it really the land reform?
<!-- .slide: class="dense" -->

- **The rival: the One Child Policy**, started at almost the same time. But not in the same year in each county: adding the county's One Child Policy date **does not change** the result, and the rise starts **before** the rural policy
- **Who has second children** did not change with the reform: the result is not a different mix of families
- **Why?** More consistent with **income**: larger effects among more educated parents and where output grew more
- **How?** Ultrasound existed in provincial capitals: larger rise in rural counties **connected by rail** to one; a rise also where none was reachable

---

## One paper, three tools
<!-- .slide: class="dense" -->

<table style="font-size:.54em;line-height:1.3;border-collapse:collapse;margin:0 auto;max-width:960px">
<tr><th style="padding:.3em .55em;text-align:left;vertical-align:top">Tool</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">In Almond, Li and Zhang</th><th style="padding:.3em .55em;text-align:left;vertical-align:top">What it keeps out</th></tr>
<tr><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Compare like with like</strong> (matching)</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">births in the same county and the same year</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">anything that hit a county in a year: weather, a clinic, a campaign</td></tr>
<tr class="fragment"><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Difference in differences</strong>, year by year</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">before and after each county's own reform</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">fixed differences between counties and families</td></tr>
<tr class="fragment"><td style="padding:.3em .55em;text-align:left;vertical-align:top"><strong>Nature's lottery</strong> (instrument logic)</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">the sex of the first child</td><td style="padding:.3em .55em;text-align:left;vertical-align:top">differences between families that want to select and families that do not</td></tr>
</table>

<p class="fragment" style="font-size:.6em;margin-top:.8em">Each problem can be taken apart <strong>separately</strong>, inside the same paper</p>

---

## What Started China's Miracle? The View from Outer Space
<!-- .slide: class="dense" -->

<p style="font-size:.62em;margin:-.3em 0 .1em;opacity:.9">Joel Ferguson, Oliver Kim</p>
<p style="font-size:.5em;margin:0 0 .7em;opacity:.7">Working paper, 2026</p>

<ul>
<li><strong>The standard story</strong>: giving land back to households raised farm productivity and started the miracle. Lin (1992): almost <strong>half</strong> of farm output growth 1978-84</li>
<li>It rests on <strong>official statistics</strong>, from a state whose local officials had over-reported harvests before, during the Great Leap</li>
<li class="fragment">And two problems we can now name: the early reformers were <strong>poor and drought-hit</strong>; prices <strong>rose in 1979</strong> for everybody</li>
<li class="fragment"><strong>Question</strong>: did reforming <strong>sooner</strong> raise grain <strong>yields</strong>?</li>
</ul>

---

## Data from space
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:22px">
<ul style="font-size:.54em;line-height:1.3;margin:0;text-align:left;width:340px;flex:none">
<li><strong>Satellites</strong>: Landsat (from 1972, dots of about 60 metres) and a coarser weather satellite</li>
<li><strong>NDVI</strong>: how green the fields are. Checked against crop yields in many countries and periods</li>
<li><strong>Independent</strong> of the Chinese statistical office</li>
<li>Reform dates: official, by province (Lin 1992), and from county histories (Almond, Li and Zhang)</li>
</ul>
<figure style="margin:0;flex:none;text-align:center;width:548px"><img src="assets/hrs/fk-fig2.png" style="width:540px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Ferguson and Kim, Fig. 2: Anhui seen by Landsat in 1979 (normal year) and 1978 (drought). The star: Xiaogang, where households started the reform</figcaption></figure>
</div>

---

## Did the reform raise yields? Draw the graph first
<!-- .slide: class="dense" -->

<div style="position:relative;width:860px;height:330px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 420" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mhaffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mha8fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mhaef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mhafff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mha8a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mha8ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><rect x="30" y="40" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#ef8a6f" stroke-width="3"/><text x="155.0" y="74" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">Drought, poverty</text><text x="155.0" y="101" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">in 1977-78</text><rect x="390" y="40" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="88" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Early reform</text><rect x="390" y="270" width="230" height="80" rx="12" fill="#1b1b1b" stroke="#fff" stroke-width="3"/><text x="505.0" y="318" fill="#fff" text-anchor="middle" font-size="22" font-weight="700">Yields after</text><rect x="720" y="150" width="250" height="80" rx="12" fill="#1b1b1b" stroke="#ef8a6f" stroke-width="3"/><text x="845.0" y="184" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">1979: higher</text><text x="845.0" y="211" fill="#ef8a6f" text-anchor="middle" font-size="22" font-weight="700">grain prices</text><line x1="282" y1="80" x2="388" y2="80" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mhaef8a6f)"/><line x1="272" y1="122" x2="420" y2="266" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mhaef8a6f)"/><line x1="505" y1="122" x2="505" y2="266" stroke="#ffcf5a" stroke-width="5" marker-end="url(#mhaffcf5a)"/><line x1="718" y1="210" x2="622" y2="292" stroke="#ef8a6f" stroke-width="4" marker-end="url(#mhaef8a6f)"/><text x="560" y="200" fill="#ffcf5a" text-anchor="start" font-size="20" font-weight="700">effect?</text><text x="160" y="215" fill="#ef8a6f" text-anchor="middle" font-size="17" font-weight="600">bad years are followed</text><text x="160" y="236" fill="#ef8a6f" text-anchor="middle" font-size="17" font-weight="600">by better ones anyway</text></svg></div>

- The first to reform were the **poorest and drought-hit**: their yields would have bounced back anyway (**mean reversion**)
- And in **1979 prices rose for everybody**, at the same time as the reform spread

---

## Holding many things fixed: regression, for dummies
<!-- .slide: class="dense" -->

<ul>
<li>Early and late reformers differ in <strong>many</strong> things we can measure: starting yields, drought, poverty, crops...</li>
<li>Ideal: compare early and late reformers that are <strong>identical</strong> in all of them. With a handful of things, the groups empty fast (remember: 19 provinces, one per cell)</li>
<li class="fragment"><strong>Regression</strong> fills the empty cells by assuming a simple shape: each factor shifts yields by a fixed amount. It compares like with like, <strong>on average</strong></li>
<li class="fragment">It only holds fixed <strong>what we measure</strong>. The luck of a good year, local politics, the 1979 prices: only if measured</li>
</ul>

---

## Propensity score, for dummies
<!-- .slide: class="dense" -->

<div style="position:relative;width:820px;height:300px;margin:0 auto"><svg class="fl" viewBox="0 0 1000 380" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mps0ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mps08fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mps0ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mps0fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mps08a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mps08ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><line x1="100" y1="300" x2="900" y2="300" stroke="#8a8a8a" stroke-width="2"/><text x="100" y="330" fill="#8a8a8a" text-anchor="middle" font-size="18" font-weight="400">0</text><text x="900" y="330" fill="#8a8a8a" text-anchor="middle" font-size="18" font-weight="400">1</text><text x="500" y="360" fill="#fff" text-anchor="middle" font-size="19" font-weight="600">chance of reforming early, given drought, poverty, starting yields</text><text x="60" y="126" fill="#ffcf5a" text-anchor="end" font-size="19" font-weight="700">early</text><text x="60" y="236" fill="#fff" text-anchor="end" font-size="19" font-weight="700">later</text><circle cx="244" cy="120" r="13" fill="#ffcf5a"/><circle cx="268" cy="230" r="13" fill="none" stroke="#fff" stroke-width="3"/><circle cx="380" cy="120" r="13" fill="#ffcf5a"/><circle cx="364" cy="230" r="13" fill="none" stroke="#fff" stroke-width="3"/><circle cx="516" cy="120" r="13" fill="#ffcf5a"/><circle cx="540" cy="230" r="13" fill="none" stroke="#fff" stroke-width="3"/><circle cx="668" cy="120" r="13" fill="#ffcf5a"/><circle cx="652" cy="230" r="13" fill="none" stroke="#fff" stroke-width="3"/><circle cx="788" cy="120" r="13" fill="#ffcf5a"/><circle cx="804" cy="230" r="13" fill="none" stroke="#fff" stroke-width="3"/><circle cx="148" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/><circle cx="316" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/><circle cx="452" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/><circle cx="596" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/><circle cx="732" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/><circle cx="860" cy="230" r="13" fill="none" stroke="#8a8a8a" stroke-width="3"/></svg><svg class="fl fragment" data-fragment-index="1" viewBox="0 0 1000 380" style="position:absolute;inset:0;width:100%;height:100%"><defs><marker id="mps1ffcf5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ffcf5a"/></marker><marker id="mps18fc59a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8fc59a"/></marker><marker id="mps1ef8a6f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ef8a6f"/></marker><marker id="mps1fff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker><marker id="mps18a8a8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a8a8a"/></marker><marker id="mps18ab4f8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8ab4f8"/></marker></defs><line x1="244" y1="134" x2="268" y2="216" stroke="#8fc59a" stroke-width="4"/><line x1="380" y1="134" x2="364" y2="216" stroke="#8fc59a" stroke-width="4"/><line x1="516" y1="134" x2="540" y2="216" stroke="#8fc59a" stroke-width="4"/><line x1="668" y1="134" x2="652" y2="216" stroke="#8fc59a" stroke-width="4"/><line x1="788" y1="134" x2="804" y2="216" stroke="#8fc59a" stroke-width="4"/></svg></div>

<ul style="font-size:.54em;line-height:1.3;max-width:880px;margin:.2em auto 0">
<li><strong>Step 1</strong>: from what we see, compute each county's <strong>chance</strong> of reforming early. Many things become <strong>one number</strong></li>
<li class="fragment" data-fragment-index="1"><strong>Step 2</strong>: pair each early reformer with a later one that had a <strong>similar chance</strong>, and compare their yields</li>
<li class="fragment" data-fragment-index="2">Same assumption as matching: <strong>nothing unseen</strong> drives both timing and yields. Ferguson and Kim go further: <strong>borders</strong> and <strong>event studies</strong></li>
</ul>

---

## A border seen from space
<!-- .slide: class="dense" -->

<figure style="margin:0;flex:none;text-align:center;width:908px"><img src="assets/hrs/fk-fig5.png" style="width:900px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Ferguson and Kim (2026), Fig. 5: vegetation over Anhui and Jiangsu in 1978 and 1982; change in vegetation against distance to the Anhui border</figcaption></figure>

<ul style="font-size:.54em;line-height:1.3;margin:.5em auto 0;max-width:900px">
<li>Anhui reformed first (1978), Jiangsu later. Compare fields <strong>just across the border</strong>, alike in soil and weather, <strong>before and after</strong> the reform: a difference in differences between neighbours</li>
<li class="fragment">If the reform raised yields, the Anhui side would have grown greener than the Jiangsu side: the right panel would show a <strong>step at zero</strong>. It is flat</li>
</ul>

---

## Official data and the view from space
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:24px">
<ul style="font-size:.54em;line-height:1.3;margin:0;text-align:left;width:410px;flex:none">
<li><strong>Lin (1992)</strong>, official provincial data: the reform explains <strong>almost half</strong> of farm output growth, 1978-84</li>
<li><strong>Ferguson and Kim</strong>: vegetation measured by <strong>satellites</strong> (Landsat, from 1972), not by the statistical office</li>
<li>Same staggered timing, before and after: <strong>no effect on yields</strong>, even three years later</li>
<li class="fragment">What moved yields? Their evidence points to the <strong>1979 price increase</strong>; the reform instead freed labour for other work</li>
<li class="fragment">Data are political, again: the miracle's first chapter is being <strong>rewritten with new data</strong></li>
</ul>
<figure style="margin:0;flex:none;text-align:center;width:408px"><img src="assets/hrs/fk-fig6.png" style="width:400px;background:#fff;padding:4px;border-radius:4px;display:block"><figcaption style="font-size:.4em;opacity:.7;line-height:1.25;margin-top:4px">Ferguson and Kim (2026), Fig. 6: change in the border gap in vegetation (NDVI) after a province reforms, years 0-3</figcaption></figure>
</div>

---

## Back to the transition
<!-- .slide: class="dense" -->

<ul>
<li>We still cannot say what "the transition" caused. We can say something about its <strong>pieces</strong>:</li>
<li class="fragment">Sent-down years: <strong>no lasting benefit</strong> once siblings are compared</li>
<li class="fragment">Land reform: <strong>more boys</strong> born after a first girl; on yields, a <strong>live debate</strong> between official data and satellites, with prices as the rival</li>
<li class="fragment">Satellites can <strong>overturn</strong> a story built on official data</li>
<li class="fragment">Every method buys an answer with an <strong>assumption</strong>. The job is to say which, and to check it</li>
</ul>

---

## Questions, for next week
<!-- .slide: class="dense" -->

<div style="display:flex;align-items:center;justify-content:center;gap:30px">
<div style="text-align:left;font-size:.6em;max-width:640px;line-height:1.3;display:flex;flex-direction:column;gap:.6em">
<p style="margin:0"><strong>Two papers, two briefs, one set of questions each</strong>:</p>
<p style="margin:0">• Almond, Li, Zhang (2019): land reform and the missing girls<br>• Chen, Fan, Gu, Zhou (2020): city youths in village schools</p>
<p style="margin:0">Read the brief (the paper if you like) and answer the questions: causal graphs, the ideal experiment, data, China, theory.</p>
<p style="margin:0;opacity:.85">Please no AI chatbots: use the papers, the lectures and, only if needed, a search without AI (google.com/search?udm=14)</p>
</div>
<div style="flex:none;width:200px;height:200px;border:3px dashed #ffcf5a;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:.45em;color:#ffcf5a;padding:12px;box-sizing:border-box">QR of the folder<br>(link to come)</div>
</div>

<p style="font-size:.62em;margin-top:1em;font-weight:700">Send your answers to francesco.manaresi@bancaditalia.it<br><span style="color:#ffcf5a">They won't be graded!</span></p>
