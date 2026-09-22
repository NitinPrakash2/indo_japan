import React, { useState } from 'react';
import { Mail, Phone, Building, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const PartnerAndContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    sector: 'Manufacturing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission (ready for MERN API in next phase)
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        sector: 'Manufacturing',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#ECE7DC] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Partnering & Key Contacts */}
          <div className="lg:col-span-6 space-y-10">
            {/* Partner Section */}
            <div id="partner" className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
                STRATEGIC COLLABORATION
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Partner <span className="italic text-[#C83B3B]">With Us</span>
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                Co-create platforms that deliver genuine bilateral value through thought leadership, stakeholder engagement, high-value business networking, and media distribution across The Economic Times.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Strategic Bilateral Alliances',
                  'Thought Leadership Panels',
                  'Corporate Delegate Blocks',
                  'Customized Factory Expeditions',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#222222] bg-white/70 p-3 border border-black/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C83B3B]"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Contacts List */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              <h3 className="font-editorial text-2xl font-bold text-[#1A1A1A]">
                Official Delegation Contacts
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-5 border border-black/8 shadow-2xs">
                  <span className="text-xs font-bold text-[#1A1A1A] block">Jyoti Singh</span>
                  <span className="text-[11px] text-[#666666] block mb-2">Program Curation & Delegate Relations</span>
                  <div className="flex flex-wrap gap-4 text-xs text-[#C83B3B] font-semibold">
                    <a href="mailto:jyoti.singh1@timesinternet.in" className="hover:underline flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#555555]" />
                      jyoti.singh1@timesinternet.in
                    </a>
                    <a href="tel:+919167561862" className="hover:underline flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#555555]" />
                      +91 91675 61862
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 border border-black/8 shadow-2xs">
                  <span className="text-xs font-bold text-[#1A1A1A] block">Pankaj Srivastava</span>
                  <span className="text-[11px] text-[#666666] block mb-2">Institutional Partnerships & Alliances</span>
                  <div className="flex flex-wrap gap-4 text-xs text-[#C83B3B] font-semibold">
                    <a href="mailto:pankaj.srivastava@timesinternet.in" className="hover:underline flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#555555]" />
                      pankaj.srivastava@timesinternet.in
                    </a>
                    <a href="tel:+919415252503" className="hover:underline flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#555555]" />
                      +91 94152 52503
                    </a>
                  </div>
                </div>

                {/* Escalation note from reference */}
                <div className="p-4 bg-white/60 border-l-2 border-[#C83B3B] text-xs text-[#555555] leading-relaxed">
                  <span className="font-bold text-[#222222]">Executive Escalation Desk: </span>
                  For priority inquiries or board briefings, write to <a href="mailto:shahbaz.khan@timesinternet.in" className="text-[#C83B3B] font-semibold hover:underline">shahbaz.khan@timesinternet.in</a> — Md. Shahbaz Khan, Director - Special Initiatives, The Economic Times.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Delegate Expression of Interest Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 border border-black/10 shadow-sm rounded-none">
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C83B3B]">
                  DELEGATE APPLICATION
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1">
                  Express Your Interest
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  Fill in your details. Our executive curation desk will connect within 24–48 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-[#1A1A1A]">
                    Expression Received
                  </h4>
                  <p className="text-xs text-[#555555] max-w-sm mx-auto">
                    Thank you for your interest in the Japan Immersion. The delegation director will reach out to you directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@enterprise.com"
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Industries"
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="Managing Director / Founder"
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Industry Sector *
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                      >
                        <option value="Manufacturing">Manufacturing & Engineering</option>
                        <option value="Automotive">Automotive & Mobility</option>
                        <option value="Retail">Retail, FMCG & Consumer</option>
                        <option value="Healthcare">Healthcare & Pharma</option>
                        <option value="Technology">Technology & Digital Services</option>
                        <option value="Other">Other Executive Domain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Key Objective / Notes
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific Japanese institutions or technology areas you are looking to explore..."
                      className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-black/10 text-xs text-[#1A1A1A] rounded-none focus:outline-none focus:border-[#C83B3B]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    Submit Expression of Interest →
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Your information remains strictly confidential within ET Editorial.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
