/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        backdropFadeIn: 'backdropFadeIn 400ms ease-in-out',
        backdropFadeOut: 'backdropFadeOut 400ms ease-in-out',
        eventPreviewSlide: 'eventPreviewSlide 400ms ease-in-out',
        eventPreviewSlideOut: 'eventPreviewSlideOut 400ms ease-in-out',
        heroFadeIn: 'heroFadeIn 500ms ease-in-out',
        heroWave: 'waveSlideInUp 400ms ease-in-out',
      },
      backgroundColor: {
        darkBlue: "#0d0a23",
        periwinkle: "#C5BBEC"
      },
      backgroundImage: {
        btnGradient: 'linear-gradient(to right, #3a3def, #47d0fa)'
      },
      backgroundSize: {
        xDouble: '200% 100%',
      },
      boxShadow: {
        btnShadow: '0 0 1rem 0.5rem rgba(71, 202, 255, 0.4)'
      },
      gap: {
        badge: 'clamp(0.4rem, 0.2rem + 0.5vw, 0.75rem)',
      },
      transitionDelay: {
        600: '600ms',
        900: '900ms'
      },
      fontFamily: {
        dm: 'DM Mono',
        geo: 'Geologica',
        robot: 'Roboto'
      },
      fontSize: {
        badge: "clamp(0.7rem, 0.4rem + 1vw, 1rem)",
        contactTextLeft: "clamp(3rem, 2rem + 4vw, 6rem)",
        eventCardPara: "clamp(0.85rem, 0.7rem + 0.5vw, 1rem)",
        eventCardTitle: "clamp(0.75rem, 0.75rem + 0.75vw, 1.2rem)",
        eventPreviewTitle: "clamp(1.5rem, 1rem + 2vw, 2.5rem)",
        eventPreviewHeading: "clamp(1.2rem, 0.9rem + 0.75vw, 1.5rem)",
        eventPreviewPara: "clamp(0.9rem, 0.5rem + 0.5vw, 1.2rem)",
        eventsHeading: "clamp(1.7rem, 1.4rem + 0.75vw, 2.2rem)",
        eventsSubheading: "clamp(0.9rem, 0.75rem + 0.5vw, 1.2rem)",
        heroHeading: "clamp(1.3rem, 1rem + 1vw, 2.5rem)",
        heroSubheading: "clamp(1rem, 0.5rem + 1vw, 1.3rem)",
        projectCardBtns: "clamp(0.75rem, 0.5rem + 1vw, 1rem)",
        projectCardDescription: "clamp(0.95rem, 0.5rem + 1vw, 1.1rem)",
        projectCardHedaing: "clamp(1.15rem, 0.75rem + 1.5vw, 2rem)",
        projectsHeading: "clamp(1.2rem, 1rem + 2vw, 2.5rem)",
        projectsSubheading: "clamp(0.9rem, 0.5rem + 1.25vw, 1.5rem)",
      },
      keyframes: {
        backdropFadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        backdropFadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        eventPreviewSlide: {
          from: {
            transform: 'translateY(100%) scale(0.5)',
            opacity: '0',
            filter: 'blur(1rem)',
          }, 
          to: {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
            filter: 'blur(0)',
          }
        },
        eventPreviewSlideOut: {
          from: {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
            filter: 'blur(0)',
          }, 
          to: {
            transform: 'translateY(-100%) scale(0.5)',
            opacity: '0',
            filter: 'blur(1rem)',
          }
        },
        heroFadeIn: {
          from: { opacity: 0 }, 
          to: { opacity: 1 }
        },
        waveSlideInUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' }
        },        
      }, 
      lineHeight: {
        contactTextLeft: "clamp(4rem, 2.5rem + 2vw, 5rem)"
      },
      minHeight: {
        minHeroHeight: "clamp(70vh, 55vh + 20vw, 100vh)",
      },
      margin: {
        contactLinks: "clamp(1rem, 0.5rem + 1.5vw, 2rem)",
        eventPreviewTitle: "clamp(1.5rem, 1rem + 2vw, 3rem)",
        eventsCards: 'clamp(3rem, 2rem + 3vw, 5rem)',
        projectCard: "clamp(0.5rem, 0.3rem + 1vw, 1rem)",
        projectCardCta: "clamp(0.5rem, 0.25rem + 1.5vw, 2rem)",
      },
      letterSpacing: {
        ctaBtn: '1.5px'
      }, 
      spacing: {
        miksaa: 'clamp(4%, 2% + 5vw, 8%)'
      },
      width: {
        atropos: 'clamp(15rem, 10rem + 15vw, 30rem)',
      }
    },
  },
  plugins: [],
}

