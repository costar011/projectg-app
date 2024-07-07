import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DARK_PINK_COLOR, RIGHT_PINK_COLOR } from "../color/Theme";

const HeaderArea = styled.div`
  width: 100%;
  height: 10vh;

  position: fixed;
  display: flex;

  justify-content: space-evenly;
  z-index: 99999;
  background-color: #f0f0f0;
  overflow: hidden;

  margin: 0;
  padding: 0;
  left: 0;
  top: 0;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

{
  /* z-index -> 화면이 그려질 때 어떤 요소가 위에 올라가는지 설정하는 속성
    값이 높으면 높을수록 위에 올라가며 z축 기준으로 순서를 가짐 */
}


const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? RIGHT_PINK_COLOR : DARK_PINK_COLOR)};
  font-weight: bold;
  padding: 10px;
  transition: color 0.2s ease;

  &:hover {
    color: ${RIGHT_PINK_COLOR};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const menuItems = [  { label: "Main", path: "/main" },  { label: "Sub Main 1", path: "/sub-main1" },  { label: "Sub Main 2", path: "/sub-main2" },];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderArea>
      {menuItems.map((item, index) => (
        <StyledLink
          key={index}
          to={item.path}
          isActive={pathname === item.path}
        >
          {item.label}
        </StyledLink>
      ))}
    </HeaderArea>
  );
};

export default Header;
