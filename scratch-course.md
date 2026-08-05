# Scratch Course — Full Implementation Plan

> **How to use this file.** This is the single source of truth for building the
> rest of this course. If you are an agent picking this up cold: read sections
> 1-6 first (they tell you *how* to build), then jump to the session you were
> asked for in section 7 (it tells you *what* to build). Everything in here has
> already been proven to work — the pipeline in section 5 is the exact one used
> to build Session 5.
>
> **Audience of the course itself:** two students, 9 years old, learning
> together. Slides are in English; the teacher explains in Arabic using the
> `teacherNotes`.
>
> **Format:** 20 sessions × 90 minutes, 2 sessions per week, 10 weeks.

---

## 1. Course context and philosophy

### Who this is for
Two 9-year-olds, taught together by one teacher, live, with a projector and one
computer each. They have already finished 4 sessions of unplugged algorithm
thinking (no computer). From Session 5 onward they are in the real Scratch
editor every single session.

### The five rules this course is built on

1. **Every concept arrives at the moment it is needed, never before.**
   A 9-year-old cannot hold an abstract idea for a week. They learn `variable`
   in the session where they need a score, not in a theory lesson. This is why
   the 6 missing algorithm concepts were *not* bolted onto sessions 1-4 — see
   section 3.

2. **They must build something that runs, every single session.**
   No session ends with theory only. If they cannot click the green flag and
   see their own thing work, the session failed.

3. **Real screenshots, never illustrations.**
   A 9-year-old maps knowledge to pixels. If the slide shows a cartoon of a
   block palette and the real one looks different, they are lost. Every screen
   in this course is a real capture of `scratch.mit.edu`.

4. **One new hard idea per session, maximum.**
   Sessions pair one hard idea with easy, fun surface area. Session 13 is
   `variables` (hard) + score counters (fun). Never two hard ideas together.

5. **Every session has all four parts: Explain → Activity → Task → Homework.**
   - **Explain** — slides, teacher talks, they watch.
   - **Activity** — guided; teacher builds on projector, they copy along.
   - **Task** — solo; they build alone. This is the real assessment.
   - **Homework** — small, 20 minutes max, always a *variation* of the task so
     it needs no new teaching.

### The 90-minute timing template
Every session from 6 to 20 follows this shape. Keep to it.

| Minutes | Phase | What happens |
|---|---|---|
| 0-10 | Warm-up | Check homework, recap last session, 2 quick questions |
| 10-30 | Explain | Slides. New word, new blocks, why they matter |
| 30-55 | Activity | Teacher builds on the projector, students copy along |
| 55-80 | Task | Students build alone. Teacher circulates, does NOT touch their mouse |
| 80-90 | Wrap-up | Show each other's work, flip-card review, assign homework |

Two hard rules for the Task phase:
- Never take a student's mouse. Ask "what did you *want* it to do?" instead.
- If both students finish early, the extra challenge is already written in the
  session's homework — let them start it.

---

## 2. Current state of the repository

### Done
| Session | Title | Slides | Notes |
|---|---|---|---|
| 1 | What is an Algorithm? | 13 | Unplugged. Sequence, precision |
| 2 | Think Like a Programmer | 14 | Good/bad algorithms, bugs, decomposition |
| 3 | Making Decisions — IF | 11 | Conditions, if/else |
| 4 | Repeating — LOOP | 13 | repeat X, forever, IF vs LOOP |
| 5 | Inside Scratch | 22 | **Real screenshot tour.** 13 `ui-tour` slides |

Plus `/curriculum` — a page rendering the whole 20-session roadmap from
`src/data/curriculum.ts`, with expandable per-session lesson plans.

### To build
Sessions 6-20. Fifteen sessions. All specified in section 7 of this file.

### File map
```
src/
  app/
    page.tsx                      # home: session grid + link to /curriculum
    curriculum/page.tsx           # the roadmap page
    session/[id]/page.tsx         # slide renderer route  <-- MUST EDIT per session
    globals.css                   # design tokens, fonts
    layout.tsx
  components/
    SlideLayout.tsx               # the big switch: renders a slide by its `type`
    UiTour.tsx                    # real-screenshot spotlight tour
    VisualBlocks.tsx              # fake Scratch blocks drawn in HTML
    FlipCards.tsx                 # tap-to-reveal review cards
    QuizSlide.tsx  VideoEmbed.tsx  GameEmbed.tsx
    NewWord.tsx                   # vocabulary card
    TeacherNotes.tsx              # collapsible panel, teacher-only
    Mascot.tsx                    # the cat speech bubble
    Navigation.tsx                # prev/next, slide counter
    curriculum/SessionCard.tsx
  data/
    types.ts                      # SlideData / SessionData  <-- extend carefully
    session1.ts ... session5.ts
    curriculum.ts                 # the roadmap, incl. status: done | planned
public/images/scratch/            # all real Scratch captures
```

---

## 3. The 6 missing algorithm concepts, and where they land

Sessions 1-4 taught sequence, precision, debugging, decomposition, IF and LOOP.
Six concepts needed for real Scratch work were missing. **Decision taken: teach
each one inside the Scratch session where it first becomes useful**, rather than
retrofitting sessions 1-4. Each is tagged `carriesConcept` in `curriculum.ts`.

