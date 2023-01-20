import { Container } from "@chakra-ui/react";
import "./css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Container maxW="100%" p="0">
      <Header />
      <Main />
    </Container>
  );
}

export default App;
