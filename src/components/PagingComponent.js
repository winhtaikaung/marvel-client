import React, { Fragment } from "react";
import { Button, Icon } from "antd";
import { withState } from "recompose";

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
            onPrevClick(meta.offset - 18);
          }}
          loading={loading}
        >
          <Icon type="left" />
          Prev
        </Button>
      )}
      {meta.offset-18 < Math.ceil(meta.total) && (
        <Button
          type="primary"
          onClick={() => onNextClick(meta.offset + 18)}
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
