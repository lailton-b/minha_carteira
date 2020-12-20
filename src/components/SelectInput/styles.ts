import styled from 'styled-components';
import arrowDown from '../../assets/md-arrow-down.svg';

export const Container = styled.select`
  font-size: 0.875rem;
  font-weight: bold;

  color: #1D1D1D;
  background-color: #fff;

  height: 30px;
  width: 110px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  margin-left: 13px;

  appearance: none;
  background-image: url(${arrowDown});
  background-position-y: center;
  background-position-x: right;
  background-repeat: no-repeat;

  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.warning};
  }

  @media screen and (max-width: 485px) {
    font-size: 0.75rem;
    margin-left: 5px;
    margin-bottom: 2px; 
  }

  option {
    cursor: pointer;
  }
`;
