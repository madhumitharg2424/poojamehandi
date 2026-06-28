import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import {
  Menu, X, Phone, Instagram, MapPin, MessageCircle, Star, ArrowUp,
  Sparkles, Crown, Heart, Leaf, Gift, PartyPopper, Baby, Flower2, Palette, Truck, Gem,
} from "lucide-react";

import m2 from "@/assets/gallery/mehandi-2.jpeg";
import m3 from "@/assets/gallery/mehandi-3.jpeg";
import m4 from "@/assets/gallery/mehandi-4.jpeg";
import m5 from "@/assets/gallery/mehandi-5.jpeg";
import m6 from "@/assets/gallery/mehandi-6.jpeg";
import m7 from "@/assets/gallery/mehandi-7.jpeg";
import m8 from "@/assets/gallery/mehandi-8.jpeg";
import m9 from "@/assets/gallery/mehandi-9.jpeg";
import m10 from "@/assets/gallery/mehandi-10.jpeg";
import m11 from "@/assets/gallery/mehandi-11.jpeg";
import m12 from "@/assets/gallery/mehandi-12.jpeg";
import m13 from "@/assets/gallery/mehandi-13.jpeg";
import m14 from "@/assets/gallery/mehandi-14.jpeg";
import m15 from "@/assets/gallery/mehandi-15.jpeg";
import m16 from "@/assets/gallery/mehandi-16.jpeg";
import m17 from "@/assets/gallery/mehandi-17.jpeg";
import m18 from "@/assets/gallery/mehandi-18.jpeg";
import m19 from "@/assets/gallery/mehandi-19.jpeg";
import m20 from "@/assets/gallery/mehandi-20.jpeg";
import m21 from "@/assets/gallery/mehandi-21.jpeg";
import m22 from "@/assets/gallery/mehandi-22.jpeg";
import m23 from "@/assets/gallery/mehandi-23.jpeg";
import m24 from "@/assets/gallery/mehandi-24.jpeg";
import m25 from "@/assets/gallery/mehandi-25.jpeg";
import m26 from "@/assets/gallery/mehandi-26.jpeg";
import m27 from "@/assets/gallery/mehandi-27.jpeg";
import m28 from "@/assets/gallery/mehandi-28.jpeg";
import m29 from "@/assets/gallery/mehandi-29.jpeg";
import m30 from "@/assets/gallery/mehandi-30.jpeg";
import m31 from "@/assets/gallery/mehandi-31.jpeg";
import poojaPortrait from "@/assets/pooja-portrait.jpeg";
import poojaAbout from "@/assets/pooja2.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja Mehandi — Bridal Mehandi Artist in Chennai" },
      { name: "description", content: "Traditional elegance and timeless bridal art by Pooja Mehandi. Bridal, Arabic, and South Indian mehandi in Mylapore, Chennai. 100% organic henna." },
      { property: "og:title", content: "Pooja Mehandi — Bridal Mehandi Artist in Chennai" },
      { property: "og:description", content: "Traditional elegance, timeless bridal art. Book your bridal mehandi today." },
      { property: "og:image", content: m6 },
      { property: "twitter:image", content: m6 },
    ],
  }),
  component: HomePage,
});

// ----------------------------------------------------------------------------
// Contact / replaceable constants
// ----------------------------------------------------------------------------
const PHONE_DISPLAY = "+91 96772 06185";
const PHONE_TEL = "+919677206185";
const WHATSAPP_URL = `https://wa.me/919677206185?text=${encodeURIComponent("Hi Pooja, I'd like to book mehandi.")}`;
const INSTAGRAM_HANDLE = "@poojamehandi68";
const INSTAGRAM_URL = "https://www.instagram.com/poojamehandi68/";
// TODO: Replace with the real Google Business Maps URL
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Mylapore+Chennai";

// Hero portrait — Pooja
const HERO_PORTRAIT = poojaPortrait;

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const GALLERY = [m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25, m26, m27, m28, m29, m30, m31];

// ----------------------------------------------------------------------------
// Decorative SVG (mehandi-inspired ornament)
// ----------------------------------------------------------------------------
function MandalaOrnament({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="100" cy="100" r="92" />
        <circle cx="100" cy="100" r="74" strokeDasharray="2 3" />
        <circle cx="100" cy="100" r="56" />
        <circle cx="100" cy="100" r="36" strokeDasharray="1 2" />
        <circle cx="100" cy="100" r="18" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const x1 = 100 + Math.cos(a) * 56;
          const y1 = 100 + Math.sin(a) * 56;
          const x2 = 100 + Math.cos(a) * 92;
          const y2 = 100 + Math.sin(a) * 92;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x = 100 + Math.cos(a) * 74;
          const y = 100 + Math.sin(a) * 74;
          return <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />;
        })}
      </g>
    </svg>
  );
}

