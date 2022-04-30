# Micro-serviço com Node.js

- Utilizando Kafka
- Utilizando Node

## APlicações

- API principal (Station)
- Geração de certificado

## FLow

- API principal envia uma mensagem pro serviço de certificação para gerar o certificado
- Micro-serviço de certificado devolve uma respossta (sincrona/assincrone)

Se conseguir sincrona/assincrona:

- Receber uma resposta assincrona de quando o e-mail com o certificado foi enviado

## O que sabemos?

- REST (latencia)
- Redis / RabbitMQ / \*\*Kafka
