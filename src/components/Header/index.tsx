import logo from "../../assets/logo.svg";
import { Content } from "./styles";

export function Header() {
  return (
    <Content>
      <img src={logo} alt="splitter logo"></img>
    </Content>
  );
}
