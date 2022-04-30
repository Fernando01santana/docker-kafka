import { Router } from "express";
import { CompressionTypes } from "kafkajs";
const routes = new Router();
routes.post("/certifications", async (req, res) => {
  //enviado a mensagem para o kafka
  const message = {
    user: { id: 1, name: "fernando santana" },
    course: "Kafka com Node.js",
    grade: 5,
  };
  const producer = req.producer;
  await producer.send({
    topic: "issue-certificate",
    compression: CompressionTypes.GZIP,
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });
  console.log("Mensagem enviada!");
  return res.json({ message: "Mensagem enviada" });
});
export default routes;
