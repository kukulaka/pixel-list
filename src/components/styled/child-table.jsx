import React from 'react';
import styled from 'styled-components';
import { Alert, Row, Col } from 'antd';

import { useSortableData } from '../sort-data';

// I tend to use npm packages for tables
// but have inclued this way to show
// how to build up a table.
//If hhad more time would refactor this
// so it flows a little better ...

const StyledChildTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  padding: 5px;

  tbody {
    vertical-align: top;
  }

  th {
    padding: 5px 10px;
  }

  td {
    padding: 5px;
  }
  tbody tr {
    padding: 5px 10px;
    :nth-of-type(odd) {
      background-color: #ccccff;
    }
    :hover {
      background-color: lightpink;
      cursor: pointer;
    }
  }
  thead tr {
    border-bottom: 1px solid black;
    background-color: #c2c2c2;
    padding: 5px 10px;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const ChildTable = props => {
  // have not implemented icons to show sort status yet. Not had time
  const { items, requestSort } = useSortableData(props.peopleList);
  const renderChildTableHeader = () => {
    if (items.length > 0) {
      let header = Object.keys(items[0]);
      return header.map((key, index) => {
        return (
          <th key={index}>
            {key.toUpperCase()}{' '}
            <button type="button" style={{ padding: '5px' }} onClick={() => requestSort(key)}>
              click to sort
            </button>
          </th>
        );
      });
    } else {
      return null;
    }
  };

  const noData = (
    <Row type="flex" style={{ alignItems: 'left', height: '50%', padding: '20px' }} justify="left">
      <Col span={24}>
        <Alert
          message="No data"
          description="There appears to be no people in your list at the moment. Click on the rows above to add some."
          type="info"
          showIcon
        />
      </Col>
    </Row>
  );

  if (props.peopleList.length === 0) {
    return noData;
  } else {
    return (
      <Row type="flex" style={{ alignItems: 'left', height: '50%', padding: '20px' }} justify="left">
        <Col span={24}>
          <h1 id="title">{props.title}</h1>
          <p>{props.info}</p>
          <StyledChildTable id={props.id}>
            <thead>
              <tr>{renderChildTableHeader()}</tr>
            </thead>
            <tbody>
              {items.length > 0
                ? items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </StyledChildTable>
        </Col>
      </Row>
    );
  }
};

export default ChildTable;
