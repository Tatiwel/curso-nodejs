import express from "express";
import { logger } from "./utils/logger";

const app = express();

app.use(express.json());

function logger2(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("Request received");
  next();
}

app.use(logger);

let contador = 0;

function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.headers.authorization) return next();

  res.status(401).send("Not authorized");
}

// app.use(auth);

app.get("/", (req, res) => {
  contador++;
  res.status(500).send(`Visitante n ${contador}`);
});

app.post("/", auth, (req, res) => {
  console.log(req.body);
  const a = req.body.a;
  console.log(a);
  res.send("POST request to the homepage");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
