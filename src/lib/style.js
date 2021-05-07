export class Style {
  key;
  value;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  /**
   * @returns {string}
   */
  getStyle() {
    return `${this.key}: ${this.value};`;
  }
}
