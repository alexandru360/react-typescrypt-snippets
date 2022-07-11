import styled from 'styled-components/native/dist';

// Define our button, but with the use of props.theme this time
export const AppWrapperDiv = styled.div`
background-color: ${(props) => props.theme.day};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
AppWrapperDiv.defaultProps = {
  theme: {
    day: 'white',
    night: '#171717',
  },
};
