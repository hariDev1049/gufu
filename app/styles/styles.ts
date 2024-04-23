import Link from 'next/link';
import { NavLink } from 'react-router-dom';
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

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const CuisineLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h5 {
    color: white;
    font-size: 0.7rem;
    padding-top: 3px;
  }

  svg {
    color: white;
    font-size: 1.5rem;
    padding-bottom: 4px;
  }

  &.active {
    background: linear-gradient(to right, orange, red);
  }
`;

export const FormStyle = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  width: 100%;
  input {
    border: none;
    width: 60%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    margin-top: 1rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 60%;
    left: 20%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export const DetailedWrapper = styled.div`
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    font-weight: 600;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 5rem;
  padding-right: 10rem;
`;
