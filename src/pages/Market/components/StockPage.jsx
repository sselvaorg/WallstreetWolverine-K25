import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./StockPage.module.css";
import PropTypes from "prop-types";

const stockDetails = {
  1: { 
    name: "QuantumCoreSystems", 
    price: 500,
    description: "QuantumCore is a cutting-edge technology company specializing in quantum computing and processor solutions. Their research focuses on creating the next generation of high-performance processors. QuantumCore is revolutionizing industries like finance, logistics, and artificial intelligence with their quantum technology innovations. They collaborate with top research institutes to accelerate computing breakthroughs. Their flagship quantum processors promise to reshape the computing landscape, offering exponential processing power."
  },
  2: { 
    name: "NeonByteTechnologies", 
    price: 700,
    description: "NeonByte Technologies is an industry leader in cloud-based software development and cybersecurity solutions. Their services are designed to help businesses enhance data security and optimize IT infrastructure. NeonByte has built a robust suite of tools powered by AI and machine learning for data analytics. Their cybersecurity team offers next-gen protection against evolving digital threats. They are trusted by corporations across multiple sectors for their comprehensive, scalable solutions."
  },
  3: { 
    name: "HyperNovaSystems", 
    price: 600,
    description: "HyperNova Systems is a key player in space exploration, focusing on satellite technologies and propulsion systems. Their innovative designs are pushing the boundaries of space missions, from commercial satellite deployments to interplanetary travel. HyperNova's propulsion technologies aim to reduce costs and increase the speed of space missions. They partner with governmental space agencies and private firms to develop cutting-edge space exploration tools. Their mission is to make space travel more accessible and efficient for all."
  },
  4: { 
    name: "SkyNetRobotics", 
    price: 450,
    description: "SkyNet Robotics is at the forefront of robotics and automation solutions for various industries. They specialize in creating AI-powered robots for manufacturing, healthcare, and logistics sectors. SkyNet is committed to improving productivity through autonomous systems that can work alongside human operators. Their robots are designed to operate in complex environments, ensuring safety and precision. With a focus on the future of work, SkyNet is helping businesses transition to automation seamlessly."
  },
  
  5: { 
    name: "TitanSportswear", 
    price: 550,
    description: "Titan Sportswear is a global brand known for producing high-quality athletic apparel for professional athletes. Their products are designed to withstand the most rigorous training regimens while maintaining comfort and style. Titan combines advanced materials with cutting-edge technology to create performance-enhancing sportswear. Their product line includes gear for a variety of sports, including running, football, and basketball. Titan Sportswear is committed to empowering athletes with apparel that enhances performance."
  },
  6: { 
    name: "ProBallEquipment", 
    price: 400,
    description: "ProBall Equipment manufactures specialized sports gear designed to optimize player performance in basketball and football. Their products are known for their durability, safety, and ergonomic design. ProBall's research and development team is constantly innovating to improve the comfort and protection of athletes. They also offer custom-made equipment for professional sports teams and organizations. With a focus on performance, ProBall ensures that every product meets the highest standards of quality and functionality."
  },
  7: { 
    name: "StrikeForceSports", 
    price: 350,
    description: "StrikeForce Sports is a top-tier provider of equipment for extreme sports such as skateboarding, BMX, and motocross. They specialize in high-performance gear designed for the most daring athletes. StrikeForce products are known for their reliability, safety features, and innovative designs. Their engineering team focuses on developing gear that minimizes injuries while maximizing athlete mobility. StrikeForce is a preferred choice for extreme sports enthusiasts seeking top-quality gear."
  },
  8: { 
    name: "ZenithMotors", 
    price: 1000,
    description: "Zenith Motors is a leading manufacturer of electric vehicles (EVs) with a focus on cutting-edge technology and sustainability. Their vehicles are designed with advanced features such as autonomous driving capabilities and efficient battery management systems. Zenith is committed to reducing the automotive industry's carbon footprint through eco-friendly vehicles. They offer a range of models catering to urban commuters and luxury vehicle markets alike. Zenith Motors is paving the way toward a greener future in transportation."
  },
  9: { 
    name: "OrionAutoTech", 
    price: 850,
    description: "Orion AutoTech is an automotive technology company specializing in autonomous vehicles and AI-driven safety features. Their mission is to create smarter and safer vehicles through cutting-edge sensors and software solutions. Orion’s self-driving technology has been tested extensively to meet rigorous safety standards. They are also developing smart city infrastructure to integrate with their autonomous vehicles. Orion is shaping the future of mobility with its innovations in automotive technology."
  },
  10: { 
    name: "VoltEdgeMotors", 
    price: 750,
    description: "VoltEdge Motors is dedicated to producing high-performance electric vehicles that prioritize sustainability and innovation. They offer an impressive lineup of EVs, focusing on energy efficiency and reducing dependence on fossil fuels. VoltEdge’s vehicles come equipped with state-of-the-art battery technologies to ensure long-range capabilities. Their design philosophy blends style with function, offering sleek and eco-friendly vehicles. VoltEdge is at the forefront of the electric vehicle revolution, contributing to a more sustainable transportation future."
  },
  11: { 
    name: "TitanXAutomobiles", 
    price: 950,
    description: "TitanX Automobiles manufactures luxury electric cars designed for high-end consumers seeking cutting-edge technology and performance. Their vehicles feature state-of-the-art autonomous driving capabilities and a robust battery management system. TitanX focuses on providing unparalleled comfort, efficiency, and eco-friendliness in all their models. The company strives to offer an exceptional driving experience with a focus on environmental responsibility. TitanX aims to be a leader in the luxury electric vehicle market."
  },
  12: { 
    name: "StellarBank", 
    price: 1200,
    description: "StellarBank is a globally recognized financial institution offering comprehensive banking services. They specialize in wealth management, investment planning, and financial advisory services. StellarBank has a strong presence in digital banking, providing convenient and secure online banking experiences. The bank’s customer-centric approach ensures that individuals and businesses alike receive personalized financial services. With an extensive global network, StellarBank is dedicated to helping clients grow their wealth and secure their financial future."
  },
  13: { 
    name: "EverTrustFinancial", 
    price: 900,
    description: "EverTrust Financial is a premier financial services firm that focuses on providing secure investment options and wealth management solutions. They offer a wide range of services, from retirement planning to insurance and estate management. EverTrust employs advanced financial tools and strategies to help clients maximize their returns. Their team of experts provides personalized guidance, tailoring solutions to individual needs. EverTrust is known for its commitment to helping clients achieve long-term financial stability and growth."
  },
  14: { 
    name: "NovaCapitalHoldings", 
    price: 1000,
    description: "NovaCapital Holdings is a private equity firm specializing in investments in emerging technologies and sustainable businesses. They focus on sectors such as renewable energy, biotechnology, and clean technology. NovaCapital aims to foster innovation by supporting companies that have the potential to revolutionize industries. Their strategic investments are designed to generate both financial returns and social impact. NovaCapital’s portfolio includes startups and mature companies striving for growth and positive change."
  },
  15: { 
    name: "QuantumPay", 
    price: 700,
    description: "QuantumPay is a digital payment solutions provider focused on making transactions seamless, secure, and efficient. Their platform supports a wide range of payment methods, including cryptocurrencies and traditional payment systems. QuantumPay is designed for both businesses and consumers, offering a user-friendly interface and low transaction fees. The company’s goal is to provide a fast, reliable payment system that can be integrated easily into e-commerce platforms. QuantumPay aims to lead the future of digital payments by offering innovative financial solutions."
  },
  16: { 
    name: "SwiftCart", 
    price: 800,
    description: "SwiftCart is an online retail platform that allows users to shop efficiently from a wide variety of product categories. Their mission is to enhance the shopping experience by offering fast delivery, secure payments, and a user-friendly interface. SwiftCart features AI-powered recommendations to help users find the products best suited to their needs. The platform also supports both local and international sellers, providing a global shopping experience. SwiftCart is committed to providing top-tier customer service and reliable shopping solutions."
  },
  17: { 
    name: "NeoWearFashion", 
    price: 400,
    description: "NeoWear Fashion combines style and technology by offering smart clothing with embedded tech for health and fitness monitoring. Their line of wearable garments includes features such as heart rate tracking, body temperature regulation, and step counting. NeoWear products are designed for athletes and tech enthusiasts who want to enhance their performance through smart apparel. The company uses advanced materials that are both functional and fashionable. NeoWear is leading the way in the intersection of fashion and technology."
  },
  18: { 
    name: "HorizonMart", 
    price: 600,
    description: "HorizonMart is a global retail chain that specializes in providing a wide range of consumer goods, from electronics to home essentials. Their focus is on offering competitive prices without compromising on quality. HorizonMart has a strong online presence, with services like home delivery and customer support. The company has been expanding its reach to international markets, aiming to become a global retail leader. HorizonMart is known for its commitment to customer satisfaction and product availability."
  },
  29: { 
    name: "BuySmartRetail", 
    price: 700,
    description: "BuySmart Retail is a leading e-commerce platform that offers consumers a wide selection of quality products at affordable prices. Their business model emphasizes customer satisfaction, with a focus on fast shipping, easy returns, and excellent customer service. BuySmart’s platform uses advanced AI to personalize recommendations and improve the shopping experience. They cater to a wide range of product categories, from electronics to groceries. BuySmart is a growing name in the online retail space."
  },
  20: { 
    name: "BioVantaPharmaceuticals", 
    price: 1500,
    description: "BioVanta Pharmaceuticals is a biotechnology firm at the forefront of developing life-saving drugs and treatments for rare diseases. Their research focuses on gene therapy, immunotherapies, and the development of novel vaccines. BioVanta collaborates with medical institutions and regulatory bodies to ensure that their treatments meet the highest standards of safety and efficacy. The company is committed to improving global health and reducing the burden of complex diseases through groundbreaking medical advancements."
  },
  21: { 
    name: "MedexGenLabs", 
    price: 1100,
    description: "MedexGen Labs is a research-driven biotechnology company specializing in gene editing and personalized medicine. Their team is working on developing targeted therapies to treat genetic disorders, cancer, and infectious diseases. MedexGen uses cutting-edge CRISPR technology to edit genes with precision, aiming to revolutionize the field of genetic medicine. The company has made significant progress in clinical trials and hopes to bring new, life-changing treatments to patients worldwide."
  },
  22: { 
    name: "NeuroSynBiotech", 
    price: 950,
    description: "NeuroSyn Biotech is an innovative biotech company focusing on developing treatments for neurological disorders, including Alzheimer’s and Parkinson’s diseases. Their research involves exploring novel drug compounds and therapies that target the underlying causes of these conditions. NeuroSyn works closely with leading medical institutions to bring their breakthrough therapies to the market. Their goal is to improve the quality of life for patients suffering from neurodegenerative diseases through scientific advancements."
  },
  23: { 
    name: "GenovaHealth", 
    price: 1200,
    description: "Genova Health is a global health company committed to providing affordable healthcare solutions worldwide. They specialize in the production of medical devices, diagnostics, and health monitoring systems. Genova’s products are used in hospitals, clinics, and homes to improve patient outcomes. The company is dedicated to advancing healthcare by developing innovative solutions that address current challenges in medicine. Genova Health strives to make healthcare more accessible, affordable, and effective for all."
  },
  24: {
    name: "HorizonTechInnovations",
    price: 750,
    description: "HorizonTech Innovations is a cutting-edge technology company at the forefront of developing advanced solutions in the fields of artificial intelligence, machine learning, and cybersecurity. Specializing in next-generation software and hardware innovations, HorizonTech aims to transform industries through its groundbreaking products. The company's team of experts is dedicated to delivering high-performance solutions that help businesses enhance efficiency, security, and scalability. With a focus on research and development, HorizonTech is committed to shaping the future of technology by addressing complex challenges and creating sustainable, forward-thinking solutions."
  }
};




