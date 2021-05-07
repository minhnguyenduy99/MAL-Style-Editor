import { StyleGroup } from "../style-group";

export class BaseBuilder {
  _builder;

  constructor() {
    this._builder = new StyleGroup();
  }

  custom(key, value) {
    this._builder.set(key, value);
    return this;
  }

  build() {
    return this._builder.getStyleObject();
  }
}
