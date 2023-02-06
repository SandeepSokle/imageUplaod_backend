var express = require("express");
const { db } = require("./database/database");
const cors = require("cors");
var app = express();
const rootRouter = require("./routes/rootRouter");
app.use(express.json());
app.use(cors());
let PORT = process.env.PORT || 8080;

app.use("/api/2023", rootRouter);

db.mongoose.connect(
  db.url,
  {
    useNewUrlParser: true,
    autoIndex: true,
  },
  () => {
    console.log("MongoDb Connected Successfully");
  }
);

app.listen(PORT, () => {
  console.log("web server listening on PORT Number : ", PORT);
});
