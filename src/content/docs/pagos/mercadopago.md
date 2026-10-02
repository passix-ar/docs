---
title: Cobrar con MercadoPago
description: Conectá tu cuenta de MercadoPago para recibir los pagos de tus ventas.
sidebar:
  order: 2
---

Passix cobra a través de **MercadoPago**. Conectás tu cuenta una vez y el dinero de cada venta te llega directo.

![Conectar MercadoPago desde el panel](/img/panel/ev-getting-started.png)

## Conectar tu cuenta

1. En el menú, entrá a **Cobrá → Configurar pagos**. Te lleva a **Configuraciones de la cuenta → Pago y plan**.
2. Hacé clic en **Conectar MercadoPago**.
3. Se abre MercadoPago: **iniciá sesión** con la cuenta donde querés cobrar.
4. **Autorizá** a Passix a operar en tu nombre.
5. Volvés al panel con la cuenta ya **vinculada**. ✅

Esto usa la conexión oficial de MercadoPago (OAuth): Passix nunca ve tu contraseña de MP.

La autorización se **renueva sola**: no tenés que volver a conectar la cuenta cada tantos meses.

Si intentás **publicar un evento sin un método de pago**, Passix te avisa y te deja el atajo a mano: el botón **Conectar MercadoPago**, o el link para habilitar el [pago offline](/pagos/offline/) en ese evento. Cuando terminás, el botón **Volver al evento** te deja donde estabas.

## Cómo se cobra

- El comprador paga con **tarjeta, dinero en cuenta o efectivo**.
- El pago se acredita en **tu** cuenta de MercadoPago.
- La **comisión de plataforma** se separa automáticamente vía el marketplace de MercadoPago. Vos elegís si la **paga el comprador** o la **asumís vos** → ver [Cómo cobra Passix](/pagos/como-cobra-passix/).
- La confirmación del pago llega por **webhook**: la orden se marca como pagada sola, sin que hagas nada.

## Requisitos

- Una cuenta de **MercadoPago** (idealmente verificada) en el país de tu evento.
- Que la cuenta pueda **recibir pagos** (vendedor).

## Desconectar tu cuenta

En **Configuraciones de la cuenta → Pago y plan** tenés la opción **Desconectar**.

Antes de desconectar, Passix revisa tus eventos publicados. Si alguno **solo** acepta MercadoPago, el botón queda bloqueado y te muestra cuáles son: desconectar los dejaría publicados y sin forma de cobrar. Para destrabarlo, en cada uno de esos eventos podés:

- habilitar el [pago offline](/pagos/offline/), así les queda otro método con el que vender, **o**
- pasarlos a **Borrador**.

Si ninguno queda sin método, la desconexión sigue adelante y te avisa cuántos eventos publicados dejan de ofrecer MercadoPago.

:::note
Los pagos que ya se iniciaron **se acreditan igual**, y las órdenes anteriores no se ven afectadas. Los reembolsos se hacen desde tu panel de MercadoPago, que sigue siendo tuyo → ver [Reembolsos](/ventas/reembolsos/).
:::

## Estados de pago

| Estado | Qué significa |
|---|---|
| **Aprobado / Pagado** | Entró la plata, orden completada. |
| **Pendiente** | MP aún no confirmó (ej. pago en efectivo). |
| **Rechazado** | El pago falló; el comprador puede reintentar. |

## Problemas comunes

- **"No me aparece la opción de pagar"**: revisá que MercadoPago esté **conectado** y habilitado en la [configuración del evento](/evento/configuracion/). Si la cuenta no está conectada, Passix **oculta** MercadoPago del checkout a propósito, para que el comprador no llegue a un pago que va a fallar.
- **"Estaba conectado y dejó de aparecer"**: la autorización se renueva sola, así que lo más común es que la conexión se haya cortado desde MercadoPago (por ejemplo, si quitaste el permiso de Passix en tu cuenta de MP). Volvé a **Configuraciones de la cuenta → Pago y plan** y usá **Reconectar MercadoPago**; se renueva sin que pierdas nada.
- **"Pagué pero la orden sigue pendiente"**: puede ser demora del webhook de MP. Suele resolverse en minutos; si no, revisá la orden en [Órdenes](/ventas/ordenes/).

:::caution
Cambiar la cuenta de MercadoPago conectada afecta solo a las **ventas futuras**. Las ventas ya cobradas quedaron en la cuenta anterior.
:::
