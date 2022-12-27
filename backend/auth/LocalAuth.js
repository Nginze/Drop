import { client } from "../config/db.js";
import { Strategy as LocalStrategy } from "passport-local";
import { verifyPassword } from "../utils/validation.js";
import passport from "passport";

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "emailAddress", passwordField: "password" },
    (email_address, password, done) => {
      client
        .query(
          `select user_id, 
                        username, 
                        email_address, 
                        password_hash
                  from app_user
                  where email_address = $1
    `,
          [email_address]
        )
        .then(async result => {
          console.log("i reached here");
          const user = result.rows[0];
          console.log(user);
          if (result.rows.length === 0) {
            console.log("first if statment");
            return done(null, false);
          }
          if (!(await verifyPassword(user.password_hash, password))) {
            console.log("passwords do not match");
            return done(null, false);
          }
          console.log("got here");
          return done(null, user);
        })
        .catch(err => {
          return done(err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((userId, done) => {
  client
    .query(
      `select user_id,
            username,
            email_address 
      from app_user 
      where user_id = $1`,
      [userId]
    )
    .then(result => {
      const user = result.rows[0];
      done(null, user);
    });
});
