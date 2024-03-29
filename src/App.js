import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from "./config.json";
const DefaultTheme = React.lazy(() => import("./themes/default/DefaultTheme"));
const NMG2021Theme = React.lazy(() =>
  import("./themes/nmg-tourney-2021/NMG2021Theme")
);
const NMGLeague2022Theme = React.lazy(() =>
  import("./themes/nmg-league-2022/nmg-league-2022")
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <DefaultTheme config={config} />
          </Route>
          <Route exact path="/nmg-tourney-2021">
            <NMG2021Theme config={config} />
          </Route>
          <Route exact path="/nmg-league-2022">
            <NMGLeague2022Theme config={config} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
