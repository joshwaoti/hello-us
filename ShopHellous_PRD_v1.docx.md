**SHOP HELLOUS**

*Hello Us*

**Product Requirements Document**

E-Commerce Website — Brand Identity, Design System & Full UI Build Prompts

Version 1.0  |  Nairobi, Kenya  |  2026

# **1\. Brand Overview**

## **1.1  Who Is Shop Hellous?**

Shop Hellous — a playful derivation of "Hello Us" — is a Kenyan fashion brand specialising in high-quality matching outfits for mothers and daughters. Founded by a mother inspired by her own daughter, the brand celebrates the bond between them through elegantly designed, made-to-order apparel. Every piece is crafted in-house from premium natural fabrics and delivered within 48 hours of order.

## **1.2  Mission**

"To celebrate and strengthen the bond between mothers and daughters through exquisitely designed, high-quality matching fashion — made exclusively for you, ready within 48 hours."

## **1.3  Tagline**

***Mommy & Me Fashion | Timeless Women’s Sets***

## **1.4  Core Values**

| Value | Description |
| :---- | :---- |
| **Togetherness** | Fostering connection through coordinated, matching fashion that tells a shared story. |
| **Quality & Craft** | Premium materials — 100% linen, heavy cotton — with meticulous in-house production. |
| **Inclusivity** | A diverse, generous size range so every mother finds her perfect fit. |
| **Exclusivity** | Made-to-order pieces custom-crafted to exact measurements, never mass-produced. |

## **1.5  Target Audience**

| Segment | Profile |
| :---- | :---- |
| **Primary** | Mothers (25–40) with young daughters, seeking stylish co-ordinated outfits for occasions, photoshoots, or everyday elegance. Urban professionals, Nairobi-based and diaspora. |
| **Secondary** | Women (22–38) who appreciate standalone timeless pieces with a coastal, vintage, and classy aesthetic. |

## **1.6  Key Product Differentiators**

* Signature tie-up shoulder straps and classic puff sleeves on every hero piece

* 100% linen and premium heavy cotton — raw, earthy, built for longevity

* Made-to-order within 48 hours — never over-produced, always exact to your measurements

* Dual sizing: Maxi (mother) from KSh 8,999 | Mini (daughter) from KSh 7,499 | Premium linen from KSh 12,000

* WhatsApp-first customer support (+254 746 704 132\) and Instagram community (@shophellous)

# **2\. Brand Identity & Design System**

## **2.1  Visual Aesthetic**

The Shop Hellous visual identity is defined by vintage warmth meeting modern precision. Think soft morning light on linen, gathered skirts, and the quiet elegance of mothers and daughters sharing a moment. The design system communicates premium quality without ostentation — approachable luxury for the contemporary Kenyan woman.

## **2.2  Color Palette**

**PRIMARY & SECONDARY BRAND COLORS**

| Swatch | Name | Hex | Role | Mood |
| :---- | :---- | :---- | :---- | :---- |
|  | **Blush Pink** | *\#F8C8D4* | Primary Brand Accent | Soft, feminine, welcoming |
|  | **Sand Beige** | *\#F5F0E8* | Primary Neutral / Background | Warm, vintage, timeless |
|  | **Crisp Cream** | *\#FAFAFA* | Secondary Neutral | Clean, premium, airy |
|  | **Ruby Red** | *\#9B1C1C* | Bold Accent | Passion, statement, depth |
|  | **Polka Blue** | *\#0047AB* | Classic Accent / Pattern | Sophisticated, playful |
|  | **Charcoal** | *\#333333* | Typography & Contrast | Modern, readable, grounded |

## **2.3  Typography**

| Role | Font Family | Weight / Style | Usage |
| :---- | :---- | :---- | :---- |
| **Display / Headings** | Playfair Display | Regular, Bold, Bold Italic | Hero text, section headings, editorial pull-quotes |
| **UI / Body** | Inter | 300, 400, 500, 600 | Navigation, product details, buttons, body copy |
| **Accent / Labels** | Montserrat | 400, 600 (Uppercase) | Category labels, badges, tags, price display |

## **2.4  Logo Concept**

