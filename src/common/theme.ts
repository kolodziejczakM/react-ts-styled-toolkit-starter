import { css } from 'styled-components';

enum colors {
    white = '#fff',
    black = '#000',
}

enum fontSizes {
    m = '14px',
}
enum fontFamilies {}

enum spacing {}

enum lineHeights {
    m = '16px',
}
enum zIndexes {}

enum shadows {}

export enum breakpoints {}

export const media = {
    gte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (min-width: ${breakpoint}) {
        ${styles}
    }
`,
    lte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (max-width: ${breakpoint}) {
        ${styles}
    }
`,
} as const;

export const theme = {
    colors,
    breakpoints,
    fontSizes,
    lineHeights,
    fontFamilies,
    spacing,
    zIndexes,
    shadows,
} as const;

const textM = css`
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
`;

export const typography = {
    textM,
} as const;
