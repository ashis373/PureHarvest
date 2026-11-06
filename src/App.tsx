import React, { useState, useEffect } from 'react';
import { Product, CategoryId, CartItem, Review } from './types';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreeCategories } from './components/ThreeCategories';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactOrder } from './components/ContactOrder';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MessageCircle, Check } from 'lucide-react';

const PRODUCTS_STORAGE_KEY = 'vedicrasoi_products_v1';
const CART_STORAGE_KEY = 'vedicrasoi_cart_v1';
const REVIEWS_STORAGE_KEY = 'vedicrasoi_reviews_v1';

export default function App() {
  // Load products with editable prices
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_PRODUCTS;
  });

  // Category filter state for showcase
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Edit Mode toggle for prices
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // Cart Drawer Open/Close
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_REVIEWS;
  });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    } catch {
      // ignore
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart total calculations
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to basket`);
  };

  const handleUpdateProductQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const getCartQuantity = (productId: string): number => {
    const item = cart.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Price updates
  const handleUpdatePrice = (productId: string, newPrice: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, price: newPrice } : p))
    );
    // Also update price in current cart if present
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, product: { ...item.product, price: newPrice } }
          : item
      )
    );
    showToast('Product price updated');
  };

  const handleResetPrices = () => {
    setProducts(INITIAL_PRODUCTS);
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    showToast('Prices reset to original defaults');
  };

  // Direct WhatsApp links
  const handleGeneralWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste VedicRasoi! I would like to order fresh pure ghee, stone-ground spices, and dawn-harvest vegetables for my kitchen.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickOrderCategory = (categoryId: CategoryId, categoryTitle: string) => {
    const text = encodeURIComponent(
      `Namaste VedicRasoi! I want to order from the *${categoryTitle}* category. Please share available items and prices.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOrderSingleProductWhatsApp = (product: Product, quantity: number) => {
    const total = product.price * quantity;
    const text = encodeURIComponent(
      `Namaste VedicRasoi! I would like to order:\n• *${product.name}* (${product.unit})\n• Quantity: ${quantity}\n• Estimated Total: ₹${total}\n\nPlease let me know the delivery slot. Thank you!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Explore Category Smooth Scroll
  const handleExploreCategory = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddReview = (newRev: Omit<Review, 'id' | 'date' | 'verifiedBuyer'>) => {
    const review: Review = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      verifiedBuyer: true,
    };
    setReviews((prev) => [review, ...prev]);
    showToast('Thank you! Your review has been published.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#1A201C] selection:bg-[#287A45] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A201C] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-fade-in border border-white/10">
          <Check className="w-4 h-4 text-[#287A45]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. HEADER */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsApp={handleGeneralWhatsApp}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('categories');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWhatsAppClick={handleGeneralWhatsApp}
          onSelectCategory={handleExploreCategory}
        />

        {/* 3. THREE PRODUCT CATEGORIES – MAIN FOCUS */}
        <ThreeCategories
          onExploreCategory={handleExploreCategory}
          onQuickOrderCategory={handleQuickOrderCategory}
        />

        {/* 4. PRODUCT PRESENTATION WITH EDITABLE PRICES */}
        <ProductShowcase
          products={products}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onUpdateProductQuantity={handleUpdateProductQuantity}
          getCartQuantity={getCartQuantity}
          onOrderSingleProductWhatsApp={handleOrderSingleProductWhatsApp}
          onUpdatePrice={handleUpdatePrice}
          onResetPrices={handleResetPrices}
          isEditMode={isEditMode}
          onToggleEditMode={() => setIsEditMode(!isEditMode)}
        />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. ABOUT US */}
        <AboutUs />

        {/* 7. CUSTOMER REVIEWS */}
        <CustomerReviews
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* 8. CONTACT & ORDER */}
        <ContactOrder cart={cart} cartTotal={cartTotal} />
      </main>

      {/* 9. FOOTER */}
      <Footer
        onSelectCategory={handleExploreCategory}
        onWhatsAppClick={handleGeneralWhatsApp}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateProductQuantity}
        onClearCart={handleClearCart}
        cartTotal={cartTotal}
      />

      {/* Floating Sticky WhatsApp Quick Order Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={handleGeneralWhatsApp}
          className="group relative flex items-center gap-2.5 bg-[#287A45] hover:bg-[#1A532E] text-white px-4 py-3.5 rounded-full shadow-2xl hover:shadow-[#287A45]/40 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs font-bold whitespace-nowrap hidden sm:inline pr-1">
            Order on WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
