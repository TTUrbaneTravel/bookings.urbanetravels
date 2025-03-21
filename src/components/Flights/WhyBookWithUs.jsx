const WhyBookWithUs = () => {
  const benefits = [
    {
      title: "Exceiting Offers",
      description:
        "Book your next adventure with ease and enjoy exclusive deals on flights.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#4facfe"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z" />
          <circle cx="6.5" cy="6.5" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Easy Process",
      description:
        "Fly smarter with hassle-free bookings and great savings on every flight.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="60px" // Increased size
          viewBox="0 0 24 24"
          width="60px" // Increased size
          fill="#4facfe"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description:
        "Travel with confidence, knowing our 24/7 support is just a call away.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="60px" // Corrected size
          width="60px" // Corrected size
          viewBox="0 0 24 24"
          fill="#4facfe"
        >
          <g>
            <rect fill="none" height="24" width="24" x="0" />
          </g>
          <g>
            <g>
              <path d="M10,6C9.32,6,6.12,6.51,6.01,9.88c1.72-0.4,3.06-1.77,3.4-3.51c0.53,1.15,1.96,2.8,4.43,2.6C13.39,7.26,11.85,6,10,6z" />
              <circle cx="7.5" cy="10.75" r=".75" />
              <circle cx="12.5" cy="10.75" r=".75" />
              <path d="M16,10c0-3.31-2.69-6-6-6s-6,2.69-6,6c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1v-4c0-2.76,2.24-5,5-5s5,2.24,5,5v5H9v1h6 c0.55,0,1-0.45,1-1v-1c0.55,0,1-0.45,1-1v-2C17,10.45,16.55,10,16,10z" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Affordable Prices",
      description:
        "Get the best deals with our lowest price guarantee – book your next flight with us today!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="60px" // Increased size
          viewBox="0 0 24 24"
          width="60px" // Increased size
          fill="#4facfe"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <g>
              <path d="M11,13V9c0-0.55-0.45-1-1-1H6V6h5V4H8.5V3h-2v1H5C4.45,4,4,4.45,4,5v4c0,0.55,0.45,1,1,1h4v2H4v2h2.5v1h2v-1H10 C10.55,14,11,13.55,11,13z" />
              <polygon points="19.59,12.52 13.93,18.17 11.1,15.34 9.69,16.76 13.93,21 21,13.93" />
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="hidden lg:block bg-gray50 py-10 paragraphFonts">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-orange500 mb-6 paragraphFonts">
          Why book with us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow paragraphFonts"
            >
              <div className="mb-4">{benefit.svg}</div>
              <h3 className="text-xl font-semibold mb-2 paragraphFonts">{benefit.title}</h3>
              <p className="text-gray600 text-center paragraphFonts">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
