import React from "react";
import { Button, Flex } from "antd";
import { Card } from "antd";
const { Meta } = Card;
const Item = ({ product }) => {
  let styles = {
    width: "100%",
    backgroundColor: "#986321"
    // marginLeft: "20px",
  };
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt={product.name}
          src={product.variants[Math.floor(Math.random()*product.variants.length)].imageUrl}
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
      <Meta title={product.name} description={Math.floor(product.bundlePrice / product.bundleQuantity)} />
    </Card>
  );
};
export default Item;
