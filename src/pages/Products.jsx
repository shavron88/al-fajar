// import { useState } from "react";
// import Card from "../components/Card";
// import ApiSection from "../components/ApiSection";

// function Products() {
//   const [selected, setSelected] = useState(null);

//   // Equipment (hardware items)
//   const equipment = [
//     {
//       title: "Solar Inverter",
//       description: "Efficient inverters for homes and industries.",
//       image: "/images/inverter.png",
//     },
//     {
//       title: "Solar Battery",
//       description: "Reliable energy storage for backup and night usage.",
//       image: "/images/battery.png",
//     },
//     {
//       title: "Solar Structure",
//       description: "Strong mounting structures for durability.",
//       image: "/images/structure.png",
//     },
//     {
//       title: "Other Accessories",
//       description: "Cables, breakers, controllers, and solar accessories.",
//       image: "/images/others.png",
//     },
//   ];

//   // Packages / Solutions
//   const packages = [
//     {
//       title: "On-Grid Package",
//       description: "Inverter + Panels (No Battery) | Best for reducing bills using grid tie system.",
//       image: "/images/on-grid-package.png",
//     },
//     {
//       title: "Hybrid Package",
//       description: "Inverter + Battery + Panels | Best for homes & offices needing backup + grid tie.",
//       image: "/images/hybrid-package.png",
//     },
//     {
//       title: "Commercial Project",
//       description: "Large scale installation for businesses, factories, schools & malls.",
//       image: "/images/commercial-package.png",
//     },
//     {
//       title: "Residential Package",
//       description: "Affordable solar solutions designed for homes and apartments.",
//       image: "/images/residential-package.png",
//     },
//   ];

//   return (
//     <div className="p-10">
//       {/* Equipment Section */}
//       <h2 className="text-3xl font-bold text-center mb-8">Solar Equipment</h2>
//       <div className="grid md:grid-cols-4 gap-8">
//         {equipment.map((p, i) => (
//           <div
//             key={i}
//             onClick={() => setSelected(p)}
//             className="cursor-pointer"
//           >
//             <Card {...p} />
//           </div>
//         ))}
//       </div>

//       {/* Packages Section */}
//       <h2 className="text-3xl font-bold text-center mt-16 mb-8">Solar Packages & Projects</h2>
//       <div className="grid md:grid-cols-4 gap-8">
//         {packages.map((p, i) => (
//           <div
//             key={i}
//             onClick={() => setSelected(p)}
//             className="cursor-pointer"
//           >
//             <Card {...p} />
//           </div>
//         ))}
//       </div>

//       {/* Detail Section */}
//       {selected && (
//         <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-bold mb-4">{selected.title} Details</h3>
//           <p className="text-gray-700">{selected.description}</p>
//           <p className="mt-4 text-gray-600">
//             [Here you can load technical specifications, pricing, and dynamic data via API]
//           </p>
//         </div>
//       )}

//       {/* API Integration Placeholder */}
//       <ApiSection
//         apiUrl="https://api.example.com/products?key=YOUR_API_KEY"
//         title="Live Product Data"
//       />
//     </div>
//   );
// }

// export default Products;
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styling/products.css";

