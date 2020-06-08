import { css } from 'styled-components';

enum colors {
    white = '#fff',
    black = '#000',
}

enum fontSizes {
    m = '14px',
}
enum fontFamilies {}

enum spacing {
    m = '10px',
    l = '16px',
}

enum lineHeights {
    m = '16px',
}
enum zIndexes {}

enum shadows {}

export enum breakpoints {
    s = '400px',
}

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
