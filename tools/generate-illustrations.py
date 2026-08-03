"""Generate the site illustration set as brand-coloured SVGs.

One shared frame (navy field, grid, cyan glow) plus a distinct scene per subject,
so the whole set reads as one system. 1200x800, 3:2.
"""

import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "illustrations")
W, H = 1200, 800

# Light artwork on purpose. The site's dark-mode cards and the gradient scrims
# that carry white text are both brand navy, so a navy illustration disappears
# into them. A light field keeps the art readable on white cards and on navy.
BG1 = "#eef6fc"      # illustration background, top
BG2 = "#cbe0f2"      # illustration background, bottom
PANEL = "#ffffff"    # raised panels
INK = "#e7f0f9"      # recessed panels
CHROME = "#d8e8f5"   # window title bars
LINE = "#8fb6d8"     # panel strokes, kept strong enough to read on the light field
MUTED = "#4d7299"    # text bars
NAVY = "#011f4b"     # brand navy, used as ink
CYAN = "#00c3ff"
CYAN_D = "#0082ab"
WHITE = "#ffffff"


def frame(uid, scene, glow=((940, 170, 300), (200, 660, 260))):
    (g1x, g1y, g1r), (g2x, g2y, g2r) = glow
    return f"""<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="bg{uid}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="{BG1}"/><stop offset="100%" stop-color="{BG2}"/>
    </linearGradient>
    <linearGradient id="cy{uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{CYAN}"/><stop offset="100%" stop-color="{CYAN_D}"/>
    </linearGradient>
    <linearGradient id="gl{uid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="{WHITE}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="{WHITE}" stop-opacity="0.02"/>
    </linearGradient>
    <radialGradient id="gw{uid}"><stop offset="0%" stop-color="{CYAN}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="{CYAN}" stop-opacity="0"/></radialGradient>
    <pattern id="gr{uid}" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" stroke="{NAVY}" stroke-opacity="0.06" stroke-width="1.5" fill="none"/>
    </pattern>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#bg{uid})"/>
  <rect width="{W}" height="{H}" fill="url(#gr{uid})"/>
  <circle cx="{g1x}" cy="{g1y}" r="{g1r}" fill="url(#gw{uid})"/>
  <circle cx="{g2x}" cy="{g2y}" r="{g2r}" fill="url(#gw{uid})"/>
{scene}
</svg>
"""


def panel(x, y, w, h, r=22, fill=PANEL, stroke=LINE, sw=3, op=1):
    return (f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" '
            f'fill-opacity="{op}" stroke="{stroke}" stroke-width="{sw}"/>')


def bar(x, y, w, h=14, fill=MUTED, op=0.55, r=7):
    return f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" fill-opacity="{op}"/>'


def cbar(x, y, w, h=14, uid="", r=7):
    return f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="url(#cy{uid})"/>'


def dot(cx, cy, r, fill=CYAN, op=1):
    return f'  <circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" fill-opacity="{op}"/>'


def browser_chrome(x, y, w, uid):
    """Window title bar with traffic lights and an address pill."""
    return "\n".join([
        f'  <rect x="{x}" y="{y}" width="{w}" height="58" rx="20" fill="{CHROME}"/>',
        f'  <rect x="{x}" y="{y + 30}" width="{w}" height="28" fill="{CHROME}"/>',
        dot(x + 34, y + 29, 8, CYAN),
        dot(x + 62, y + 29, 8, MUTED, 0.5),
        dot(x + 90, y + 29, 8, MUTED, 0.3),
        bar(x + 124, y + 21, w - 190, 16, MUTED, 0.25, 8),
    ])


scenes = {}

