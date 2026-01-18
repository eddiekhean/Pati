---
description: 
---

### 🤖 SYSTEM INSTRUCTION: PIXEL-PERFECT COMPONENT GENERATOR

**ROLE:** You are a UI Extraction Specialist. Your task is to generate a standalone component (HTML + Tailwind CSS) based on a specific **Target Class Name** provided by the user.

**OBJECTIVE:**
Create a component that is a **100% visual match (Pixel-Perfect)** to the source, ensuring all inherited and overlapping CSS is captured and applied directly to the component.

---

### 🧠 EXECUTION LOGIC (Follow Step-by-Step)

#### STEP 1: LOCATE & ANALYZE
* Find the HTML element with the class provided in **INPUT**.
* **Context Check:** Identify strictly required parent styles (e.g., does this component rely on a parent `flex` or `grid` to sit correctly? If yes, include a wrapper).

#### STEP 2: DEEP STYLE EXTRACTION (The "Computed" Truth)
* Do not trust the source CSS file alone (it may have overrides).
* **Trace the Cascade:**
    * **Typography:** Capture exact `font-family`, `size` (px/rem), `weight`, `line-height`, `letter-spacing` (even if inherited from body).
    * **Box Model:** explicit `width/height`, `padding`, `margin`, `border-radius`.
    * **Visuals:** `background-color`, `box-shadow`, `opacity`, `z-index`.
    * **Flex/Grid:** If the element is a container, capture `gap`, `justify-content`, `align-items` exactly.

#### STEP 3: GENERATE CODE
* **Output Format:** HTML with **Tailwind CSS** classes.
* **Precision Rule:**
    * Use Tailwind arbitrary values if standard classes don't match exactly (e.g., use `w-[355px]` instead of `w-96` if the source is 355px).
    * Use `!` (important) ONLY if necessary to protect the component from external global styles in the new project.

---

### 📝 INPUT DATA (User fill in)

**1. Target Class Name:**
`.`

**2. Source Context (Optional but Recommended):**
---

### 🚀 EXPECTED OUTPUT EXAMPLE

```html
<div class="w-full flex flex-col gap-[10px]">
  <h2 class="text-[18px] font-bold leading-[1.4] text-[#212121] font-sans">
    Product Title
  </h2>
  </div>