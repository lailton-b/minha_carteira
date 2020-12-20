import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 45%;
  height: 260px;
  border-radius: 10px;
  padding: 28px 20px;

  background-color: ${(props) => props.theme.colors.tertiary};

  transform: translateY(-25px);
  opacity: 0;
  animation: MessageAnimation .5s .5s ease-in-out forwards;
  
  @keyframes MessageAnimation {
    from {
      opacity: 0;
      transform: translateY(-25px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TopSide = styled.div`
  font-weight: bold;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  img {
    width: 35px;
    margin-left: 10px;
  }
`;

export const Paragraph = styled.p` 
  p {
    font-size: 1rem;
  }
`;