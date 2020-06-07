import React from 'react';
import { Container, Header, Page, Footer } from './app.styles';
import { GlobalStyles } from '@/global.styles';
import { Router } from '@/modules/router/components/router';
import { Route } from '@/modules/router/components/route';
import { Switch } from '@/modules/router/components/switch';
import { Link } from '@/modules/router/components/link';
import { Home } from '@/routes/home';
import { About } from '@/routes/about';

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Router>
                    <Header>
                        <Link to="/">Home/</Link>
                        <Link to="/about">About/</Link>
                    </Header>
                    <Page>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Page>
                    <Footer>Copyright </Footer>
                </Router>
            </Container>
        </>
    );
};
