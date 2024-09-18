import { tv } from 'tailwind-variants';

// Colors
export const colors = {
  primary: '#e17e99', // Lullipop Pink - bold and unique for the brand
  secondary: '#07F2C7', // Lullipop Teal - fresh and playful, for contrast
  background: '#FAF8F6', // Ivory White - soft and luxurious canvas
  text: '#2E2E2E', // Deep Charcoal - elegant, modern text color
  highlight: '#D4AF37', // Champagne Gold - luxury accent for exclusive items
};

// Typography (This must be defined before it is used)
export const typography = {
  fontFamily: "'Inter', sans-serif", // Clean and modern typography for luxury feel
  fontSize: {
    xs: 'text-xs', // Subtle text, small details
    sm: 'text-sm', // Body text and labels
    base: 'text-base', // Default font size for most content
    lg: 'text-lg', // Larger text for headings and important info
    xl: 'text-xl', // Prominent headers, luxury product titles
    '2xl': 'text-2xl', // Main section titles
    '3xl': 'text-3xl', // Main page headers and hero titles
    '4xl': 'text-4xl', // Hero section, top-tier messaging
    '5xl': 'text-5xl', // Large attention-grabbing titles (rare)
  },
  fontWeight: {
    regular: 'font-normal', // Standard for body text
    medium: 'font-medium', // Slightly bolder for subtle emphasis
    bold: 'font-bold', // For important text, headings
    semibold: 'font-semibold', // For use in buttons and call-to-actions
  },
  lineHeight: {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed', // Spacious, elegant feel in text-heavy sections
    snug: 'leading-snug', // Tighter for headers and high-contrast areas
  },
};

// Title Variants (Dynamic title styling)
export const title = tv({
  base: 'tracking-tight font-semibold',
  variants: {
    color: {
      primary: `text-[${colors.primary}]`,
      secondary: `text-[${colors.secondary}]`,
      text: `text-[${colors.text}]`,
    },
    size: {
      sm: typography.fontSize.sm,
      md: typography.fontSize['2xl'], // Default size for title
      lg: typography.fontSize['3xl'],
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'text',
  },
});

// Subtitle Variants (Dynamic subtitle styling)
export const subtitle = tv({
  base: 'tracking-tight',
  variants: {
    color: {
      primary: `text-[${colors.primary}]`,
      secondary: `text-[${colors.secondary}]`,
      text: `text-[${colors.text}]`,
    },
    size: typography.fontSize,
    weight: typography.fontWeight,
  },
  defaultVariants: {
    size: 'base',
    color: 'text',
    weight: 'regular',
  },
});

// Spacing (Luxury emphasis on generous white space)
export const spacing = {
  xs: '0.25rem', // Tiny spacing for small details
  sm: '0.5rem', // Small but noticeable space
  base: '1rem', // Default padding/margins for clean layouts
  lg: '1.5rem', // For more prominent space between sections
  xl: '2rem', // Luxurious breathing room
  '2xl': '3rem', // Wide spacing for high-end aesthetic
  '3xl': '4rem', // Even more space for hero sections or important content
};

// Shadows (For high-end depth and emphasis)
export const shadows = {
  soft: '0 2px 4px rgba(0, 0, 0, 0.05)', // Subtle shadow for delicate depth
  medium: '0 4px 8px rgba(0, 0, 0, 0.1)', // Medium shadow for cards and containers
  strong: '0 6px 12px rgba(0, 0, 0, 0.2)', // Strong shadow for hero sections and pop-ups
};

// Radii (For a soft, premium look)
export const radii = {
  none: '0', // Sharp edges (rare, for minimal elements)
  sm: '0.125rem', // Slightly rounded edges for subtle softness
  base: '0.25rem', // Standard rounded edges
  lg: '0.5rem', // Larger rounded corners for modern appeal
  xl: '1rem', // Smooth, luxurious rounding for containers
  full: '9999px', // Fully rounded for buttons or avatars (pill shapes)
};

// Button Variants (Dynamic buttons with Lullipop branding)
export const button = tv({
  base: 'px-4 py-2 rounded-lg font-semibold transition-all duration-200 ease-in-out',
  variants: {
    color: {
      primary: `bg-[${colors.primary}] text-white hover:bg-[#d06682]`, // Luxurious Lullipop Pink with soft hover
      secondary: `bg-[${colors.secondary}] text-[${colors.text}] hover:bg-[#06d3a5]`, // Lullipop Teal for fresh accents
      highlight: `bg-[${colors.highlight}] text-white hover:bg-[#c3a332]`, // Champagne Gold for exclusive features
    },
    size: {
      sm: 'text-sm py-1 px-3', // Smaller, refined buttons for subtle CTAs
      md: 'text-base py-2 px-4', // Medium buttons, default for general use
      lg: 'text-lg py-3 px-5', // Larger buttons for more prominent actions
    },
    fullWidth: {
      true: 'w-full', // Full-width button option for mobile or emphasis
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

// Link Variants (Tailored link styles with branding colors)
export const link = tv({
  base: 'font-semibold underline transition-all duration-200 ease-in-out',
  variants: {
    color: {
      primary: `text-[${colors.primary}] hover:text-[#d06682]`, // Lullipop Pink with hover effect
      secondary: `text-[${colors.secondary}] hover:text-[${colors.primary}]`, // Teal with hover changing to pink
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

// Text Variants (Luxurious and flexible text styling)
export const text = tv({
  base: 'tracking-tight',
  variants: {
    color: {
      primary: `text-[${colors.primary}]`,
      secondary: `text-[${colors.secondary}]`,
      text: `text-[${colors.text}]`,
    },
    size: typography.fontSize,
    weight: typography.fontWeight,
  },
  defaultVariants: {
    size: 'base',
    color: 'text',
    weight: 'regular',
  },
});
