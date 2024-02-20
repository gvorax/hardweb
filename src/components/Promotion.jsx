import React from "react";
import styles from "../styles/Promotion.module.scss";
import Image from "next/image";
import FAQItem from "./FAQ";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Link from "next/link";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import video from "../assets/bg_video.mp4";
import Profile from "../assets/Profile.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Selva from "../assets/selva.png";
import Vital from "../assets/vital.png";
import Bot from "../assets/bot.png";
import Basco from "../assets/basco.png";
import Vitalimg from "../assets/vitalimg.png";
import Nurqand from "../assets/nurqand.png";

import logo from "../assets/logo.png";

function valuetext(value) {
  return `${value} $`;
}

const marks = [
  {
    value: 100,
    label: "$100",
  },
  {
    value: 2000,
    label: "$2000",
  },
  {
    value: 5000,
    label: "$5000",
  },
  {
    value: 10000,
    label: "$10000",
  },
];

export default function Promotion() {
  const [value, setValue] = React.useState([2000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const [values, setValues] = React.useState({
    name: "",
    phone: "",
    message: "",
    website: false,
    telegrambot: false,
    mobileapp: false,
    other: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(values, "values111");
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log(values, "values222");
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const telegramToken = "6477080242:AAFa97dSCX3jTsnKM9ayW0zOd-VuLk6ckQY";
    const chatId = "-1002049359851";

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    const data = new URLSearchParams({
      chat_id: chatId,
      text: `
          Name: ${values.name}
          Phone: ${values.phone}
          Message: ${values.message}
          Website: ${values.website}
          Telegram bot: ${values.telegrambot}
          Mobile app: ${values.mobileapp}
          Other: ${values.other}
          price: ${value}
          `,
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent:", data);
        alert("Message sent successfully!");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video src={video} loop autoPlay muted></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>Nima uchun HardWeb ?</h1>
          <p className={styles.promotion_text}>
            Bizning kompaniyamiz sifatli xizmatlar va mahsulotlar taklif etadi.
            Bizning dasturchilar jamoamiz yuqori sifatli ilovalar va
            veb-saytlarni ishlab chiqishda professional o'zlashtirilgan va
            ishonchli hisoblanadi.Bizning jamoamizning keng tajribasi bor. Biz
            kompaniyalar, shaxslar va brendlar uchun turli xil sohalarda dizayn
            va SEO xizmatlarini muvaffaqiyatli amalga oshirishda keng tajriba
            egallaymiz.Bizning mijozlarimiz odatda bizning xizmatlarimizdan va
            ilovalarimizdan juda mamnunlar. Biz o'z mijozlarimizni e'tibor bilan
            eshitamiz va ularning talablariga moslashtirilgan yaxshi xizmat
            ko'rsatishga intizom bilan ishlamiz.
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.promotion_text}>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={Icon3} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                Bizning dasturchilar jamoasi keng tajribaga ega va eng yangi
                texnologiyalarni samarali shaklda ishlatadi. Mijozlarimizni
                qiziqtiradigan dizaynlar, qulay va sodda interfeyslar, va yuqori
                darajada SEO va ilovalar xizmatlarimiz bilan, bizning
                kompaniyamiz IT sohasida etiborga sazovor bo'lib turadi.
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={Icon4} alt="img" />
                <span>Mijoz bilan kelishuv</span>
              </div>
              <p>
                Mijozlar bilan yaxshi aloqalar o'rnatish va ularning talablari
                va istaklarini tushunish, bizning kompaniyamiz uchun eng muhim
                vazifalardan biridir. Bu, bizga ularning ehtiyojlari va
                talablari bo'yicha qanday qadam atishimiz kerakligini
                tushunishga yordam beradi va bizning xizmatlarimizni ularga eng
                yaxshi shaklda taqdim etishimizga imkon beradi.
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={Icon5} alt="img" />
                <span>Natijaga asoslangan yechimlar</span>
              </div>
              <p>
                Bizning jamoamiz o'z ta'limotini va tajribasini sodda va
                samarali yechimlar qabul qilishga asoslanadi. Biz
                mijozlarimizning ehtiyojlarini tushunish, kompaniyamizning
                maqsadlariga mos ravishda yaxshi natijalarni olish uchun
                yorqinlik bilan ishlaymiz. Bizga ishonch kiring, bizning
                "natijaga asoslangan yechimlar" sizning talablaringizni
                qondirishda va muvaffaqiyatga erishishda yordam berishimizga
                o'xshash yechimlarni yaratishga xizmat qiladi.
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={Icon6} alt="img" />
                <span>Hamkorlik</span>
              </div>
              <p>
                Bizning kompaniyamizdan olingan ko'mak va qo'llab-quvvatlash o'z
                vaqtida sizning muvaffaqiyat va rivojlanish uchun muhim bo'lishi
                mumkin. Bizning hamkorlik imkoniyatlarimiz haqida ko'proq
                ma'lumot olishni istaysizmi? Sizning kompaniyangiz bilan qanday
                ko'rsatishimiz mumkinligini o'rganish uchun, biz bilan
                bog'laning va muhokama boshlang.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video src={video} loop autoPlay muted></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>
            Mijozlarimiz biz haqimizda nima deyishadi
          </h1>
          <p className={styles.promotion_text}>
            {/* Write me good feedback to our service  */}
            Bizning mijozlarimizning fikrlari va mulohazalari bilan tanishing.
            Bizning kompaniyamizning xizmatlaridan va mahsulotlaridan qanday
            foyda ko'rishlari haqida o'qing. Bizning mijozlarimizning fikrlari
            va mulohazalari bilan tanishing.
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.promotion_text}>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Selva} alt="Selva" className={styles.img} />

              <p>
                Assalomu alekum Mani ismim Ubaydullo “Selva” kompanyasida
                menejer lavozimida ishlab kelaman. Biz IT komandasi bilan yaqin
                muddat ichida ishlashni boshladik. To’g’risini aytadigan bolsam
                menga ularning ishlash jarayonlari va ishlari juda maqul keldi.
                Birinchi navbatda mijoz nima hohlashidan tortib , mijoz
                istagidan koprog’ini bera olishdi! Kattakon Rahmat!
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ubaydullo</h3>
                    <p>Selva kompaniyasi meneger</p>
                  </div>
                </div>
                <a href="https://selva.uz/">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Vital} alt="Vital" className={styles.img} />

              <p>
                Assalomu alekum Mani ismim Ubaydullo “Vital water” kompanyasida
                menejer lavozimida ishlab kelaman. Biz IT komandasi bilan yaqin
                muddat ichida ishlashni boshladik. To’g’risini aytadigan bolsam
                menga ularning ishlash jarayonlari va ishlari juda maqul keldi.
                Birinchi navbatda mijoz nima hohlashidan tortib , mijoz
                istagidan koprog’ini bera olishdi! Kattakon Rahmat!
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ubaydullo</h3>
                    <p>Vital kompaniyasi meneger</p>
                  </div>
                </div>
                <a href="https://vital-water.uz/">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Nurqand} alt="Nurqand" className={styles.img} />

              <p>
                Men Nurqand kompaniyasi menegeri Sunnatillo Fattoyev. Biz
                Hardweb IT groupga noyob veb-sayt yaratish niyati bilan murojaat
                qildik va ular nafaqat qiyinchilikni qabul qilishdi, balki
                bizning kutganimizdan ham ko'proq natija berishdi. Ular amalga
                oshirgan innovatsion xususiyatlar saytimizni ajratib turdi va
                ular taqdim etgan ijodiy yechimlar bu sohadagi ishlarimizni
                yengillashtirdi
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Sunnatillo Fattoyev</h3>
                    <p>Nurqand kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Basco} alt="Basco" className={styles.img} />

              <p>
                Men Basco kompaniyasi menegeri Anvar Abduqahhorov. Biz
                Hardweb IT groupga noyob veb-sayt yaratish niyati bilan murojaat
                qildik va ular nafaqat qiyinchilikni qabul qilishdi, balki
                bizning kutganimizdan ham ko'proq natija berishdi. Ular amalga
                oshirgan innovatsion xususiyatlar saytimizni ajratib turdi va
                ular taqdim etgan ijodiy yechimlar bu sohadagi ishlarimizni
                yengillashtirdi
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Anvar Abduqahhorov</h3>
                    <p>Basco kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="https://basco-landing-page.netlify.app/">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Bot} alt="Bot" className={styles.img} />

              <p>
              Men Nurqand kompaniyasi menegeri Sunnatillo Fattoyev. Biz
                Hardweb IT groupga noyob veb-sayt yaratish niyati bilan murojaat
                qildik va ular nafaqat qiyinchilikni qabul qilishdi, balki
                bizning kutganimizdan ham ko'proq natija berishdi. Ular amalga
                oshirgan innovatsion xususiyatlar saytimizni ajratib turdi va
                ular taqdim etgan ijodiy yechimlar bu sohadagi ishlarimizni
                yengillashtirdi
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Sunnatillo Fattoyev</h3>
                    <p>Nurqand kompaniyasi manager</p>
                  </div>
                </div>
                <a href="https://t.me/nurqand_bot">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <Image src={Vitalimg} alt="Vital" className={styles.img} />

              <p>
              Assalomu alekum Mani ismim Ubaydullo “Vital water” kompanyasida
                menejer lavozimida ishlab kelaman. Biz IT komandasi bilan yaqin
                muddat ichida ishlashni boshladik. To’g’risini aytadigan bolsam
                menga ularning ishlash jarayonlari va ishlari juda maqul keldi.
                Birinchi navbatda mijoz nima hohlashidan tortib , mijoz
                istagidan koprog’ini bera olishdi! Kattakon Rahmat!
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image src={Profile} alt="" width={60} height={60} />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ubaydullo</h3>
                    <p>Vital kompaniyasi meneger</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video src={video} loop autoPlay muted></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>
            Tez-Tez so'raladigan savollar
          </h1>
          <p className={styles.promotion_text}>
            Hali ham savollaringiz bormi? Nimagap@hardweb.com orqali jamoamiz
            bilan bog'laning
          </p>
        </div>
      </div>
      <div className="container">
        <FAQItem />
      </div>
      <div
        className={styles.promotion}
        style={{ height: "545px", marginTop: "50px" }}
      >
        <div className={styles.promotion_bg_video}>
          <video src={video} loop autoPlay muted></video>
        </div>
        <div className={styles.promotion_content}>
          <div className={styles.promotion_logo}>
            <Image src={logo} alt="logo" />
          </div>
          <h1 className={styles.promotion_title}>
            Hard Web-ga qiziqqaningiz uchun tashakkur.
          </h1>
          <p className={styles.promotion_text}>
            Bizning kompaniyamizning xizmatlaridan foydalanish uchun ro'yxatdan
            o'ting va biz bilan bog'laning. Bizning jamoamiz sizning
            o'zlashtirilgan loyihangizni boshidan o'ngacha olib borishda yordam
            beradi.
          </p>
          <div className={styles.promotion_btn}>
            <a href="#">Loyihani boshlash</a>
          </div>
        </div>
      </div>
      <div className={styles.forms}>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <div className={styles.form_name}>
            <div className={styles.name}>
              <label>F.I.SH</label>
              <input
                type="text"
                placeholder="Shu yerga"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.name}>
              <label>Telefon</label>
              <input
                type="text"
                placeholder="Shu yerga 99 123 45 57"
                name="phone"
                value={values.phone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className={styles.types}>
            <p>Nega biz bilan bog'lanyapsiz?</p>
            <div className={styles.checkbox}>
              <div className={styles.checkbox_item}>
                <div className={styles.item_check}>
                  <input
                    type="checkbox"
                    name="website"
                    checked={values.website}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                  <span></span>
                  <label>Web sayt</label>
                </div>
                <div className={styles.item_check}>
                  <input
                    type="checkbox"
                    name="telegrambot"
                    checked={values.telegrambot}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                  <label>Telegram bot</label>
                </div>
              </div>
              <div className={styles.checkbox_item}>
                <div className={styles.item_check}>
                  <input
                    type="checkbox"
                    name="mobileapp"
                    checked={values.mobileapp}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                  <label>Mobil ilova</label>
                </div>
                <div className={styles.item_check}>
                  <input
                    type="checkbox"
                    checked={values.other}
                    name="other"
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                  <label>Boshqa...</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.finance}>
            <h2>Sizning byudjetingiz</h2>
            <p>Byudjet diapazoningizni ko'rsatish uchun suring</p>
            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                min={100}
                max={10000}
                defaultValue={[2000, 5000]}
                valueLabelDisplay="auto"
                className={styles.slider}
                getAriaValueText={valuetext}
                marks={marks}
                step={100}
                color="secondary"
              />
            </Box>
          </div>
          <div className={styles.message}>
            <label>Xabar</label>
            <input
              type="text"
              placeholder="Shu yerga"
              name="message"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={styles.form_btn}>
            <button type="submit" onClick={onHandleSubmit}>
              Yuborish
            </button>
          </div>
        </form>
      </div>

      <div className={styles.footer}>
        <div className={`container flex-between  ${styles.flex_column}`}>
          <Link href="/" className={`${styles.logo} flex-center`}>
            <Image src={logo} width={60} height={60} alt="ada" /> Hard Web
          </Link>
          <div className={styles.links}>
            <Link
              href="/home"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Link>
            <Link
              href="/service"
              className={activeItem === "service" ? "active" : ""}
              onClick={() => handleItemClick("service")}
            >
              Xizmatlar
            </Link>
            <Link
              href="/work"
              className={activeItem === "work" ? "active" : ""}
              onClick={() => handleItemClick("work")}
            >
              Ishlar
            </Link>
            <Link
              href="/process"
              className={activeItem === "process" ? "active" : ""}
              onClick={() => handleItemClick("process")}
            >
              Jarayon
            </Link>
            <Link
              href="/about"
              className={activeItem === "about" ? "active" : ""}
              onClick={() => handleItemClick("about")}
            >
              Biz haqimizda
            </Link>
          </div>
          <div className={styles.btn}>
            <p>Obuna bo'ling</p>
            <div className={styles.social}>
              <a href="#">
                <Image src={Instagram} alt="img" />
              </a>
              <a href="#">
                <Image src={Linkedin} alt="img" />
              </a>
              <a href="#">
                <Image src={Facebook} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={`container flex-between ${styles.flex_align}`}>
          <div className={styles.data}>
            <div className={styles.data_info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M1.5 9.1691V17.75C1.5 19.4069 2.84315 20.75 4.5 20.75H19.5C21.1569 20.75 22.5 19.4069 22.5 17.75V9.1691L13.5723 14.6631C12.6081 15.2564 11.3919 15.2564 10.4277 14.6631L1.5 9.1691Z"
                  fill="white"
                />
                <path
                  d="M22.5 7.40783V7.25C22.5 5.59315 21.1569 4.25 19.5 4.25H4.5C2.84315 4.25 1.5 5.59315 1.5 7.25V7.40783L11.2139 13.3856C11.696 13.6823 12.304 13.6823 12.7861 13.3856L22.5 7.40783Z"
                  fill="white"
                />
              </svg>
              <a href="mailto:hardweb@gmail.com">hardweb@gmail.com</a>
            </div>
            <div className={styles.data_info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                  fill="white"
                />
              </svg>
              <a href="tel:+998993185735">+998 99 318 57 35</a>
            </div>
            <div className={styles.data_info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5397 22.851C11.57 22.8685 11.5937 22.8821 11.6105 22.8915L11.6384 22.9071C11.8613 23.0294 12.1378 23.0285 12.3608 22.9075L12.3895 22.8915C12.4063 22.8821 12.43 22.8685 12.4603 22.851C12.5207 22.816 12.607 22.765 12.7155 22.6982C12.9325 22.5646 13.2388 22.3676 13.6046 22.1091C14.3351 21.5931 15.3097 20.8274 16.2865 19.8273C18.2307 17.8368 20.25 14.8462 20.25 11C20.25 6.44365 16.5563 2.75 12 2.75C7.44365 2.75 3.75 6.44365 3.75 11C3.75 14.8462 5.76932 17.8368 7.71346 19.8273C8.69025 20.8274 9.66491 21.5931 10.3954 22.1091C10.7612 22.3676 11.0675 22.5646 11.2845 22.6982C11.393 22.765 11.4793 22.816 11.5397 22.851ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                  fill="white"
                />
              </svg>
              <a href="#">Jannatmakon O‘zbekiston</a>
            </div>
          </div>
          <p className={styles.footer_text}>
            © 2023 Hard Web. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
