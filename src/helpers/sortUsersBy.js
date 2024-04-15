export const sortUsersBy = (users, order = "asc", keyExtractor) => {
  const comparator = (a, b) => {
    const roleA = keyExtractor(a).toUpperCase();
    const roleB = keyExtractor(b).toUpperCase();

    if (order === "asc") {
      return roleA.localeCompare(roleB);
    } else if (order === "desc") {
      return roleB.localeCompare(roleA);
    } else {
      throw new Error("Invalid sort order. Use 'asc' or 'desc'.");
    }
  }
  return [...users].sort(comparator)
}