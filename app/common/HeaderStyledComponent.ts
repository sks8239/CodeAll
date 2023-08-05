import styled, { css } from "styled-components";

interface HeaderWrapperProps {
    isscrolled: string;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${(props) => (props.isscrolled === "true" ? "#FFFFFF" : "#3389FF")};
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 20px;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: 10px;
    margin-right: 0;
  }
`;

const Li = styled.li`
  margin-right: 10%;

  &:first-child {
    margin-right: 25%;
  }

  &:last-child {
    margin-right: 0;
  }
`;
interface NavLinkProps {
    isscrolled: string;
}
const NavLink = styled.div<NavLinkProps>`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s ease;
  margin-right: 15px;
  cursor: pointer;

  ${(props) =>
          props.isscrolled === "true" &&
          css`
      color: #3389ff;

      &:hover {
        color: #555;
      }
    `}
`;

export { HeaderWrapper, Nav, NavLink, Ul, Li };