# ---------------------------------------------------------------- web dev
u = "a"
s = [
    browser_chrome(120, 120, 800, u),
    panel(120, 178, 800, 470, 0, PANEL, LINE, 3),
    panel(120, 120, 800, 528, 24, "none", LINE, 3),
    cbar(168, 224, 210, 26, u, 13),
    bar(168, 274, 420, 16),
    bar(168, 306, 330, 16, MUTED, 0.35),
    f'  <rect x="168" y="356" width="180" height="52" rx="26" fill="url(#cy{u})"/>',
    panel(392, 356, 150, 52, 26, "none", LINE, 3),
    panel(600, 224, 272, 184, 18, INK, LINE, 3),
    bar(632, 258, 120, 12, CYAN, 0.9),
    bar(632, 288, 200, 10, MUTED, 0.35),
    bar(632, 312, 170, 10, MUTED, 0.35),
    bar(632, 336, 190, 10, MUTED, 0.35),
    panel(168, 448, 220, 152, 18, INK, LINE, 3),
    panel(408, 448, 220, 152, 18, INK, LINE, 3),
    panel(648, 448, 224, 152, 18, INK, LINE, 3),
    dot(206, 490, 16), dot(446, 490, 16, MUTED, 0.45), dot(686, 490, 16, MUTED, 0.45),
    bar(196, 528, 150, 12), bar(436, 528, 150, 12, MUTED, 0.35), bar(676, 528, 150, 12, MUTED, 0.35),
    bar(196, 556, 110, 10, MUTED, 0.3), bar(436, 556, 110, 10, MUTED, 0.3), bar(676, 556, 110, 10, MUTED, 0.3),
    # phone
    panel(966, 262, 172, 340, 30, INK, LINE, 3),
    f'  <rect x="990" y="298" width="124" height="8" rx="4" fill="{MUTED}" fill-opacity="0.3"/>',
    cbar(990, 328, 92, 18, u, 9),
    bar(990, 364, 124, 10, MUTED, 0.3),
    bar(990, 386, 100, 10, MUTED, 0.3),
    panel(990, 418, 124, 74, 14, PANEL, LINE, 2),
    bar(990, 508, 124, 10, MUTED, 0.3),
    bar(990, 530, 90, 10, MUTED, 0.3),
    f'  <rect x="990" y="556" width="124" height="26" rx="13" fill="url(#cy{u})"/>',
]
scenes["web-development"] = frame(u, "\n".join(s))

# ------------------------------------------------------------- mobile app
u = "b"
s = [
    panel(452, 96, 300, 610, 44, INK, LINE, 3),
    panel(476, 140, 252, 522, 26, PANEL, LINE, 0),
    f'  <rect x="566" y="116" width="72" height="10" rx="5" fill="{MUTED}" fill-opacity="0.35"/>',
    cbar(508, 176, 110, 22, u, 11),
    bar(508, 214, 188, 12, MUTED, 0.3),
    panel(508, 252, 188, 118, 18, INK, LINE, 2),
    dot(544, 288, 18), bar(576, 280, 96, 12), bar(576, 302, 70, 10, MUTED, 0.3),
    bar(536, 336, 132, 10, MUTED, 0.25),
    panel(508, 392, 188, 96, 18, INK, LINE, 2),
    bar(536, 420, 100, 12, CYAN, 0.85), bar(536, 444, 132, 10, MUTED, 0.3),
    f'  <rect x="508" y="510" width="188" height="46" rx="23" fill="url(#cy{u})"/>',
    # tab bar
    f'  <rect x="476" y="600" width="252" height="62" rx="0" fill="{INK}"/>',
    dot(528, 631, 11), dot(590, 631, 9, MUTED, 0.4), dot(652, 631, 9, MUTED, 0.4),
    # side cards
    panel(160, 220, 240, 130, 20, PANEL, LINE, 3),
    dot(200, 258, 14), bar(226, 250, 130, 12), bar(200, 292, 160, 10, MUTED, 0.3),
    bar(200, 314, 120, 10, MUTED, 0.3),
    panel(160, 396, 240, 130, 20, PANEL, LINE, 3),
    dot(200, 434, 14, MUTED, 0.5), bar(226, 426, 110, 12, MUTED, 0.4),
    bar(200, 468, 160, 10, MUTED, 0.3), bar(200, 490, 100, 10, MUTED, 0.3),
    panel(806, 300, 234, 200, 20, PANEL, LINE, 3),
    bar(838, 336, 120, 12, CYAN, 0.9),
    bar(838, 370, 170, 10, MUTED, 0.3), bar(838, 394, 140, 10, MUTED, 0.3),
    f'  <rect x="838" y="428" width="90" height="34" rx="17" fill="url(#cy{u})"/>',
    f'  <path d="M400 285H452" stroke="{CYAN}" stroke-width="3" stroke-dasharray="8 8"/>',
    f'  <path d="M752 400H806" stroke="{CYAN}" stroke-width="3" stroke-dasharray="8 8"/>',
]
scenes["mobile-app-development"] = frame(u, "\n".join(s))

