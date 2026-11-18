# Chapter 3: Integration

## Introduction

**Integration** is the reverse process of differentiation. If $F'(x) = f(x)$, then:

$$\int f(x)\,dx = F(x) + C$$

where $C$ is the constant of integration.

---

## Basic Integration Formulas

| Function | Integral |
|---|---|
| $\int x^n\,dx$ | $\frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| $\int \frac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int a^x\,dx$ | $\frac{a^x}{\ln a} + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \csc^2 x\,dx$ | $-\cot x + C$ |

---

## Substitution Method

For integrals of the form $\int f(g(x)) \cdot g'(x)\,dx$, let $u = g(x)$:

$$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du$$

### Example

$$\int 2x \cdot e^{x^2}\,dx$$

Let $u = x^2 \Rightarrow du = 2x\,dx$

$$= \int e^u\,du = e^u + C = e^{x^2} + C$$

---

## Partial Fractions

$$\int \frac{dx}{(x-a)(x-b)} = \frac{1}{a-b}\ln\left|\frac{x-a}{x-b}\right| + C$$

---

## Definite Integral

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

### Geometric Interpretation

A definite integral represents the **area** between the curve $y = f(x)$ and the $x$-axis from $x = a$ to $x = b$.

<svg width="400" height="280" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="280" fill="#161b22" rx="10"/>
  <line x1="50" y1="230" x2="370" y2="230" stroke="#484f58" stroke-width="1.5"/>
  <polygon points="370,230 362,226 362,234" fill="#484f58"/>
  <line x1="50" y1="230" x2="50" y2="25" stroke="#484f58" stroke-width="1.5"/>
  <polygon points="50,25 46,33 54,33" fill="#484f58"/>
  <text x="375" y="244" fill="#8b949e" font-size="14" font-family="sans-serif">x</text>
  <text x="35" y="22" fill="#8b949e" font-size="14" font-family="sans-serif">y</text>
  <path d="M110,230 L110,120 Q150,55 200,90 Q250,125 300,50 L300,230 Z" fill="#58a6ff" fill-opacity="0.15"/>
  <path d="M60,180 Q110,120 150,55 Q200,90 250,125 Q300,50 350,70" fill="none" stroke="#58a6ff" stroke-width="2.5"/>
  <line x1="110" y1="230" x2="110" y2="120" stroke="#f97583" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="300" y1="230" x2="300" y2="50" stroke="#f97583" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="105" y="250" fill="#f97583" font-size="14" text-anchor="middle" font-family="sans-serif">a</text>
  <text x="300" y="250" fill="#f97583" font-size="14" text-anchor="middle" font-family="sans-serif">b</text>
  <text x="195" y="185" fill="#58a6ff" font-size="13" text-anchor="middle" font-weight="bold" font-family="sans-serif">∫ f(x)dx</text>
  <text x="352" y="62" fill="#3fb950" font-size="14" font-family="sans-serif">f(x)</text>
</svg>

---

## Important Definite Integrals

$$\int_0^{\pi} \sin x\,dx = 2$$

$$\int_0^1 x^n\,dx = \frac{1}{n+1}$$

$$\int_0^{\infty} e^{-x}\,dx = 1$$

---

## Formula Summary

| Topic | Formula |
|---|---|
| Indefinite integral | $\int f(x)\,dx = F(x) + C$ |
| Definite integral | $\int_a^b f(x)\,dx = F(b) - F(a)$ |
| Power rule | $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ |
| Substitution | $u = g(x) \Rightarrow du = g'(x)\,dx$ |
