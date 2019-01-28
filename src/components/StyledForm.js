import styled from 'styled-components';

import {Form} from 'antd';

export const StyledForm =styled(Form)`
max-width: 300px;
margin:20px;
padding: 2em;
border-radius: 5px;
-webkit-box-shadow: 0px 0px 140px -14px rgba(0,0,0,0.46);
-moz-box-shadow: 0px 0px 140px -14px rgba(0,0,0,0.46);
box-shadow: 0px 0px 140px -14px rgba(0,0,0,0.46);
-webkit-transition: margin 0.5s ease-out;
    -moz-transition: margin 0.5s ease-out;
    -o-transition: margin 0.5s ease-out;
&:focus-within{
    margin-top: 10px;
}
`