| Concept | Lands in | Why there |
|---|---|---|
| X / Y coordinates | **Session 6** | The first time the sprite moves, they need to know where it is |
| Events (`when X, do Y`) | **Session 8** | The session that makes code start on its own |
| Repeat Until · Nested loops | **Session 9** | Session 4 only covered `repeat N` and `forever` |
| Flowcharts | **Session 11** | Right before Project 2, where planning first actually pays off |
| Variables · Input/Output | **Session 13** | The session that adds a score. A variable with nothing to count is meaningless |
| AND / OR / NOT | **Session 14** | Needed the moment a game rule has two conditions |

**Do not move these.** The whole sequence depends on them arriving in this
order.

---

## 4. Technical conventions

### 4.1 The `SlideData` contract
Defined in `src/data/types.ts`. A slide sets `type`, and `SlideLayout` renders
the matching fields. Available types:

`content` · `quiz` · `game` · `activity` · `review` · `homework` · `video` · `ui-tour`

Fields, and which type uses them:

| Field | Used by | Notes |
|---|---|---|
| `id` | all | 1-based, must be contiguous — nav does `id ± 1` |
| `title` `emoji` `content[]` | all | `content` is one string per line |
| `mascotMessage` | all | **required** — cat speech bubble |
| `teacherNotes` | all | **required** — see 4.2 |
| `bgVariant` | all | `default` `blue` `purple` `green` `orange` |
| `image` | `content` | path under `/images/...` |
| `newWord` | any | `{ word, pronunciation, meaning, example }` |
| `visualBlocks` | any | HTML-drawn Scratch blocks, see 4.3 |
| `codeSnippet[]` | any | monospace lines |
| `flipCards[]` | `review` | `{ frontEmoji, frontText, backEmoji, backText }` |
| `quiz` | `quiz` | `{ question, options[], correctIndex }` |
| `activitySteps[]` | `activity` `homework` | renders as numbered step list |
| `reviewPoints[]` | `review` | |
| `videoUrl` | `video` | must be a YouTube **embed** URL |
| `gameUrl` | `game` | |
| `uiTour` | `ui-tour` | see 4.4 |

### 4.2 `teacherNotes` — treat as mandatory, not optional
This is where the Arabic teaching happens. Every slide needs all four:
```ts
teacherNotes: {
  questions: string[],        // ask BEFORE explaining. 2 is right, 3 is a lot
  expectedAnswers: string[],  // including the wrong answers you expect to hear
  tips: string[],             // classroom logistics, misconceptions to pre-empt
  transition: string,         // the sentence that leads into the next slide
}
```
Quality bar for `tips`: it must contain something a teacher could not guess from
the slide. "Explain the palette" is worthless. "They will try to drag the block
onto the Stage instead of the Code Area — let it fail once, then show them" is
the standard.

### 4.3 `visualBlocks` — fake blocks drawn in HTML
For showing a script *concept* without a screenshot. Nodes:
```ts
{ type: "wrapper" | "action" | "if-else",
  color: "blue" | "orange" | "purple" | "green" | "pink",
  label: string,
  children?: BlockNode[],      // for wrapper / if-else true branch
  elseLabel?: string,          // if-else only
  falseChildren?: BlockNode[] } // if-else only
```
**Match Scratch's real colour language or you actively confuse them:**

| Colour | Scratch category |
|---|---|
| `blue` | Motion |
| `purple` | Looks |
| `pink` | Sound |
| `orange` | Control / Events (hat + loops) |
| `green` | Operators |

### 4.4 `uiTour` — the real-screenshot spotlight
The component that makes Session 5 work. Left: the whole editor with everything
dimmed except one rectangle. Right: a zoomed real crop of that rectangle + what
it does.

```ts
uiTour: {
  wideImage: "/images/scratch/editor-full.webp",  // always the full editor
  detailImage: "/images/scratch/palette.webp",    // the zoomed crop
  detailLabel: "The Blocks Palette",              // small orange caption
  region: { x: 0, y: 10.2, w: 22, h: 82.2 },      // PERCENTAGES, see below
  facts: string[],                                 // 3-4 bullets max
  detailTall: true,                                // tall crop sits BESIDE facts
}
```

**How to compute `region`.** Captures are taken at a 1440×900 viewport, so a
percentage is just the CSS pixel divided by the viewport and ×100:

```
x% = cssX / 1440 * 100      w% = cssW / 1440 * 100
y% = cssY /  900 * 100      h% = cssH /  900 * 100
```

Set `detailTall: true` for anything vertical (palettes). Leave it off for wide
strips — those get `max-h-[300px] object-contain` so they cannot over-magnify.

### 4.5 Registering a new session — 3 files, all required
Miss any one of these and the session 404s or is invisible.

1. **`src/data/sessionN.ts`** — export `const sessionN: SessionData`.
2. **`src/app/session/[id]/page.tsx`** — add to *both*:
   - `generateStaticParams()` → add `{ id: "N" }`
   - the ternary chain → `sessionId === "N" ? sessionN : ...`
   *(If this chain passes ~8 entries, refactor it to a
   `Record<string, SessionData>` lookup map instead. Do that once, not per
   session.)*
3. **`src/app/page.tsx`** — add the card to the sessions array.
4. **`src/data/curriculum.ts`** — flip that session's `status` to `"done"`.

### 4.6 Design rules already in force
- Fonts: `font-outfit` (headings), `font-inter` (body), `font-fira` (code/numbers).
- Only 3-5 colours per screen. The session's own accent comes from
  `SessionData.color`.
- `ui-tour` slides render a **compact** heading (`slide.type === "ui-tour"` in
  `SlideLayout`) to leave room for the screenshot. Preserve this.
