// import express from 'express';
// //import router from './routers/firstRouters.js';
// import routes from './routers/secondRouters.js';

// const app = express();


// //app.use('/get-data', router);
// app.use('/get-api', routes);

// app.listen(7007, () => {
//     console.log("server running at port 7007");
// });


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DEFAULT DATA (already saved in backend)
let users = [
  { id: 1, name: "Dakshayani", email: "daksha@gmail.com" },
  { id: 2, name: "Kale", email: "kale@gmail.com" }
];

let idCounter = 3;

// 👉 GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 👉 POST add user (with error handling)
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }

  const emailExists = users.find(u => u.email === email);
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newUser = {
    id: idCounter++,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// 👉 PUT update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});

// 👉 DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted successfully" });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});

