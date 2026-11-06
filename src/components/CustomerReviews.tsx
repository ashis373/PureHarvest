import React, { useState } from 'react';
import { Review } from '../types';
import { Star, CheckCircle, PlusCircle, MessageSquarePlus, Quote } from 'lucide-react';

interface CustomerReviewsProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'verifiedBuyer'>) => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviews,
  onAddReview,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<'ghee-oil' | 'spices' | 'vegetables' | 'all'>('ghee-oil');
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    onAddReview({
      author: authorName.trim(),
      location: location.trim() || 'Verified Customer',
      rating,
      category,
      comment: comment.trim(),
    });

    setAuthorName('');
    setLocation('');
    setComment('');
    setShowAddModal(false);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45] mb-2">
              <span>VOICES OF HOME COOKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A201C] tracking-tight">
              Trusted by 12,000+ Family Kitchens
            </h2>
            <p className="mt-2 text-base text-[#576359] max-w-xl">
              Real feedback from home cooks and families who enjoy our pure bilona ghee, fresh spices, and daily vegetables.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2.5 bg-white border border-[#287A45]/30 hover:border-[#287A45] text-[#287A45] hover:bg-[#287A45] hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-2xs self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write a Customer Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#287A45]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-[#D97706]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-[#D97706] text-[#D97706]' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#287A45]/20" />
                </div>

                <p className="text-sm text-[#1A201C] leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#1A201C] flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      {rev.verifiedBuyer && (
                        <span title="Verified Buyer" className="inline-flex">
                          <CheckCircle className="w-3.5 h-3.5 text-[#287A45]" />
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-[#576359] block mt-0.5">
                      {rev.location}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#287A45]/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-display text-lg font-bold text-[#1A201C] flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-[#287A45]" />
                Share Your Kitchen Experience
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Indiranagar, Bengaluru"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Category Purchased
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                  >
                    <option value="ghee-oil">Pure Ghee & Cooking Oil</option>
                    <option value="spices">Spices</option>
                    <option value="vegetables">Fresh Vegetables</option>
                    <option value="all">All Three Categories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Rating (Stars)
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                  >
                    <option value="5">5 Stars - Outstanding</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Good</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Your Review / Experience
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell other home cooks about the quality, aroma, packaging, or delivery..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#287A45]/30 focus:border-[#287A45]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#287A45] hover:bg-[#1A532E] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
