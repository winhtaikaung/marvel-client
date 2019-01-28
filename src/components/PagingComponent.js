import React from "react";
import { Button, Icon } from "antd";


const PagingComponent = ({
  meta,
  onPrevClick,
  onNextClick,
  loading,
  totalPage,
  setTotalPage
}) => {
  return (
    <Button.Group style={{ float: `right` }} size={"large"}>
      {meta.offset > 0 && (
        <Button
          type="primary"
          onClick={() => {
            onPrevClick(meta.offset - meta.limit);
          }}
          loading={loading}
        >
          <Icon type="left" />
          Prev
        </Button>
      )}
      {(meta.offset+meta.limit) < Math.ceil(meta.total) && (
        <Button
          type="primary"
          onClick={() => {
            console.log(meta.offset,meta.total)
            onNextClick(meta.offset + meta.limit)
          }}
          loading={loading}
        >
          Next
          <Icon type="right" />
        </Button>
      )}
    </Button.Group>
  );
};
export default PagingComponent;
