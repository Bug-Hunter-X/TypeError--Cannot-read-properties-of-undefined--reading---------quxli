To solve this, always check if the object is null or undefined before accessing its properties:

```javascript
const user = await getUser();

// Solution 1: Optional Chaining
console.log(user?.name); // Only accesses name if user is not null or undefined

// Solution 2: Nullish Coalescing
console.log(user?.name ?? 'Unknown'); // Uses 'Unknown' if user.name is null or undefined

// Solution 3: Conditional Access
if (user) {
  console.log(user.name);
}
```
Optional chaining and nullish coalescing are preferred for cleaner and more concise code.