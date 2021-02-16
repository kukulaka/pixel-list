import React from 'react';
import styled from 'styled-components';
import { Spin, Space, Row, Col } from 'antd';

const SpinnerContainer = styled.div`
  height: 82vh;
  width: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Spinner = ({ spinnerSize, loadingText, fontSize }) => (
  <SpinnerContainer size={fontSize ?? '20px'}>
    <Row type="flex" style={{ alignItems: 'center', height: '100%' }} justify="center" gutter={10}>
      <Col span={24}>
        <Space size={spinnerSize}>
          <Spin tip={loadingText} />
        </Space>
      </Col>
    </Row>
  </SpinnerContainer>
);

export default Spinner;
