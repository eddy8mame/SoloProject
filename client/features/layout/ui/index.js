import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header.js'
import Banner from './Banner.js'
import Items from '../../../components/item';

const Layout = ({children}) => {

  return (
    <LayoutWrapper>
      <Header>
        <Banner />
      </Header>

      <Main>
        <View>
          <PageWrap>
            <LeftColumn>Left Column</LeftColumn>
            <CenterColumn>{<Items />}</CenterColumn>
            <RightColumn>Right Column</RightColumn>
          </PageWrap>
      </View>
      </Main>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
display: block;
// flex-direction: column; 
// grid-template-columns: 200px auto;
// grid-template-rows: 60px auto; 
height: 100vh; 
padding-top: 55px; 
`;

// const Header = styled.header`
// // grid-column: 1 / span 2;
// // background-color: #333;
// // color: white; 
// // padding: 1rem;
// position: fixed;
// top: 0; 
// left: 0px; 
// min-height: 55px; 
// z-index: 10;
// width: 100%; 
// display: block; 
// flex-direction: row;
// // opacity: .5;
// background-color: white;
// text-align: center; 
// box-shadow: 0 4px 8px -2px rgba(16,24,40,.05), 0 2px 4px -2px rgba(16,24,40,.04);
// `;

const Main = styled.main`
display: block;
padding: 0 55px; 
height: 100%; 
z-index: 10;
background-color: white;
`;

const View = styled.div`
display: block; 
`;

const PageWrap = styled.div`
display: flex;
width: 100%;
margin-top: 35px; 
`;

const LeftColumn = styled.div`
width: calc(200%);
height: 100%;
display: block; 
border: 1px solid black; 
margin-right: 5px; 
`;

const CenterColumn = styled.div`
width: calc(800%);
heigth: 100%;
display: block; 
`;

const RightColumn = styled.div`
width: calc(200%); 
height: 100%; 
display: block; 
border: 1px solid black; 
`;



export default Layout; 