import sHeader from "./Header.module.css";

const Header = () => {
  return (
    <header className={sHeader.header}>
      <img
        className={sHeader.headerImg}
        src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"
        alt="img"
      />
    </header>
  );
};

export default Header;
