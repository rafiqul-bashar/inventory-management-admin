const faqContents = [
  {
    question: "What is Ecomgrove?",
    answer:
      "Ecomgrove is a cloud-based inventory management software designed to simplify product management for small to medium-sized businesses. Our platform helps businesses track and manage their inventory efficiently, allowing them to focus on growth and success.",
  },
  {
    question: "How does Ecomgrove work?",
    answer:
      "Ecomgrove works by providing businesses with an intuitive interface to track and manage their inventory in real-time. Our software allows users to monitor stock levels, track sales, generate reports, and more, all from one centralized platform.",
  },
  {
    question: "Is Ecomgrove suitable for my business?",
    answer:
      "Ecomgrove is ideal for small to medium retail shops, online ecommerce stores, and drop shipping businesses looking to streamline their inventory management processes. Whether you're just starting out or looking to scale your operations, Ecomgrove can help you take control of your products and grow your business.",
  },
  {
    question: "Can I integrate Ecomgrove with my existing systems?",
    answer:
      "Yes, Ecomgrove is designed to seamlessly integrate with a variety of existing systems and platforms, including ecommerce platforms, accounting software, and more. Our team can assist you with the integration process to ensure a smooth transition.",
  },
  {
    question: "How do I get started with Ecomgrove?",
    answer:
      "Getting started with Ecomgrove is easy! Simply sign up for an account on our website and follow the setup instructions. Our team is available to provide assistance and support every step of the way.",
  },
];
export default function FAQPage() {
  return (
    <section className=" text-gray-700">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-700">
          {faqContents.map((el, i) => (
            <div
              key={i}
              className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0"
            >
              <h3 className="font-semibold md:col-span-5">{el.question}</h3>
              <p className="md:pl-0 md:col-span-7">{el.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