A minimalist logotype rendered in Playfair Display. The wordmark reads “Hello Us” — the ‘o’ in ‘Hello’ carries a subtle heart or infinity loop to communicate the mother-daughter bond. Presented in Charcoal (\#333333) on light backgrounds; reversed to Blush Pink (\#F8C8D4) on dark or photographic backgrounds.

* Monogram variant: “HU” in refined serif for favicon, packaging, and social avatar

* Avoid drop-shadows, gradients, or heavy fills — keep it architectural and clean

## **2.5  Imagery Direction**

* Natural, warm lighting — golden hour and studio-soft, never harsh flash

* Earthy, textured settings: linen tablecloths, rattan furniture, terracotta walls, Nairobi greenery

* Close-up fabric hero shots: weave texture of linen, gathers, puff sleeve details

* Lifestyle: genuine mother-daughter moments — not posed stock photography

* Always show the Maxi and Mini pieces together in the same frame for Mommy & Me sets

## **2.6  Brand Voice**

* Warm and intimate — like a trusted friend who happens to have impeccable taste

* Graceful, never boastful — quality speaks through craft, not superlatives

* Celebratory of womanhood, motherhood, and heritage

* Direct in commerce (pricing, sizes, turnaround) — no unnecessary friction

# **3\. Technical Architecture**

## **3.1  Core Stack**

| Layer | Technology | Purpose |
| :---- | :---- | :---- |
| **Framework** | Next.js 14 (App Router) | SSR, ISR for product pages, route-based code splitting |
| **Styling** | Tailwind CSS v3 | Utility-first design tokens mapped to brand palette |
| **Animation** | Framer Motion 11 | Scroll-triggered sequences, 3D parallax, page transitions |
| **3D / WebGL** | React Three Fiber \+ Drei | 3D product renders, hero floating elements |
| **Auth** | Clerk | Email / Google / Apple sign-in, user profiles, order history |
| **Backend / DB** | Convex | Real-time cart state, orders, product catalogue |
| **Payments** | M-Pesa Daraja API \+ Stripe | Local M-Pesa STK push \+ card payments for diaspora |
| **Deployment** | Vercel | Edge network, preview deployments, analytics |
| **SMS / Notify** | Africa's Talking | Order confirmations, 48-hr production alerts via SMS |

## **3.2  Design Principles**

* Apple-inspired: whitespace-first, typography-led, motion with purpose

* Mobile-first — Kenyan shoppers are primarily on mobile; every interaction optimised for thumb reach

* Performance: Core Web Vitals target LCP \< 2.5s; lazy-load all images with blur placeholders

* Accessibility: WCAG 2.1 AA minimum — adequate contrast, focus states, keyboard navigation

# **4\. Global UI Components**

## **4.1  Navigation Bar**

| PROMPT — Global Navigation Component |
| :---- |
| Act as an expert Next.js and Tailwind CSS developer. Build a global sticky navigation bar for the "Shop Hellous" e-commerce store.VISUAL SPEC:- Default state: fully transparent with white/light text, sitting on top of the hero- Scroll trigger (\>60px): applies a glass-morphism background — backdrop-filter: blur(20px), bg-white/80, with a 1px bottom border in Blush Pink (\#F8C8D4)- Logo: "Hello Us" wordmark in Playfair Display, centered on mobile, left-aligned on desktop; Charcoal (\#333333)- Nav links (desktop): "Collections", "About", "Contact" — Inter 14px, font-weight 400, with a soft underline-slide hover animation in Blush Pink- Right cluster: Clerk \<UserButton\>, search icon, cart icon (Framer Motion badge counter that springs into view when cart count \> 0)- Cart icon click: triggers a right-side Framer Motion drawer (AnimatePresence, x: "100%") with the slide-out cart- Mobile: hamburger icon → full-screen overlay menu with staggered Framer Motion entrance per linkBEHAVIOUR:- Hide on scroll-down, reappear on scroll-up (classic Apple-style smart nav)- Smooth height transition between transparent and blur states using Framer Motion layoutId |

## **4.2  Cart Drawer**

| PROMPT — Slide-Out Cart Drawer |
| :---- |
| Build a right-side slide-out cart drawer using Framer Motion AnimatePresence.VISUAL SPEC:- Width: 420px desktop / 100vw mobile- Background: Crisp Cream (\#FAFAFA) with Blush Pink top accent bar (4px)- Framer Motion: initial={{ x: "100%" }}, animate={{ x: 0 }}, exit={{ x: "100%" }}, transition: spring(damping: 25, stiffness: 200)- Line items: product thumbnail (rounded-lg), product name (Inter 500 14px), size/variant, quantity stepper (+/-), price in Charcoal bold — all updating in real-time via Convex- Order summary: subtotal, shipping estimate, prominent CTA button "Proceed to Checkout" — full-width, Charcoal background, white text, hover state shifts to Blush Pink- Below CTA: small trust badges — "Made in 48hrs", "Secure Checkout", WhatsApp icon \+ "Chat with us"- Empty state: centered heart illustration, copy "Your cart is empty — let's fix that", link to Collections |

## **4.3  Footer**

| PROMPT — Global Footer |
| :---- |
| Build the site-wide footer for Shop Hellous.VISUAL SPEC:- Background: Charcoal (\#333333), text in Sand Beige (\#F5F0E8) and white- Top row: "Hello Us" logo (reversed, Blush Pink) \+ tagline "Mommy & Me Fashion | Timeless Women's Sets"- Middle row (3 columns): Shop (links: Collections, New Arrivals, About), Support (Sizing Guide, Order Tracking, FAQ, Contact), Follow Us (Instagram @shophellous icon \+ WhatsApp \+254 746 704 132)- Bottom row: copyright, Privacy Policy, Terms — Inter 12px, muted- Subtle top border: 1px Blush Pink- Mobile: stacks to single column with accordion disclosure per column |

# **5\. Page-by-Page UI Build Prompts**

## **5.1  Landing Page (Homepage)**

*Concept: A cinematic, Apple-calibre immersive experience. Every scroll reveals a new world. The page sells the feeling of the brand before it sells a product.*

**Section A — Hero**

| PROMPT — Hero Section (3D \+ Scroll Animation) |
| :---- |
| Build the hero section for the Shop Hellous landing page using Next.js, React Three Fiber, and Framer Motion.CONCEPT: A soft, immersive full-screen scene that immediately communicates "Mommy & Me" and premium quality.VISUAL SPEC:- Full viewport height (100dvh)- Background: a radial gradient from Blush Pink (\#F8C8D4) at center to Sand Beige (\#F5F0E8) at edges — no photography here, let the 3D carry it- 3D element (React Three Fiber): a floating, softly-lit linen dress (use a simplified cloth-like mesh or imported GLTF if available) that gently sways with a looping sine-wave animation on its Y and Z rotation. Apply a soft pink-toned matcap or physical material. Cast a subtle drop shadow onto an invisible ground plane.- As the user begins to scroll (useScroll, useTransform), the 3D element scales from 0.6 to 1.2 and rotates to face the viewer, transitioning the scene into the product showcase below.- Text overlay: "Hello Us" in Playfair Display 80px bold, centered, Charcoal — fades in on mount with Framer Motion (opacity 0→1, y: 30→0, delay 0.4s)- Subheading: "Mommy & Me Fashion | Timeless Women's Sets" — Inter 18px, lighter weight, fades in delay 0.7s- CTA Button: "Shop the Collection" — rounded-full, Charcoal background, Sand Beige text, hover scales to 1.05, active press scales to 0.97 (Framer Motion whileHover / whileTap)- Scroll indicator: "Scroll to explore" with a gentle bouncing chevron-down icon at bottom center, fades out when user scrolls past 100px |

**Section B — Fabric Parallax**

| PROMPT — Fabric Parallax Section |
| :---- |
| Build a scroll-triggered 3D parallax section using Framer Motion useScroll \+ useTransform.VISUAL SPEC:- Full-width section, min-height 100vh, background Crisp Cream (\#FAFAFA)- Three large (full-bleed) high-res fabric texture images (linen close-up, gathered skirt detail, puff sleeve detail) arranged at different depths- As the user scrolls through this section, each image layer translates on the Y axis at different rates (layer 1: y \* 0.5, layer 2: y \* 0.3, layer 3: y \* 0.1) creating a true parallax depth effect- Each image also scales subtly (scale: 1.0 → 1.08) as it enters the viewport using IntersectionObserver \+ Framer Motion- Text elements float above: "Crafted from 100% Linen" and "Made to Order in 48 Hours" — Playfair Display 48px, with a word-by-word stagger animation (each word: opacity 0→1, y: 20→0, stagger 0.08s)- Small label tags appear near the image details: "Puff Sleeve", "Tie Strap", "Gathered Skirt" — Inter 12px uppercase, Blush Pink background, Charcoal text, like Apple product callout lines |

**Section C — Category Teasers**

| PROMPT — Category Teasers with Staggered Entrance |
| :---- |
| Build the category teaser section for the homepage.VISUAL SPEC:- Two large cards side by side (desktop) / stacked (mobile):  Card 1: "Mommy & Me" — background: a warm lifestyle image of mother \+ daughter; overlay: dark gradient from bottom; Playfair Display "Mommy & Me" white 40px; Inter "Shop Sets" button  Card 2: "Timeless Women's Sets" — background: elegant close-up of a woman in a linen dress; same treatment- Cards are 50/50 split on desktop, each 60vh tall- Framer Motion entrance: whileInView={{ opacity: 1, y: 0 }}, initial={{ opacity: 0, y: 60 }}, stagger 0.2s between cards, viewport once- On hover: image scale to 1.05 (transition: 0.6s ease-out), overlay darkens slightly, CTA button slides up 8px- Mobile: vertical stack, each card 55vw tall |

**Section D — Brand Story Teaser**

| PROMPT — Brand Story Section |
| :---- |
| Build the homepage brand story section.VISUAL SPEC:- Background colour transition: Sand Beige (\#F5F0E8) — use a CSS scroll-driven or Framer Motion background colour morph as this section enters- Left column (60%): large editorial image — mother and daughter in matching linen sets, natural setting, warm light- Right column (40%): story text block  \- Small label: "OUR STORY" — Montserrat 12px uppercase, Blush Pink  \- Heading: "Born from a Mother's Love" — Playfair Display 36px Bold  \- Body: 2-3 sentences about founding, made-to-order ethos — Inter 16px, line-height 1.8  \- CTA: "Read Our Story" — underline-style link, Charcoal, hover colour shifts to Blush Pink- Text elements animate in from right (x: 40→0, opacity 0→1) as image animates in from left — triggered by IntersectionObserver- Image has a subtle warm vignette overlay and a rounded-xl corner radius |

**Section E — Social Proof / Testimonials**

| PROMPT — Customer Testimonials Carousel |
| :---- |
| Build a testimonials carousel for the homepage.VISUAL SPEC:- Background: Crisp Cream (\#FAFAFA)- Section heading: "What Our Mothers Say" — Playfair Display 36px, centered- Carousel: 3 cards visible on desktop / 1 on mobile, free-scroll with momentum using Framer Motion drag constraints- Each card: Blush Pink (\#F8C8D4) top accent bar (4px), white background, subtle shadow (box-shadow: 0 4px 24px rgba(248,200,212,0.3))  \- 5-star rating (gold stars, Inter 12px)  \- Quote: Playfair Display italic 18px — "The linen set arrived in exactly 48 hours and the quality is stunning. My daughter and I got so many compliments."  \- Customer name: Inter 500 14px, Charcoal  \- Small "Verified Purchase" badge- Auto-plays every 5 seconds, pauses on hover- Pagination dots below: Blush Pink active, grey inactive |

**Section F — Instagram Feed Strip**

| PROMPT — Instagram Social Feed |
| :---- |
| Build an Instagram feed strip section for the homepage.VISUAL SPEC:- Section heading: "@shophellous on Instagram" — Playfair Display 28px \+ Instagram icon- Horizontal scrollable strip of 8 square images (160px each on mobile, 240px on desktop)- Each image: rounded-xl, hover scales to 1.06 with a soft Blush Pink overlay showing a heart icon- Last tile: a "Follow us" call-to-action tile — Charcoal background, Instagram icon \+ "@shophellous" \+ "Follow" button in Blush Pink- All images load with a shimmer skeleton placeholder before actual images resolve- Framer Motion stagger entrance: each tile fades and slides up (y: 20→0) with 0.06s stagger |

## **5.2  Shop / Collections Page**

*Concept: An elegant, editorial product grid. Browsable, filterable, and delightful — with micro-animations on every interaction.*

| PROMPT — Full Collections Page |
| :---- |
| Build the main Shop / Collections page for Shop Hellous using Next.js App Router, Tailwind CSS, and Framer Motion.LAYOUT SPEC:- Page header: full-width banner — Sand Beige background, centered Playfair Display "Our Collections" 56px, Inter subheading "Made to Order. Ready in 48 Hours."- Below banner: sticky filter bar (top: 0, z-index 40\) — glass-morphism background, backdrop-filter blurFILTER BAR:- Filter chips: "All", "Mommy & Me", "Maxi Sets", "Mini Sets", "Linen Collection", "New Arrivals"- Active chip: Charcoal background \+ white text; inactive: white background \+ Charcoal text \+ Blush Pink border- Chip click: Framer Motion layoutId shared between chips for a smooth background slide transition (like Apple's segmented control)- Sort dropdown: "Sort by: Featured / Price: Low-High / Price: High-Low / Newest" — Inter 14pxPRODUCT GRID:- 3 columns desktop / 2 columns tablet / 1 column mobile- Masonry-style staggered heights (not uniform grid)- Framer Motion grid entrance: stagger 0.05s per card, y: 30→0, opacity 0→1PRODUCT CARD:- Image area: aspect-ratio 3/4, object-fit cover, rounded-xl overflow hidden- On hover (desktop): primary image cross-fades to lifestyle shot (mother+daughter wearing the piece) using Framer Motion opacity crossfade at 0.4s; card lifts with box-shadow transition- On hover: "Quick Add" button slides up from bottom of image — full-width, Charcoal background, Blush Pink text, font Inter 13px uppercase — using Framer Motion (y: 40→0, opacity 0→1)- Below image: product name (Inter 500 15px), collection tag (Montserrat 11px uppercase, Blush Pink), price display "From KSh 8,999" (Inter 600 16px Charcoal)- Wishlist icon (top-right of image): heart, toggles filled/unfilled with a Framer Motion spring scale popLOADING STATE:- Skeleton cards: rounded-xl, animated shimmer gradient (Sand Beige → lighter Beige → Sand Beige) during data fetch |

## **5.3  Product Detail Page (PDP)**

*Concept: An immersive, conversion-optimised product page that communicates craft and exclusivity. The 48-hour made-to-order promise is front and centre.*

| PROMPT — Product Detail Page |
| :---- |
| Build the Product Detail Page (PDP) for Shop Hellous using Next.js, Tailwind CSS, and Framer Motion.LEFT COLUMN — IMAGE GALLERY (sticky, desktop):- Main image: large, rounded-xl, aspect 4/5- Scroll-snap thumbnail strip below (vertical on desktop, horizontal on mobile)- Click thumbnail: main image cross-fades with Framer Motion (AnimatePresence, opacity 0→1, duration 0.3s)- Zoom: on hover, main image scales to 1.5x and follows cursor (CSS transform perspective \+ translate)- Badge overlays on main image: "Maxi" or "Mini" pill (Charcoal bg, white text) top-left; "48hr Production" pill (Blush Pink bg, Charcoal) top-rightRIGHT COLUMN — PRODUCT INFO:- Breadcrumb: Inter 12px — Home \> Collections \> \[Product Name\]- Product name: Playfair Display 36px Bold- Collection tag: Montserrat 12px uppercase, Blush Pink, spaced tracking- Price section: "Maxi — KSh 8,999" and "Mini — KSh 7,499" displayed as two clear rows (Inter 600 18px); "Linen variant from KSh 12,000" shown as a tertiary row- Star rating \+ "(12 reviews)" linkSIZE CUSTOMISATION (key differentiator):- Section heading: "Your Custom Size" (Inter 500 14px)- Instead of a dropdown, show a row of size suggestion chips (Size 8, 10, 12, 14, 16, 18, 20+) for quick selection- Below chips: "Need a custom fit? Enter your measurements" link that expands a Framer Motion accordion revealing input fields: Bust, Waist, Hips, Height — each with a label, placeholder (e.g., "e.g. 36 inches"), and a small info icon- Measurement guide link opens a modal with a simple illustrated body measurement diagramPRODUCTION BADGE:- Prominent badge (full-width, Blush Pink background, rounded-xl): clock icon \+ "Made to Order: Ready in 48 Hours" (Inter 600 15px Charcoal) \+ "Custom-crafted exclusively for you" (Inter 400 13px)ACCORDION DETAILS:- "Signature Details" — tie straps, puff sleeves, gathered skirt description- "Materials" — 100% linen / premium heavy cotton details, care instructions- "Sizing & Fit" — guide to choosing Maxi vs Mini, measurement adviceAll accordions use Framer Motion height animation (overflow hidden, height: 0 → auto)ADD TO CART / BUY NOW:- "Add to Cart" — full-width, rounded-full, Charcoal background, white text, hover: Blush Pink shift, Framer Motion whileTap scale 0.97- "Buy Now" — full-width, outlined (Charcoal border, transparent bg), white text on dark hover- Below CTAs: WhatsApp inquiry button — green (\#25D366) icon \+ "Chat with us on WhatsApp"MAKE IT A MATCH:- Below CTAs: "Complete the Set" section — showing the matching piece (Maxi or Mini counterpart) in a compact horizontal card with image, name, price, and an "Add to Cart" — this is a key cross-sell featureREVIEWS:- Section: "What Mothers Are Saying" — star breakdown bar chart (CSS), then scrollable review cards- Each card: reviewer name, date, star rating, photo of dress if available, review text |

## **5.4  Cart & Checkout Flow**

*Concept: Frictionless, localised, and reassuring. The checkout must make M-Pesa feel as premium as card payment, and the success screen should feel like a celebration.*

| PROMPT — Multi-Step Checkout Page |
| :---- |
| Build the checkout flow for Shop Hellous. This is a multi-step page (not a drawer) with three stages.STEP INDICATOR (top of page):- Three numbered steps: 1 Shipping, 2 Payment, 3 Confirmation- Active step: Charcoal circle \+ white number; completed step: Blush Pink circle \+ checkmark; upcoming: grey- Framer Motion progress bar slides between steps with layoutId shared animationSTEP 1 — SHIPPING:- Page heading: "Where should we send your order?" — Playfair Display 28px- Fields: Full Name, Phone Number (pre-filled from Clerk profile), Delivery Address, Town/City, Special Notes- Input style: minimal underline inputs (bottom-border only), focus state: Blush Pink border, label floats up (floating label pattern)- Nairobi delivery estimate: "Orders within Nairobi: Same-day or next-day delivery" info callout- CTA: "Continue to Payment" — full-width Charcoal buttonSTEP 2 — PAYMENT:- Heading: "How would you like to pay?" — Playfair Display 28px- Payment method selector: two large cards  CARD 1 (M-Pesa — default selected): M-Pesa logo, green accent border when selected, instructions: "We'll send an STK push to your M-Pesa number — enter your PIN when prompted." Input: M-Pesa phone number (pre-filled). Sub-label: "Works with Safaricom M-Pesa" — uses Daraja API for STK push  CARD 2 (Card): Visa/Mastercard icons, standard card number / expiry / CVV fields with masked input- Both cards use Framer Motion border animation on selection (border-color transition \+ scale 1.02)- Order summary sidebar (desktop) or accordion (mobile): itemised list, subtotal, delivery, total — Convex real-time- CTA: "Place Order" — Charcoal, full-width, with a lock iconSTEP 3 — SUCCESS / CONFIRMATION:- Full-screen Framer Motion confetti burst — particles in Blush Pink (\#F8C8D4), Sand Beige (\#F5F0E8), and Charcoal (\#333333); use a lightweight canvas or CSS-based confetti library- Center card: checkmark animation (SVG path draw) \+ "Order Confirmed\!" (Playfair Display 42px) \+ "Your Hello Us set is being crafted. Ready in 48 hours." (Inter 16px)- Order number, summary table, WhatsApp button: "Track your order on WhatsApp"- CTA: "Continue Shopping" — back to Collections |

## **5.5  About Us Page**

*Concept: A rich editorial storytelling page. Connect the customer emotionally to the brand before they ever add to cart.*

| PROMPT — About Us Page |
| :---- |
| Build the About Us page for Shop Hellous using Next.js and Framer Motion.HERO:- Full-width image banner: a heartwarming mother-daughter photograph (warm light, linen dresses)- Parallax: useScroll \+ useTransform — image translates at 0.4x scroll speed (background-attachment: fixed effect)- Overlay: soft dark gradient from bottom; centered text: "Our Story" — Playfair Display 64px Bold, whiteORIGIN STORY SECTION:- Alternating image-text blocks (zig-zag layout):  Block 1: image left \+ text right — "Born from a Mother's Love" — story of the founder and daughter inspiration  Block 2: text left \+ image right — "Made In-House, Made to Last" — production story, 48-hour commitment  Block 3: image left \+ text right — "For Every Mother, Every Size" — inclusivity and sizing philosophy- Each block: text animates in from its respective side (x: ±40 → 0, opacity 0→1) via IntersectionObserver \+ Framer Motion- Images: warm vignette \+ rounded-2xl borderVALUES SECTION:- Four cards in a 2x2 grid (desktop) / vertical list (mobile)- Each card: large icon or illustration, value name (Playfair Display 20px), short description (Inter 15px)- Background: alternating Sand Beige and Crisp Cream- Entrance: whileInView stagger, y: 40→0, opacity 0→1, stagger 0.15sTEAM / FOUNDER SECTION:- Heading: "The Heart Behind Hello Us" — Playfair Display 32px- Founder card: large circular image, name, short quote in italic Playfair Display- CTA: "Shop Our Collections" \+ "Follow us @shophellous" |

## **5.6  Contact / Get in Touch Page**

| PROMPT — Contact Page |
| :---- |
| Build the Contact page for Shop Hellous.VISUAL SPEC:- Background: Sand Beige (\#F5F0E8)- Heading: "Get in Touch" — Playfair Display 48px, centered- Subheading: "We'd love to hear from you. Reach us on WhatsApp for the fastest response." — Inter 16px, centeredCONTACT METHODS (3 cards, horizontal on desktop / vertical on mobile):- WhatsApp card: WhatsApp green icon (\#25D366), "+254 746 704 132" — click to open WhatsApp chat, Blush Pink background- Instagram card: Instagram gradient icon, "@shophellous" — click opens Instagram profile, Sand Beige background- Email card: envelope icon, generic contact email, Crisp Cream backgroundEach card: rounded-2xl, subtle shadow, hover scale 1.04CONTACT FORM:- Below cards: optional contact form for non-WhatsApp users- Fields: Name, Email, Subject (dropdown: Order Inquiry / Custom Size / Returns / Other), Message- Inputs: floating label pattern, Blush Pink focus border- Submit button: "Send Message" — full-width, Charcoal background- Success state: Framer Motion check animation \+ "Message sent\! We'll reply within 24 hours."SIZING GUIDE LINK:- Prominent banner below form: "Not sure about sizing? View our full size guide →" — Blush Pink background, Charcoal text |

## **5.7  Account & Order History Page**

| PROMPT — User Account Dashboard |
| :---- |
| Build the user account dashboard page powered by Clerk auth and Convex real-time data.LAYOUT: Two-column (sidebar \+ main) on desktop, tab-based on mobile.SIDEBAR:- Clerk UserButton \+ user name and email- Nav links: My Orders, My Sizes, Wishlist, Settings- Active link: Blush Pink left-border accentMY ORDERS TAB:- List of past orders: order number, date, status badge ("In Production" — amber / "Delivered" — green / "Confirmed" — Blush Pink), item thumbnail \+ name, total price- "In Production" orders show a progress bar: Ordered → Crafting → Ready → Dispatched — using Framer Motion progress fill animation- CTA per order: "Track on WhatsApp" (green), "View Receipt"MY SIZES TAB:- Saved measurement fields (Bust, Waist, Hips, Height) — users can pre-fill these so future orders are one-click- Inline edit with Convex mutation, auto-saves on blur with a subtle "Saved" checkmark animationWISHLIST TAB:- Grid of saved products (same card as Shop page) with "Add to Cart" and "Remove" per card- Empty state: heart illustration \+ "Save pieces you love — tap the heart on any product" |

# **6\. Animation System Reference**

All animations should feel purposeful and calm — never gratuitous. The benchmark is Apple.com product pages: motion reveals content, guides attention, and communicates quality.

| Animation Type | Framer Motion Config | Used In | Notes |
| :---- | :---- | :---- | :---- |
| **Page Mount** | opacity: 0→1, y: 20→0, duration: 0.5s ease-out | All pages on load | Use AnimatePresence in layout.tsx |
| **Scroll Reveal** | whileInView, once: true, viewport: { margin: '-100px' } | Sections, cards, text blocks | Stagger children 0.05–0.1s apart |
| **Parallax** | useScroll \+ useTransform, translateY | Hero, About images, Fabric section | Range \[-100px, 100px\] typical |
| **3D Hero Object** | React Three Fiber, sine-wave animation loop on Y/Z rotation | Homepage hero | Scale on scroll via R3F camera or mesh scale uniform |
| **Hover — Card** | whileHover: { scale: 1.03, boxShadow }, transition: spring | Product cards, category teasers | Image crossfade via AnimatePresence opacity |
| **Button Press** | whileTap: { scale: 0.97 } | All CTA buttons | Keep spring stiffness: 400, damping: 17 |
| **Drawer / Modal** | AnimatePresence, x: '100%'→0 (drawer) or scale: 0.95→1 (modal) | Cart drawer, size guide modal | Add backdrop fade behind modal |
| **Accordion** | height: 0 → 'auto', overflow hidden, ease-out 0.3s | Product details, FAQ | Use useMeasure hook for auto height |
| **Confetti** | Canvas-based particles, Blush Pink \+ Beige \+ Charcoal | Order success page | Use canvas-confetti or react-confetti library |

# **7\. M-Pesa Integration Specification**

M-Pesa is the primary payment method for the Kenyan market and must be treated as a first-class citizen — not an afterthought. The STK Push flow should feel seamless and reassuring.

## **7.1  Flow Overview**

1. Customer selects M-Pesa on checkout and confirms their Safaricom number

2. Frontend calls Next.js API route /api/payments/mpesa/stkpush

3. API route calls Safaricom Daraja API (Lipa Na M-Pesa Online) with STK Push request

4. Customer sees a pending modal: animated clock icon \+ 'Check your phone — enter your M-Pesa PIN to confirm payment'

5. Daraja API sends callback to /api/payments/mpesa/callback on success or failure

6. Convex mutation updates order status in real-time — pending modal resolves to success or retry state

7. On success: redirect to Order Confirmation page with confetti

## **7.2  UI States**

| State | UI Treatment |
| :---- | :---- |
| **Initiating** | Spinner \+ 'Sending to your phone...' — Inter 15px, Charcoal. Framer Motion pulsing ring animation. |
| **Awaiting PIN** | Animated phone illustration with vibration effect \+ 'Enter your M-Pesa PIN on your phone' \+ countdown timer (60s). Full-screen overlay modal. |
| **Success** | Green checkmark path-draw SVG animation \+ 'Payment Confirmed\!' — redirect to success page after 1.5s delay. |
| **Failed / Timeout** | Red X animation \+ clear error message \+ 'Try Again' button \+ fallback 'Pay with Card' option. |

# **8\. Content & Copy Framework**

## **8.1  Key Copy Lines**

| Placement | Copy |
| :---- | :---- |
| **Hero Headline** | *"Hello Us" — One Bond. Two Sets. Timeless Style.* |
| **Hero Subheading** | Mommy & Me Fashion | Timeless Women's Sets — Made to Order in 48 Hours |
| **Production Badge** | *Made exclusively for you. Ready in 48 hours.* |
| **Cart Empty State** | Your cart is empty — let's find your perfect set. |
| **Order Confirmation** | Your Hello Us set is being handcrafted. Ready in 48 hours — we'll WhatsApp you every step of the way. |
| **Size Callout** | Every piece is made to your exact measurements — tell us your size and we'll handle the rest. |
| **About Hero** | *Born from a mother's love. Built for the bond.* |

## **8.2  SEO Metadata Targets**

* Homepage: 'Matching Mother Daughter Dresses Kenya | Shop Hellous — Hello Us'

* Collections: 'Mommy and Me Matching Sets Kenya | Linen Dresses Made to Order'

* Product pages: '\[Product Name\] — Matching Linen Dress Set Kenya | Hello Us'

* About: 'Our Story | Shop Hellous — Handcrafted Kenyan Mother Daughter Fashion'

# **9\. Pre-Launch Checklist**

| Item | Done | Owner |
| :---- | ----- | :---- |
| Brand design tokens (colors, fonts, spacing) configured in tailwind.config.js | \[ \] |  |
| Clerk auth configured with email \+ Google sign-in | \[ \] |  |
| Convex schema: products, orders, cart, users, measurements | \[ \] |  |
| M-Pesa Daraja API sandbox tested end-to-end | \[ \] |  |
| All 7 pages built and responsive (mobile, tablet, desktop) | \[ \] |  |
| Framer Motion animations reviewed on low-end Android device | \[ \] |  |
| React Three Fiber hero: performance tested at 60fps on mobile | \[ \] |  |
| Product photography uploaded and optimised (WebP, lazy-loaded) | \[ \] |  |
| Instagram @shophellous linked and social feed integrated | \[ \] |  |
| WhatsApp \+254 746 704 132 links active across all touchpoints | \[ \] |  |
| 48-hour production messaging visible on PDP and checkout | \[ \] |  |
| Africa's Talking SMS configured for order confirmations | \[ \] |  |
| Custom domain \+ Vercel deployment configured | \[ \] |  |
| Core Web Vitals: LCP \< 2.5s verified with Lighthouse | \[ \] |  |
| SEO metadata added to all pages (Open Graph, Twitter Card) | \[ \] |  |

*Shop Hellous — Hello Us  |  PRD v1.0  |  Nairobi, Kenya 2026*

Prepared for internal development use. All brand assets and prompts are proprietary.