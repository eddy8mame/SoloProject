import styled from 'styled-components';
import Header from './Header.js'
import Banner from './Banner.js'
import Items from '../../../components/item';
import RightColumn from './RightColumn/index.js';

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <Header>
        <Banner />
      </Header>

      <Main>
        <View>
          <PageWrap>
            <LeftColumn></LeftColumn>
            <CenterColumn>{<Items />}</CenterColumn>
            <RightColumn></RightColumn>
          </PageWrap>
      </View>
      </Main>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
display: block;
height: 100vh; 
padding-top: 55px; 
`;

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
margin-right: 5px; 
`;

const CenterColumn = styled.div`
width: calc(800%);
heigth: 100%;
display: block; 
`;

export default Layout; 