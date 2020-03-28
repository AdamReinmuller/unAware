import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import propTypes from 'prop-types';
import React from 'react';
import Meta from './Meta';
import Header from './Header';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightGrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const PageContainer = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const InnerContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const Page = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <PageContainer>
                <Meta />
                <Header />
                <InnerContainer>
                    <children />
                </InnerContainer>
            </PageContainer>
        </ThemeProvider>
    );
};

Page.propTypes = {
    children: propTypes.object
};

export default Page;
