const permissions = ["read", "write", "read", "delete", "update", "write", "read", "delete"];
const required = ["read", "write", "update"];

const uniquePerms = new Set(permissions);
console.log("Unique permissionlar:", uniquePerms);

const missing = required.filter(perm => !uniquePerms.has(perm));
const isAllowed = missing.length === 0;

console.log("Barcha required permissionlar bor:", isAllowed);
if (!isAllowed) {
  console.log("Yetishmayotganlar:", missing);
}