function Products() {
  const [selected, setSelected] = useState(null);
  const [inverterData, setInverterData] = useState(null);

  const equipment = [
    {
      title: "Solar Inverter",
      description: "Efficient inverters for homes and industries.",
      image: "https://media.istockphoto.com/id/2192388730/photo/power-inverter-installation-for-solar-rooftop.webp?a=1&b=1&s=612x612&w=0&k=20&c=ksNMnRn7DYPHQQvFIUiYziu3QHMkUV1Hld_qQ2ONnFk=",
    },
    {
      title: "Solar Battery",
      description: "Reliable energy storage for backup and night usage.",
      image: "https://images.unsplash.com/photo-1605191738062-c861b8afebc1?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Solar Structure",
      description: "Strong mounting structures for durability.",
      image: "https://images.unsplash.com/photo-1745162451436-2593789f3c94?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Other Accessories",
      description: "Cables, breakers, controllers, and solar accessories.",
      image: "https://images.unsplash.com/photo-1621495994005-3dc1b01e7f65?w=500&auto=format&fit=crop&q=60",
    },
  ];

  const packages = [
    {
      title: "On-Grid Package",
      description:
            "Inverter,Panels,(No Battery,Best for reducing bills using grid tie system.The On-Grid Package is designed for users who want to reduce electricity bills through direct solar generation while staying connected to the main grid. It includes efficient panels and a grid-tie inverter that synchronizes solar power with the grid. The system has low installation cost, minimal maintenance, and allows selling surplus power through net metering.",
      image: "https://plus.unsplash.com/premium_photo-1678865184287-adebc65a012d?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Hybrid Package",
      description:
        "Inverter + Battery + Panels | Best for homes & offices needing backup + grid tie.The Hybrid Package combines solar panels, inverter, and batteries to ensure continuous power supply with both grid connection and backup support.Automatically switches between solar, battery, and grid power for uninterrupted electricity.It ensures consistent power availability, making it suitable for areas with frequent outages or unstable grid supply.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      title: "Commercial Project",
      description:
        "Large scale installation for businesses, factories, schools & malls.Scalable and customizable to meet the high energy demands of industrial and institutional setups.The Commercial Project package offers large-scale solar installations for factories, schools, and businesses to reduce energy costs efficiently.It enhances operational efficiency and sustainability by providing reliable, large-scale renewable energy.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Residential Package",
      description:
        "Affordable solar solutions designed for homes and apartments.Easy to install and maintain, making it ideal for households seeking long-term energy savings.The Residential Package provides affordable and efficient solar systems designed for homes and apartments to cut down electricity bills.It helps homeowners achieve energy independence while increasing property value and reducing long-term utility costs.",
      image: "https://plus.unsplash.com/premium_photo-1679607691186-4550451e13b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww",
    },
  ];

  useEffect(() => {
    if (selected?.title === "Solar Inverter") {
      fetch("http://localhost:5000/api/inverters")
        .then((res) => res.json())
        .then((data) => setInverterData(data))
        .catch((err) => console.error("Error fetching inverter:", err));
    }
  }, [selected]);

  return (
    <div className="p-10">
      <h2 className="text-3xl">Solar Equipment</h2>

      {/* ✅ Added gap-6 and hover animation */}
      <div className="grid md:grid-cols-4 gap-6">
        {equipment.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <Card {...p} />
          </div>
        ))}
      </div>

      <h2 className="text-3xl" style={{ marginTop: "50px" }}>
        Solar Packages & Projects
      </h2>

      {/* ✅ Added gap-6 and hover animation */}
      <div className="grid md:grid-cols-4 gap-6">
        {packages.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <Card {...p} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl">{selected.title} Details</h3>
          <p className="text-gray-700">{selected.description}</p>

          {selected.title === "Solar Inverter" && (
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">🔆 Live Inverter Data</h4>
              {!inverterData ? (
                <p>Loading inverter details...</p>
              ) : (
                <div className="space-y-3">
                  {inverterData.data?.map((inv) => (
                    <div key={inv.id} className="border p-3 rounded-lg bg-white shadow">
                      <p>
                        <b>Brand:</b> {inv.information?.brand}
                      </p>
                      <p>
                        <b>Model:</b> {inv.information?.model}
                      </p>
                      <p>
                        <b>Production Rate:</b> {inv.productionState?.productionRate} W
                      </p>
                      <p>
                        <b>Total Lifetime:</b> {inv.productionState?.totalLifetimeProduction} kWh
                      </p>
                      <p>
                        <b>Status:</b> {inv.productionState?.isProducing ? "Active" : "Offline"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;

