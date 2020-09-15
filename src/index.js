import React from "react";
import ReactDOM from "react-dom";

// import { ApolloProvider } from "react-apollo";
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";

import "./index.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BeerList, Dashboard, AddBeer } from "./screens";
import { PageContainer } from "./PageContainer";

const App = () => {
  // const client = new ApolloClient({
  //   link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  //   cache: new InMemoryCache(),
  // });

  return (
    // <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/see-beers" component={BeerList} />
            <Route path="/add-beer" component={AddBeer} />
          </Switch>
        </PageContainer>
      </Router>
    </ThemeProvider>
    // </ApolloProvider>
  );
};

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
