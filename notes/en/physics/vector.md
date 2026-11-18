# Chapter 2: Vectors

## Introduction

A **vector** is a physical quantity that has both **magnitude and direction** — such as displacement, velocity, acceleration, and force. A **scalar** has only magnitude — such as mass, temperature, and distance.

---

## Components of a Vector

A vector $\vec{A}$ can be resolved along two mutually perpendicular axes:

$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

Magnitude of the vector:

$$A = |\vec{A}| = \sqrt{A_x^2 + A_y^2}$$

---

## Parallelogram Law of Vector Addition

If two vectors $\vec{A}$ and $\vec{B}$ act from the same point, their **resultant** $\vec{R}$ is along the diagonal of the parallelogram formed by them.

**Magnitude of resultant:**

$$R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$$

**Direction (angle $\alpha$ with $\vec{A}$):**

$$\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}$$

### Diagram: Parallelogram Law

<svg width="420" height="310" viewBox="0 0 420 310" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="310" fill="#161b22" rx="10"/>
  <line x1="60" y1="240" x2="260" y2="240" stroke="#58a6ff" stroke-width="2.5"/>
  <polygon points="260,240 248,234 248,246" fill="#58a6ff"/>
  <text x="150" y="270" fill="#58a6ff" font-size="16" font-weight="bold" font-family="sans-serif">A⃗</text>
  <line x1="60" y1="240" x2="160" y2="100" stroke="#3fb950" stroke-width="2.5"/>
  <polygon points="160,100 150,109 162,112" fill="#3fb950"/>
  <text x="85" y="160" fill="#3fb950" font-size="16" font-weight="bold" font-family="sans-serif">B⃗</text>
  <line x1="260" y1="240" x2="360" y2="100" stroke="#484f58" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="160" y1="100" x2="360" y2="100" stroke="#484f58" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="60" y1="240" x2="360" y2="100" stroke="#f97583" stroke-width="3"/>
  <polygon points="360,100 347,103 350,114" fill="#f97583"/>
  <text x="225" y="155" fill="#f97583" font-size="16" font-weight="bold" font-family="sans-serif">R⃗ (Resultant)</text>
  <path d="M 92,240 A 32,32 0 0,0 83,218" fill="none" stroke="#d29922" stroke-width="2"/>
  <text x="97" y="225" fill="#d29922" font-size="15" font-family="sans-serif">θ</text>
  <circle cx="60" cy="240" r="4" fill="#e6edf3"/>
  <text x="40" y="290" fill="#8b949e" font-size="13" font-family="sans-serif">O (Origin)</text>
</svg>

---

## Dot Product (Scalar Product)

The dot product yields a **scalar**:

$$\vec{A} \cdot \vec{B} = AB\cos\theta$$

In component form:

$$\vec{A} \cdot \vec{B} = A_xB_x + A_yB_y + A_zB_z$$

### Properties

- Commutative: $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$
- If perpendicular: $\vec{A} \cdot \vec{B} = 0$
- Work done: $W = \vec{F} \cdot \vec{d} = Fd\cos\theta$

---

## Cross Product (Vector Product)

The cross product yields a **vector**:

$$\vec{A} \times \vec{B} = AB\sin\theta \ \hat{n}$$

where $\hat{n}$ is the unit vector perpendicular to the plane of $\vec{A}$ and $\vec{B}$ (right-hand rule).

### Properties

- Non-commutative: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$
- If parallel: $\vec{A} \times \vec{B} = \vec{0}$
- Torque: $\vec{\tau} = \vec{r} \times \vec{F}$

---

## Unit Vector

$$\hat{A} = \frac{\vec{A}}{|\vec{A}|}$$

In Cartesian coordinates: $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$

---

## Formula Summary

| Topic | Formula |
|---|---|
| Resultant magnitude | $R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$ |
| Dot product | $\vec{A} \cdot \vec{B} = AB\cos\theta$ |
| Cross product | $|\vec{A} \times \vec{B}| = AB\sin\theta$ |
| Unit vector | $\hat{A} = \vec{A} / |\vec{A}|$ |