function PaisleyOrnament({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 120 200" width={size} height={size * (200 / 120)} className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M60 10 C 95 40, 110 90, 80 140 C 55 180, 40 180, 35 150 C 30 110, 55 80, 60 60 Z" />
        <path d="M60 30 C 85 55, 95 95, 75 130 C 58 160, 48 158, 45 138 C 42 110, 58 85, 60 70 Z" strokeDasharray="2 2" />
        <circle cx="60" cy="60" r="6" />
        <circle cx="60" cy="60" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

// ----------------------------------------------------------------------------
// Custom cursor
// ----------------------------------------------------------------------------
function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "hover" | "image">("default");

  useEffect(() => {
    let raf = 0;
    let x = -100, y = -100, tx = -100, ty = -100;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) setVariant("hover");
      else if (t.closest("img, [data-cursor='image']")) setVariant("image");
      else setVariant("default");
    };
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  const ringScale = variant === "hover" ? 2 : variant === "image" ? 2.6 : 1;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block rounded-full border transition-[width,height,opacity] duration-300"
        style={{
          width: 36, height: 36,
          borderColor: "color-mix(in oklab, var(--gold) 70%, transparent)",
          boxShadow: "0 0 24px color-mix(in oklab, var(--gold) 40%, transparent)",
          transform: `scale(${ringScale})`,
        }}
      />
      <div
        ref={ref}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block rounded-full"
        style={{ width: 6, height: 6, background: "var(--gold)" }}
      />
    </>
  );
}

// ----------------------------------------------------------------------------
// Scroll progress + back to top
// ----------------------------------------------------------------------------
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
    </motion.div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[var(--royal)] text-[var(--ivory)] shadow-[0_10px_30px_-5px_color-mix(in_oklab,var(--royal)_60%,transparent)] gold-border hover:bg-[var(--royal-deep)] transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------------------------------
// Magnetic button
// ----------------------------------------------------------------------------
function MagneticButton({
  as: As = "a" as any,
  className = "",
  children,
  ...props
}: any) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <As ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center gap-2 transition-transform duration-300 will-change-transform ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}

// ----------------------------------------------------------------------------
// Navbar
// ----------------------------------------------------------------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--royal)_35%,transparent)] border-b border-[color-mix(in_oklab,var(--gold)_25%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full text-[var(--gold)] gold-border bg-[color-mix(in_oklab,var(--royal-deep)_85%,transparent)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--royal-deep)]">
            Pooja <span className="text-gradient-gold">Mehandi</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm tracking-wide text-[var(--royal-deep)]/85 hover:text-[var(--royal-deep)] transition-colors"
            >
              {n.label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton
            href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="hidden md:inline-flex h-11 rounded-full px-5 text-sm font-medium text-[var(--royal-deep)] gold-border bg-gradient-to-r from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-soft)] shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--gold)_70%,transparent)] hover:brightness-[1.04]"
          >
            Book Now
          </MagneticButton>
          <button
            aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full gold-border bg-white/70 text-[var(--royal-deep)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-[color-mix(in_oklab,var(--gold)_25%,transparent)] backdrop-blur-xl bg-[color-mix(in_oklab,var(--ivory)_92%,transparent)]"
          >
            <div className="container-luxe py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="py-3 text-[var(--royal-deep)] border-b border-[color-mix(in_oklab,var(--gold)_15%,transparent)] last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center h-11 rounded-full px-5 text-sm font-medium text-[var(--royal-deep)] gold-border bg-[var(--gold)]"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ----------------------------------------------------------------------------
// Section header
// ----------------------------------------------------------------------------
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--rose)]">
      <span className="h-px w-8 bg-[var(--gold)]" />
      {children}
      <span className="h-px w-8 bg-[var(--gold)]" />
    </div>
  );
}

