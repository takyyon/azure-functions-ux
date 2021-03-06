import { ThemeExtended } from './SemanticColorsExtended';
import { style } from 'typestyle';

export const iconStyles = (theme: ThemeExtended) =>
  style({
    $nest: {
      '.msportalfx-svg-palette-blue': { fill: '#3999c6' },
      '.msportalfx-svg-c01': { fill: '#fff' },
      '.msportalfx-svg-c02': { fill: '#e5e5e5' },
      '.msportalfx-svg-c03': { fill: '#a0a1a2' },
      '.msportalfx-svg-c04': { fill: '#7a7a7a' },
      '.msportalfx-svg-c05': { fill: '#3e3e3e' },
      '.msportalfx-svg-c06': { fill: '#1e1e1e' },
      '.msportalfx-svg-c08': { fill: '#ba141a' },
      '.msportalfx-svg-c10': { fill: '#ff8c00' },
      '.msportalfx-svg-c11': { fill: '#fcd116' },
      '.msportalfx-svg-c12': { fill: '#fee087' },
      '.msportalfx-svg-c13': { fill: '#b8d432' },
      '.msportalfx-svg-c14': { fill: '#7fba00' },
      '.msportalfx-svg-c15': { fill: '#59b4d9' },
      '.msportalfx-svg-c16': { fill: '#3999c6' },
      '.msportalfx-svg-c17': { fill: '#804998' },
      '.msportalfx-svg-c19': { fill: '#0072c6' },
      '.msportalfx-svg-c20': { fill: '#68217a' },
      '.msportalfx-svg-c22': { fill: '#e81123' },
      '.msportalfx-svg-rotate360': {
        '-webkit-animation': 'ImageRotation 1.45s infinite linear',
        animation: 'ImageRotation 1.45s infinite linear',
      },
      '.svg-monochromatic': {
        fill: theme.semanticColors.monochromaticIcon,
      },
    },
  });
