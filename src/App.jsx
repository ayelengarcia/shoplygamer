import { Container } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ThemeProvider from "./context/ThemeContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import "./App.css";

function App() {

  return (
    <ThemeProvider>
      <OrderProvider>
        <Container
          maxW="100%"
          p="0"
        >
          <Header />
          <Main />
        </Container>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
