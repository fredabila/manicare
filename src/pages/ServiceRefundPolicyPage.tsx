import React from 'react';

const ServiceRefundPolicyPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            Service & Refund Policy
          </h1>
          <p className="text-xl text-white leading-relaxed font-medium">
            Effective Date: September 1, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-mani-light-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                At Manicare Home Health Agency, we aim to provide dependable and compassionate care. Our
                cancellation and refund policy ensures fair scheduling for both clients and caregivers.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">1. Hourly Home Care Services (Live-Out)</h2>
              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Cancellations & Rescheduling:</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li><strong>24-Hour Notice Required:</strong> Please notify us at least 24 hours in advance to cancel or
                reschedule without penalty.</li>
                <li><strong>Less Than 24 Hours Notice:</strong> A cancellation fee equal to 4 hours of service may apply.</li>
                <li><strong>No-Show / Refusal of Service:</strong> If a caregiver arrives and service is refused without
                prior notice, the full shift will be billed.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">2. Live-In Services</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Cancellations must be made at least 48 hours in advance to avoid a full-day service
                charge.</li>
                <li>If services are terminated unexpectedly, you will be charged for the current day and any
                caregiver travel or lodging expenses already incurred.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">3. Prepaid Services & Refunds</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Prepaid hours or packages will be refunded (less any used hours) if services are canceled
                in writing with proper notice.</li>
                <li>Refunds are processed within 7–10 business days to the original payment method.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">4. Non-Refundable Fees</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                Administrative intake fees, caregiver placement fees, and assessment fees are non-refundable
                once services begin.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">5. Agency-Initiated Cancellations</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                If Manicare Home Health must cancel due to caregiver unavailability, weather, or unforeseen
                circumstances, clients may choose to reschedule or receive a prorated refund for prepaid hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRefundPolicyPage;
