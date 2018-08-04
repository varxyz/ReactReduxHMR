import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 4em auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
`;
export const Button = styled.button`
  background: paleturquoise;
  border-radius: 8px;
  color: #777;
  height: ${props => (props.small ? 40 : 60)}px;
  width: ${props => (props.small ? 60 : 120)}px;
`;