- Never use emoji as a functional icon; emoji are decorative mascot/heading only.

---

## 5. The screenshot pipeline (proven, reproducible)

This is the highest-value section. It is how every real Scratch image in
`public/images/scratch/` was produced, including building a real script by
dragging real blocks.

### 5.1 Open the editor
```bash
agent-browser open --color-scheme light "https://scratch.mit.edu/projects/editor/"
agent-browser set viewport 1440 900 2      # 2 = retina. ALWAYS 1440x900
agent-browser wait --load networkidle
agent-browser wait 8000                    # the VM is slow to paint the canvas
```
The editor needs the long fixed wait — `networkidle` fires before the workspace
renders.

### 5.2 Coordinates that are known-good at 1440×900
Because Blockly is a canvas, `find`/`click` do not work on blocks. Drive it with
`agent-browser mouse move / down / up` at these positions.

**Tabs** (verified):
| Target | x, y |
|---|---|
| Code tab | 48, 74 |
| Costumes tab | 148, 75 |
| Sounds tab | 254, 75 |

**Palette categories** — x = 30, spacing ≈ 45px:
| Category | y | Status |
|---|---|---|
| Motion | 115 | verified |
| Looks | 160 | verified |
| Sound | 205 | inferred |
| Events | 250 | verified |
| Control | 295 | inferred |
| Sensing | 340 | inferred |
| Operators | 385 | inferred |
| Variables | 430 | inferred |
| My Blocks | 475 | inferred |

After clicking a category, the first block sits near **(85, 136)** and the list
runs downward. Screenshot the palette to read exact positions before dragging.

### 5.3 Dragging a real block (this is the part that is fiddly)
Blockly needs intermediate mouse moves — a single jump from source to target is
not recognised as a drag.

```bash
agent-browser mouse move 88 147     # the block in the palette
agent-browser mouse down
agent-browser mouse move 150 160    # several intermediate points, REQUIRED
agent-browser mouse move 300 180
agent-browser mouse move 450 200
agent-browser mouse move 460 205    # a tiny final nudge helps the snap register
agent-browser mouse up
agent-browser wait 2000
```
To snap a block *under* an existing one, target roughly **30-35px below** the
previous block's top edge. Screenshot after every drag — do not chain three
drags blind.

**Do not** try `Blockly.Xml.domToWorkspace` to inject scripts. `window.Blockly`
is exposed but `getMainWorkspace()` is not available on the deployed build.
Dragging is the reliable path.

### 5.4 Modals
The sprite/backdrop library buttons are real DOM, so use `eval`:
```bash
agent-browser eval "(() => { const t=[...document.querySelectorAll('button')].find(x=>/Choose a Sprite/i.test(x.getAttribute('aria-label')||'')); if(t){t.click(); return 'clicked'} return 'notfound' })()"
```
To close: click `[class*=header-item-close]`, or `mouse move 55 40` + down/up.
Always screenshot to confirm a modal actually closed — they silently persist and
poison the next capture.

### 5.5 Crop and optimise
`sharp` is available. Write the script into the project dir and delete it after
(running from `/tmp` fails to resolve `sharp`).

Remember: captures are at `deviceScaleFactor 2`, so **multiply every CSS
coordinate by 2** to get pixel coordinates.

```js
import sharp from 'sharp';
const S = '/tmp/agent-browser/', O = 'public/images/scratch/', K = 2;
const c = (x, y, w, h) => ({ left: x*K, top: y*K, width: w*K, height: h*K });

await sharp(S+'hero2x.png').extract(c(0, 92, 316, 740))
  .png({ compressionLevel: 9 }).toFile(O+'palette.png');

// large images -> webp; small crops with flat UI -> png
await sharp(O+'palette.png').webp({ quality: 88 }).toFile(O+'palette.webp');
```
Rule of thumb: **big images (full editor, libraries, panels) → `.webp` q88.
Small UI crops → `.png`** (sharper on flat colour, and already tiny).

### 5.6 Verify in the browser — not optional
```bash
agent-browser open --color-scheme dark "http://localhost:3000/session/N?slide=3"
agent-browser wait --load networkidle && agent-browser wait 2500
agent-browser screenshot /tmp/agent-browser/sN-slide3.png
```
Check every `ui-tour` slide: is the spotlight on the right thing, and is the
detail crop legible? A wrong `region` is invisible in code review and obvious on
screen. Also check the small preview viewport (~515×589).

### 5.7 Existing assets
```
editor-full.webp      full editor, the wideImage for every tour
palette.webp          Motion palette, tall
events-palette.webp   Events palette, tall
categories.png        the colour category strip
code-area.webp        empty code area
first-program.png     REAL built script: flag + move 10 + say Hello!
stage.webp            the stage
sprite-pane.png       sprite pane
backdrop-panel.png    backdrop panel
flag-stop.png         green flag + stop
tabs.png              Code/Costumes/Sounds
add-sprite.png        the add-sprite button
sprite-library.webp   sprite chooser modal
backdrop-library.webp backdrop chooser modal
costumes.webp         Costumes tab
sounds.webp           Sounds tab
```

---

## 6. Standard slide recipe for sessions 6-20

Target **16-20 slides**. Session 5 has 22 because a UI tour is unusually
slide-hungry; a normal session should not exceed 20.

