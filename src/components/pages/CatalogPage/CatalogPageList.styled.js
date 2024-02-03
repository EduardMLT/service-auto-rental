import styled from 'styled-components';

export const List = styled.ul` 
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin: 50px 0 100px;
`;

export const Item = styled.li`
  display: block;
  padding: 10px, 15px;
  font-family: Roboto sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: rgb(106 162 144);
`;

export const TitleSpan = styled.span`
  color: var(--pr-button-background-color);
  font-size: 16px;

  &:hover,
  :focus {
    color: var(--hovered-button-background-color);
  }
`;
