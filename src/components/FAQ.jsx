import React, { useState } from "react";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq_items ${number == '08' || number == '05' ? "higher": ''} ${isOpen ? "open" : ""} `}>
      <div className="faq_item" onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div className="faq_number">
            <h2 className={`${isOpen ? "active_faq" : ""}`}>{number}</h2>
          </div>
          <div className="faq_question">
            <h2 className={`${isOpen ? "active_faq" : ""}`}>{question}</h2>
          </div>
        </div>
        <div className="faq_mark">
          <h2
            className={`${isOpen ? "active_faq" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "-" : "+"}
          </h2>
        </div>
      </div>
      <div className={`faq_answer`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    {
      number: "01",
      question: "Hard Web qanday xizmatlarni taqdim etadi?",
      answer: `Biz IT sohasidagi muammolarni hal qilishga yordam beramiz. Istalgan turdagi veb-sayt, telegram bot, mobil ilova, internet magazinlarni siz uchun yaratamiz!`,
    },
    {
      number: "02",
      question: "Hard Web biznesimga qanday yordam berishi mumkin?",
      answer:
        "Agar sizga ma'lumotlar tahlil qilish, mobil ilovalar, veb-saytlar yoki ma'lumot omborlar kabi maxsus dasturlar ishlab chiqarish kerak bo'lsa, dasturlash kompaniyalari sizga yordam bera olishi mumkin. Ular sizning loyihangizni boshidan o'ngacha olib borishda yoki istalgan bosqichda yordam bera oladilar.",
    },
    // Add more FAQs here...
    {
      number: "03",
      question: "Hard Web qaysi sohalar bilan ishlaydi?",
      answer: `Biz IT sohasidagi muammolarni hal qilishga yordam beramiz. Istalgan turdagi veb-sayt, telegram bot, mobil ilova, internet magazinlarni siz uchun yaratamiz!`,
    },
    {
      number: "04",
      question: "Hard Web bilan loyihani bajarish uchun qancha vaqt ketadi?",
      answer: `Biz bir necha kun ichida loyihani boshlaymiz va siz bilan birgalikda harakat qilamiz. Agar loyiha katta bo'lsa, shu bilan birga vaqt ham ko'proq ketadi. Ammo, bizning jamoa har kuni siz bilan aloqada bo'lishadi va loyihaning har bir bosqichida siz bilan maslahatlashadi.`,
    },
    {
      number: "05",
      question:
        "Loyiha tugagandan so'ng doimiy qo'llab-quvvatlash va texnik xizmat ko'rsatishni taklif qilasizmi?",
      answer: `Bu bizning asosiy xizmatlarimizdan biri. Biz loyihani tugatgandan so'ng, uni doimiy ravishda qo'llab-quvvatlaymiz. Agar sizga qo'llab-quvvatlash kerak bo'lsa, bizning texnik xizmatlarimizdan foydalanishingiz mumkin.`,
    },
    {
      number: "06",
      question:
        "Yarim tayyor dizayn yoki shunday loyihalar bilan ishlay olasizmi?",
      answer:
        "Ha, biz sizning loyihangizni boshidan o'ngacha olib borishda yordam beramiz.",
    },
    {
      number: "07",
      question: "Loyihani ishlab chiqish jarayonida qanday ishtirok etaman?",
      answer: `Bizning jamoa har kuni siz bilan aloqada bo'lishadi va loyihaning har bir bosqichida siz bilan maslahatlashadi. Biz bir necha kun ichida loyihani boshlaymiz va siz bilan birgalikda harakat qilamiz. Agar loyiha katta bo'lsa, shu bilan birga vaqt ham ko'proq ketadi.`,
    },
    {
      number: "08",
      question:
        "Veb-sayt yoki ilovalarga texnik xizmat ko'rsatish va yangilanishlar bilan yordam bera olasizmi?",
      answer: ` Ha, bizning texnik xizmatlarimizdan foydalanishingiz mumkin. Agar sizga qo'llab-quvvatlash kerak bo'lsa, bizning texnik xizmatlarimizdan foydalanishingiz mumkin.`,
    },
  ];

  return (
    <div className="faq">
      {faqs.map((faq) => (
        <FAQItem key={faq.number} {...faq} />
      ))}
    </div>
  );
};

export default FAQList;

