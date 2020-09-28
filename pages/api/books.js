import { prop, sortBy } from "ramda";

export default (req, res) => {
  const books = [
    {
      fileName: "the-sun-also-rises.md",
      title: "The Sun Also Rises",
      author: "Earnest Hemmingway",
      dateRead: "2020-01-01",
    },
    {
      fileName: "jane-eyre.md",
      title: "Jane Eyre",
      author: "Charlotte Bronte",
      dateRead: "2021-04-01",
    },
  ];
  res.statusCode = 200;
  res.json(sortBy(prop("dateBy"))(books));
};
