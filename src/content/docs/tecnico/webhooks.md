---
title: Webhooks
description: Recibí eventos en tiempo real cuando cambia una venta, un check-in o una configuración.
description: Recibí notificaciones en tiempo real de eventos en Passix para integrar con tus sistemas.
sidebar:
  order: 2
---

Los **webhooks** te permiten enterarte al instante de lo que pasa en Passix sin estar consultando la API todo el tiempo.
Los **webhooks** te permiten recibir notificaciones automáticas en tiempo real cuando ocurren eventos importantes en Passix (ej. una nueva venta, un check-in). Esto es ideal para integrar Passix con tus propios sistemas, CRM, herramientas de marketing o bases de datos sin necesidad de hacer *polling* a la API.

## Para qué sirven
## Cómo funcionan

- Actualizar tu CRM o planilla cuando entra una venta.
- Sincronizar check-ins con otros sistemas.
- Disparar automatizaciones cuando se crea, paga o cancela una orden.
Cuando un evento configurado ocurre en Passix, enviamos una solicitud HTTP POST a una URL que vos definís. Esta solicitud contiene un payload JSON con los detalles del evento.

## Dónde se configuran
## Configurar un webhook

Podés configurarlos a nivel de **organización** o de **evento**, según qué querés escuchar.
1.  Andá a **Configuración de la organización → Webhooks**.
2.  Hacé clic en **Crear Webhook**.
3.  Ingresá la **URL de tu endpoint** (donde Passix enviará las notificaciones).
4.  Seleccioná los **eventos** a los que querés suscribirte (ej. `order.created`, `attendee.checked_in`).
5.  Guardá.

- Organización: para integraciones globales.
- Evento: para automatizaciones específicas de un show.
## Eventos soportados

## Qué eventos escuchar
Aquí algunos de los eventos que Passix puede notificar:

Los eventos más útiles suelen ser:
-   `order.created`: Se creó una nueva orden (puede estar pendiente de pago).
-   `order.paid`: Una orden ha sido pagada y confirmada.
-   `order.refunded`: Una orden ha sido reembolsada (total o parcialmente).
-   `attendee.checked_in`: Un asistente ha sido validado en la puerta.
-   `attendee.transferred`: Una entrada ha sido transferida a otro asistente.
-   `event.published`: Un evento ha cambiado su estado a publicado.

- **Orden creada**
- **Orden pagada**
- **Orden cancelada**
- **Check-in realizado**
- **Reembolso procesado**
## Estructura del Payload

## Buenas prácticas
Cada notificación es un JSON con la siguiente estructura general:

- Verificá la **firma** o el token del webhook si tu implementación lo soporta.
- Respondé rápido con `2xx`; si no, Passix reintentará la entrega.
- Diseñá el receptor para que sea **idempotente**: un evento puede llegar más de una vez.
```json
{
  "event": "order.paid",
  "timestamp": "2026-07-01T10:30:00Z",
  "data": {
    "order_id": "ORD-12345",
    "event_id": "EVT-67890",
    "total_amount": 15000,
    "currency": "ARS",
    "buyer_email": "comprador@ejemplo.com",
    "tickets": [
      {"ticket_id": "TKT-111", "type": "General", "price": 10000},
      {"ticket_id": "TKT-222", "type": "VIP", "price": 5000}
    ]
  }
}
```

## Seguridad

Para verificar la autenticidad de las notificaciones, Passix incluye una **firma digital** en el header de la solicitud. Deberías validar esta firma en tu endpoint para asegurarte de que la notificación proviene de Passix y no ha sido alterada.

:::note
Si solo querés leer datos bajo demanda, usá la [API pública](/tecnico/api/). Si querés reaccionar en tiempo real, usá webhooks.
:::

## Testing

Puedes usar herramientas como Webhook.site o ngrok para probar tus endpoints de webhook durante el desarrollo.
:::