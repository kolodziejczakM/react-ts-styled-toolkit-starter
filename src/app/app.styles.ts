import styled from 'styled-components';
import { theme, breakpoints } from '@/common/theme';

export const Container = styled.section`
    display: grid;
    min-height: 100%;
    padding: 0 ${theme.spacing.m};
    background: #f0f;
    grid-template-rows: auto 1fr auto;

    @media (min-width: ${breakpoints.s}) {
        background: #fff;
    }
`;

export const Header = styled.header``;

export const Footer = styled.footer``;

export const Page = styled.main``;
