# অধ্যায় ২: ভেক্টর (Vector)

## ভূমিকা

পদার্থবিজ্ঞানে যেসব রাশির **মান ও দিক** উভয়ই আছে, তাদের **ভেক্টর রাশি** বলে। যেমন: সরণ, বেগ, ত্বরণ, বল। অন্যদিকে, যেসব রাশির শুধু মান আছে কিন্তু দিক নেই, তাদের **স্কেলার রাশি** বলে। যেমন: ভর, তাপমাত্রা, দূরত্ব।

---

## ভেক্টরের উপাংশ (Components)

একটি ভেক্টর $\vec{A}$-কে দুটি পরস্পর লম্ব অক্ষ বরাবর ভাঙা যায়:

$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

ভেক্টরের মান:

$$A = |\vec{A}| = \sqrt{A_x^2 + A_y^2}$$

---

## সামান্তরিক সূত্র (Parallelogram Law)

দুটি ভেক্টর $\vec{A}$ ও $\vec{B}$ একই বিন্দু থেকে ক্রিয়া করলে তাদের **লব্ধি** $\vec{R}$ সামান্তরিকের কর্ণ বরাবর হয়।

**লব্ধির মান:**

$$R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$$

**লব্ধির দিক ($\vec{A}$ এর সাথে কোণ $\alpha$):**

$$\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}$$

### চিত্র: সামান্তরিক সূত্র

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
  <text x="225" y="155" fill="#f97583" font-size="16" font-weight="bold" font-family="sans-serif">R⃗ (লব্ধি)</text>
  <path d="M 92,240 A 32,32 0 0,0 83,218" fill="none" stroke="#d29922" stroke-width="2"/>
  <text x="97" y="225" fill="#d29922" font-size="15" font-family="sans-serif">θ</text>
  <circle cx="60" cy="240" r="4" fill="#e6edf3"/>
  <text x="40" y="290" fill="#8b949e" font-size="13" font-family="sans-serif">O (মূলবিন্দু)</text>
</svg>

---

## ডট গুণন (Scalar Product)

দুটি ভেক্টরের ডট গুণন একটি **স্কেলার রাশি**:

$$\vec{A} \cdot \vec{B} = AB\cos\theta$$

উপাংশ আকারে:

$$\vec{A} \cdot \vec{B} = A_xB_x + A_yB_y + A_zB_z$$

### বৈশিষ্ট্য

- বিনিময়যোগ্য: $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$
- লম্ব হলে: $\vec{A} \cdot \vec{B} = 0$ (কারণ $\cos 90° = 0$)
- কৃতকাজ: $W = \vec{F} \cdot \vec{d} = Fd\cos\theta$

---

## ক্রস গুণন (Vector Product)

দুটি ভেক্টরের ক্রস গুণন একটি **ভেক্টর রাশি**:

$$\vec{A} \times \vec{B} = AB\sin\theta \ \hat{n}$$

যেখানে $\hat{n}$ হলো $\vec{A}$ ও $\vec{B}$-এর তলের সাথে লম্ব একক ভেক্টর (ডান-হাত নিয়ম)।

### বৈশিষ্ট্য

- বিনিময়যোগ্য নয়: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$
- সমান্তরাল হলে: $\vec{A} \times \vec{B} = \vec{0}$ (কারণ $\sin 0° = 0$)
- টর্ক: $\vec{\tau} = \vec{r} \times \vec{F}$

---

## একক ভেক্টর (Unit Vector)

$$\hat{A} = \frac{\vec{A}}{|\vec{A}|}$$

কার্তেসীয় স্থানাঙ্কে: $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$

---

## সূত্রাবলী

| বিষয় | সূত্র |
|---|---|
| লব্ধির মান | $R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$ |
| ডট গুণন | $\vec{A} \cdot \vec{B} = AB\cos\theta$ |
| ক্রস গুণন | $|\vec{A} \times \vec{B}| = AB\sin\theta$ |
| একক ভেক্টর | $\hat{A} = \vec{A} / |\vec{A}|$ |
