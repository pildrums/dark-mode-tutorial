import Main from 'Main';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <Main onToggle={onToggle} toggle={toggle} />
    </ThemeProvider>
  );
};



export default App;