---
title: Widget embebible
description: Insertá el checkout de Passix en tu propia web sin salir de tu sitio.
description: Detalles técnicos para integrar y personalizar el widget de venta de Passix.
sidebar:
  order: 3
---

El **widget** te deja mostrar el flujo de compra de Passix embebido en tu web, en lugar de mandar al comprador a una página separada.
Este documento detalla la implementación técnica y las opciones avanzadas de personalización del widget de venta de Passix. Para una guía de uso general, consultá Widget de venta.

## Qué resuelve
## Inclusión del script

- Mantener al comprador dentro de tu sitio.
- Reducir fricción en la compra.
- Reutilizar el checkout y el pago de Passix con tu branding.
El widget se carga mediante un script JavaScript y un contenedor `div` en tu HTML.

## Flujo del widget
```html
<div id="passix-widget" data-event-id="TU_ID_DE_EVENTO"></div>
<script src="https://widget.getpassix.com/v1/embed.js" async defer></script>
```

1. El comprador elige las entradas.
2. Carga sus datos.
3. Paga con el método disponible.
4. Vuelve al sitio con el estado final de la orden.
-   `id="passix-widget"`: El ID del contenedor donde se renderizará el widget. Puedes cambiarlo, pero asegúrate de que el script lo encuentre.
-   `data-event-id="TU_ID_DE_EVENTO"`: **Obligatorio**. El ID único de tu evento en Passix.
-   `async defer`: Atributos recomendados para no bloquear el renderizado de tu página.

## Estados comunes
## Atributos de datos (data-attributes)

| Estado | Qué pasa |
|---|---|
| **Selección de productos** | El comprador elige entradas. |
| **Carga de información** | Completa nombre, email y preguntas. |
| **Pago** | Se procesa MercadoPago o pago offline. |
| **Retorno** | Se muestra confirmación o error. |
| **Impresión** | Opcionalmente se abre la vista para imprimir orden o entradas. |
Puedes personalizar el comportamiento y la apariencia del widget añadiendo atributos `data-` al `div` contenedor:

## Recomendaciones de integración
| Atributo | Descripción | Valores posibles | Ejemplo |
|---|---|---|---|
| `data-event-id` | ID del evento. **Obligatorio**. | String | `data-event-id="12345"` |
| `data-theme` | Tema de color del widget. | `light`, `dark` | `data-theme="dark"` |
| `data-locale` | Idioma del widget. | `es`, `en`, `pt` | `data-locale="en"` |
| `data-preselect-tickets` | IDs de tickets a preseleccionar (separados por coma). | String | `data-preselect-tickets="TKT-1,TKT-2"` |
| `data-hide-header` | Oculta el encabezado del evento en el widget. | `true`, `false` | `data-hide-header="true"` |
| `data-redirect-on-success` | URL a la que redirigir tras una compra exitosa. | URL | `data-redirect-on-success="/gracias"` |

- Probalo primero en un entorno de desarrollo.
- Escuchá el resultado final por **webhook** además de la respuesta visual del widget.
- Mostrá un mensaje claro si la compra queda en estado pendiente.
## Eventos del widget

El widget puede emitir eventos personalizados al `window` que puedes escuchar para integrar con tu lógica de frontend:

```javascript
window.addEventListener('passix:widget:order-completed', (event) => {
  console.log('Orden completada:', event.detail);
  // event.detail contendrá información de la orden
});
```

-   `passix:widget:loaded`: El widget ha terminado de cargar.
-   `passix:widget:order-completed`: Una compra ha sido completada exitosamente.

## Estilos y CSS

El widget carga sus propios estilos. Para overrides menores, puedes usar CSS global en tu página. Para personalizaciones más profundas, considera usar los atributos de datos o contactar a soporte para opciones de *whitelabel*.

:::tip
Si integrás el widget, combiná esta guía con [API pública](/tecnico/api/) y [Webhooks](/tecnico/webhooks/) para tener el flujo completo.
Si integrás el widget, combiná esta guía con la API pública y los Webhooks para tener el flujo completo de integración.
:::