# Gatway

### Iniciar o Gatewey

    	yarn start:dev

Dados de Conexão HTTP:

- Local: http://localhost.com/3333
- Protocolo: http.

Dados de conexão RabbitMq:

- Local: amqp://localhost:5672
- Protocolo: amqp.
- acesso ao Rabbit:[http://localhost:15672/](http://localhost:15672/)
- login: guest.
- password:guest
- exchange: gateway

## Funcionalidades.

### Rotas de requisições via HTTP:

#### Verificar se o service One está ativo :

Quando a rota for chamada, o gateway envia para o RabbitMQ uma mensagem RPC para o service One response se está ativo .

- Rota : http://localhost.com/3333/healthServiceOne
- Body: NULL
- responsta esperada:

```json
{
  "message": "Service One Ok"
}
```

#### Health service One Ask Service Two:

Quando a rota for chamada, o gateway envia para o RabbitMQ uma mensagem RPC para o service One perguntar ao service Two via RPC se ele tambem está ativo. O service Two response ao service One que reponse novamento ao gatway

- Rota : http://localhost.com/3333/healthServiceOne
- Body: NULL
- Resposta esperada :

```json
{
  "messageServiceOne": "Service One Ok",
  "messageServiceTwo": {
    "message": "Service One Ok"
  }
}
```
