import fs from "fs";
import path from "path";

var accessLogStream = fs.createWriteStream(path.join("./access.log"), {
  flags: "a",
});

export { accessLogStream };