/** This function loops through all `string` values
 * in an array of objects and tries to find the `searchTerm`
 */
export const filterOnSearch = <T>(
  data: T[],
  searchTerm: string,
  /** `data` might have some fields which are not
   * required to be searched upon. E.g., "id"
   */
  fieldsToExcludeFromSearch: string[]
) => {
  /** Sending all data back if the `searchTerm`
   * is an empty string */
  return searchTerm === ""
    ? data
    : data?.filter(
        (item) =>
          /** Checking if the `T` is an object */
          typeof item === "object" &&
          !Array.isArray(item) &&
          item !== null &&
          /** Looping through all values in item object
           * searching for searchTerm
           */
          Object.keys(item).some((x) => {
            const value = item[x as keyof typeof item]
            const isValueString = typeof value === "string"
            return (
              !fieldsToExcludeFromSearch.includes(x) &&
              value &&
              isValueString &&
              value.includes(searchTerm)
            )
          })
      )
}
