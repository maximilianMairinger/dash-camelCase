export function camelCaseToDash(camelCaseString: string, joinWith: string = "-") {
  return camelCaseString.replace( /([a-z])([A-Z])/g, "$1" + joinWith + "$2" ).toLowerCase();
}

function toUpper(match, group1) {
  return group1 ? group1.toUpperCase() : '';
}
var DEFAULT_REGEX = /[-_]+(.)?/g;
export function dashToCamelCase(dashString: string, splitAt?: string) {
  return dashString.replace(splitAt ? new RegExp('[' + splitAt + ']+(.)', 'g') : DEFAULT_REGEX, toUpper);
}