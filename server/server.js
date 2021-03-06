const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");

const contactRouter = require("./routes/contact.router");
const offersRouter = require("./routes/offers.router");
const storyRouter = require("./routes/story.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/offers", offersRouter);
app.use("/api/contact", contactRouter);
app.use("/api/stories", storyRouter);
app.use("/api/addoffers", offersRouter);
app.use("/api/editoffers", offersRouter);
app.use("/api/offers/userpage", offersRouter);
app.use("/api/fulloffers", offersRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