# --------------------------------------------------------------- ui / ux
u = "c"
s = [
    panel(120, 150, 300, 220, 22),
    bar(152, 186, 90, 12, CYAN, 0.9),
    panel(152, 216, 236, 120, 14, INK, LINE, 2),
    bar(176, 244, 120, 10, MUTED, 0.35), bar(176, 266, 90, 10, MUTED, 0.35),
    f'  <rect x="176" y="292" width="72" height="24" rx="12" fill="url(#cy{u})"/>',
    panel(460, 150, 300, 220, 22),
    bar(492, 186, 120, 12, MUTED, 0.4),
    panel(492, 216, 110, 120, 14, INK, LINE, 2),
    panel(618, 216, 110, 120, 14, INK, LINE, 2),
    dot(547, 262, 18), dot(673, 262, 18, MUTED, 0.4),
    bar(516, 296, 62, 10, MUTED, 0.3), bar(642, 296, 62, 10, MUTED, 0.3),
    panel(800, 150, 280, 220, 22),
    bar(832, 186, 100, 12, MUTED, 0.4),
    f'  <path d="M832 300L892 250L948 282L1044 214" stroke="url(#cy{u})" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    dot(892, 250, 9), dot(948, 282, 9), dot(1044, 214, 9),
    # flow row
    panel(160, 470, 220, 150, 20, PANEL, LINE, 3),
    panel(490, 470, 220, 150, 20, PANEL, LINE, 3),
    panel(820, 470, 220, 150, 20, PANEL, LINE, 3),
    bar(192, 506, 90, 12, CYAN, 0.9), bar(522, 506, 90, 12, CYAN, 0.9), bar(852, 506, 90, 12, CYAN, 0.9),
    bar(192, 540, 150, 10, MUTED, 0.3), bar(522, 540, 150, 10, MUTED, 0.3), bar(852, 540, 150, 10, MUTED, 0.3),
    bar(192, 564, 110, 10, MUTED, 0.3), bar(522, 564, 110, 10, MUTED, 0.3), bar(852, 564, 110, 10, MUTED, 0.3),
    f'  <path d="M380 545H490" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    f'  <path d="M710 545H820" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    f'  <path d="M956 640l0 44 34-14z" fill="{WHITE}"/>',
    f'  <path d="M956 640l0 44 34-14z" stroke="{NAVY}" stroke-width="3" stroke-linejoin="round"/>',
]
scenes["ui-ux-design"] = frame(u, "\n".join(s))

