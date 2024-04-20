import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem 0rem;
  padding: 1.5rem;
`;

export const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    color: white;
    font-size: 1rem;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    height: 170%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;
