import { FunctionComponent } from "preact";

const Header: FunctionComponent = () => {
  return (
      <div class="header">
        <a href="/agendacsr">Agenda Client Side</a>
        <a href="/agendassr">Agenda Server Side</a>
      </div>
  );
};

export default Header;