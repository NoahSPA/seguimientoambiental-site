/** @type {import('tailwindcss').Config} */
const hexToRgb = (hex) => {
  const normalized = hex.replace('#', '').trim()
  const full = normalized.length === 3
    ? normalized.split('').map((c) => c + c).join('')
    : normalized

  const intVal = parseInt(full, 16)
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  }
}

const clamp255 = (n) => Math.max(0, Math.min(255, Math.round(n)))

const rgbToHex = ({ r, g, b }) => {
  const toHex = (n) => clamp255(n).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// weight = proporción de `toHex` (0..1)
const mixHex = (fromHex, toHex, weight) => {
  const from = hexToRgb(fromHex)
  const to = hexToRgb(toHex)
  const w = Math.max(0, Math.min(1, weight))
  return rgbToHex({
    r: from.r + (to.r - from.r) * w,
    g: from.g + (to.g - from.g) * w,
    b: from.b + (to.b - from.b) * w,
  })
}

// Genera una escala 50..950 manteniendo el color base en 600
const scaleFrom600 = (base600) => ({
  50: mixHex(base600, '#ffffff', 0.9),
  100: mixHex(base600, '#ffffff', 0.8),
  200: mixHex(base600, '#ffffff', 0.65),
  300: mixHex(base600, '#ffffff', 0.5),
  400: mixHex(base600, '#ffffff', 0.35),
  500: mixHex(base600, '#ffffff', 0.2),
  600: base600,
  700: mixHex(base600, '#000000', 0.15),
  800: mixHex(base600, '#000000', 0.3),
  900: mixHex(base600, '#000000', 0.45),
  950: mixHex(base600, '#000000', 0.6),
})

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores basada en el logo
        // Primario: #325675
        // Secundario: #9ec248
        primary: scaleFrom600('#325675'),
        accent: scaleFrom600('#9ec248'),
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
