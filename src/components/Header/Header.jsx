import HeaderStyled from "./HeaderStyled";

function Header() {
  return (
    <HeaderStyled>
      <h1 className="header-title">Movies App</h1>
      <img
        className="header-logo"
        src="/images/popcorn2.png"
        alt="Logo of Movies app"
        height={80}
        width={80}
      />
    </HeaderStyled>
  );
}

export default Header;
