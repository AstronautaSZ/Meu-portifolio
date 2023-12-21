
const express = require("express");
const app = express();
const port=process.env.PORT ? Number(process.env.PORT) : 3000;
app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())
const { sendTestEmail } = require("./Email");

app.get("/", (req, res) => {
  res.send("Aviso: Run /send-email to send test email ");
});
const SENDER_EMAIL_ID = "EMAIL_ID";

app.get("/send/:email/:ideia/:nome", async (req,res) => {
  try {
    if (req.params.email== " ") {
      throw new Error(
        "Please update SENDER_EMAIL_ID with your email id in server.js"
      );
    }
    const info = await sendTestEmail(req.params.email,req.params.ideia,req.params.nome);
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});