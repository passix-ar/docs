---
title: Cobrar con MercadoPago
description: Conectá tu cuenta de MercadoPago para recibir los pagos de tus ventas.
sidebar:
  order: 2
---

Passix cobra a través de **MercadoPago**. Conectás tu cuenta una vez y el dinero de cada venta te llega directo.

## Conectar tu cuenta

1. Andá a **Configuración de la organización → Pagos**.
2. Hacé clic en **Conectar con MercadoPago**.
3. Se abre MercadoPago: **iniciá sesión** con la cuenta donde querés cobrar.
4. **Autorizá** a Passix a operar en tu nombre.
5. Volvés al panel con la cuenta ya **vinculada**. ✅

Esto usa la conexión oficial de MercadoPago (OAuth): Passix nunca ve tu contraseña de MP.

## Cómo se cobra

- El comprador paga con **tarjeta, dinero en cuenta o efectivo**.
- El pago se acredita en **tu** cuenta de MercadoPago.
- Passix descuenta su **comisión** automáticamente (marketplace).
- La confirmación del pago llega por **webhook**: la orden se marca como pagada sola, sin que hagas nada.

## Requisitos

- Una cuenta de **MercadoPago** (idealmente verificada) en el país de tu evento.
- Que la cuenta pueda **recibir pagos** (vendedor).

## Estados de pago

| Estado | Qué significa |
|---|---|
| **Aprobado / Pagado** | Entró la plata, orden completada. |
| **Pendiente** | MP aún no confirmó (ej. pago en efectivo). |
| **Rechazado** | El pago falló; el comprador puede reintentar. |

## Problemas comunes

- **"No me aparece la opción de pagar"**: revisá que MercadoPago esté **conectado** y habilitado en la [configuración del evento](/evento/configuracion/).
- **"Pagué pero la orden sigue pendiente"**: puede ser demora del webhook de MP. Suele resolverse en minutos; si no, revisá la orden en [Órdenes](/ventas/ordenes/).

:::caution
Cambiar la cuenta de MercadoPago conectada afecta solo a las **ventas futuras**. Las ventas ya cobradas quedaron en la cuenta anterior.
:::