| # | Type | Purpose |
|---|---|---|
| 1 | `review` | Recap last session + homework check. `flipCards` or `reviewPoints` |
| 2 | `content` | The hook: show the finished thing they will build today |
| 3 | `content` | Today's goal, in one sentence a 9-year-old can repeat |
| 4-5 | `content` | The new idea, with `newWord` |
| 6-9 | `content` | The new blocks. **One slide per block**, with `visualBlocks` and a real screenshot |
| 10 | `content` | The gotcha — the mistake they are about to make |
| 11 | `quiz` | Check the concept |
| 12 | `activity` | Guided build, `activitySteps` numbered |
| 13 | `content` | A twist on the activity: "now make it do X instead" |
| 14 | `quiz` | Check the blocks |
| 15 | `activity` | **The Task.** Solo build |
| 16 | `review` | `flipCards` over the session's new words |
| 17 | `homework` | With `activitySteps` |

Per-session non-negotiables:
- **≥1 `newWord`** — the vocabulary is half the point.
- **≥2 `quiz`** slides — one on the concept, one on the blocks.
- **≥1 real screenshot of the new blocks** in their real palette.
- **The Task must be completable in 25 minutes** by a 9-year-old.
- **Homework is a variation of the Task**, never a new concept.

---

## 7. Session-by-session plan

Each entry below gives: goal · new blocks · what to explain · screenshots to
capture · new words · activity · task · homework · the bugs to expect.
`curriculum.ts` already holds the short version of all of this; the detail here
is what you build slides from.

---

### Session 6 — Making It Move
**Week 3 · carries: X / Y coordinates**

**Goal.** Move a sprite with code, and know where it is on the stage.

**New blocks.** `move 10 steps` · `turn ↻ 15 degrees` · `turn ↺ 15 degrees` ·
`go to x: y:` · `glide 1 secs to x: y:` · `point in direction 90` ·
`if on edge, bounce`

**Explain.**
- The stage is a grid. Centre is `0, 0`.
- `x` = left/right, from -240 to 240. `y` = up/down, from -180 to 180.
- Negative x is left, positive x is right. Same idea for y: down is negative.
- `move` goes forward *in whatever direction the sprite is facing* — this is the
  single biggest source of confusion in this session.
- `glide` is smooth over time; `go to` is instant teleport.

**New words.** `coordinate` (koh-OR-di-net) · `direction` · `degrees`

**Screenshots to capture.**
- Motion palette, full (tall crop).
- The sprite pane x/y readout, zoomed — they need to *see* the numbers change.
- A built script: `when flag clicked` → `go to x: 0 y: 0` → `glide 1 secs to x: 100 y: 50`.
- The stage with the sprite at a known coordinate, for the grid explanation.

**Activity — Treasure Hunt (25 min).** Teacher calls out a coordinate, students
glide the sprite there. Start with `0,0`, then one axis at a time, then both,
then negatives.

**Task (25 min).** Make the sprite walk a full square and end exactly where it
started. Four `move` + four `turn 90`.

**Homework.** Make a sprite bounce around the stage forever without stopping
(`forever` + `move` + `if on edge, bounce`).

**Expected bugs.**
- Turning by 15° and wondering why the square is wrong → they must set 90.
- Forgetting `go to x:0 y:0` at the start, so every run drifts from where the
  last one ended. This is a great first lesson in "reset your state".
- Confusing `point in direction` with `turn`.

---

### Session 7 — Looks & Animation
**Week 4**

**Goal.** Make a sprite look alive: costume, size, colour, speech.

**New blocks.** `say Hello! for 2 seconds` · `say` · `think Hmm...` ·
`next costume` · `switch costume to` · `change size by 10` · `set size to 100%` ·
`change color effect by 25` · `show` / `hide`

**Explain.**
- A costume is one picture. A sprite can hold many.
- Swapping costumes quickly *is* animation — this is exactly how cartoons work.
- `say ... for 2 seconds` waits; plain `say` does not and leaves the bubble up.
- `change size by` is relative, `set size to` is absolute. Same pattern as
  Session 6's `move` vs `go to` — point this out, it is a recurring idea.

**New words.** `costume` · `animation` (an-i-MAY-shun) · `effect`

**Screenshots to capture.**
- Looks palette, full (tall).
- Costumes tab showing cat costume 1 and 2 side by side.
- A built walking script: `forever` → `next costume` → `move 10` → `wait 0.2`.
- The stage with a speech bubble visible.

**Activity (25 min).** Build a walking cat together: `forever [ next costume ·
move 10 · wait 0.2 ]`. Then break it on purpose by removing the `wait` so they
see why timing matters. Then add grow/shrink.

**Task (25 min).** The sprite introduces itself in 3 speech bubbles while
changing colour each time.

**Homework.** Animate any sprite so it really looks like it is walking.

**Expected bugs.**
- No `wait` in the loop → a blurred, seizure-fast sprite. Let this happen, it is
  the best teaching moment in the session.
- Using plain `say` in a loop, so the bubble never updates visibly.
- Growing the sprite 40 times and losing it off-stage; teach `set size to 100`
  as the fix.

---

### Session 8 — Events + PROJECT 1: Dance Party
**Week 4 · carries: Events · isProject**

**Goal.** Make code start by itself. Finish a first complete project.

**New blocks.** `when green flag clicked` · `when space key pressed` ·
`when this sprite clicked` · `when backdrop switches to`

**Explain.**
- An **event** is "when X happens, do Y". It is an IF that sits and waits.
- Yellow hat blocks have a curved top — nothing can go above them.
- Without a hat block, code only runs if you click it manually. This is *the*
  point of the session.
