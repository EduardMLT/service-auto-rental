import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  background: var(--pr-button-background-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  padding-right: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WrapLogo = styled.div`
  width: 100%;
`;

export const Logo = styled.p`
  font-family: inherit;  
  color: var(--pr-background-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: color 0.5s ease-in-out;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;
  justify-content: flex-end;

  &:hover {
    color: #a61732;
  }
`;
