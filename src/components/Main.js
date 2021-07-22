import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import SiteSearchPage from '../screens/SiteSearchPage';
import AddEventPage from '../screens/AddEventPage';
import AddSitePage from '../screens/AddSitePage';
import DetailedSite from './DetailedSite';
import EventSearchPage from '../screens/EventSearchPage';
import ProfilePage from '../screens/ProfilePage';
import DetailedEvent from './DetailedEvent';
import BuyGemsPage from '../screens/BuyGemsPage';

export default function Main() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main>
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sites" component={SiteSearchPage} />
        <Route exact path="/sites/:id" component={DetailedSite} />
        <Route path="/events" component={EventSearchPage} />
        <Route exact path="/events/:id" component={DetailedEvent} />
        <Route path="/add-event" component={AddEventPage} />
        <Route path="/add-site" component={AddSitePage} />
        <Route path="/buy-gems" component={BuyGemsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        {/* <Route path="/guides" component={GuidesPage} /> */}
      </Switch>
    </main>
  );
}
