// Maps size tokens to stroke sizes for elements like borders or strokes in icons.
export const strokeSizes = {
    'size-100': 'strokeSize-10',
    'size-300': 'strokeSize-25',
    'size-400': 'strokeSize-50',
    'size-500': 'strokeSize-75',
    'size-800': 'strokeSize-100',
    'size-900': 'strokeSize-150',
  } as const;

// Actual stroke width values corresponding to the stroke sizes.
export const strokeWidths = {
    'strokeSize-10': 1.2,
    'strokeSize-25': 1.6,
    'strokeSize-50': 2.0,
    'strokeSize-75': 2.4,
    'strokeSize-100': 3.0,
    'strokeSize-150': 4.0,
  } as const;