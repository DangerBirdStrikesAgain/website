import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: #FFFFFF;
  height: 30px;
  display: flex;
  border-bottom: 1px solid #d3d3d3;
`;
 
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;
 
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;