import React, { useEffect, useState } from 'react';

export default function PaypalButton() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let script = document.getElementById("paypal-sdk-script") as HTMLScriptElement;

    let attempts = 0;
    const initPayPal = () => {
      attempts++;
      const container = document.getElementById("paypal-container-A4W6FCPN68AX6");
      
      // If the container doesn't exist yet, wait
      if (!container) {
        if (attempts < 50) setTimeout(initPayPal, 200);
        return;
      }

      // Ensure paypal is loaded
      if ((window as any).paypal && (window as any).paypal.HostedButtons) {
        if (!container.hasChildNodes()) {
          try {
            (window as any).paypal.HostedButtons({
              hostedButtonId: "A4W6FCPN68AX6",
            }).render("#paypal-container-A4W6FCPN68AX6");
          } catch (err: any) {
            console.error("Error rendering PayPal HostedButtons:", err);
            setError("Error interno de PayPal al renderizar el botón.");
          }
        }
      } else {
        if (attempts < 50) {
          setTimeout(initPayPal, 200); // Poll until ready
        } else {
          setError("Timeout: El SDK de PayPal no se pudo inicializar. (Revisa si tienes un AdBlocker activo o problemas de red).");
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = "paypal-sdk-script";
      script.src = "https://www.paypal.com/sdk/js?client-id=AZed4Lzi8atfwnPhe4FgY_lSuw0J9cS5JD2IxiiSnICRk5SyCiw10U9gS2_fBMdIo4rgf5NDJuGmNaif&components=hosted-buttons&disable-funding=venmo&currency=USD";
      script.async = true;
      script.onerror = () => {
        setError("La conexión con PayPal fue bloqueada. Desactiva tu AdBlocker o intenta en otra red.");
      };
      document.body.appendChild(script);
    }

    initPayPal();

    return () => {
      const container = document.getElementById("paypal-container-A4W6FCPN68AX6");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-4 min-h-[50px]">
      {error && (
        <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg text-red-200 text-xs text-center max-w-sm mb-4">
          <span className="block font-bold mb-1">Diagnóstico Técnico:</span>
          {error}
        </div>
      )}
      <div id="paypal-container-A4W6FCPN68AX6" className="w-full max-w-[300px]"></div>
    </div>
  );
}
