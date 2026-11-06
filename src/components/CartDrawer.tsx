import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, Truck, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
  cartTotal: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  cartTotal,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [slot, setSlot] = useState('Morning 7-10 AM');

  if (!isOpen) return null;

  const FREE_DELIVERY_THRESHOLD = 499;
  const amountNeeded = Math.max(0, FREE_DELIVERY_THRESHOLD - cartTotal);
  const deliveryProgress = Math.min(100, (cartTotal / FREE_DELIVERY_THRESHOLD) * 100);

  const handleWhatsAppCheckout = () => {
    let text = `*New Order from VedicRasoi Website*%0A%0A`;
    if (customerName) text += `*Name:* ${encodeURIComponent(customerName)}%0A`;
    if (address) text += `*Address:* ${encodeURIComponent(address)}%0A`;
    text += `*Slot:* ${encodeURIComponent(slot)}%0A%0A`;

    text += `*Order Items:*%0A`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${encodeURIComponent(item.product.name)} (${encodeURIComponent(item.product.unit)}) x ${item.quantity} = ₹${item.product.price * item.quantity}%0A`;
    });

    text += `%0A*Subtotal:* ₹${cartTotal}%0A`;
    text += `*Delivery Fee:* ${amountNeeded === 0 ? 'FREE' : '₹40'}%0A`;
    text += `*Final Amount:* ₹${amountNeeded === 0 ? cartTotal : cartTotal + 40}%0A%0A`;
    text += `Please confirm order availability and dispatch time. Thank you!`;

    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#FFF9EF]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#287A45]" />
              <h3 className="font-display text-lg font-bold text-[#1A201C]">
                Your Kitchen Basket ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-[#EBF5EE] p-3 border-b border-[#287A45]/15 text-xs">
            <div className="flex items-center justify-between text-[#287A45] font-semibold mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                {amountNeeded === 0
                  ? '🎉 Free Express Delivery Unlocked!'
                  : `Add ₹${amountNeeded} more for Free Delivery`}
              </span>
              <span className="font-mono">{Math.round(deliveryProgress)}%</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#287A45] h-full transition-all duration-300"
                style={{ width: `${deliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF6EE] text-[#576359] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h4 className="text-base font-bold text-[#1A201C]">Your basket is empty</h4>
                <p className="text-xs text-[#576359] max-w-xs mx-auto">
                  Explore our pure ghee, aromatic spices, and fresh vegetables to stock your kitchen!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 px-5 py-2.5 bg-[#287A45] text-white text-xs font-bold rounded-xl"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3 rounded-xl border border-slate-100 hover:border-[#287A45]/30 transition-colors bg-[#FAF6EE]/50"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-stone-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#1A201C] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] text-[#576359]">
                        {item.product.unit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-[#1A201C] font-mono">
                        ₹{item.product.price * item.quantity}
                      </span>

                      <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-1.5 py-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-slate-500 hover:text-[#287A45]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold px-1 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-slate-500 hover:text-[#287A45]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-[#FFF9EF] space-y-4">
              {/* Optional quick details */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#287A45]"
                />
                <input
                  type="text"
                  placeholder="Delivery Address / City"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#287A45]"
                />
              </div>

              {/* Price summary */}
              <div className="space-y-1.5 text-xs text-[#576359] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#1A201C] font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold text-[#287A45]">
                    {amountNeeded === 0 ? 'FREE' : '₹40'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1A201C] pt-2 border-t border-slate-200">
                  <span>Estimated Total</span>
                  <span className="font-mono text-[#287A45]">
                    ₹{amountNeeded === 0 ? cartTotal : cartTotal + 40}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 bg-[#287A45] hover:bg-[#1A532E] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Place Order on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onClearCart}
                  className="w-full py-1.5 text-[11px] text-slate-400 hover:text-red-600 transition-colors flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear Entire Basket</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
