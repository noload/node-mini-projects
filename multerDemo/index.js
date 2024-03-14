const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `myImage-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homepage.ejs");
});

app.post("/upload", upload.single("profileImg"), (req, res) => {
  console.log();
  console.log();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server Started at port 3000");
});
