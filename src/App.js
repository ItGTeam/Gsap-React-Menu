import Header from './components/Header';
import styled from 'styled-components';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import Project from './components/Project';
import Cursor from './components/Cursor';
import { useRef, useEffect } from 'react';

const StyledMainWrapper = styled.div`
position: relative;
`
function App() {
  const circleRef = useRef();
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    const onMove = ({ clientX, clientY }) => {
      circleRef.current.moveTo(clientX, clientY);
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove);
  })

  return (
    <StyledMainWrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsmenuOpen={setIsmenuOpen} />
      <Content />
      <Project />
      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
