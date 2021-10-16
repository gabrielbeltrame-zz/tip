import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header></Header>
      <Card></Card>

      <GlobalStyle />
    </>
  );
}
