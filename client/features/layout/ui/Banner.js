import styled from 'styled-components';
import FlindersTrialBlack from '../../../fonts/FlindersTrial-Black.ttf'

const Banner = () => {

  return (
    <BannerWrapper>
      <Name>dora</Name>
      <RedPeriod>.</RedPeriod>
    </BannerWrapper>
  )
};

const BannerWrapper = styled.div`
font-family: 'FlindersFontBlack', sans-serif;
`;

const Name = styled.span`

`;

const RedPeriod = styled.span`
color:red
`;


export default Banner; 

