import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: #FFFFFF;
  height: 6vmin;
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
  font-family: source-code-pro, Menlo, Monaco,
    monospace;
  font-size: 3vmin;
  
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  }
`;