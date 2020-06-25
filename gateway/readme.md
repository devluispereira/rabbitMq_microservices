# Gatway

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
