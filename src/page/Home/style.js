import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
`;
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width:360px;
    height: 100vh;
    overflow-y: auto;
`;
export const Search = styled.section`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    padding: 16px; 
`;

export const Carousel = styled(Slider)`
    .slick-slide{
        margin-right: 30px;
    }

`;
export const Logo = styled.img`
    margin-bottom: 5px;
    height: 150px;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.p`
margin-bottom: 10px;
letter-spacing: 0.12px;
font-family: ${(props)=> props.theme.fonts.regular}; ;
color: ${(props)=> props.theme.colors.text};
text-transform: none;
line-height: 29px;
font-size: 30px;
font-weight: bold;

`;
export const ModalSub = styled.p`
margin-bottom: 10px;
letter-spacing: 0.12px;
font-family: ${(props)=> props.theme.fonts.regular}; ;
color: ${(props)=> props.theme.colors.text};
text-transform: none;
line-height: 29px;
font-size: 16px;
font-weight: bold;

`;