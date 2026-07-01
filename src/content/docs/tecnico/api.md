---
title: API pública
description: Integrá Passix con tus sistemas usando la API REST.
sidebar:
  order: 1
---

Passix expone una **API REST** para integrar eventos, entradas y ventas con tus propios sistemas.

## Endpoint base

```
https://api.getpassix.com
```

## Autenticación

Los endpoints privados requieren un **token**. Generalo desde el panel en **Configuración → API** (a nivel organización) y enviálo en el header:

```http
Authorization: Bearer TU_TOKEN
```

:::caution
Tratá el token como una contraseña. No lo publiques en el frontend ni en repos públicos.
:::

## Ejemplo: eventos públicos

Listar los eventos públicos no requiere token:

```bash
curl https://api.getpassix.com/public/events
```

Respuesta (resumida):

```json
{
  "data": [
    {
      "id": 123,
      "title": "Mi Evento",
      "start_date": "2026-08-15T21:00:00-03:00",
      "status": "PUBLISHED"
    }
  ]
}
```

## Casos de uso

- Mostrar tus eventos en **tu propio sitio**.
- Sincronizar **ventas** con tu CRM o planilla.
- Automatizar **acreditaciones** o reportes.

Para reaccionar a eventos en tiempo real (una venta, un check-in), usá [Webhooks](/tecnico/webhooks/) en vez de hacer *polling* a la API.

:::note
Esta página cubre lo esencial. Para el detalle completo de endpoints, sumá acá tu especificación **OpenAPI** cuando la publiques.
:::
