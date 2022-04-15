import styled from "styled-components";

const Card = (props) => {
    return ( 
        <CardContainer>
            <CardInfo>{props.item.info}</CardInfo>
        </CardContainer>

     );
}
 
export default Card;

const CardContainer = styled.div`
    min-height: 100px;
    max-width: 18%;
    display:flex;
    border: 1px solid black;
    height: auto;
    flex: 1;
    flex-basis: 18%;
    justify-content: center;
    align-items: center;
`;

const CardInfo = styled.p`
      font-size: 2vmin;
`;