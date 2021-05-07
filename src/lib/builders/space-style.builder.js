import { Style } from "../style";
import { BaseBuilder } from "./base.builder";

const DIRECTIONS = {
  TOP: "top",
  LEFT: "left",
  BOTTOM: "bottom",
  RIGHT: "right",
  ALL: "all",
};

const PROPERTIES = {
  MARGIN: "margin",
  PADDING: "padding",
  HEIGHT: "height",
  WIDTH: "width",
};

function getCombinedProperties(property, direction) {
  return `${property}-${direction}`;
}

export default class SpaceStyleBuilder extends BaseBuilder {
  constructor() {
    super();
  }

  margin(type, value) {
    const style = this._getDirectionalStyle(type, value, PROPERTIES.MARGIN);
    this._builder.add(style);
    return this;
  }

  padding(type, value) {
    const style = this._getDirectionalStyle(type, value, PROPERTIES.PADDING);
    this._builder.add(style);
    return this;
  }

  height(type, value) {
    const style = this._getDirectionalStyle(type, value, PROPERTIES.HEIGHT);
    this._builder.add(style);
    return this;
  }

  width(type, value) {
    const style = this._getDirectionalStyle(type, value, PROPERTIES.WIDTH);
    this._builder.add(style);
    return this;
  }

  _getDirectionalStyle(type, value, styleType) {
    let property;
    if (type === DIRECTIONS.ALL) {
      property = styleType;
    } else {
      property = getCombinedProperties(styleType, property);
    }
    return new Style(property, value);
  }
}
