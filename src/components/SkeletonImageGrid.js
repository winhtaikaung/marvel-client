import React from 'react';
import { Row, Col, Card,  Skeleton } from "antd";
import SkeletonImage from './SkeletonImage/SkeletonImage'
const SkeletonImgeGrid = ({loading,children})=>{

  return (  <div
      style={{
        padding: "15px",
        marginLeft: `2em`,
        marginRight: `2em`
      }}
    >
      {loading&&<Row gutter={24}>
        {Array(18)
          .fill()
          .map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable={false}
                bordered={true}
                cover={
                  <SkeletonImage

                    loading={loading}
                    height="400"

                  />
                }
                style={{
                  marginTop: `2em`,
                  WebkitBoxShadow:
                    "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow:
                    "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  transition: `translate(0px, 0px)`,
                  opacity: `1`
                }}
              >
                <Skeleton loading={loading} active>
                  <div>
                    <h2>Place holder name</h2>
                    <p>Place holder description</p>
                  </div>
                </Skeleton>
              </Card>
            </Col>
          );
        })}
      </Row>}
      {children}
    </div>)
}

export default SkeletonImgeGrid;
