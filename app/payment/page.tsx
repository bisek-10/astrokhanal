export default function Payment() {
  const handleEsewaPayment = () => {
    window.location.href =
      "https://esewa.com.np/epay/main?amt=1000&scd=EPAYTEST&pid=123456&su=http://localhost:3000/success&fu=http://localhost:3000/failure";
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">💳 Pay for Consultation</h1>
      <button
        onClick={handleEsewaPayment}
        className="bg-blue-600 text-white p-2 mt-4">
        Pay with Esewa
      </button>
    </div>
  );
}
