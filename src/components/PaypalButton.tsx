import React from 'react';

export default function PaypalButton() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4">
      <style>{`
        .pp-A4W6FCPN68AX6 {
          text-align: center;
          border: none;
          border-radius: 0.25rem;
          min-width: 11.625rem;
          padding: 0 2rem;
          height: 2.625rem;
          font-weight: bold;
          background-color: #FFD140;
          color: #000000;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.25rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .pp-A4W6FCPN68AX6:hover {
          background-color: #0070ba;
          color: #ffffff;
        }
      `}</style>
      <form
        action="https://www.paypal.com/ncp/payment/A4W6FCPN68AX6"
        method="post"
        target="_blank"
        style={{
          display: 'inline-grid',
          justifyItems: 'center',
          alignContent: 'start',
          gap: '0.5rem',
        }}
      >
        <input className="pp-A4W6FCPN68AX6" type="submit" value="Pagar ahora" />
        <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="cards" />
        <section style={{ fontSize: '0.75rem' }} className="text-brand-champagne/80">
          Con la tecnología de{' '}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="paypal"
            style={{ height: '0.875rem', verticalAlign: 'middle', display: 'inline' }}
          />
        </section>
      </form>
    </div>
  );
}
