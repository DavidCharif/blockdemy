import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Helpers/themeSlice";
import { ButtonStyled, HeaderStyled } from "../Styled/HeaderStyled";
import History from "./History";

const Header = ({ setData, on }) => {
  const dispatch = useDispatch();
  const localTheme = useSelector((state) => state.theme);
  function handle() {
    localTheme === "light" ? dispatch(changeTheme("dark")) : dispatch(changeTheme("light"));
    
  }
  return (
    <HeaderStyled>
      <img
        src="https://ernestognw.github.io/rick-and-morty-random/static/media/logo-white.fab45c5f.svg"
        alt="logo"
      />
      <History setData={setData} on={on} />
      <ButtonStyled type="button" onClick={() => handle()}>
        Change theme
      </ButtonStyled>
    </HeaderStyled>
  );
};

export default Header;
