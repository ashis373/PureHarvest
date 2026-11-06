import React, { useState } from 'react';
import { Product, CategoryId } from '../types';
import { Search, Plus, Minus, MessageCircle, Edit3, Check, RotateCcw, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  products: Product[];
  selectedCategory: CategoryId | 'all';
  onCategoryChange: (category: CategoryId | 'all') => void;
  onAddToCart: (product: Product) => void;
  onUpdateProductQuantity: (productId: string, quantity: number) => void;
  getCartQuantity: (productId: string) => number;
  onOrderSingleProductWhatsApp: (product: Product, quantity: number) => void;
  onUpdatePrice: (productId: string, newPrice: number) => void;
  onResetPrices: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  selectedCategory,
  onCategoryChange,
  onAddToCart,
  onUpdateProductQuantity,
  getCartQuantity,
  onOrderSingleProductWhatsApp,
  onUpdatePrice,
  onResetPrices,
  isEditMode,
  onToggleEditMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<string>('');

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleStartEdit = (product: Product) => {
    setEditingProductId(product.id);
    setTempPrice(product.price.toString());
  };

  const handleSavePrice = (productId: string) => {
    const parsed = parseFloat(tempPrice);
    if (!isNaN(parsed) && parsed > 0) {
      onUpdatePrice(productId, parsed);
    }
    setEditingProductId(null);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF6EE] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#287A45]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45] mb-2">
              <span>FRESH HARVEST & STAPLES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A201C] tracking-tight">
              Our Everyday Kitchen Essentials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#576359] max-w-xl">
              Select your required quantities or customize prices directly. Order individually or combine into a single convenient WhatsApp delivery.
            </p>
          </div>

          {/* Quick Price Editor Toolbar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              type="button"
              onClick={onToggleEditMode}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                isEditMode
                  ? 'bg-[#D97706] text-white border-[#D97706] shadow-md shadow-[#D97706]/20'
                  : 'bg-white text-[#576359] border-[#287A45]/20 hover:text-[#287A45]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Finish Price Editing' : 'Customize Prices'}</span>
            </button>

            <button
              type="button"
              onClick={onResetPrices}
              className="px-3 py-2 text-xs font-medium text-[#576359] hover:text-[#1A201C] bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-1"
              title="Reset all prices to store default"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Functional Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/80 rounded-2xl border border-[#287A45]/15 overflow-x-auto scrollbar-none shadow-2xs">
            <button
              type="button"
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#287A45] text-white shadow-xs'
                  : 'text-[#576359] hover:text-[#1A201C] hover:bg-slate-50'
              }`}
            >
              All Essentials (12)
            </button>
            <button
              type="button"
              onClick={() => onCategoryChange('ghee-oil')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'ghee-oil'
                  ? 'bg-[#287A45] text-white shadow-xs'
                  : 'text-[#576359] hover:text-[#1A201C] hover:bg-slate-50'
              }`}
            >
              Pure Ghee & Oils (4)
            </button>
            <button
              type="button"
              onClick={() => onCategoryChange('spices')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'spices'
                  ? 'bg-[#287A45] text-white shadow-xs'
                  : 'text-[#576359] hover:text-[#1A201C] hover:bg-slate-50'
              }`}
            >
              Authentic Spices (4)
            </button>
            <button
              type="button"
              onClick={() => onCategoryChange('vegetables')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'vegetables'
                  ? 'bg-[#287A45] text-white shadow-xs'
                  : 'text-[#576359] hover:text-[#1A201C] hover:bg-slate-50'
              }`}
            >
              Fresh Vegetables (4)
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] md:w-72">
            <Search className="w-4 h-4 text-[#576359] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ghee, haldi, tomato..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-[#287A45]/20 text-xs text-[#1A201C] placeholder-[#576359]/70 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45] shadow-2xs"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inCartQty = getCartQuantity(product.id);
            const isEditing = editingProductId === product.id || isEditMode;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#287A45]/15 hover:border-[#287A45]/40 transition-all duration-300 hover:shadow-lg shadow-2xs relative"
              >
                {/* Visual Thumbnail Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category label */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#287A45] shadow-2xs">
                    {product.unit}
                  </div>

                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-[#D97706] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[11px] text-white font-medium drop-shadow-sm">
                      {product.purityHighlight}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#287A45] tracking-wider uppercase mb-1">
                      {product.categoryName}
                    </div>

                    <h3 className="font-display text-base font-bold text-[#1A201C] group-hover:text-[#287A45] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    {product.hindiName && (
                      <div className="text-xs text-[#576359] mt-0.5 font-medium">
                        {product.hindiName}
                      </div>
                    )}

                    <p className="mt-2 text-xs text-[#576359] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Module */}
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    {/* Price Row (Editable) */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div>
                        {editingProductId === product.id ? (
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-[#287A45]">₹</span>
                            <input
                              type="number"
                              min="1"
                              value={tempPrice}
                              onChange={(e) => setTempPrice(e.target.value)}
                              className="w-20 px-2 py-1 text-sm font-bold border border-[#287A45] rounded focus:outline-none"
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSavePrice(product.id);
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => handleSavePrice(product.id)}
                              className="p-1 bg-[#287A45] text-white rounded hover:bg-[#1A532E]"
                              title="Save price"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-[#1A201C] font-mono tabular-nums">
                              ₹{product.price}
                            </span>
                            {product.originalPrice && product.originalPrice > product.price && (
                              <span className="text-xs text-slate-400 line-through tabular-nums">
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </div>
                        )}
                        <span className="text-[10px] text-[#576359] block">
                          Taxes included
                        </span>
                      </div>

                      {/* Edit Price Trigger */}
                      {editingProductId !== product.id && (
                        <button
                          type="button"
                          onClick={() => handleStartEdit(product)}
                          className="text-[11px] text-[#576359] hover:text-[#287A45] flex items-center gap-1 py-1 px-1.5 rounded hover:bg-slate-100 transition-colors"
                          title="Click to edit product price"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span className="text-[10px]">Edit</span>
                        </button>
                      )}
                    </div>

                    {/* Actions: Add to Cart & 1-Click WhatsApp Order */}
                    <div className="space-y-2">
                      {inCartQty > 0 ? (
                        <div className="flex items-center justify-between bg-[#EBF5EE] rounded-xl p-1 border border-[#287A45]/30">
                          <button
                            type="button"
                            onClick={() => onUpdateProductQuantity(product.id, inCartQty - 1)}
                            className="w-8 h-8 rounded-lg bg-white text-[#287A45] flex items-center justify-center hover:bg-[#287A45] hover:text-white transition-colors shadow-2xs font-bold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-[#287A45] tabular-nums px-2">
                            {inCartQty} in Basket
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateProductQuantity(product.id, inCartQty + 1)}
                            className="w-8 h-8 rounded-lg bg-[#287A45] text-white flex items-center justify-center hover:bg-[#1A532E] transition-colors shadow-2xs font-bold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onAddToCart(product)}
                          className="w-full py-2.5 px-3 rounded-xl bg-white border border-[#287A45] text-[#287A45] hover:bg-[#287A45] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Basket</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          onOrderSingleProductWhatsApp(product, inCartQty > 0 ? inCartQty : 1)
                        }
                        className="w-full py-2 px-3 rounded-xl bg-[#287A45] hover:bg-[#1A532E] text-white text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <MessageCircle className="w-3 h-3 fill-white" />
                        <span>Order via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-base font-semibold text-[#1A201C]">No items match your search.</p>
            <p className="text-xs text-[#576359] mt-1">Try another keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="mt-4 px-4 py-2 bg-[#287A45] text-white text-xs font-semibold rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
