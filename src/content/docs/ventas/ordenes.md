---
title: Pedidos
description: "Consultá, filtrá y gestioná cada compra: estados, pagos, reenvíos y cancelaciones."
sidebar:
  order: 1
---

Un **pedido** es cada compra que hace una persona. Agrupa una o más entradas y guarda el estado del pago, los datos del comprador y las respuestas del checkout.

![Listado de pedidos](/img/panel/ev-orders.png)

## Ver los pedidos

En el evento, andá a **Pedidos** (menú **Venta de entradas**). Ves la lista con: comprador, total, estado, medio de pago y fecha. Podés **buscar** por nombre/email y **filtrar** por estado.

## Estados

| Estado del pedido | Significado |
|---|---|
| **Terminado** | Pago confirmado, entradas emitidas. |
| **Esperando pago** | Falta confirmar el pago (offline o MP pendiente). |
| **Cancelado** | Anulado; el stock se libera. |

| Estado de pago | Significado |
|---|---|
| **Pagado** | Entró el dinero. |
| **Pendiente** | Aún no confirmado. |
| **Reembolsado** | Se devolvió el total desde MercadoPago (Passix lo registra solo). |

## Acciones sobre un pedido

Abriendo un pedido podés:

- **Reenviar** el email con las entradas.
- **Marcar como pagado** (para [pago offline](/pagos/offline/)).
- **Cancelar** el pedido y liberar el stock.
- Los **reembolsos** se hacen desde MercadoPago, no desde acá → ver [Reembolsos](/ventas/reembolsos/).
- Ver las **respuestas** a las [preguntas del checkout](/evento/preguntas/).
- Editar datos del comprador o de los asistentes.

## Exportar

Podés **exportar** los pedidos a CSV desde [Reportes](/ventas/reportes/) para tu contabilidad.

:::tip
Si un comprador dice que "no le llegó la entrada", lo más rápido es abrir su pedido y usar **Reenviar email** (pedile que revise spam).
:::
