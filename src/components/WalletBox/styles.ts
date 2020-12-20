import styled from 'styled-components';

interface IContainer {
  color: string;
}

export const Container = styled.div<IContainer>`
  position: relative;

  width: 30%;
  border-radius: 10px;
  padding: 21px 14px;
  margin-bottom: 20px;
  background-color: ${(props) => props.color};

  transform: translateX(25px);
  opacity: 0;
  animation: WalletAnimation .5s ease-in-out forwards;
  overflow: hidden;

  @keyframes WalletAnimation {
    from {
      opacity: 0;
      transform: translateX(25px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  p {
    position: relative;
    z-index: 2;
    font-size: 0.75rem;
  }
`;

export const TopSide = styled.div`
  margin-bottom: 50px;

  h3 {
    font-size: 1.125rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: -29px;
  top: -13px;

  height: 182px;
  opacity: 0.5;
`;