// ----------------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------------
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const ringRot = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const revealA = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const revealB = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const revealC = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="home" ref={ref} className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background florals */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--lavender)]/40 via-[var(--ivory)] to-[var(--ivory)]" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 text-[var(--gold)]/20"
          animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <MandalaOrnament size={520} />
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-24 text-[var(--rose)]/15"
          animate={{ rotate: -360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        >
          <MandalaOrnament size={460} />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)]" />
      </div>

      <div className="container-luxe grid lg:grid-cols-[1.05fr_1fr] items-center gap-12 lg:gap-16">
        {/* LEFT — portrait with revealed motifs */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[540px]">
            {/* Floating revealed mehandi artworks */}
            <motion.div
              style={{ opacity: revealA, x: useTransform(scrollYProgress, [0, 1], [-20, -60]), y: useTransform(scrollYProgress, [0, 1], [-10, -40]) }}
              className="absolute -left-6 -top-6 w-32 sm:w-44 aspect-square rounded-3xl overflow-hidden gold-border shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--royal)_60%,transparent)] rotate-[-6deg]"
            >
              <img src={m4} alt="" className="h-full w-full object-cover" loading="eager" />
            </motion.div>
            <motion.div
              style={{ opacity: revealB, x: useTransform(scrollYProgress, [0, 1], [20, 70]), y: useTransform(scrollYProgress, [0, 1], [-10, -30]) }}
              className="absolute -right-4 top-10 w-28 sm:w-40 aspect-[3/4] rounded-3xl overflow-hidden gold-border shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--royal)_60%,transparent)] rotate-[5deg]"
            >
              <img src={m2} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ opacity: revealC, x: useTransform(scrollYProgress, [0, 1], [-10, -40]), y: useTransform(scrollYProgress, [0, 1], [10, 60]) }}
              className="absolute -left-2 bottom-4 w-32 sm:w-44 aspect-[4/5] rounded-3xl overflow-hidden gold-border shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--royal)_60%,transparent)] rotate-[4deg]"
            >
              <img src={m8} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ opacity: revealA, x: useTransform(scrollYProgress, [0, 1], [10, 40]), y: useTransform(scrollYProgress, [0, 1], [20, 70]) }}
              className="absolute -right-6 bottom-0 w-28 sm:w-40 aspect-square rounded-3xl overflow-hidden gold-border shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--royal)_60%,transparent)] rotate-[-5deg]"
            >
              <img src={m5} alt="" className="h-full w-full object-cover" />
            </motion.div>

            {/* Decorative ring behind portrait */}
            <motion.div style={{ rotate: ringRot }} className="absolute inset-0 grid place-items-center text-[var(--gold)]/40 pointer-events-none">
              <MandalaOrnament size={520} className="max-w-full max-h-full" />
            </motion.div>

            {/* Portrait */}
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto h-full w-full overflow-hidden rounded-[2rem] gold-border shadow-[0_40px_100px_-30px_color-mix(in_oklab,var(--royal)_70%,transparent)]"
              data-cursor="image"
            >
              <img src={HERO_PORTRAIT} alt="Portrait of Pooja, bridal mehandi artist" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[var(--ivory)]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em]">
                  <Crown className="h-3.5 w-3.5 text-[var(--gold)]" />
                  Bridal Artist
                </div>
                <div className="flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="relative order-1 lg:order-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
            <SectionEyebrow>Pooja Mehandi · Chennai</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.6rem,6.4vw,4.8rem)] leading-[1.02] font-medium text-[var(--royal-deep)]"
          >
            Traditional <span className="italic text-gradient-gold">Elegance.</span>
            <br />
            Timeless <span className="italic text-[var(--rose)]">Bridal Art.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[var(--royal-deep)]/75"
          >
            Bespoke bridal mehandi crafted with 100% organic henna and an artist's eye for detail.
            From intricate South Indian motifs to contemporary Arabic flourishes — a luxury experience,
            delivered to your doorstep in Chennai.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-9 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { v: "3+", l: "Years" },
              { v: "200+", l: "Brides" },
              { v: "100%", l: "Organic" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-semibold text-[var(--royal-deep)]">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--rose)]">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noreferrer"
              className="h-13 px-7 py-4 rounded-full text-sm font-medium text-[var(--royal-deep)] gold-border bg-gradient-to-r from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-soft)] shadow-[0_14px_40px_-12px_color-mix(in_oklab,var(--gold)_70%,transparent)]"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </MagneticButton>
            <MagneticButton href="#gallery"
              className="h-13 px-7 py-4 rounded-full text-sm font-medium text-[var(--royal-deep)] gold-border bg-white/70 backdrop-blur"
            >
              View Gallery
            </MagneticButton>
            <MagneticButton href={`tel:${PHONE_TEL}`}
              className="h-13 px-6 py-4 rounded-full text-sm font-medium text-[var(--royal-deep)]/80 hover:text-[var(--royal-deep)]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// ABOUT
// ----------------------------------------------------------------------------
function About() {
  const features = [
    { icon: Crown, t: "Bridal Specialist", d: "Signature designs for the modern Indian bride." },
    { icon: Leaf, t: "100% Organic Henna", d: "Hand-prepared cones, skin-safe, deep stain." },
    { icon: Truck, t: "Doorstep Service", d: "Studio-grade artistry in the comfort of your home." },
    { icon: Palette, t: "Customised Motifs", d: "Stories, names, and heirloom patterns woven in." },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="absolute -left-32 top-20 text-[var(--gold)]/15 pointer-events-none">
        <PaisleyOrnament size={220} />
      </div>
      <div className="container-luxe grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto rounded-[2rem] overflow-hidden gold-border shadow-[0_30px_80px_-25px_color-mix(in_oklab,var(--royal)_55%,transparent)]" data-cursor="image">
            <img src={poojaAbout} alt="Pooja Mehandi artist" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/45 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:-right-8 glass-card rounded-2xl px-5 py-4 max-w-[230px]">
            <div className="flex items-center gap-2 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <p className="mt-2 text-sm text-[var(--royal-deep)]/80 italic">"Truly the most elegant bridal mehandi in Chennai."</p>
          </div>
        </motion.div>

        <div>
          <SectionEyebrow>About the Artist</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-[var(--royal-deep)]">
            An artist devoted to the <em className="text-gradient-gold not-italic">quiet luxury</em> of henna.
          </h2>
          <div className="hairline-gold mt-7 max-w-md" />
          <p className="mt-7 text-[var(--royal-deep)]/75 leading-relaxed">
            Based in Mylapore, Chennai, Pooja is a professional mehandi artist with over three years of bridal
            experience and 200+ happy clients. Each design is hand-drafted with patience, balancing traditional
            South Indian motifs with contemporary Arabic and Indo-Rajasthani styles.
          </p>
          <p className="mt-4 text-[var(--royal-deep)]/75 leading-relaxed">
            Every cone is freshly prepared from 100% organic henna for a rich, lasting stain — and every booking
            is treated as a private bridal commission.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-2xl gold-border bg-white/60 backdrop-blur px-5 py-5 hover:bg-white transition"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--lavender)] text-[var(--royal)] gold-border">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-lg text-[var(--royal-deep)]">{f.t}</div>
                <p className="mt-1 text-sm text-[var(--royal-deep)]/70 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// SERVICES
// ----------------------------------------------------------------------------
const SERVICES = [
  { icon: Crown,    t: "Bridal Mehandi",                d: "Full-arm couture bridal designs with the groom's initials, motifs, and storytelling details." },
  { icon: Sparkles, t: "Arabic Mehandi",                d: "Bold, free-flowing florals with deep contrast and statement negative space." },
  { icon: Flower2,  t: "South Indian Traditional",      d: "Geometric grids, lotuses, and temple-inspired classical motifs." },
  { icon: Heart,    t: "Engagement Mehandi",            d: "Romantic, elegant patterns crafted for ring ceremonies and pre-wedding events." },
  { icon: Baby,     t: "Baby Shower Mehandi",           d: "Soft, blessing-themed designs for godh bharai and seemantham celebrations." },
  { icon: PartyPopper, t: "Party Mehandi",              d: "Quick, chic patterns for cocktails, mehandi nights, and milestone parties." },
  { icon: Gift,     t: "Guest Mehandi",                 d: "On-site styling for your guests — a thoughtful keepsake of your celebration." },
  { icon: Sparkles, t: "Festival Mehandi",              d: "Karva Chauth, Diwali, Eid, Teej — seasonal artistry for every festive occasion." },
  { icon: Palette,  t: "Customised Mehandi",            d: "Bespoke designs woven around your story, jewellery, and outfit." },
  { icon: Leaf,     t: "Organic Henna Cones",           d: "Hand-prepared cones available for purchase with a rich, natural stain." },
  { icon: Truck,    t: "Doorstep Service",              d: "Premium at-home mehandi across Chennai with a complete artist setup." },
  { icon: Gem,      t: "Pre-Bridal Trials",             d: "Private consultations to design and approve your bridal look in advance." },
];

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--royal-deep)] text-[var(--ivory)] overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,var(--gold)_1px,transparent_0)] [background-size:24px_24px]" />
      <motion.div
        aria-hidden
        className="absolute -right-40 -top-40 text-[var(--gold)]/15 pointer-events-none"
        animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <MandalaOrnament size={620} />
      </motion.div>

      <div className="container-luxe relative">
        <div className="max-w-2xl">
          <SectionEyebrow><span className="text-[var(--gold-soft)]">Services</span></SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
            A complete <span className="text-gradient-gold">atelier</span> of mehandi services.
          </h2>
          <p className="mt-5 text-[var(--ivory)]/70 leading-relaxed">
            From intimate ring ceremonies to grand bridal commissions — every booking is treated with
            the same care, craft and confidentiality.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.t} idx={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, t, d, idx }: { icon: any; t: string; d: string; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (idx % 6) * 0.06 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative h-full rounded-2xl p-6 glass-dark transition-transform duration-300 will-change-transform overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)" }}
        />
        <div className="relative flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-[var(--gold)] gold-border bg-[color-mix(in_oklab,var(--royal)_60%,transparent)]">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl text-[var(--ivory)]">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ivory)]/70">{d}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// GALLERY