# ---------------------------------------------------- custom business sys
u = "d"
s = [
    panel(110, 130, 980, 540, 26),
    f'  <path d="M110 188h980" stroke="{LINE}" stroke-width="3"/>',
    dot(148, 159, 8), dot(174, 159, 8, MUTED, 0.4), dot(200, 159, 8, MUTED, 0.3),
    # sidebar
    f'  <rect x="110" y="188" width="230" height="482" fill="{INK}"/>',
    cbar(146, 226, 130, 20, u, 10),
    bar(146, 274, 158, 12), bar(146, 308, 128, 12, MUTED, 0.3),
    bar(146, 342, 148, 12, MUTED, 0.3), bar(146, 376, 118, 12, MUTED, 0.3),
    bar(146, 410, 138, 12, MUTED, 0.3),
    f'  <rect x="128" y="266" width="4" height="28" rx="2" fill="{CYAN}"/>',
    # kpi row
    panel(376, 224, 210, 108, 18, INK, LINE, 2),
    panel(608, 224, 210, 108, 18, INK, LINE, 2),
    panel(840, 224, 214, 108, 18, INK, LINE, 2),
    bar(404, 252, 70, 10, MUTED, 0.35), bar(636, 252, 70, 10, MUTED, 0.35), bar(868, 252, 70, 10, MUTED, 0.35),
    cbar(404, 276, 96, 26, u, 8),
    bar(636, 276, 84, 26, MUTED, 0.45, 8), bar(868, 276, 110, 26, MUTED, 0.45, 8),
    # chart
    panel(376, 360, 442, 286, 18, INK, LINE, 2),
    bar(408, 392, 120, 12, CYAN, 0.9),
    f'  <path d="M408 596l86-70 74 40 92-96 122-58" stroke="url(#cy{u})" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    dot(494, 526, 8), dot(568, 566, 8), dot(660, 470, 8), dot(782, 412, 8),
    f'  <path d="M408 620h374" stroke="{LINE}" stroke-width="3"/>',
    # approvals
    panel(840, 360, 214, 286, 18, INK, LINE, 2),
    bar(868, 392, 96, 12, CYAN, 0.9),
    panel(868, 424, 158, 58, 12, PANEL, LINE, 0),
    panel(868, 496, 158, 58, 12, PANEL, LINE, 0),
    panel(868, 568, 158, 58, 12, PANEL, LINE, 0),
    f'  <path d="M888 453l12 12 22-24" stroke="{CYAN}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    f'  <path d="M888 525l12 12 22-24" stroke="{CYAN}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    dot(900, 597, 11, MUTED, 0.4),
    bar(936, 447, 74, 10, MUTED, 0.35), bar(936, 519, 74, 10, MUTED, 0.35), bar(936, 591, 74, 10, MUTED, 0.35),
]
scenes["custom-business-systems"] = frame(u, "\n".join(s))

# ------------------------------------------------------------- database
u = "e"
def cylinder(x, y, w, h, uid, accent=False):
    fill = f"url(#cy{uid})" if accent else PANEL
    return "\n".join([
        f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{LINE}" stroke-width="3"/>',
        f'  <ellipse cx="{x + w / 2}" cy="{y + h}" rx="{w / 2}" ry="34" fill="{fill}" stroke="{LINE}" stroke-width="3"/>',
        f'  <ellipse cx="{x + w / 2}" cy="{y}" rx="{w / 2}" ry="34" fill="{INK}" stroke="{LINE}" stroke-width="3"/>',
    ])

s = [
    cylinder(160, 250, 300, 90, u),
    cylinder(160, 380, 300, 90, u),
    cylinder(160, 510, 300, 90, u, accent=True),
    dot(240, 296, 10), bar(268, 288, 110, 12, MUTED, 0.4),
    dot(240, 426, 10, MUTED, 0.5), bar(268, 418, 90, 12, MUTED, 0.35),
    dot(240, 556, 10, NAVY), bar(268, 548, 120, 12, NAVY, 0.7),
    # link lines
    f'  <path d="M460 300h120v270h-120" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9" fill="none"/>',
    f'  <path d="M460 430h60" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    # query panel
    panel(620, 190, 440, 200, 22),
    bar(652, 226, 110, 12, CYAN, 0.9),
    bar(652, 262, 340, 12, MUTED, 0.3), bar(652, 292, 280, 12, MUTED, 0.3),
    bar(652, 322, 310, 12, MUTED, 0.3),
    f'  <rect x="652" y="352" width="86" height="12" rx="6" fill="url(#cy{u})"/>',
    # results panel
    panel(620, 430, 440, 240, 22),
    bar(652, 466, 130, 12, CYAN, 0.9),
    f'  <path d="M652 640h376" stroke="{LINE}" stroke-width="3"/>',
    f'  <rect x="672" y="560" width="44" height="76" rx="8" fill="{MUTED}" fill-opacity="0.4"/>',
    f'  <rect x="740" y="522" width="44" height="114" rx="8" fill="{MUTED}" fill-opacity="0.4"/>',
    f'  <rect x="808" y="546" width="44" height="90" rx="8" fill="url(#cy{u})"/>',
    f'  <rect x="876" y="500" width="44" height="136" rx="8" fill="url(#cy{u})"/>',
    f'  <rect x="944" y="536" width="44" height="100" rx="8" fill="{MUTED}" fill-opacity="0.4"/>',
]
scenes["database-solutions"] = frame(u, "\n".join(s))

