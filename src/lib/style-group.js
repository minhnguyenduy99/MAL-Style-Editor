import { Style } from "./style";

export class StyleGroup {
  /**
   * @type {Map<string, Style>}
   */
  styles;

  constructor() {
    this.styleObject = new Map();
  }

  /**
   * @param {Style} style
   */
  add(style) {
    this.styleObject.set(style.key, style);
  }

  set(key, value) {
    this.styleObject.set(key, new Style(key, value));
  }

  remove(key) {
    this.styleObject.delete(key);
  }

  /**
   * @returns {any}
   */
  getStyleObject() {
    let styles = {};
    Array.from(this.styleObject.values()).forEach((style) => {
      styles[style.key] = style.value;
    });
    return styles;
  }
}
