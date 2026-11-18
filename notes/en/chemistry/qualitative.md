# Chapter 2: Qualitative Chemistry — Bohr Atomic Model

## Introduction

Qualitative chemistry deals with atomic structure, electron configuration, and properties of elements. In this chapter, we explore the **Bohr Atomic Model** and energy levels.

---

## Bohr's Postulates

### Postulate 1: Stationary Orbits

Electrons revolve around the nucleus in certain **fixed circular orbits** without radiating energy.

### Postulate 2: Quantization of Angular Momentum

$$mvr = \frac{nh}{2\pi}$$

Where:
- $m$ = mass of electron ($9.109 \times 10^{-31}$ kg)
- $v$ = velocity of electron
- $r$ = radius of orbit
- $n$ = principal quantum number ($1, 2, 3, \ldots$)
- $h$ = Planck's constant ($6.626 \times 10^{-34}$ J·s)

### Postulate 3: Energy Emission

When an electron jumps from a higher level ($E_2$) to a lower level ($E_1$), it emits a photon:

$$\Delta E = E_2 - E_1 = h\nu = \frac{hc}{\lambda}$$

---

## Diagram: Bohr Atom & Energy Transition

<svg width="420" height="400" viewBox="0 0 420 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="400" fill="#161b22" rx="10"/>
  <circle cx="210" cy="195" r="50" fill="none" stroke="#30363d" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="265" y="190" fill="#8b949e" font-size="12" font-family="sans-serif">n = 1 (K)</text>
  <circle cx="210" cy="195" r="100" fill="none" stroke="#30363d" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="315" y="190" fill="#8b949e" font-size="12" font-family="sans-serif">n = 2 (L)</text>
  <circle cx="210" cy="195" r="150" fill="none" stroke="#30363d" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="365" y="190" fill="#8b949e" font-size="12" font-family="sans-serif">n = 3 (M)</text>
  <circle cx="210" cy="195" r="16" fill="#f97583"/>
  <text x="198" y="200" fill="#fff" font-size="11" font-weight="bold" font-family="sans-serif">+Ze</text>
  <circle cx="360" cy="195" r="7" fill="#58a6ff" stroke="#1f6feb" stroke-width="1.5"/>
  <text x="348" y="218" fill="#58a6ff" font-size="10" font-family="sans-serif">e⁻</text>
  <circle cx="260" cy="195" r="7" fill="#58a6ff" stroke="#1f6feb" stroke-width="1.5"/>
  <text x="248" y="218" fill="#58a6ff" font-size="10" font-family="sans-serif">e⁻</text>
  <defs><marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#d2a8ff"/></marker></defs>
  <line x1="350" y1="172" x2="270" y2="177" stroke="#d2a8ff" stroke-width="2.5" marker-end="url(#ah)"/>
  <path d="M290,150 Q295,140 300,150 Q305,160 310,150 Q315,140 320,150 Q325,160 330,150" fill="none" stroke="#d29922" stroke-width="2"/>
  <text x="278" y="137" fill="#d29922" font-size="11" font-weight="bold" font-family="sans-serif">Photon (hν)</text>
  <rect x="15" y="15" width="12" height="12" fill="#f97583" rx="2"/>
  <text x="33" y="25" fill="#8b949e" font-size="11" font-family="sans-serif">Nucleus</text>
  <rect x="15" y="35" width="12" height="12" fill="#58a6ff" rx="6"/>
  <text x="33" y="45" fill="#8b949e" font-size="11" font-family="sans-serif">Electron</text>
  <line x1="15" y1="60" x2="27" y2="60" stroke="#d2a8ff" stroke-width="2"/>
  <text x="33" y="64" fill="#8b949e" font-size="11" font-family="sans-serif">Transition</text>
  <text x="15" y="385" fill="#484f58" font-size="11" font-family="sans-serif">Electron emits energy when jumping to a lower orbit</text>
</svg>

---

## Radius of Orbit

$$r_n = 0.529 \times \frac{n^2}{Z} \text{ Å}$$

| Orbit ($n$) | Shell | Radius (Å) |
|---|---|---|
| 1 | K | 0.529 |
| 2 | L | 2.116 |
| 3 | M | 4.761 |

---

## Energy of Orbit

$$E_n = -\frac{13.6 \times Z^2}{n^2} \text{ eV}$$

The negative sign indicates the electron is **bound** to the nucleus.

---

## Hydrogen Spectral Series

| Series | Transition | Region |
|---|---|---|
| Lyman | $n \to 1$ | Ultraviolet |
| Balmer | $n \to 2$ | Visible |
| Paschen | $n \to 3$ | Infrared |

**Rydberg Formula:**

$$\frac{1}{\lambda} = R_H \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$

where $R_H = 1.097 \times 10^7 \text{ m}^{-1}$.

---

## Limitations of Bohr Model

1. Not applicable for multi-electron atoms
2. Cannot explain Zeeman and Stark effects
3. Violates Heisenberg's Uncertainty Principle

---

## Formula Summary

| Topic | Formula |
|---|---|
| Angular momentum | $mvr = \frac{nh}{2\pi}$ |
| Energy emission | $\Delta E = h\nu$ |
| Orbital radius | $r_n = 0.529 \times n^2 / Z$ Å |
| Energy level | $E_n = -13.6 Z^2 / n^2$ eV |
