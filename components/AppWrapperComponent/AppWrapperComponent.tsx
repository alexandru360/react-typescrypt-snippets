import * as React from 'react';
import { ThemeProvider } from 'styled-components/native/dist';
import { AppWrapperDiv } from '../AppWrapperComponent/ThemeProvider.styled';

export default function AppWrapperComponent() {
  const [theme, setTheme] = React.useState({ theme: 'night' });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppWrapperDiv>Themed</AppWrapperDiv>
      </ThemeProvider>
    </React.Fragment>
  );
}
