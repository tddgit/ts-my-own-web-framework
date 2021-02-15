import { User } from "./models/user";

const user = new User({ id: 1 });

user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("save", () => {
  console.log("Save #1");
});

user.trigger("save");
console.log(user);
