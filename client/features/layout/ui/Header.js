import styled from 'styled-components';
import useScroll from './Header/useScroll';

const Header = ({ children }) => {
  
  const scrolling = useScroll();

  return (
    <HeaderContainer minimized={scrolling}>
      {children}
    </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
position: fixed;
top: 0; 
left: 0px; 
font-size: ${(props) => (props.minimized ? '35px' : '50px')};
z-index: 10;
width: 100%; 
display: block; 
flex-direction: row;
background-color: white;
text-align: center; 
box-shadow: 0 4px 8px -2px rgba(16,24,40,.05), 0 2px 4px -2px rgba(16,24,40,.04);
height: ${(props) => (props.minimized ? '40px' : '55px')};
transition: height 0.2s;
transition: font-size 0.1s;
`;

export default Header; 