import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["localhost:9092"],
  clientId: "certificate",
});

const topic = "issue-certificate";
const consumer = kafka.consumer({ groupId: "certificate-group" });

const producer = kafka.producer();
let counter = 0;

async function run() {
  await producer.connect();
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      counter++;

      const payload = JSON.parse(message.value);
      //   setTimeout(() => {
      producer.send({
        topic: "certification-response",
        messages: [
          {
            value: `Certificado do aluno #${payload.user.name} do curso ${payload.course} gerado!`,
          },
        ],
      });
      //   }, 3000);
    },
  });
}
run().catch(console.error);
