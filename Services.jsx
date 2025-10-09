// import Card from "../components/Card";

// function Services() {
//   const services = [
//     {
//       title: "Commercial Solar",
//       description: "Reliable solar power solutions for businesses and offices.",
//       image: "/images/commercial.png",
//     },
//     {
//       title: "Industrial Solar",
//       description: "High-capacity solar projects for industries and factories.",
//       image: "/images/industrial.png",
//     },
//     {
//       title: "Residential Solar",
//       description: "Affordable solar systems for homes and apartments.",
//       image: "/images/residential.png",
//     },
//     {
//       title: "Hybrid Solar Systems",
//       description: "Combination of grid + battery backup for uninterrupted power.",
//       image: "/images/hybrid.png",
//     },
//     {
//       title: "On-Grid Projects",
//       description: "Efficient grid-tied systems to reduce electricity bills.",
//       image: "/images/on-grid.png",
//     },
//   ];

//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Our Solar Services
//       </h2>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//         We provide customized solar solutions for all sectors: residential,
//         commercial, and industrial. Our services include hybrid and on-grid
//         systems designed to match your energy needs.
//       </p>

//       {/* Cards Section */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((s, i) => (
//           <Card key={i} {...s} />
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-12">
//         <h3 className="text-2xl font-bold mb-4">Need a Custom Solar Project?</h3>
//         <p className="text-gray-600 mb-6">
//           Contact us today for a free consultation and quotation tailored to your
//           energy needs.
//         </p>
//         <a
//           href="/contact"
//           className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
//         >
//           Get in Touch
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Services;
import React from "react";
import Card from "../components/Card";
import "../index.css";

function Services() {
  const services = [
    {
      title: "Commercial Solar",
      description:
        "Reliable solar power solutions for businesses and offices with maximum efficiency and ROI.",
      image: "https://media.istockphoto.com/id/1170098138/photo/solar-panels-fields-on-the-green-hills.webp?a=1&b=1&s=612x612&w=0&k=20&c=bWfUcvnq3y-N149SrYlSsKN8X6bosMzPIjskgaNIYfc=",
    },
    {
      title: "Industrial Solar",
      description:
        "High-capacity solar installations designed for factories and large-scale energy needs.",
      image: "https://images.unsplash.com/photo-1745162451436-2593789f3c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kdXN0cmljYWwlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Residential Solar",
      description:
        "Affordable and efficient solar systems for homes and apartments, reducing monthly bills.",
      image: "https://plus.unsplash.com/premium_photo-1682144283931-1dae4d929271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlc2lkZW50aWFsJTIwU29sYXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Hybrid Solar Systems",
      description:
        "Combination of grid + battery backup for continuous, reliable power even during outages.",
      image: "https://media.istockphoto.com/id/476065127/photo/solar-panels-supply-houses.webp?a=1&b=1&s=612x612&w=0&k=20&c=lug55mMOVlPwWjVWDcnY_9jSZF0c3kvCAHlk9gnynEE=",
    },
    {
      title: "On-Grid Projects",
      description:
        "Smart grid-tied solar systems for efficient power use and reduced electricity costs.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      title: "Solar Maintenance",
      description:
        "Professional maintenance services to keep your solar setup running smoothly and efficiently.",
      image: "https://plus.unsplash.com/premium_photo-1682145358254-56e9ab8049ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNvbGFyJTIwTWFpbnRlbmFuY2V8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="services-page">
      <h2 className="services-title">Our Solar Services</h2>
      <p className="services-intro">
        We provide customized solar solutions for every sector — residential,
        commercial, and industrial. Our experts ensure reliable installation,
        durable components, and professional maintenance for long-term energy independence.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </div>

      <div className="cta-box">
        <h3>Need a Custom Solar Project?</h3>
        <p>
          Contact our team for a free consultation and tailored solar design
          based on your energy requirements.
        </p>
        <a href="/contact" className="cta-btn">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Services;

