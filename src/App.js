import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from "./config-g3rd0-chex.json";
const DefaultTheme = React.lazy(() => import("./themes/default/DefaultTheme"));
const NMG2021Theme = React.lazy(() =>
  import("./themes/nmg-tourney-2021/NMG2021Theme")
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
        </Switch>
      </Suspense>
    </Router>
  );
}
