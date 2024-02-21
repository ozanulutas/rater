import ApolloClientProvider from "graphql/ApolloClientProvider";
import AppRouterProvider from "router/AppRouterProvider";
import { GlobalStyles } from "theme/GlobalStyles";
import ThemeProvider from "theme/ThemeProvider";

function App() {
  return (
    <ApolloClientProvider>
      <ThemeProvider>
        <GlobalStyles />
        <AppRouterProvider />
      </ThemeProvider>
    </ApolloClientProvider>
  );
}

export default App;
