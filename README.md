# Simple Microservices communication with RebbitMQ and NestJS

## Description

Microservices were built using the NestJS framework being instantiated as a hybrid application.

Each of the microservices is an HTTP server and are connected to amqp.

So when one of the microservices receives an Http request it publishes a message in a queue, the other microservice receives this message via RebbitMQ

## Get Started

Run amqp on docker

```bash
docker-compose up
```

Start first microservice

```bash
cd service_one

yarn

yarn start:debug
```

Start second microservice

```bash
cd service_two

yarn

yarn start:debug
```

Start gateway

```bash
cd gateway

yarn

yarn start:debug
```

## Connections:

HTTP Connection Data:

- Local: http://localhost.com/3333
- Protocol: http.

RabbitMq connection:

- Local: amqp://localhost:5672
- Protocol: amqp.
- access to Rabbit:[http://localhost:15672/](http://localhost:15672/)
- login: guest.
- password:guest
- exchange: gateway

## Functionalities.

### Request routes using HTTP:

#### Verify that service One is active :

When the route is called, the gateway sends RabbitMQ an RPC message to the One response service if it is active.

- Rote : http://localhost.com/3333/healthServiceOne
- Body: NULL
- expected response:

```json
{
  "message": "Service One Ok"
}
```

#### Health service One Ask Service Two:

When the route is called, the gateway sends RabbitMQ an RPC message to service One asking service Two via RPC if it is also active. Service Two response to service One that replaces the gatway

- Rote : http://localhost.com/3333/healthServiceOne
- Body: NULL
- expected response :

```json
{
  "messageServiceOne": "Service One Ok",
  "messageServiceTwo": {
    "message": "Service One Ok"
  }
}
```
