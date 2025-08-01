if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const wrapAsync = require("./utils/wrapAsync.js");
const Listing = require("./models/listing.js");
const session = require("express-session");
const MongoStore = require('connect-mongo'); 
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js"); 
const userRouter = require("./routes/user.js"); 


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connection to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
};


  

// app.get ("/",(req, res) => {
//     res.send("Hi, I am root");
// });


app.use(session(sessionOptions));
app.use(flash()); 

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


app.get("/home", wrapAsync( async (req, res) => {
    const idsToFind = ["6862bba4a9f8db6d2d032093", "6862bdaba9f8db6d2d0320a5", "6862bae8a9f8db6d2d03208d", "6862c6d1a9f8db6d2d0320eb", "6862be2aa9f8db6d2d0320ab"];
    const allListings = await Listing.find({ _id: { $in: idsToFind}});
    res.render("listings/home.ejs", {allListings});
}));

app.use("/home/listings", listingsRouter);
app.use("/home/listings/:id/reviews",reviewsRouter);
app.use("/", userRouter);

app.get("/about", wrapAsync( async (req, res) => {
    res.render("links/about.ejs");
})
);

app.get("/privacy", wrapAsync( async (req, res) => {
    res.render("links/privacy.ejs");
})
);

app.get("/terms", wrapAsync( async (req, res) => {
    res.render("links/terms.ejs");
})
);

app.get("/cookies", wrapAsync( async (req, res) => {
    res.render("links/cookies.ejs");
})
);

app.get("/careers", wrapAsync( async (req, res) => {
    res.render("links/careers.ejs");
})
);

app.get("/press", wrapAsync( async (req, res) => {
    res.render("links/press.ejs");
})
);

app.get("/forum", wrapAsync( async (req, res) => {
    res.render("links/forum.ejs");
})
);

app.get("/story", wrapAsync( async (req, res) => {
    res.render("links/story.ejs");
})
);

app.get("/support", wrapAsync( async (req, res) => {
    res.render("links/support.ejs");
})
);

app.get("/plan", wrapAsync( async (req, res) => {
    res.render("links/plan.ejs");
})
);

app.get("/dark", wrapAsync( async (req, res) => {
    res.render("links/dark.ejs");
})
);

app.get("/sitemap", wrapAsync( async (req, res) => {
    res.render("links/sitemap.ejs");
})
);

app.get("/contact", wrapAsync( async (req, res) => {
    res.render("links/contact.ejs");
})
);



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) =>{
    let { statusCode = 500, message = "Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    //res.status(statusCode).send(message);
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});