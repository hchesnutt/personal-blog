import { descend, prop, sort } from "ramda";
import { promises } from "fs";

export default async (req, res) => {
  const rawData = await promises.readFile("./data/books.json");
  const books = JSON.parse(rawData);
  res.statusCode = 200;
  res.json(sort(descend(prop("createdAt")), books));
};