// ----------------------------------------------------------------------------
function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-luxe">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>The Gallery</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-[var(--royal-deep)] max-w-3xl">
            A curated archive of <em className="not-italic text-gradient-gold">bridal commissions</em>.
          </h2>
          <p className="mt-5 max-w-xl text-[var(--royal-deep)]/70">
            Thirty handpicked pieces from recent ceremonies — tap any image to view in full.
          </p>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {GALLERY.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.05 }}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl gold-border bg-white shadow-[0_18px_50px_-20px_color-mix(in_oklab,var(--royal)_40%,transparent)] relative"
              data-cursor="image"
              aria-label={`Open mehandi artwork ${i + 1}`}
            >
              <div className="relative">
                <img
                  src={img}
                  alt={`Mehandi artwork ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[var(--ivory)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs uppercase tracking-[0.28em]">Commission · {String(i + 1).padStart(2, "0")}</span>
                  <Sparkles className="h-4 w-4 text-[var(--gold)]" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-[var(--royal-deep)]/85 backdrop-blur-md p-4"
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={active}
              alt="Mehandi artwork"
              className="max-h-[88vh] max-w-[92vw] rounded-2xl gold-border shadow-2xl object-contain"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-[var(--ivory)] gold-border backdrop-blur hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ----------------------------------------------------------------------------
// TESTIMONIALS
// ----------------------------------------------------------------------------
const TESTIMONIALS = [
  {
    name: "Aishwarya R.",
    role: "Bride · Mylapore",
    text: "Pooja made my bridal day truly unforgettable. Her designs are so detailed and the stain came out incredibly deep — every cousin was stunned.",
  },
  {
    name: "Priya S.",
    role: "Bride · T. Nagar",
    text: "From the trial to the final session, everything felt premium. She wove our names and a tiny temple motif into the centre — absolutely magical.",
  },
  {
    name: "Meera K.",
    role: "Mother of the Bride",
    text: "We booked Pooja for the entire family. She's calm, punctual, and her henna is genuinely organic. The whole experience felt like a luxury salon at home.",
  },
  {
    name: "Divya N.",
    role: "Engagement · Adyar",
    text: "Elegant Arabic design that complemented my outfit perfectly. The compliments haven't stopped. Highly recommend for any bridal event in Chennai.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-b from-[var(--lavender)]/40 via-[var(--ivory)] to-[var(--lavender)]/30 overflow-hidden">
      <div aria-hidden className="absolute -right-32 bottom-10 text-[var(--rose)]/15 rotate-180">
        <PaisleyOrnament size={220} />
      </div>
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Words from Brides</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-[var(--royal-deep)]">
            Loved by <span className="text-gradient-gold">200+ brides</span>.
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl glass-card p-8 md:p-12 text-center"
            >
              <div className="flex items-center justify-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-display text-2xl md:text-[1.7rem] leading-snug italic text-[var(--royal-deep)]">
                "{t.text}"
              </p>
              <div className="mt-7 text-sm">
                <div className="font-semibold text-[var(--royal-deep)]">{t.name}</div>
                <div className="text-[var(--rose)] uppercase tracking-[0.24em] text-[10px] mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[var(--gold)]" : "w-3 bg-[var(--royal-deep)]/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// CONTACT
// ----------------------------------------------------------------------------
function Contact() {
  const items = [
    { icon: Phone,         label: "Call",      v: PHONE_DISPLAY,        href: `tel:${PHONE_TEL}` },
    { icon: MessageCircle, label: "WhatsApp",  v: PHONE_DISPLAY,        href: WHATSAPP_URL },
    { icon: Instagram,     label: "Instagram", v: INSTAGRAM_HANDLE,     href: INSTAGRAM_URL },
    { icon: MapPin,        label: "Studio",    v: "Mylapore, Chennai",  href: GOOGLE_MAPS_URL },
  ];
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-[var(--royal-deep)]">
              Reserve your <em className="not-italic text-gradient-gold">bridal date</em>.
            </h2>
            <p className="mt-6 text-[var(--royal-deep)]/75 leading-relaxed max-w-lg">
              Bookings open 3–6 months in advance for peak bridal season. Reach out on WhatsApp for the fastest
              response and a personalised consultation.
            </p>

            <div className="mt-10 space-y-4">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl gold-border bg-white/70 backdrop-blur p-5 hover:bg-white transition"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--lavender)] text-[var(--royal)] gold-border">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--rose)]">{it.label}</div>
                    <div className="font-display text-lg text-[var(--royal-deep)] truncate">{it.v}</div>
                  </div>
                  <span className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl p-10 md:p-12 bg-[var(--royal-deep)] text-[var(--ivory)] overflow-hidden gold-border"
          >
            <div aria-hidden className="absolute -top-20 -right-16 text-[var(--gold)]/20">
              <MandalaOrnament size={360} />
            </div>
            <div className="relative">
              <Crown className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 font-display text-3xl md:text-4xl leading-tight">
                The <span className="text-gradient-gold">Bridal Experience</span>
              </h3>
              <p className="mt-5 text-[var(--ivory)]/75 leading-relaxed">
                A private consultation, a custom design draft, premium organic henna, and a calm, focused
                session at your venue — every detail handled.
              </p>
              <div className="hairline-gold my-8" />
              <ul className="space-y-3 text-sm text-[var(--ivory)]/85">
                {["Private bridal consultation", "Custom design with personal motifs", "100% organic henna for deep stain", "Doorstep service across Chennai"].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                  className="h-12 px-6 rounded-full text-sm font-medium text-[var(--royal-deep)] gold-border bg-[var(--gold)]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </MagneticButton>
                <MagneticButton href={`tel:${PHONE_TEL}`}
                  className="h-12 px-6 rounded-full text-sm font-medium text-[var(--ivory)] gold-border bg-transparent hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="relative bg-[var(--royal-deep)] text-[var(--ivory)] pt-16 pb-8">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full text-[var(--gold)] gold-border">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl">Pooja <span className="text-gradient-gold">Mehandi</span></span>
            </div>
            <p className="mt-4 text-sm text-[var(--ivory)]/70 leading-relaxed max-w-xs">
              Bespoke bridal mehandi in Chennai. Traditional artistry, contemporary finish.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--gold-soft)]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ivory)]/80">
              {NAV_ITEMS.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-[var(--gold)] transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--gold-soft)]">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ivory)]/80">
              <li><a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--gold)]">{PHONE_DISPLAY}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">WhatsApp · {PHONE_DISPLAY}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">{INSTAGRAM_HANDLE}</a></li>
              <li>Mylapore, Chennai, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <div className="hairline-gold my-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--ivory)]/60">
          <div>© {new Date().getFullYear()} Pooja Mehandi. All rights reserved.</div>
          <div className="italic">Designed with elegance.</div>
        </div>
      </div>
    </footer>
  );
}

// ----------------------------------------------------------------------------
// Loading overlay
// ----------------------------------------------------------------------------
function LoadingOverlay() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 900); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[120] grid place-items-center bg-[var(--royal-deep)]"
        >
          <motion.div
            animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[var(--gold)]"
          >
            <MandalaOrnament size={120} />
          </motion.div>
          <div className="absolute bottom-24 font-display text-[var(--ivory)] tracking-[0.3em] text-sm uppercase">
            Pooja Mehandi
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------------------------------
// PAGE
// ----------------------------------------------------------------------------
function HomePage() {
  return (
    <div className="relative">
      <LoadingOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