# ---------------------------------------------------------- it consulting
u = "f"
s = [
    # roadmap
    f'  <path d="M150 560h900" stroke="{LINE}" stroke-width="4"/>',
    f'  <path d="M150 560h520" stroke="url(#cy{u})" stroke-width="6" stroke-linecap="round"/>',
]
for i, (cx, label_w, done) in enumerate([(230, 96, True), (450, 84, True), (670, 104, True), (890, 90, False)]):
    top = i % 2 == 0
    py = 300 if top else 610
    s += [
        f'  <path d="M{cx} 560V{py + (128 if top else 0)}" stroke="{LINE}" stroke-width="3" stroke-dasharray="8 8"/>',
        panel(cx - 108, py, 216, 128, 18, PANEL, LINE, 3),
        bar(cx - 76, py + 30, label_w, 12, CYAN if done else MUTED, 0.9 if done else 0.4),
        bar(cx - 76, py + 62, 150, 10, MUTED, 0.3),
        bar(cx - 76, py + 84, 110, 10, MUTED, 0.3),
        dot(cx, 560, 18, CYAN if done else LINE),
        dot(cx, 560, 8, NAVY) if done else "",
    ]
s += [
    panel(806, 120, 264, 170, 20, PANEL, LINE, 3),
    bar(838, 154, 110, 12, CYAN, 0.9),
    f'  <path d="M838 254l52-44 46 26 78-62" stroke="url(#cy{u})" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    dot(890, 210, 8), dot(936, 236, 8), dot(1014, 174, 8),
]
scenes["it-consulting"] = frame(u, "\n".join(x for x in s if x))

# ------------------------------------------------------------ trends x3
u = "g"
s = [
    panel(110, 130, 980, 540, 26),
    f'  <path d="M110 194h980" stroke="{LINE}" stroke-width="3"/>',
    dot(148, 162, 8), dot(174, 162, 8, MUTED, 0.4), dot(200, 162, 8, MUTED, 0.3),
    bar(240, 156, 160, 14, MUTED, 0.25),
    panel(150, 232, 290, 150, 20, INK, LINE, 2),
    panel(460, 232, 290, 150, 20, INK, LINE, 2),
    panel(770, 232, 280, 150, 20, INK, LINE, 2),
    bar(182, 264, 80, 10, MUTED, 0.35), bar(492, 264, 80, 10, MUTED, 0.35), bar(802, 264, 80, 10, MUTED, 0.35),
    cbar(182, 290, 130, 32, u, 10),
    bar(492, 290, 110, 32, MUTED, 0.45, 10), bar(802, 290, 150, 32, MUTED, 0.45, 10),
    bar(182, 340, 180, 10, MUTED, 0.25), bar(492, 340, 180, 10, MUTED, 0.25), bar(802, 340, 170, 10, MUTED, 0.25),
    panel(150, 412, 600, 226, 20, INK, LINE, 2),
    bar(182, 444, 140, 12, CYAN, 0.9),
    f'  <path d="M182 592l104-72 88 42 106-96 138-56" stroke="url(#cy{u})" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    dot(286, 520, 9), dot(374, 562, 9), dot(480, 466, 9), dot(618, 410, 9),
    f'  <path d="M182 614h536" stroke="{LINE}" stroke-width="3"/>',
    panel(770, 412, 280, 226, 20, INK, LINE, 2),
    bar(802, 444, 110, 12, CYAN, 0.9),
    f'  <circle cx="910" cy="546" r="70" stroke="{MUTED}" stroke-opacity="0.35" stroke-width="26" fill="none"/>',
    f'  <circle cx="910" cy="546" r="70" stroke="url(#cy{u})" stroke-width="26" fill="none" stroke-linecap="round" stroke-dasharray="330 440" transform="rotate(-90 910 546)"/>',
]
scenes["dashboard-trend"] = frame(u, "\n".join(s))

