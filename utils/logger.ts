import express from "express";

export function logger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("Request received");
  next();
}
