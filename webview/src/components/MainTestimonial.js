import Testimonial from "./Testimonials";



const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emmanuel",
      quote: "I've been investing in crypto for years, and this platform is by far the best I've used. The interface is user-friendly, and the customer support is top-notch.",
      image: "images/ebot.jpg",
    },
    {
      name: "Ebot",
      quote: "I was hesitant to invest in crypto, but this platform made it easy and approachable. I've already seen great returns on my investment!",
      image: "images/emma.jpg",
    },
    // more testimonials here...
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase text-center">Testimonials</h2>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What our customers are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} quote={testimonial.quote} image={testimonial.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
