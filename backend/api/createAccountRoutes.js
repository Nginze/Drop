import { Router } from "express";
import { client } from "../config/db.js";
import format from "pg-format";
import bycrpt from "bcrypt";

const router = Router();

router.post("/", async (req, res, next) => {
  const { emailAddress, password } = req.body;
  const passwordHash = await bycrpt.hash(password, 10);
  client
    .query(
      `insert into app_user(email_address, password_hash) 
        values ($1, $2) returning user_id, email_address
        `,
      [emailAddress, passwordHash]
    )
    .then(result => {
      console.log(result.rows[0]);
      const user = result.rows[0];
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        return res.status(200).json(user);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/profileonboard", (req, res) => {
  const { profileUsername, user_id, profilePhoto } = req.body;
  client
    .query(
      `update app_user
       set username = $1
       where user_id = $2`,
      [profileUsername, user_id]
    )
    .then(result => {
      res.status(200).json({ msg: "successfully onboarded profile" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/interestonboard", (req, res) => {
  const { interests } = req.body;
  console.log(interests);
  const insertQuery = format(`insert into interests values %L`, interests);
  client
    .query(insertQuery)
    .then(result =>
      res.status(200).json({ msg: "successfully onboarded interests" })
    )
    .catch(err => res.status(500).json(err));
});

export { router };
