import styled from 'styled-components';

const ItemImage = ({image, alt}) => {
  return (
    <ImageContainer>
      <Image src={image} alt={alt} /> 
    </ImageContainer>
 )
}

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: contain; 
`;

const ImageContainer = styled.div`
width: 150px;
height: 150px;
overflow:hidden;
`;

export default ItemImage; 
