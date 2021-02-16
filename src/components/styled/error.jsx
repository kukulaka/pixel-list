import React from 'react';
import styled from 'styled-components';
import { Row, Col, Alert } from 'antd';

export const Error = ({ errorText }) => {
  const ErrorWrapper = styled.div`
    height: 82vh;
    width: 100%;
    padding: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  return (
    <ErrorWrapper>
      <Row type="flex" style={{ alignItems: 'center', height: '100%' }} justify="center" gutter={10}>
        <Col span={24}>
          <Alert message="Error" description={errorText} type="error" showIcon />
        </Col>
      </Row>
    </ErrorWrapper>
  );
};

export default Error;
