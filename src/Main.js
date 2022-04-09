import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const Main = ({onToggle, toggle}) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  return (
    <Container>
      <HeaderWrapper>
        <h1>제목</h1>
        {!toggle ? <DarkButton onClick={onToggle} /> : <LightButton onClick={onToggle} />}
      </HeaderWrapper>
      <p>{time.toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
    </Container>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${props => props.theme.headerColor};
  h1 {
    color: ${props => props.theme.headerTextColor};
    font-size: 40px;
  }
`;

const DarkButton = styled(MdDarkMode)`
  font-size: 32px;
  color: ${props => props.theme.headerTextColor};
  cursor: pointer;
`;

const LightButton = styled(MdOutlineDarkMode)`
  font-size: 32px;
  color: ${props => props.theme.headerTextColor};
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  font-size: 40px;
`;


export default Main;