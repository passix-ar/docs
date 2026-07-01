---
title: Webhooks
description: Recibí eventos en tiempo real cuando cambia una venta, un check-in o una configuración.
sidebar:
  order: 2
---

Los **webhooks** te permiten enterarte al instante de lo que pasa en Passix sin estar consultando la API todo el tiempo.

## Para qué sirven

- Actualizar tu CRM o planilla cuando entra una venta.
- Sincronizar check-ins con otros sistemas.
- Disparar automatizaciones cuando se crea, paga o cancela una orden.

## Dónde se configuran

Podés configurarlos a nivel de **organización** o de **evento**, según qué querés escuchar.

- Organización: para integraciones globales.
- Evento: para automatizaciones específicas de un show.

## Qué eventos escuchar

Los eventos más útiles suelen ser:

- **Orden creada**
- **Orden pagada**
- **Orden cancelada**
- **Check-in realizado**
- **Reembolso procesado**

## Buenas prácticas

- Verificá la **firma** o el token del webhook si tu implementación lo soporta.
- Respondé rápido con `2xx`; si no, Passix reintentará la entrega.
- Diseñá el receptor para que sea **idempotente**: un evento puede llegar más de una vez.

:::note
Si solo querés leer datos bajo demanda, usá la [API pública](/tecnico/api/). Si querés reaccionar en tiempo real, usá webhooks.
:::