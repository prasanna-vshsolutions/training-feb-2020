import React from "react";
import styled from "styled-components";
const ItemsWithNameAndPrice = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
`;

const TmSpecialItem = styled.img`
  max-width: 100%;
`;

const TmItem = styled.span`
  display: block;
`;
const Figcaption = styled.figcaption`
  display: block;
  text-align: center;
  > ${TmItem} {
    display: block;
    color: #333333;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const ImageCard = props => {
  console.log(props);
  return (
    <>
      <ItemsWithNameAndPrice>
        <TmSpecialItem src={props.Avatar} alt="Image" />
        <Figcaption>
          <TmItem>{props.name}</TmItem>
          <TmItem>{props.price}</TmItem>
        </Figcaption>
      </ItemsWithNameAndPrice>
    </>
  );
};
export default ImageCard;
