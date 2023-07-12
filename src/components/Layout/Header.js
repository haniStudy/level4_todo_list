import {BiSolidHomeSmile} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Header() {
  return (
    <header>
        <StyledLink to='/'><BiSolidHomeSmile size="25"/></StyledLink>
        <span>모두의 투두리스트</span>
    </header>
  )
}
export default Header;

const StyledLink = styled(Link)`
    color: black;
`;