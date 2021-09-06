import styled from "styled-components";



 export const Restaurant = styled.div`
    display: flex;
    margin-left: 10px;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 26;
    background-color: #ffffff;
    border-left: 10px solid transparent;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
    
`;
export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    
`;
export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
 

`;
export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const Phone = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
    display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
    width: 80px;
    height: 80px;
    border-radius: 6px;
    object-fit: cover;
    margin: 6px 6px;
    
`;
export const LabelBorder = styled.textarea`
    border-color: black;
`;