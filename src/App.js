import './App.css';
import { Layout } from './components/Layout';
import { api } from './utils/GQLHandler';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={api}>
          <Layout />
      </ApolloProvider>
    </div>
  );
}

export default App;
