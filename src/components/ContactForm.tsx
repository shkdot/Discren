import React, { useState, FormEvent } from 'react';
import { Button } from './Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  printingMethod: string;
  quantity: string;
  garmentType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  printingMethod?: string;
  quantity?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    printingMethod: 'Screen Printing',
    quantity: '100–500 pcs',
    garmentType: 'Finished T-Shirts',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number / WhatsApp is required for B2B communication.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-8 md:p-12 text-center animate-fade-in shadow-sm">
        <div className="w-16 h-16 bg-[#c85d2f]/10 text-[#c85d2f] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-[28px] font-extrabold text-[#181715] tracking-[-0.04em] mb-3">
          Requirement Submitted
        </h3>
        <p className="text-[16px] text-[#6e6a63] max-w-[500px] mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-[#181715]">{formData.name}</strong>. We have logged your enquiry for{' '}
          <strong className="text-[#181715]">{formData.garmentType}</strong> ({formData.quantity}).
        </p>

        <div className="bg-[#f4f0e8] p-5 rounded-[16px] text-left text-[14px] max-w-[480px] mx-auto mb-8 border border-[#d9d2c6]/60">
          <div className="text-[11px] uppercase tracking-widest font-extrabold text-[#c85d2f] mb-3">
            Enquiry Summary
          </div>
          <div className="space-y-1.5 text-[#181715]">
            <p><strong>Company:</strong> {formData.company || 'N/A'}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Printing Method:</strong> {formData.printingMethod}</p>
            <p><strong>Approx Quantity:</strong> {formData.quantity}</p>
          </div>
        </div>

        <p className="text-[13px] text-[#6e6a63] mb-6">
          * Note: This frontend submission state is ready for connection to your production API, Formspree, or backend webhook.
        </p>

        <Button 
          variant="secondary" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              company: '',
              phone: '',
              email: '',
              printingMethod: 'Screen Printing',
              quantity: '100–500 pcs',
              garmentType: 'Finished T-Shirts',
              message: '',
            });
          }}
        >
          Submit Another Requirement
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-7 md:p-10 shadow-sm space-y-6" noValidate>
      <div className="border-b border-[#d9d2c6] pb-5 mb-2">
        <h3 className="text-[24px] font-extrabold text-[#181715] tracking-[-0.04em]">
          B2B Requirement Form
        </h3>
        <p className="text-[14px] text-[#6e6a63]">
          Provide order specifications for evaluation by our production team in Jogeshwari West.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[13px] font-bold text-[#181715] mb-2">
            Your Name <span className="text-[#c85d2f]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 bg-[#f4f0e8] border ${errors.name ? 'border-red-500' : 'border-[#d9d2c6]'} rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors`}
          />
          {errors.name && (
            <p className="text-red-600 text-[12px] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-[13px] font-bold text-[#181715] mb-2">
            Company / Apparel Brand Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Clothing Co."
            className="w-full px-4 py-3 bg-[#f4f0e8] border border-[#d9d2c6] rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[13px] font-bold text-[#181715] mb-2">
            Phone / WhatsApp Number <span className="text-[#c85d2f]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 bg-[#f4f0e8] border ${errors.phone ? 'border-red-500' : 'border-[#d9d2c6]'} rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors`}
          />
          {errors.phone && (
            <p className="text-red-600 text-[12px] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-[13px] font-bold text-[#181715] mb-2">
            Email Address <span className="text-[#c85d2f]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@brand.com"
            className={`w-full px-4 py-3 bg-[#f4f0e8] border ${errors.email ? 'border-red-500' : 'border-[#d9d2c6]'} rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors`}
          />
          {errors.email && (
            <p className="text-red-600 text-[12px] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="printingMethod" className="block text-[13px] font-bold text-[#181715] mb-2">
            Required Printing Method
          </label>
          <select
            id="printingMethod"
            name="printingMethod"
            value={formData.printingMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#f4f0e8] border border-[#d9d2c6] rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors cursor-pointer"
          >
            <option value="Screen Printing">Screen Printing</option>
            <option value="DTF Printing">DTF Printing</option>
            <option value="Puff Printing">3D Puff Printing</option>
            <option value="High-Density">High-Density Silicone</option>
            <option value="Cut Panel Printing">Cut Panel Printing (Unstitched)</option>
            <option value="Finished Garments">Finished Garments</option>
            <option value="Need Recommendation">Need Method Recommendation</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-[13px] font-bold text-[#181715] mb-2">
            Approximate Order Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#f4f0e8] border border-[#d9d2c6] rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors cursor-pointer"
          >
            <option value="~50–100 pcs">~50–100 pieces (Starting Run)</option>
            <option value="100–500 pcs">100–500 pieces (Standard Run)</option>
            <option value="500–1,000 pcs">500–1,000 pieces (Bulk Production)</option>
            <option value="1,000+ pcs">1,000+ pieces (High Volume)</option>
            <option value="Sampling Only">Sampling / Testing First</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="garmentType" className="block text-[13px] font-bold text-[#181715] mb-2">
          Garment Format & Fabric Type
        </label>
        <select
          id="garmentType"
          name="garmentType"
          value={formData.garmentType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#f4f0e8] border border-[#d9d2c6] rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors cursor-pointer"
        >
          <option value="Finished T-Shirts">Finished T-Shirts (Cotton / Blends)</option>
          <option value="Hoodies & Sweatshirts">Finished Hoodies & Sweatshirts</option>
          <option value="Unstitched Cut Fabric Panels">Unstitched Cut Panels</option>
          <option value="Polo Garments">Polo Garments & Pique Knits</option>
          <option value="Custom Garment Format">Other Custom Apparel Format</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-bold text-[#181715] mb-2">
          Message / Specific Requirement Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your artwork complexity, number of print positions, print dimensions, fabric GSM, or target delivery date..."
          className="w-full px-4 py-3 bg-[#f4f0e8] border border-[#d9d2c6] rounded-[14px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors resize-y"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button 
          type="submit" 
          variant="primary" 
          disabled={isSubmitting} 
          className="w-full sm:w-auto px-8 gap-2"
        >
          <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
          <Send className="w-4 h-4" />
        </Button>
        <span className="text-[12px] text-[#6e6a63]">
          * We respect confidentiality for brand designs & artwork.
        </span>
      </div>
    </form>
  );
};