- One sprite can have several scripts with different hats, all live at once.
- Callback to Session 3: an event is an IF that never stops asking.

**New words.** `event` (ee-VENT) · `trigger` · `script`

**Screenshots to capture.**
- Events palette, full (already have `events-palette.webp` — reuse).
- The hat-block shape zoomed, so they see nothing fits above it.
- One sprite with 2-3 separate scripts in the code area — this visual is the
  whole lesson.
- The green flag button (reuse `flag-stop.png`).

**Activity (20 min).** Three sprites, three different dance moves, all on
`when green flag clicked`. Then add `when this sprite clicked` to one.

**Task — PROJECT 1, Dance Party (30 min).** A backdrop, 3 sprites, every one
dancing on the green flag, plus one that reacts when clicked. Add sound if
Session 10 has not happened yet — a `start sound` is fine to copy blindly here.

**Homework.** Add a 4th dancer with a move nobody else has.

**Expected bugs.**
- Building the code on the wrong sprite. **This is the #1 beginner error in all
  of Scratch.** Say out loud, every time: "look at the sprite pane — is the one
  you want highlighted?" It is worth repeating in Session 12 and 15 too.
- Two hats stacked on one script.
- Loops with no `wait`, so all three dancers look identical and instant.

---

### Session 9 — Loops for Real
**Week 5 · carries: Repeat Until · Nested loops**

**Goal.** Use all three loop types and nest one inside another.

**New blocks.** `repeat 10` · `forever` · `repeat until <>` · `wait 1 seconds`

**Explain.**
- `repeat 10` — you know the count. `forever` — never ends.
- `repeat until <>` — keeps going until a question becomes true. New, and the
  hard one.
- A loop inside a loop = **nested**. The inner one completes fully on every
  single pass of the outer one.
- `forever` has no bump at the bottom — nothing can follow it. Show this.

**New words.** `nested` (NES-ted) · `condition` (revision from S3) · `infinite`

**Screenshots to capture.**
- Control palette, full (tall).
- `forever` zoomed, showing the flat bottom.
- A real nested script: `repeat 8 [ repeat 4 [ move 50 · turn 90 ] · turn 45 ]`.
- The stage showing the resulting flower, using the Pen extension if convenient.

**Activity (25 min).** Draw a square with `repeat 4`. Then wrap it in `repeat 8`
with a `turn 45` to make a flower. Count the total moves out loud together:
8 × 4 = 32. This is where nesting clicks.

**Task (25 min).** Walk the sprite to the right edge using `repeat until
<touching edge>` — explicitly *not* `repeat 10`.

**Homework.** Any repeating pattern of their own, using a nested loop.

**Expected bugs.**
- Putting `turn 45` inside the inner loop instead of the outer one. Excellent
  bug — the drawing is visibly wrong, and the fix teaches nesting properly.
- Expecting code after a `forever` to run.
- `repeat until` with a condition that is already true, so the loop never runs
  at all.

---

### Session 10 — Sound & Music
**Week 5**

**Goal.** Add sound and control exactly when it plays.

**New blocks.** `play sound Meow until done` · `start sound Meow` ·
`change volume by -10` · `set volume to 100%` · `play note 60 for 0.5 beats` ·
`set tempo to 60`

**Explain.**
- `play sound until done` **waits**. `start sound` does **not**. This one
  difference controls all timing in a sound project.
- The Music extension turns a sprite into an instrument — show how to add an
  extension from the bottom-left button.
- Notes are numbers. 60 is middle C. Higher number, higher note.

**New words.** `volume` · `tempo` (TEM-poh) · `extension`

**Screenshots to capture.**
- Sound palette, full (tall).
- The **Add Extension** button, bottom-left, zoomed — they will never find it
  alone.
- The extension library modal with Music visible.
- The Sounds tab (reuse `sounds.webp`).
- A built script: `repeat 4 [ play note 60 for 0.5 beats · play note 64 for 0.5 beats ]`.

**Activity (25 min).** A 4-key piano: four sprites, each playing a note on
`when this sprite clicked`. Reuses Session 8's events immediately.

**Task (25 min).** A short song using `play note` inside a loop.

**Homework.** Add sound to the Dance Party so the music matches the moves.

**Expected bugs.**
- Using `start sound` in a loop → all sounds fire at once as noise. Then swap to
  `until done` and hear the difference. Do this deliberately.
- Adding the Music extension but building on the wrong sprite.
- Volume set to 0 earlier in the script and forgotten.

---

### Session 11 — Conditions in Code
**Week 6 · carries: Flowcharts**

**Goal.** Turn Session 3's paper IF into real blocks that sense the world.

**New blocks.** `if <> then` · `if <> then else` · `touching color ?` ·
`touching Sprite1 ?` · `touching mouse-pointer ?` · `key space pressed ?` ·
`wait until <>`

**Explain.**
- The blue **Sensing** blocks are the sprite's eyes and ears.
- A condition is a pointed **hexagon** and only fits in a hexagon-shaped hole.
  Let them try to force one into a rectangle slot — the shape language is the
  lesson.
- An `if` almost always needs to live inside a `forever`, or it is only asked
  once. This is the single hardest idea in the session.
- Before coding: draw the **flowchart**. Diamond = a question, rectangle = an
  action, arrow = what happens next.

**New words.** `sensing` · `flowchart` (FLOH-chart) · `hexagon`

**Screenshots to capture.**
- Sensing palette, full (tall).
- A hexagon condition block zoomed, next to the hexagon hole in an `if`.
- The colour-picker UI open on `touching color ?` — this is fiddly and needs a
  real picture.
