// importing express
import user from "./routes/user.routes.js";
import express from express;


// creating instance of express
const app = express()


// allow HTTP req from diff. origins - sec. comm. b/w cli & server
app.use(cors({
    origin: process.env.CORS_ORIGIN, credential:true
}));


//  parse incoming JSON requests - limit size(prevent abuse)
app.use(express.json({limit: "16kb"}))


// parse incoming URL-encoded data from POST req, make it accessible in the req.body object
app.use(express.urlencoded({extended:true, limit: "16kb"}))


// serve static files in res to incoming HTTP req
app.use(express.static("public"))


// importing user router
import userRouter from "./routes/user.routes.js";

// declaring user route
app.use('/api/v1/users', userRouter);

export {app}
