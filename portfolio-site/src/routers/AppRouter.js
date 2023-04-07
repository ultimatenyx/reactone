import React from 'react';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioDetailPage from '../components/PortfolioDetailPage';
import NotFoundPage from '../components/NotFoundPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDashboardPage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioDetailPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;