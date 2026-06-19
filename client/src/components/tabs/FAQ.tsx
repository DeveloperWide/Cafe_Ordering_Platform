const FAQ = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">How do I place an order?</h4>
          <p>
            Browse the menu, add items to your cart, and proceed to checkout.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">What payment methods are accepted?</h4>
          <p>We support UPI, cards, net banking, and wallets.</p>
        </div>

        <div>
          <h4 className="font-semibold">Can I track my order?</h4>
          <p>Yes, real-time tracking is available after placing an order.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
