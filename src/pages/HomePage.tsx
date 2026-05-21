import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BlurIn } from '@/components/BlurIn'
import { SplitText } from '@/components/SplitText'

const MARQUEE_TEXT =
  'Handcrafted Couture  ·  Made to Measure  ·  Paris Atelier  ·  Luxury Bridal  ·  Spring 2026  ·  Timeless Elegance  ·  '

const GOWNS = [
  { name: 'The Isabella',   img: '/images/dress1.jpg', category: 'Ball Gown', id: 'isabella' },
  { name: 'The Celeste',    img: '/images/dress2.jpg', category: 'Mermaid',   id: 'celeste' },
  { name: 'The Aurelia',    img: '/images/dress3.jpg', category: 'A-Line',    id: 'aurelia' },
  { name: 'The Seraphine',  img: '/images/dress4.jpg', category: 'Sheath',    id: 'seraphine' },
  { name: 'The Evangeline', img: '/images/dress5.jpg', category: 'Boho',      id: 'evangeline' },
  { name: 'The Vivienne',   img: '/images/dress6.jpg', category: 'Ball Gown', id: 'vivienne' },
]

const PROCESS = [
  {
    num: '01',
    title: 'Private Consultation',
    desc: 'A one-on-one session to understand your vision, silhouette preference, and wedding aesthetic.',
  },
  {
    num: '02',
    title: 'Bespoke Creation',
    desc: 'Master artisans hand-craft your gown using the finest imported silks, lace, and embellishments.',
  },
  {
    num: '03',
    title: 'Perfect Fitting',
    desc: 'Two dedicated fittings ensure your gown is a flawless second skin on your most important day.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'The most breathtaking gown I could have imagined. Every single detail was pure perfection.',
    author: 'Priya R.',
    city: 'Mumbai',
  },
  {
    quote: 'The fitting experience was intimate, luxurious, and completely unforgettable.',
    author: 'Sana K.',
    city: 'Dubai',
  },
  {
    quote: 'I wore The Vivienne and felt like royalty. Every guest was absolutely speechless.',
    author: 'Meera J.',
    city: 'Bangalore',
  },
]

