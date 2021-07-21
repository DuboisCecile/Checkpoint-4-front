import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </main>
  );
}
