import React, { Fragment } from "react";
import { Button, Icon } from "antd";
const PagingComponent = ({meta,onPrevClick,onNextClick}) => {
  
  return (
    <Button.Group style={{ float: `right` }} size={"large"}>
      {meta.offset>0 && <Button type="primary" onClick={()=>onPrevClick(meta.offset-1)}>
        <Icon type="left" />
        Prev
      </Button>
      }
      {meta.offset<Math.ceil(meta.total/meta.limit)&& <Button type="primary" onClick={()=>onNextClick(meta.offset+1)}>
        Next
        <Icon type="right" />
      </Button>}
    </Button.Group>
  );
};
export default PagingComponent;
