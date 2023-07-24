import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function CheckoutButton() {
  const clientId = "AXT2dZe66lvqAQgmw-_4zQ9nnuB7kJBEx4bF9ZZqO1Zpq6C64BkJcwm2Ldfcjv3wWYJAmLkeMcKfMxfK";

//TODO: Implementar las siguientes funcionalidades para ocupar paypal:
// Una vez que agregue el usuario sus productos se muestre el boton de Paypal en CartDetails solo cuando este logueado el usuario.
// Vincular el monto total con el Sandbox.
// Una vez hecha la compra crear la orden de compra POST
//Mostrar alertas visuales en el navegador

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <div>
        <PayPalButtons  />
      </div>
    </PayPalScriptProvider>
  );
}
