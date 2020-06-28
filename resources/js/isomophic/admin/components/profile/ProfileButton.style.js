import styled from 'styled-components';
import { palette } from "styled-theme";
import WithDirection from '../../../settings/withDirection';

const WDButtonProfileWrapper = styled.div`
    .absoluteButtonWrapper{
        position: absolute;
        bottom: 0;
        right:30px;
        button{
            font-size: 16px;
            height: 35px;
            align-items: center;
            text-align: center;
            justify-content: center;
            outline: none;
            border: 1px solid ${palette("border", 0)};
            span {
                font-size: 12px;
                font-weight: 400;
                padding: 0;
                text-transform: uppercase;
                color: #ffffff;
              }
              &:hover {
                color: ${palette("primary", 0)};
                background-color: ${palette("grayscale", 7)};
                border: 1px solid ${palette("border", 0)};
              }
        }
    }
`;
const ButtonProfileWrapper = WithDirection(WDButtonProfileWrapper);
export {ButtonProfileWrapper};