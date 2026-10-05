import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { PAYMENT_URL } from '../constants.ts';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Freelancer');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08402F]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FFFFFF] border border-[#08402F]/15 rounded-2xl shadow-2xl p-6 sm:p-8 relative text-[#08402F] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-[#08402F] hover:text-[#0F6B50] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50] rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5 text-[#08402F]" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 flex items-center gap-3.5 pr-8">
              <img
                src="/author-profile.jpg?v=2"
                alt="Instructor"
                className="w-12 h-12 rounded-xl object-cover object-top border-2 border-[#0F6B50]/30 shrink-0"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://i.postimg.cc/0NFNqFzD/IMG-20260922-WA0009.jpg';
                }}
              />
              <div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#08402F]">
                  Join Sales System Builder
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#08402F]/70">
                  Enter your details to reserve your seat in the training.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-xs font-semibold text-[#08402F] mb-1">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#08402F]/20 rounded-lg text-[#08402F] placeholder:text-[#08402F]/30 focus:border-[#0F6B50] focus:ring-1 focus:ring-[#0F6B50] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="emailaddress" className="block text-xs font-semibold text-[#08402F] mb-1">
                  Email Address
                </label>
                <input
                  id="emailaddress"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#08402F]/20 rounded-lg text-[#08402F] placeholder:text-[#08402F]/30 focus:border-[#0F6B50] focus:ring-1 focus:ring-[#0F6B50] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="businessrole" className="block text-xs font-semibold text-[#08402F] mb-1">
                  Your Primary Focus
                </label>
                <select
                  id="businessrole"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#08402F]/20 rounded-lg text-[#08402F] focus:border-[#0F6B50] focus:ring-1 focus:ring-[#0F6B50] outline-none transition-colors"
                >
                  <option value="Freelancer">Freelancer</option>
                  <option value="Coach">Coach</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Small Business Owner">Small Business Owner</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] text-[#F7F3EA] font-semibold text-sm rounded-xl transition-all shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A9832F]"
                >
                  Join Sales System Builder
                </button>
              </div>

              <p className="text-center text-xs text-[#08402F]/65 pt-1">
                No tech background needed. No agency fee. No developer required.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0F6B50]/15 flex items-center justify-center mx-auto mb-4 text-[#0F6B50]">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#08402F]">
              Ready for Checkout
            </h3>
            <p className="mt-2 text-sm text-[#08402F]/70 max-w-sm mx-auto">
              Welcome, {name}. Click below to finalize your payment securely on Nestuge.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-[#0F6B50] hover:bg-[#0b523e] text-[#F7F3EA] font-semibold text-sm rounded-xl transition-colors cursor-pointer text-center"
              >
                Complete Payment on Nestuge
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#08402F]/60 hover:text-[#08402F] underline transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