function MarqueeStrip() {
  return (
    <div className="overflow-hidden py-5 border-y border-aura-border bg-aura-white">
      <motion.div
        className="inline-flex"
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-display italic text-xl text-aura-black/40 tracking-widest flex-shrink-0 pr-20"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const ease = [0.16, 1, 0.3, 1] as const

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])

  return (
    <div className="relative">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y }}>
          <img
            src="/images/dress2.jpg"
            alt="Bridal editorial"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/55" />

        <div className="absolute inset-0 flex items-end z-10">
          <div className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl w-full mx-auto">
            <BlurIn delay={0.2} duration={0.6}>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6">
                Spring / Summer 2026 Collection
              </p>
            </BlurIn>

            <h1
              className="font-display text-white font-light leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              <span className="block">
                <SplitText text="Where Elegance" delay={0.3} stagger={0.05} duration={0.7} />
              </span>
              <span className="block italic">
                <SplitText text="Becomes Eternal" delay={0.5} stagger={0.05} duration={0.7} />
              </span>
            </h1>

            <BlurIn delay={0.9} duration={0.6}>
              <p className="font-body text-base font-light text-white/70 max-w-sm mt-6 leading-loose">
                Handcrafted couture for the most important day of your life.
              </p>
            </BlurIn>

            <BlurIn delay={1.1} duration={0.6}>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/collections"
                  className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/70 text-white font-body text-sm tracking-wider transition-all duration-500 hover:bg-white hover:text-aura-black"
                >
                  Explore Collection
                </Link>
                <Link
                  to="/book-fitting"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-aura-gold text-white font-body text-sm tracking-wider transition-all duration-500 hover:bg-white hover:text-aura-black"
                >
                  Book a Fitting
                </Link>
              </div>
            </BlurIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <motion.div
            className="w-px h-10 bg-white/30 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-aura-gold"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-body text-[10px] uppercase tracking-[0.3em] text-white/40"
          >
            Scroll
          </motion.p>
        </div>
      </section>

      {/* ── Marquee strip ───────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── Editorial Spotlight ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-aura-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease }}
            >
              <img
                src="/images/dress2.jpg"
                alt="Featured gown"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aura-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-white/60 mb-1">
                  Featured
                </p>
                <p className="font-display text-2xl text-white font-light">The Celeste</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease }}
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-aura-gold mb-6">
                New Season
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-aura-black leading-[1.1] mb-8">
                Couture that
                <br />
                <span className="italic">tells your story</span>
              </h2>
              <p className="font-body text-sm text-aura-gray leading-loose mb-4">
                Each Third Label gown begins as a single conversation — a moment where your vision
                meets our craft. Over months of meticulous work, our atelier transforms the
                finest silks, lace, and embellishments into a garment that exists nowhere
                else in the world.
              </p>
              <p className="font-body text-sm text-aura-gray leading-loose mb-10">
                Worn by brides across India, the Middle East, and beyond, our gowns carry
                with them stories of love, joy, and the quiet beauty of a singular moment.
              </p>
              <Link
                to="/atelier"
                className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-aura-black hover:text-aura-gold transition-colors duration-300 group"
              >
                Discover Our Atelier
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Collection Grid ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-aura-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-aura-gold mb-3">
                The Collection
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-aura-black">
                Six Gowns.
                <br />
                <span className="italic">Infinite Dreams.</span>
              </h2>
            </div>
            <Link
              to="/collections"
              className="hidden md:inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-aura-gray hover:text-aura-gold transition-colors duration-300 group"
            >
              View All
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GOWNS.map((gown, i) => (
              <motion.div
                key={gown.id}
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                  i === 0 || i === 3 ? 'aspect-[2/3]' : i === 2 || i === 5 ? 'aspect-[3/5]' : 'aspect-[3/4]'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.9, delay: i * 0.08, ease }}
              >
                <Link to={`/product/${gown.id}`}>
                  <img
                    src={gown.img}
                    alt={gown.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aura-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">
                      {gown.category}
                    </p>
                    <p className="font-display text-lg md:text-xl text-white font-light">
                      {gown.name}
                    </p>
                    <p className="font-body text-[11px] text-white/0 group-hover:text-white/70 transition-colors duration-500 mt-1.5 uppercase tracking-widest">
                      Shop Now →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/collections"
              className="inline-flex items-center font-body text-sm uppercase tracking-widest text-aura-black hover:text-aura-gold transition-colors duration-300"
            >
              View All Gowns →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Process ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-aura-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-aura-gold mb-4">
              The Third Label Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Crafted with
              <br />
              <span className="italic">intention</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease }}
                className="text-center md:text-left"
              >
                <p className="font-display text-7xl text-aura-gold/15 font-light leading-none mb-4">
                  {step.num}
                </p>
                <h3 className="font-display text-2xl text-white font-light mb-4">{step.title}</h3>
                <div className="w-8 h-px bg-aura-gold mx-auto md:mx-0 mb-5" />
                <p className="font-body text-sm text-white/50 leading-loose">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width split editorial ───────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
          <motion.img
            src="/images/dress3.jpg"
            alt="Atelier"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease }}
          />
        </div>
        <div className="bg-aura-ivory flex items-center px-10 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-aura-gold mb-6">
              By Appointment
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-aura-black leading-[1.1] mb-8">
              Your dream gown
              <br />
              <span className="italic">awaits you</span>
            </h2>
            <p className="font-body text-sm text-aura-gray leading-loose mb-10 max-w-sm">
              Every journey begins with a private fitting. Our consultants guide you through
              the entire process — from silhouette selection to final alterations — with
              care, patience, and expertise.
            </p>
            <Link
              to="/book-fitting"
              className="inline-flex items-center px-10 py-4 bg-aura-black text-white font-body text-sm uppercase tracking-widest rounded-full hover:bg-aura-gold transition-all duration-500"
            >
              Book Your Fitting
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-aura-ivory">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-aura-gold mb-4">
              Love Stories
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-aura-black">
              Brides who wore <span className="italic">The Third Label</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: i * 0.12, ease }}
                className="text-center"
              >
                <p className="font-display text-6xl text-aura-gold/25 leading-none mb-3">"</p>
                <p className="font-display text-lg md:text-xl text-aura-black font-light leading-relaxed italic mb-6">
                  {t.quote}
                </p>
                <div className="w-8 h-px bg-aura-gold mx-auto mb-4" />
                <p className="font-body text-xs uppercase tracking-[0.2em] text-aura-gray">
                  {t.author} · {t.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal image gallery strip ──────────────────────── */}
      <section className="py-16 bg-aura-white overflow-hidden">
        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-2">
          {[...GOWNS].reverse().map((gown, i) => (
            <motion.div
              key={gown.id}
              className="flex-shrink-0 w-56 md:w-72 aspect-[2/3] overflow-hidden rounded-sm"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
              whileHover={{ y: -8 }}
            >
              <img
                src={gown.img}
                alt={gown.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Booking CTA Banner ──────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/images/dress6.jpg"
          alt="Book a fitting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-aura-black/72" />
        <motion.div
          className="relative z-10 text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-aura-gold mb-6">
            Begin Your Story
          </p>
          <h2
            className="font-display font-light text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            Your gown is
            <br />
            <span className="italic">waiting to be made</span>
          </h2>
          <p className="font-body text-sm text-white/55 leading-loose mb-12 max-w-md mx-auto">
            Every Aura gown is one of a kind — crafted exclusively for you. Reserve your
            private consultation and begin the most beautiful chapter of your journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book-fitting"
              className="inline-flex items-center px-10 py-4 rounded-full border border-aura-gold text-aura-gold font-body text-sm uppercase tracking-widest hover:bg-aura-gold hover:text-white transition-all duration-500"
            >
              Book a Private Fitting
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center px-10 py-4 rounded-full border border-white/30 text-white/70 font-body text-sm uppercase tracking-widest hover:border-white hover:text-white transition-all duration-500"
            >
              View Collection
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