u = "h"
s = []
for i, (x, y, w, h, on) in enumerate([(210, 210, 220, 420, False), (480, 150, 250, 500, True), (790, 210, 220, 420, False)]):
    s += [
        panel(x, y, w, h, 34, INK, LINE, 3),
        panel(x + 18, y + 34, w - 36, h - 78, 20, PANEL, LINE, 0),
        cbar(x + 40, y + 62, 78 if on else 60, 18, u, 9) if on else bar(x + 40, y + 62, 60, 18, MUTED, 0.4, 9),
        bar(x + 40, y + 98, w - 92, 10, MUTED, 0.3),
        panel(x + 40, y + 128, w - 80, 84, 14, INK, LINE, 2),
        bar(x + 40, y + 232, w - 92, 10, MUTED, 0.3),
        bar(x + 40, y + 256, w - 130, 10, MUTED, 0.3),
        f'  <rect x="{x + 40}" y="{y + 290}" width="{w - 80}" height="34" rx="17" fill="url(#cy{u})"/>' if on else panel(x + 40, y + 290, w - 80, 34, 17, "none", LINE, 2),
        dot(x + w / 2, y + h - 26, 9, MUTED, 0.4),
    ]
s += [
    f'  <path d="M430 400h50M730 400h60" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
]
scenes["mobile-trend"] = frame(u, "\n".join(s))

u = "i"
s = []
nodes = [(230, 260), (470, 200), (470, 400), (720, 300), (960, 240), (960, 420)]
for a, b in [(0, 1), (0, 2), (1, 3), (2, 3), (3, 4), (3, 5)]:
    (x1, y1), (x2, y2) = nodes[a], nodes[b]
    s.append(f'  <path d="M{x1} {y1}C{(x1 + x2) / 2} {y1} {(x1 + x2) / 2} {y2} {x2} {y2}" stroke="{CYAN}" stroke-opacity="0.5" stroke-width="3" fill="none"/>')
for i, (cx, cy) in enumerate(nodes):
    accent = i in (0, 3)
    s += [
        f'  <circle cx="{cx}" cy="{cy}" r="46" fill="{INK}" stroke="{CYAN if accent else LINE}" stroke-width="4"/>',
        f'  <circle cx="{cx}" cy="{cy}" r="18" fill="url(#cy{u})"/>' if accent else dot(cx, cy, 14, MUTED, 0.45),
    ]
s += [
    panel(150, 520, 900, 170, 22),
    bar(186, 556, 140, 12, CYAN, 0.9),
    bar(186, 592, 300, 10, MUTED, 0.3), bar(186, 616, 240, 10, MUTED, 0.3),
    panel(560, 552, 200, 106, 16, INK, LINE, 2),
    panel(800, 552, 210, 106, 16, INK, LINE, 2),
    cbar(590, 584, 90, 22, u, 8), bar(830, 584, 110, 22, MUTED, 0.4, 8),
    bar(590, 620, 130, 10, MUTED, 0.3), bar(830, 620, 130, 10, MUTED, 0.3),
]
scenes["automation-trend"] = frame(u, "\n".join(s))

# ---------------------------------------------------------------- blog x3
u = "j"
s = [
    browser_chrome(200, 150, 800, u),
    panel(200, 208, 800, 420, 0, PANEL, LINE, 3),
    panel(200, 150, 800, 478, 24, "none", LINE, 3),
    cbar(248, 258, 250, 28, u, 14),
    bar(248, 312, 430, 14), bar(248, 344, 350, 14, MUTED, 0.35),
    f'  <rect x="248" y="394" width="190" height="54" rx="27" fill="url(#cy{u})"/>',
    panel(700, 258, 250, 190, 20, INK, LINE, 3),
    f'  <path d="M825 296l58 24v40c0 34-24 58-58 70-34-12-58-36-58-70v-40z" fill="none" stroke="url(#cy{u})" stroke-width="5" stroke-linejoin="round"/>',
    f'  <path d="M806 372l14 14 26-28" stroke="{CYAN}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    bar(248, 500, 700, 12, MUTED, 0.22), bar(248, 530, 560, 12, MUTED, 0.22),
    bar(248, 560, 620, 12, MUTED, 0.22),
]
scenes["blog-trust"] = frame(u, "\n".join(s))

