import React, { Component } from 'react';
import { SaleWidgetWrapper } from './style';

export default class extends Component {
  render() {
    const { fontColor, label, height, price, details } = this.props;

    const textColor = {
      color: fontColor,
    };
    const styleSale={
      height:height
    }

    return (
      <SaleWidgetWrapper className="isoSaleWidget" style={styleSale}>
        <h3 className="isoSaleLabel">{label}</h3>
        <span className="isoSalePrice" style={textColor}>
          {price}
        </span>
        <p className="isoSaleDetails">{details}</p>
      </SaleWidgetWrapper>
    );
  }
}
