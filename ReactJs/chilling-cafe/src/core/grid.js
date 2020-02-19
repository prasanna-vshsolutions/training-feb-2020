import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  align-content: space-evenly;
  border-color: inherit;
  padding: 10px 15px;
`;

const HeadRow = styled(Row)`
  background-color: #c4cdd6 !important ;
  height: 50px;
`;
const Table = styled.div`
  border-color: grey;
  width: 100%;
  border-spacing: 0;
  ${Row}:nth-child(odd) {
    background-color: #e5e8ed;
  }
`;

const Grid = props => {
  return (
    <Table>
      <HeadRow>
        {props.header.map(el => (
          <div>{el}</div>
        ))}
      </HeadRow>
      {props.rows.map(el => (
        <Row>
          {el.data.map(element => (
            <div>{element}</div>
          ))}
        </Row>
      ))}
    </Table>
  );
};

export default Grid;
