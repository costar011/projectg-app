import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../color/Theme.js";

const FooterArea = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.blackColor};
  color: ${(props) => props.theme.whiteColor};
`;

const FooterAreaTop = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.darkgrayColor};
  color: ${(props) => props.theme.whiteColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
  height: 100%;
 
  display: flex;
  flex-direction: row;
  padding: 20px;
`;


const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaTop>Footer Top</FooterAreaTop>
    </FooterArea>
  );
};
export default Footer;
