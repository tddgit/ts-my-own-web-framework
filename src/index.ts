import { User } from "./models/user";

const user = new User({ name: "myname", age: 20 });

user.set({ name: "myname" });

console.log(user.get("name"));
console.log(user.get("age"));
