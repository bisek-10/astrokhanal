import React from "react";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="services-container">
      {/* 🔹 Title */}
      <h1 className="text-5xl font-bold text-white mb-30">हाम्रो सेवाहरू</h1>

      {/* 🔹 Service Grid */}
      <div className="service-grid">
        {/* 🔹 Vedic Astrology */}
        <div className="service-card">
          <Image
            src="/services/vedic-astrology.jpg"
            alt="Vedic Astrology"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">वैदिक ज्योतिष</h2>
          <p className="service-description">
            ग्रहहरूको प्रभावलाई गहिरोसँग बुझी, करियर, प्रेम, स्वास्थ्य र
            भविष्यको सही मार्गदर्शन प्राप्त गर्नुहोस्।
          </p>
        </div>

        {/* 🔹 Love & Relationship Guidance */}
        <div className="service-card">
          <Image
            src="/services/love-relationship.jpg"
            alt="Love & Relationship Guidance"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">प्रेम र सम्बन्ध मार्गदर्शन</h2>
          <p className="service-description">
            आफ्नो प्रेमजीवनलाई स्पष्ट पार्न, सही जोडी पहिचान गर्न र सम्बन्ध
            सुधारका उपायहरू जान्नुहोस्।
          </p>
        </div>

        {/* 🔹 Career & Business Predictions */}
        <div className="service-card">
          <Image
            src="/services/career-business.jpg"
            alt="Career & Business Predictions"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">करियर तथा व्यवसाय भविष्यवाणी</h2>
          <p className="service-description">
            तपाईंको जन्मकुण्डलीमा आधारित सही करियर, व्यवसायिक सफलता र वित्तीय
            स्थायित्वको मार्गदर्शन।
          </p>
        </div>

        {/* 🔹 Palmistry */}
        <div className="service-card">
          <Image
            src="/services/palmistry.jpg"
            alt="Palmistry"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">हस्तरेखा शास्त्र</h2>
          <p className="service-description">
            तपाईंको हातहरूले तपाईंको व्यक्तित्व, भविष्य र भाग्यका रहस्यहरू
            समावेश गर्छन्।
          </p>
        </div>

        {/* 🔹 Numerology */}
        <div className="service-card">
          <Image
            src="/services/numerology.jpg"
            alt="Numerology"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">अङ्क ज्योतिष</h2>
          <p className="service-description">
            तपाईंको भाग्यलाई सही दिशामा डोर्‍याउनका लागि शुभ नम्बरहरू र जीवन पथ
            सङ्ख्या जान्नुहोस्।
          </p>
        </div>

        {/* 🔹 Vastu Consultation */}
        <div className="service-card">
          <Image
            src="/services/vastu.jpg"
            alt="Vastu Consultation"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">वास्तु परामर्श</h2>
          <p className="service-description">
            वास्तुशास्त्रद्वारा तपाईंको घर, अफिस वा व्यवसायलाई सकारात्मक ऊर्जामा
            संरेखण गर्नुहोस्।
          </p>
        </div>

        {/* 🔹 Muhurat & Rituals Guidance */}
        <div className="service-card">
          <Image
            src="/services/muhurat.jpg"
            alt="Muhurat & Rituals"
            width={260}
            height={180}
            className="service-image"
          />
          <h2 className="service-title">मुहूर्त एवं अनुष्ठान</h2>
          <p className="service-description">
            विवाह, गृहप्रवेश, व्यापार सुरूवातका लागि सर्वश्रेष्ठ मुहूर्त पत्ता
            लगाउनुहोस्।
          </p>
        </div>
      </div>

      {/* 🔹 Highlighted Last Line */}
      <p className="service-highlight">
        हाम्रो ज्योतिष सेवाहरू अनलाइन तथा अफलाइन दुबै उपलब्ध छन्। तपाईं जहाँ भए
        पनि, कुनै पनि समयमा मार्गदर्शन प्राप्त गर्न सक्नुहुन्छ।
      </p>
    </section>
  );
}
