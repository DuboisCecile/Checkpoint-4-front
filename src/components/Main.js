import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import SiteSearchPage from '../screens/SiteSearchPage';
import AddEventPage from '../screens/AddEventPage';
import AddSitePage from '../screens/AddSitePage';

export default function Main() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <main>
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Route path="/sites" component={SiteSearchPage} />
        <Route path="/add-event" component={AddEventPage} />
        <Route path="/add-site" component={AddSitePage} />
        {/* <Route path="/guides" component={GuidesPage} /> */}
      </Switch>
    </main>
  );
}