function StockPage() {
  const { id } = useParams();
  const stock = stockDetails[id];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockCount, setStockCount] = useState(1);
  const [desc,setDesc] = useState("");

  if (!stock) {
    return <h2>Stock not found</h2>;
  }

  const handleBuySellClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.charts}>
          <h1 className={styles.mainTitle}>Market</h1>
          <div className={styles.chartContainer}>
            <h2 className="stock-name">{stock.name}</h2>
            {/* <GridItem>
              <LineChart />
            </GridItem> */}
          </div>

          <div className={styles.chartContainer}>
            {/* <GridItem>
              <LineChart1 />
            </GridItem> */}
            <div className="text-yellow-200">
            {stock.description}
            </div>
          </div>

          <div>
            <button
              className={`${styles.button} ${styles.buyButton}`}
              onClick={handleBuySellClick}
            >
              Buy
            </button>
            <button
              className={`${styles.button} ${styles.sellButton}`}
              onClick={handleBuySellClick}
            >
              Sell
            </button>
            <button
              className={`${styles.button} ${styles.historyButton}`}
              onClick={() => navigate(`/history`)}
            >
              History
            </button>
          </div>
        </div>

        <div className={styles.newsBox}>
          <Box title="News">
            <p>This is the latest news about {stock.name}.</p>
            <p>More updates will be shown here.</p>
          </Box>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Stock Purchase Details</h2>
          <p>Stock Name: {stock.name}</p>
          <p>Price per Stock: {stock.price} Kuros</p>
          <p>Time: {new Date().toLocaleTimeString()}</p>
          <label className="block mt-2">
            No. of Stocks:
            <input
              type="number"
              value={stockCount}
              min="1"
              onChange={(e) => setStockCount(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            />
          </label>
          <label className="block mt-2">
            Description:
            <input type="text" 
            value = {desc}
            placeholder="Enter your Description"
            onChange={(e)=>setDesc(e.target.value)}
            className="border p-2 rounded w-full mt-1"
            required/>
          </label>
          <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Proceed
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

// function GridItem({ title, children }) {
//   return (
//     <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
//       <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
//       {children}
//     </div>
//   );
// }

function Box({ title, children }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-300">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default StockPage;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
