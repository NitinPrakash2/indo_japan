import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CustomSelect } from './CustomSelect';

export const ApplyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    sector: 'Manufacturing',
  });
  const [submitted, setSubmitted] = useState(false);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.setAttribute('data-menu-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.removeAttribute('data-menu-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const sectorOptions = [
    { value: 'Manufacturing', label: 'Manufacturing & Automation' },
    { value: 'Automotive', label: 'Automotive & Mobility' },
    { value: 'Retail', label: 'Retail & Consumer Brands' },
    { value: 'Healthcare', label: 'Healthcare & Life Sciences' },
    { value: 'Technology', label: 'Technology, AI & Software' },
    { value: 'Other', label: 'Other Executive Sector' },
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#F6F3ED] border border-black/10 shadow-2xl p-5 sm:p-8 rounded-none animate-in zoom-in-95 duration-200 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#444444] hover:text-[#C83B3B] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-6 pr-7 sm:pr-8">
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
            <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-widest text-[#C83B3B] font-mono">
              APPLICATION • TOKYO 2026
            </span>
          </div>
          <h3 className="font-editorial text-xl sm:text-3xl font-bold text-[#1A1A1A] leading-tight">
            Apply for Japan Immersion
          </h3>
          <p className="text-xs text-[#555555] mt-1">
            Strictly application-led. Complete your executive profile below.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 sm:py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#1A1A1A]">
              Application Submitted
            </h4>
            <p className="text-xs text-[#555555] max-w-xs mx-auto">
              Our cohort curation director will review your submission and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Vikram Malhotra"
                className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-sm sm:text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vikram@company.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-sm sm:text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98200 12345"
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-sm sm:text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Global"
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-sm sm:text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Designation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder="e.g. Managing Director"
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-sm sm:text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                Industry Sector
              </label>
              <CustomSelect
                value={formData.sector}
                onChange={(val) => setFormData({ ...formData, sector: val })}
                options={sectorOptions}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strictly confidential • Verified executive review</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