- A built script: `forever [ if <touching color red> then [ say Ouch! · move -20 ] ]`.

**Activity (25 min).** On paper, draw the flowchart for a maze game together.
Then code just the wall detection from that flowchart.

**Task (25 min).** The sprite says "Ouch!" and jumps back whenever it touches
red.

**Homework.** Draw the flowchart for a game idea of their own. Paper, no
computer — this is deliberate.

**Expected bugs.**
- `if` outside a `forever`, checked once, appears to do nothing. Expect this
  from both students.
- Picking the wrong colour with the eyedropper (a near-red, not the red).
- `if/else` when a plain `if` was needed, leaving an empty branch.

---

### Session 12 — PROJECT 2: Maze Game
**Week 6 · isProject**

**Goal.** Combine events + loops + conditions into something playable by
another person.

**New blocks.** None. This is deliberate — a whole session with zero new
blocks, purely consolidation. Do not add any.

**Explain.**
- Arrow keys = four events. One script per direction.
- Touching the wall colour → back to the start.
- Touching the goal → win.
- Draw the maze in the paint editor: the walls are one colour, and that colour
  *is* the game logic.

**Screenshots to capture.**
- The paint editor with the rectangle tool selected, zoomed.
- A finished simple maze on the backdrop.
- The four arrow-key scripts side by side in the code area.

**Activity (25 min).** Build the maze walls in the paint editor together, then
code the player's four movement scripts.

**Task (30 min) — PROJECT 2.** Their own maze: arrow-key movement, walls that
block, a win message.

**Homework.** A second level that appears after the first is won.

**Expected bugs.**
- Drawing the maze on the *sprite* instead of the *backdrop*.
- Walls not a solid single colour, so `touching color` misses.
- Player sprite too big to fit through the corridors — teach `set size to 30%`.
- Movement scripts on the wall sprite instead of the player.

---

### Session 13 — Variables & Score
**Week 7 · carries: Variables · Input / Output**

**Goal.** Store a number that changes. Ask the player for information.

**New blocks.** `set score to 0` · `change score by 1` ·
`ask What's your name? and wait` · `answer` · `join Hello answer` ·
`show variable` / `hide variable`

**Explain.**
- A **variable** is a labelled box holding one thing you can change.
- Making one: Variables → Make a Variable → name it. Show the naming dialog.
- **Always `set to 0` at the start**, then `change by 1` during play. Without the
  reset, the score carries over between runs — connect this straight back to
  Session 6's drifting square.
- `ask and wait` is **input**. `say` is **output**. Every real program has both.
- `join` glues text together: `join Hello (answer)`.

**New words.** `variable` (VAIR-ee-uh-bul) · `input` · `output`

**Screenshots to capture.**
- Variables palette, full (tall).
- The **Make a Variable** dialog open.
- The variable readout on the stage, top-left corner, zoomed.
- The `ask` input box live on the stage.
- A built script: `when flag clicked → set score to 0 → forever [ if <touching Apple> then [ change score by 1 ] ]`.

**Activity (25 min).** Build a click-counter together. Then a program that asks
your name and greets you with `join`.

**Task (25 min).** Add a working score *and* a lives counter to their Maze Game
from Session 12. Two variables — this is the point.

**Homework.** A quiz that asks 3 questions and gives a score out of 3.

**Expected bugs.**
- No `set to 0` at the start. Guaranteed to happen. Have them run it three times
  and watch the score keep climbing.
- Score jumping by 30 in one touch, because `change by 1` sits in a `forever`
  with no exit condition. This is subtle and worth pre-empting in `tips`.
- Creating "for this sprite only" instead of "for all sprites".
- Comparing `answer` to a number and being surprised by text vs number.

---

### Session 14 — Operators & Luck + PROJECT 3
**Week 7 · carries: AND / OR / NOT · isProject**

**Goal.** Do maths, combine conditions, make things unpredictable.

**New blocks.** `pick random 1 to 10` · `+ - * /` · `< = >` · `and` · `or` ·
`not` · `join`

**Explain.**
- `pick random` is what makes a game different every time you play it.
- **AND** — both must be true. **OR** — one is enough. **NOT** — flips it.
- Operators nest inside operators: `<(score) > 5> and <not <touching edge>>`.
- Teach AND/OR with their own lives first, no computer: "you can have ice cream
  if you finish your food AND it is not raining."

**New words.** `random` (RAN-dum) · `operator` · `comparison`

**Screenshots to capture.**
- Operators palette, full (tall).
- An `and` block with two conditions plugged in, zoomed.
- A `not` block wrapping a condition.
- A built script: `if <<touching Apple?> and <(score) < 10>> then [ change score by 1 ]`.
- `pick random -240 to 240` inside a `go to x:` block.

**Activity (20 min).** A dice roller (`pick random 1 to 6` + `say`). Then a rule
using AND.

**Task (30 min) — PROJECT 3, Catch the Apples.** Apples fall from random x
positions, score increases on catch, the game ends at 10 points. Uses events,
loops, conditions, variables, operators — everything so far.

**Homework.** A number-guessing game using `<` and `>` to say higher or lower.

**Expected bugs.**
- Two separate `if`s where an AND was needed. Works by accident sometimes,
  which makes it worth explaining properly.
- `pick random 1 to 10` re-rolling every frame inside a `forever`.
- Random x outside the stage range (must be -240 to 240).
- Nesting operators wrongly — hard to see. Have them read the block out loud as
  a sentence.

