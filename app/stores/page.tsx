'use client';
import { CartStore } from 'components/cartstore/cart-store';

export default function Stores() {
  return (
    <div
      style={{
        height: '100vh',
        padding: '48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center'
      }}
    >
      <CartStore />
      <CartStore />
    </div>
  );
}
