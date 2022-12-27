import { Router } from "express";
import passport from "passport";
import "../auth/LocalAuth.js";

const router = Router();

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    console.log("in auth route");
    if (req.isAuthenticated()) {
      console.log(req.sessionID);
      res
        .status(200)
        .json({
          user: req.user,
          isAuth: req.isAuthenticated(),
          sessionId: req.session,
        });
    } else {
      res
        .status(500)
        .json({ msg: "unable to authenticate", isAuth: req.isAuthenticated() });
    }
  }
);
router.get("/failure", (req, res) => {
  req.logOut(() => req.session.destroy());
});
export { router };