u = "k"
s = [
    panel(140, 180, 260, 150, 20), panel(470, 180, 260, 150, 20), panel(800, 180, 260, 150, 20),
    panel(305, 460, 260, 150, 20), panel(635, 460, 260, 150, 20),
    bar(172, 216, 110, 12, CYAN, 0.9), bar(502, 216, 110, 12, CYAN, 0.9), bar(832, 216, 110, 12, MUTED, 0.4),
    bar(337, 496, 110, 12, CYAN, 0.9), bar(667, 496, 110, 12, MUTED, 0.4),
    bar(172, 250, 180, 10, MUTED, 0.3), bar(502, 250, 180, 10, MUTED, 0.3), bar(832, 250, 180, 10, MUTED, 0.3),
    bar(337, 530, 180, 10, MUTED, 0.3), bar(667, 530, 180, 10, MUTED, 0.3),
    bar(172, 274, 130, 10, MUTED, 0.3), bar(502, 274, 130, 10, MUTED, 0.3), bar(832, 274, 130, 10, MUTED, 0.3),
    bar(337, 554, 130, 10, MUTED, 0.3), bar(667, 554, 130, 10, MUTED, 0.3),
    f'  <path d="M400 255h70M730 255h70" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    f'  <path d="M270 330v100h35" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9" fill="none"/>',
    f'  <path d="M600 330v100" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    f'  <path d="M930 330v100h-35" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9" fill="none"/>',
    dot(270, 430, 9), dot(600, 430, 9), dot(930, 430, 9),
]
scenes["blog-workflows"] = frame(u, "\n".join(s))

u = "l"
s = [
    panel(150, 200, 400, 400, 26),
    bar(186, 240, 130, 14, CYAN, 0.9),
    panel(186, 286, 328, 90, 16, INK, LINE, 2),
    panel(186, 396, 328, 90, 16, INK, LINE, 2),
    dot(226, 331, 18), dot(226, 441, 18, MUTED, 0.45),
    bar(258, 322, 150, 12), bar(258, 348, 110, 10, MUTED, 0.3),
    bar(258, 432, 130, 12, MUTED, 0.4), bar(258, 458, 100, 10, MUTED, 0.3),
    f'  <rect x="186" y="514" width="150" height="42" rx="21" fill="url(#cy{u})"/>',
    panel(660, 130, 240, 460, 36, INK, LINE, 3),
    panel(682, 176, 196, 366, 22, PANEL, LINE, 0),
    cbar(708, 208, 96, 20, u, 10),
    bar(708, 246, 144, 10, MUTED, 0.3),
    panel(708, 278, 144, 92, 14, INK, LINE, 2),
    bar(708, 390, 144, 10, MUTED, 0.3), bar(708, 414, 110, 10, MUTED, 0.3),
    f'  <rect x="708" y="450" width="144" height="38" rx="19" fill="url(#cy{u})"/>',
    dot(780, 566, 9, MUTED, 0.4),
    f'  <path d="M550 380h110" stroke="{CYAN}" stroke-width="3" stroke-dasharray="9 9"/>',
    panel(950, 260, 120, 200, 20, PANEL, LINE, 3),
    dot(1010, 310, 22), bar(972, 348, 76, 10, MUTED, 0.3),
    bar(972, 372, 60, 10, MUTED, 0.3), bar(972, 396, 70, 10, MUTED, 0.3),
]
scenes["blog-mobile-teams"] = frame(u, "\n".join(s))

os.makedirs(OUT, exist_ok=True)
for name, svg in scenes.items():
    path = os.path.join(OUT, name + ".svg")
    open(path, "w", encoding="utf-8").write(svg)
    print(f"  {name:28s} {len(svg) // 1024 or 1}KB")

print(f"\n{len(scenes)} illustrations -> {OUT}")
