import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Truck, Send, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface ContactOrderProps {
  cart: CartItem[];
  cartTotal: number;
}

export const ContactOrder: React.FC<ContactOrderProps> = ({ cart, cartTotal }) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('Morning 7:00 AM - 10:00 AM');
  const [specialNote, setSpecialNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let orderText = `*New Order Inquiry - VedicRasoi*%0A%0A`;
    orderText += `*Customer:* ${encodeURIComponent(customerName || 'Valued Customer')}%0A`;
    if (phone) orderText += `*Phone:* ${encodeURIComponent(phone)}%0A`;
    if (address) orderText += `*Address:* ${encodeURIComponent(address)}%0A`;
    orderText += `*Delivery Slot:* ${encodeURIComponent(deliverySlot)}%0A%0A`;

    if (cart.length > 0) {
      orderText += `*Selected Basket Items:*%0A`;
      cart.forEach((item, index) => {
        orderText += `${index + 1}. ${encodeURIComponent(item.product.name)} (${encodeURIComponent(item.product.unit)}) x ${item.quantity} = ₹${item.product.price * item.quantity}%0A`;
      });
      orderText += `%0A*Estimated Total:* ₹${cartTotal}%0A`;
    } else {
      orderText += `*Inquiry:* Looking to order Pure Ghee, Spices, and Fresh Vegetables for my home.%0A`;
    }

    if (specialNote) {
      orderText += `%0A*Special Notes:* ${encodeURIComponent(specialNote)}%0A`;
    }

    orderText += `%0APlease confirm product availability and express dispatch time. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${orderText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleDirectWhatsAppChat = () => {
    const text = encodeURIComponent(
      'Namaste VedicRasoi! I would like to order pure ghee, spices, and fresh vegetables for my home kitchen. Please share today\'s fresh harvest list and prices.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF6EE] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & Direct WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45]">
              <MessageCircle className="w-4 h-4 fill-[#287A45]" />
              <span>ORDER & REACH US</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A201C] tracking-tight">
              Order via WhatsApp in 30 Seconds
            </h2>

            <p className="text-base text-[#576359] leading-relaxed">
              No complex app downloads or clunky registrations. Simply message us your grocery list or
              order through our interactive form, and our kitchen desk will dispatch your package within hours.
            </p>

            {/* Direct High-Contrast Action Box */}
            <div className="bg-[#287A45] text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#FFF9EF]/80 uppercase tracking-wide">
                    Fastest Ordering Channel
                  </div>
                  <div className="text-xl font-bold">WhatsApp Direct Line</div>
                </div>
              </div>

              <p className="text-xs text-[#FFF9EF]/90 leading-relaxed">
                Connect directly with our farm dispatch team on WhatsApp. Ask questions, request customized quantities, or reorder with one tap.
              </p>

              <button
                type="button"
                onClick={handleDirectWhatsAppChat}
                className="w-full py-3.5 px-4 bg-white hover:bg-[#FFF9EF] text-[#287A45] font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-[#287A45]" />
                <span>Chat & Order on WhatsApp: +91 98765 43210</span>
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#287A45]/15 hover:border-[#287A45] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#287A45]/10 text-[#287A45] flex items-center justify-center group-hover:bg-[#287A45] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#576359]">Call Customer Desk</div>
                  <div className="text-sm font-bold text-[#1A201C] group-hover:text-[#287A45]">
                    +91 98765 43210
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#287A45]/15">
                <div className="w-10 h-10 rounded-lg bg-[#287A45]/10 text-[#287A45] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#576359]">Operating Hours</div>
                  <div className="text-sm font-bold text-[#1A201C]">
                    6:00 AM – 9:00 PM (Everyday, 7 Days a Week)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#287A45]/15">
                <div className="w-10 h-10 rounded-lg bg-[#287A45]/10 text-[#287A45] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#576359]">Central Farm Dispatch Hub</div>
                  <div className="text-sm font-bold text-[#1A201C]">
                    Sector 44, Food Hub, Bengaluru & Express hubs in Mumbai & Delhi NCR
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#287A45]/15">
                <div className="w-10 h-10 rounded-lg bg-[#287A45]/10 text-[#287A45] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#576359]">Delivery Commitment</div>
                  <div className="text-sm font-bold text-[#1A201C]">
                    Same-day morning slot (7-10 AM) & evening slot (5-8 PM)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Order Form Generator */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#287A45]/15 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#1A201C]">
                    Fast WhatsApp Order Builder
                  </h3>
                  <p className="text-xs text-[#576359] mt-0.5">
                    Fill your delivery details below to generate a pre-formatted WhatsApp order message.
                  </p>
                </div>

                {cart.length > 0 && (
                  <div className="bg-[#287A45]/10 text-[#287A45] text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                    {cart.length} {cart.length === 1 ? 'item' : 'items'} in Basket
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="mb-6 bg-[#FAF6EE] rounded-xl p-4 border border-[#287A45]/15">
                  <div className="text-xs font-bold text-[#287A45] uppercase tracking-wide mb-2 flex items-center justify-between">
                    <span>Items Currently in Your Order:</span>
                    <span className="font-mono text-sm text-[#1A201C]">Total: ₹{cartTotal}</span>
                  </div>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="text-xs flex items-center justify-between text-[#1A201C]"
                      >
                        <span className="truncate pr-2">
                          • {item.product.name} ({item.product.unit})
                        </span>
                        <span className="font-mono shrink-0">
                          {item.quantity}x = ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Complete Delivery Address & Landmark *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="e.g. Flat 402, Green Glen Layout, Bellandur, Bengaluru - 560103"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                      Preferred Delivery Window
                    </label>
                    <select
                      value={deliverySlot}
                      onChange={(e) => setDeliverySlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                    >
                      <option value="Morning 7:00 AM - 10:00 AM">
                        Morning 7:00 AM – 10:00 AM (Dawn Harvest)
                      </option>
                      <option value="Afternoon 12:00 PM - 3:00 PM">
                        Afternoon 12:00 PM – 3:00 PM
                      </option>
                      <option value="Evening 5:00 PM - 8:00 PM">
                        Evening 5:00 PM – 8:00 PM (Dinner Prep)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                      Payment Preference
                    </label>
                    <div className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium">
                      Cash on Delivery or UPI on Arrival
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Custom Grocery List or Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Need 2 extra bunches of coriander, or want custom ghee packaging? Type here..."
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#287A45] hover:bg-[#1A532E] text-white font-bold rounded-xl text-sm shadow-lg shadow-[#287A45]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order to WhatsApp (+91 98765 43210)</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-medium border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-[#287A45] shrink-0" />
                    <span>
                      WhatsApp chat launched! If it didn't open automatically, click the direct button on the left.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
