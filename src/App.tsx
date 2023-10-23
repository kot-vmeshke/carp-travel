import { HeroPage } from './components/HeroPage/HeroPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeroPage />
    </>
  );
}

export default App;
