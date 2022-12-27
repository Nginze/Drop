import express from "express";
import http from "http";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import { Server } from "socket.io";
import * as config from "./config.js";
import { redisClient } from "./config/redis.config.js";
import Store from "connect-redis";
import { router as authRoutes } from "./api/authRoutes.js";
import { router as createAccountRoutes } from "./api/createAccountRoutes.js";
import "./config/db.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const RedisStore = Store(session);

// app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({ client: redisClient }),
    cookie: { maxAge: 1800 * 60 * 1000 },
  })
);
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/auth", authRoutes);
app.use("/createaccount", createAccountRoutes);
app.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user)
  res.send("This is the api for voice rooms chat");
});
app.get("/rand", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user)
  res.json(req.user);
});

//Websocket Connections
io.on("connection", socket => {
  console.log("a user connected to websocket", socket.id);
});

//Setup Methods

server.listen(5000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Socket server running");
  }
});
