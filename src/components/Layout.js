import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import PulseLoader from './PulseLoader';
import Home from './Home';
import Security from './Security';
import ForgotPassword from './ForgotPassword';

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <div>
      {loading && <PulseLoader />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/security" component={Security} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
