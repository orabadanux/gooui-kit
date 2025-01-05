// A palette of colors used across the UI library. These colors serve as the foundation for all themes.
export const colorPalette = {
    // Blue palette
    'blue-50': '#E9EFFD',
    'blue-100': '#D3E0FB',
    'blue-200': '#BED0F9',
    'blue-300': '#A8C1F7',
    'blue-400': '#7CA1F3',
    'blue-500': '#5182EF',
    'blue-600': '#2563EB',
    'blue-700': '#1E4FBC',
    'blue-800': '#163B8D',
    'blue-900': '#0F285E',
    'blue-950': '#0B1E47',

    // Slate palette
    'slate-50': '#F8FAFC',
    'slate-100': '#F1F5F9',
    'slate-200': '#E2E8F0',
    'slate-300': '#CBD5E1',
    'slate-400': '#94A3B8',
    'slate-500': '#64748B',
    'slate-600': '#475569',
    'slate-700': '#334155',
    'slate-800': '#1E293B',
    'slate-900': '#0F172A',
    'slate-950': '#020617',

    // Purple palette
    'purple-50': '#F3EFFE',
    'purple-100': '#E8DEFD',
    'purple-200': '#DCCEFC',
    'purple-300': '#D1BEFB',
    'purple-400': '#B99DFA',
    'purple-500': '#A27DF8',
    'purple-600': '#8B5CF6',
    'purple-700': '#724ACD',
    'purple-800': '#5938A4',
    'purple-900': '#40267A',
    'purple-950': '#331D66',

    // White palette
    'white-50': '#FFFFFF',
    'white-opacity-60': 'rgb(255,255,255,0.6)',
    'white-opacity-80': 'rgb(255,255,255,0.8)',
 
    // Black palette
    'black-950': '#000000',
    'black-opacity-40': 'rgb(0,0,0,0.4)',
    'black-opacity-20': 'rgb(0,0,0,0.2)',
    'black-opacity-10': 'rgb(0,0,0,0.1)',

    // Red palette
    'red-50': '#EF4444',
    
    // Green palette
    'green-50': '#22C55E',

    // Yellow palette
    'yellow-50': '#FACC15',
};

// Defines semantic colors mapped to specific UI purposes, such as backgrounds and text.
export const colors = {
    // Background primary colors
    'color-background-primary-01-default': colorPalette['slate-950'],
    'color-background-primary-01-hover': colorPalette['slate-950'],
    'color-background-primary-01-pressed': colorPalette['slate-950'],
    'color-background-primary-01-disabled': colorPalette['slate-600'],

    'color-background-primary-02-default': colorPalette['blue-600'],
    'color-background-primary-02-hover': colorPalette['blue-500'],
    'color-background-primary-02-pressed': colorPalette['blue-700'],
    'color-background-primary-02-disabled': colorPalette['blue-400'],

    // Background neutral colors
    'color-background-neutral-01-default': colorPalette['white-50'],
    'color-background-neutral-01-pressed': colorPalette['slate-100'],
    'color-background-neutral-01-disabled': colorPalette['slate-200'],
    'color-background-neutral-02-default': colorPalette['slate-100'],
    'color-background-neutral-02-pressed': colorPalette['slate-200'],
    'color-background-neutral-02-disabled': colorPalette['slate-300'],

    // Background semantic colors
    'color-background-semantic-error': colorPalette['red-50'],
    'color-background-semantic-alert': colorPalette['yellow-50'],
    'color-background-semantic-success': colorPalette['green-50'],
    'color-background-semantic-info': colorPalette['blue-500'],

    // Overlay colors
    'color-overlay-primary': colorPalette['black-opacity-40'],

    // Fill text colors
    'color-fill-text-primary-01-default': colorPalette['white-50'],
    'color-fill-text-primary-01-hover': colorPalette['white-50'],
    'color-fill-text-primary-01-pressed': colorPalette['slate-300'],
    'color-fill-text-primary-01-disabled': colorPalette['slate-300'],

    // Fill text neutral colors
    'color-fill-text-neutral-primary': colorPalette['slate-950'],
    'color-fill-text-neutral-secondary': colorPalette['slate-800'],
    'color-fill-text-neutral-tertiary': colorPalette['slate-600'],
    'color-fill-text-neutral-placeholder': colorPalette['slate-500'],
    'color-fill-text-neutral-divider': colorPalette['slate-200'],
    'color-fill-text-neutral-border': colorPalette['slate-200'],

    // Fill text semantic colors
    'color-fill-text-semantic-error': colorPalette['red-50'],
    'color-fill-text-semantic-alert': colorPalette['yellow-50'],
    'color-fill-text-semantic-success': colorPalette['green-50'],
    'color-fill-text-semantic-info': colorPalette['blue-500'],

    // Fill icon colors
    'color-fill-icon-primary-01-default': colorPalette['white-50'],
    'color-fill-icon-primary-01-hover': colorPalette['white-50'],
    'color-fill-icon-primary-01-pressed': colorPalette['slate-300'],
    'color-fill-icon-primary-01-disabled': colorPalette['slate-300'],
    'color-fill-icon-primary-02-default': colorPalette['slate-950'],
    'color-fill-icon-primary-02-hover': colorPalette['slate-950'],
    'color-fill-icon-primary-02-pressed': colorPalette['slate-950'],
    'color-fill-icon-primary-02-disabled': colorPalette['slate-300'],

    // Fill icon neutral colors
    'color-fill-icon-neutral-01-default': colorPalette['white-50'],
    'color-fill-icon-neutral-01-pressed': colorPalette['slate-100'],
    'color-fill-icon-neutral-01-disabled': colorPalette['slate-200'],
    'color-fill-icon-neutral-02-default': colorPalette['slate-100'],
    'color-fill-icon-neutral-02-pressed': colorPalette['slate-200'],
    'color-fill-icon-neutral-02-disabled': colorPalette['slate-300'],

    // Fill icon semantic colors
    'color-fill-icon-semantic-error': colorPalette['red-50'],
    'color-fill-icon-semantic-alert': colorPalette['yellow-50'],
    'color-fill-icon-semantic-success': colorPalette['green-50'],
    'color-fill-icon-semantic-info': colorPalette['blue-500'],

    // Stroke colors
    'color-stroke-primary-01-default': colorPalette['slate-950'],
    'color-stroke-primary-01-pressed': colorPalette['slate-300'],
    'color-stroke-primary-01-disabled': colorPalette['slate-600'],

    // Stroke neutral colors
    'color-stroke-neutral-default': colorPalette['slate-200'],
    'color-stroke-neutral-pressed': colorPalette['slate-300'],
    'color-stroke-neutral-disabled': colorPalette['slate-100'],

    // Stroke semantic colors
    'color-stroke-semantic-error': colorPalette['red-50'],
    'color-stroke-semantic-alert': colorPalette['yellow-50'],
    'color-stroke-semantic-success': colorPalette['green-50'],
    'color-stroke-semantic-info': colorPalette['blue-500'],
};