import React from "react";
import { Button, Flex } from "antd";
import { Card } from "antd";
const { Meta } = Card;
const App = () => {
  let styles = {
    width: "100%",
    // marginLeft: "20px",
  };
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <div>
          <Flex gap="small" wrap="wrap">
            <Button type="primary" style={styles}>View</Button>
          </Flex>
        </div>,
      ]}
    >
      <Meta title="Product" description="description" />
    </Card>
  );
};
export default App;
