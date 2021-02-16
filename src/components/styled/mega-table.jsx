import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert, Row, Col } from 'antd';
import ChildTable from './child-table';
import { useSortableData } from '../sort-data';

// if I had time I would refactor this a little to use the same table component as
// for the child.
// wanted to show more examples of child components
// have not implements remove form list as didn't have time

const StyledTable = styled.table`
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
      background-color: lightblue;
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
const MegaTable = props => {
  const [userList, setUserList] = useState([]);
  let oldData = [];
  const [peopleList] = useState(props.data);

  const { items, requestSort } = useSortableData(peopleList);

  const addObjToArray = (arr, obj, key) => {
    const resultArr = arr.filter(arrObj => arrObj[key] !== obj[key]);
    if (resultArr.length === arr.length) resultArr.push(obj);
    return resultArr;
  };

  const addToUserList = row => {
    oldData = userList;

    const adder = addObjToArray(oldData, { name: row.name, email: row.email }, 'name');

    setUserList(adder);
  };

  const renderData = () =>
    items.map((item, index) => (
      <tr key={index} onClick={() => addToUserList(item)}>
        <td>{item.name}</td>
        <td>{item.email}</td>
      </tr>
    ));

  // have not implemented icons to show sort status yet. Not had time

  const renderTableHeader = () => {
    if (props.data.length > 0) {
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

  const noData = <Alert message="No data" description="There is no data for some reason :(" type="info" showIcon />;

  if (props.data.length === 0) {
    return noData;
  } else {
    return (
      <>
        <Row type="flex" style={{ alignItems: 'left', height: '82vh', padding: '20px' }} justify="left">
          <Row type="flex" style={{ alignItems: 'left', height: '50%', padding: '20px' }} justify="left">
            <Col span={24}>
              <h1 id="title">{props.title}</h1>
              <p>{props.info}</p>
              <StyledTable id={props.id}>
                <thead>
                  <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </StyledTable>
            </Col>
          </Row>

          <ChildTable peopleList={userList} title="Your people list" info="Click on the column names to sort. " id="child-table" />
        </Row>
      </>
    );
  }
};

export default MegaTable;
