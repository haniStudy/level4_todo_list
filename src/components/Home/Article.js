import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Article() {
  return (
    <article>
        <h1>무엇을 할까요?</h1>
        <ul>
            <StyledLink to='/submit'><StyledLi>할일 기록하기</StyledLi></StyledLink>
            <StyledLink to='/views'><StyledLi>TODO LIST</StyledLi></StyledLink>
        </ul>
    </article>
  )
}

export default Article;

const StyledLi = styled.li`
    list-style-type: none;
    margin: 50px;
`;

const StyledLink = styled(Link)`
    color: black;
    text-Decoration: none;
`;