---

### Session 15 — Sprites That Talk to Each Other + PROJECT 4
**Week 8 · isProject**

**Goal.** Coordinate several sprites with broadcast messages.

**New blocks.** `broadcast message1` · `broadcast message1 and wait` ·
`when I receive message1` · `switch backdrop to` ·
`when backdrop switches to`

**Explain.**
- Each sprite only knows its own code. A **broadcast** is how one shouts to all
  the others.
- `broadcast and wait` pauses until every receiver has finished — this is how
  you control the order of a whole scene.
- Name messages meaningfully: `scene2`, not `message1`.
- This is how a story with scenes gets built.

**New words.** `broadcast` (BROD-kast) · `message` · `scene`

**Screenshots to capture.**
- The **New Message** dialog open.
- Two sprites' code areas side by side: one broadcasting, one receiving.
- The backdrop list with 3 backdrops.
- A built script pair for a two-turn conversation.

**Activity (20 min).** Two sprites having a conversation with proper turns —
each waits for the other's message instead of using guessed `wait` timings.

**Task (30 min) — PROJECT 4, Animated Story.** 3 scenes, 3 backdrops, sprites
that talk in the right order.

**Homework.** Add a title scene and an ending scene.

**Expected bugs.**
- Using `wait 2 seconds` to fake turn-taking instead of messages. Works once,
  then desynchronises. Show it breaking.
- Broadcasting a message nothing receives.
- Forgetting `hide`/`show`, so sprites from scene 1 linger into scene 3. Very
  common.

---

### Session 16 — Clones
**Week 8**

**Goal.** Make many copies of one sprite without copying its code.

**New blocks.** `create clone of myself` · `when I start as a clone` ·
`delete this clone`

**Explain.**
- A **clone** is a live copy that runs its own copy of the code independently.
- This is how you get 50 raindrops or endless enemies from one sprite.
- **Always** `delete this clone` when it is done, or the project grinds to a
  halt. Demonstrate the slowdown on purpose.
- `when I start as a clone` is a hat block, like an event — callback to S8.

**New words.** `clone` · `duplicate` · `performance`

**Screenshots to capture.**
- The clone blocks in the Control palette, zoomed.
- A built rain script: `forever [ create clone of myself · wait 0.3 ]` plus
  `when I start as a clone [ go to x: pick random -240 to 240 y: 180 · repeat until <touching edge> [ change y by -10 ] · delete this clone ]`.
- The stage mid-rain, with many clones visible — this screenshot sells the
  session.

**Activity (25 min).** Make it rain: one raindrop sprite cloning forever from a
random x.

**Task (25 min).** A space shooter: bullets are clones, asteroids are clones.

**Homework.** A firework or snow effect using clones.

**Expected bugs.**
- No `delete this clone` → hundreds of clones, project freezes. Let it happen
  once; it is memorable and harmless.
- Putting the clone's behaviour under the green-flag hat instead of under
  `when I start as a clone`.
- Cloning with no `wait`, creating thousands instantly.

---

### Session 17 — Lists
**Week 9**

**Goal.** Store many values in one place instead of many variables.

**New blocks.** `add thing to list` · `item 1 of list` · `length of list` ·
`delete all of list` · `list contains thing ?` · `replace item 1 of list with`

**Explain.**
- A variable holds one thing. A **list** holds a whole row of things.
- Every slot has a number, **starting at 1** (not 0 — do not mention 0-indexing,
  it will only confuse them).
- `item (pick random 1 to (length of list)) of list` = a random question every
  time. Build this expression slowly, from the inside out.

**New words.** `list` · `item` · `index` (IN-dex)

**Screenshots to capture.**
- The **Make a List** dialog.
- A list readout on the stage with 4 visible items.
- A built script: `item (pick random 1 to (length of questions)) of questions`
  nested inside `ask`.

**Activity (25 min).** A high-score list, then a random question picker.

**Task (25 min).** Turn the Session 13 quiz into a list-driven quiz with 6
questions in random order.

**Homework.** A shopping-list app: add items, show them, clear them.

**Expected bugs.**
- Assuming `item 0`. Nothing happens; the fix teaches indexing.
- Forgetting `delete all of list` at the start, so the list grows every run —
  exactly the same failure shape as the unreset score in S13. Name that pattern
  out loud: **reset your state**.
- Two parallel lists (questions and answers) drifting out of alignment.

---

### Session 18 — My Blocks
**Week 9**

**Goal.** Build your own block to stop repeating yourself.

**New blocks.** `define (my block)` · custom blocks with number/text inputs

**Explain.**
- When the same 5 blocks appear three times, make them one block instead.
- This is **Session 2's decomposition**, finally in code. Say that explicitly —
  it closes a loop opened 16 sessions earlier.
- **Inputs** make one block do many jobs: `draw square (size)`.
- Name blocks as actions: `jump`, `drawSquare`, `resetGame`.

**New words.** `define` (dee-FYNE) · `custom` · `input` (revision from S13)

**Screenshots to capture.**
- The **Make a Block** dialog with an input being added.
- A `define jump` hat with its body.
- Before/after: a long repetitive script next to the same thing using one custom
  block. This side-by-side is the whole lesson.

**Activity (25 min).** Turn a long jump script into one `jump` block, then add a
height input.

**Task (25 min).** Rewrite one of their old projects using at least two custom
blocks.

**Homework.** A `draw shape (sides)` block that takes the number of sides as an
input.

