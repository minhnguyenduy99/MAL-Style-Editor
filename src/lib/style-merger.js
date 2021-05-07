/**
 *
 * @param  {...any} builders
 */
export function merge(...builders) {
  let styles = builders.reduce((previous, current) => ({
    ...previous,
    ...current,
  }));
  return styles;
}