**Expected bugs.**
- Defining a block but never calling it.
- Confusing the `define` hat with a call to the block.
- Using the input name outside the definition, where it does not exist.

---

### Session 19 — Platformer: Gravity & Jumping
**Week 10 · isProject**

**Goal.** Build the hardest common game mechanic: real jumping.

> **Difficulty warning.** This is the hardest session in the course. It needs
> variables, loops, conditions and NOT all working at once. If the students
> struggled with Session 13 or 14, **replace this with an easier build** (a
> Pong-style game, or a Whack-a-Mole) and move Capstone forward. Judge on their
> Session 14 project, not on their enthusiasm.

**New blocks.** No new palette blocks — the difficulty is entirely in the
composition: `change y by (velocity)` · `set velocity to` ·
`if <not <touching ground>>`

**Explain.**
- Gravity is a variable that constantly pulls `y` down.
- Every frame: `change velocity by -1`, then `change y by velocity`.
- A jump **sets** velocity to a big positive number, once.
- Landing = touching the ground → `set velocity to 0`.
- Build it one variable at a time, testing after every single addition. Never
  type the whole engine then run it.

**New words.** `gravity` · `velocity` (vuh-LOSS-i-tee) · `physics`

**Screenshots to capture.**
- The complete gravity engine script, fully built and readable. This is the most
  important screenshot in the course — capture it large and clean.
- The `not` block wrapping `touching ground`.
- A stage with platforms and a player.

**Activity (30 min).** Build the gravity engine together, one variable at a
time. Do not rush this. It can legitimately take the whole activity slot.

**Task (25 min) — PROJECT 5, Platformer.** A player that runs and jumps,
platforms, a coin to collect, a score.

**Homework.** A second level and a hazard that resets the player.

**Expected bugs.**
- Velocity never reset on landing → the player sinks through the floor.
- Gravity applied outside the `forever` loop → one single frame of falling.
- Jumping mid-air infinitely, because there is no ground check before the jump.
- Platforms not a consistent colour.

---

### Session 20 — Capstone & Showcase
**Week 10 · isProject**

**Goal.** Design and build their own game from their own plan, then present it.

**New blocks.** None.

**Explain.**
- Plan first: what is the goal, what are the rules, how do you win?
- Draw the flowchart **before** touching a single block (Session 11's skill).
- Then build → test → debug → polish.
- Scope control is the real lesson. One working mechanic beats five broken ones.
  Expect to talk them *down* from something enormous.

**Required in the capstone.** At least 2 sprites, 1 variable, 1 loop, 1
condition, 1 custom block.

**Activity (20 min).** Planning workshop: each student pitches their idea and
draws its flowchart. Pull out the "what would YOU like to build?" answers
written down back in **Session 5, slide 1** — closing that loop is a genuinely
good moment.

**Task (45 min).** Build it. This session is mostly build time.

**Homework.** Present the game to the family, write down 2 suggestions they make.

**Screenshots to capture.** None new. Reuse existing assets for the review
slides.

**Teacher notes.** Keep a checklist of the 5 required elements visible on
screen. Let them choose the theme completely freely — ownership is what makes
them finish.

---

## 8. Definition of done, per session

Before marking a session complete, all of these must hold:

- [ ] `src/data/sessionN.ts` exists, exports `sessionN: SessionData`
- [ ] 16-20 slides, `id`s contiguous from 1
- [ ] Every slide has `mascotMessage` **and** all 4 `teacherNotes` fields
- [ ] ≥1 `newWord` with pronunciation
- [ ] ≥2 `quiz` slides
- [ ] ≥1 `activity` slide with `activitySteps` (the guided build)
- [ ] The Task is its own slide and is doable in 25 minutes
- [ ] A `homework` slide, and the homework is a variation of the Task
- [ ] ≥1 real Scratch screenshot of the new blocks, in `public/images/scratch/`
- [ ] Registered in `session/[id]/page.tsx` (**both** `generateStaticParams`
      and the ternary) and in `app/page.tsx`
- [ ] `curriculum.ts` status flipped to `"done"`
- [ ] `npx tsc --noEmit` clean
- [ ] Every slide checked in the browser at 1440×900 **and** ~515×589
- [ ] Expected-bugs list captured in the relevant slides' `teacherNotes.tips`

---

## 9. Suggested build order

1. **Session 6** — first non-tour Scratch session; it establishes the reusable
   slide template for 7-20. Build it carefully, then the rest go faster.
2. **Sessions 7, 9, 11, 13** — the concept-teaching sessions. Highest value, and
   they share a shape.
3. **Sessions 8, 12, 14** — projects. Mostly `activity` slides, lighter work.
4. **Sessions 10, 15, 16, 17, 18** — the remaining feature sessions.
5. **Session 19** — hardest. Leave until the pattern is well established.
6. **Session 20** — lightest. Do last.

**Batch the screenshots.** Opening the Scratch editor and waiting for it to
paint is the slowest part of the whole job. When building several sessions,
collect the full screenshot list for all of them first, capture in one browser
run, crop in one `sharp` script, and only then write the slide data.

### Refactor to do on the way past
`src/app/session/[id]/page.tsx` uses a ternary chain to pick the session. At
around 8 sessions this becomes unpleasant. Replace it once with:
```ts
const sessions: Record<string, SessionData> = { "1": session1, /* ... */ };
const session = sessions[sessionId] ?? null;
```
and derive `generateStaticParams` from `Object.keys(sessions)`. Do this on the
next session you add, not as a separate task.
