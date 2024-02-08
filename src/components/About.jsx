import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Image1 from "../assets/sponser1.png";
import Image2 from "../assets/sponser2.png";
import Image3 from "../assets/sponser3.png";
import Image4 from "../assets/sponser4.png";
import Image5 from "../assets/sponser5.png";
import video from "../assets/12201.mp4";

const About = () => {
  return (
    <div className={styles.about}>
      {/* sponser div */}
      <div className="container">
        <div className={styles.sponsers}>
          <div className={styles.sporser_box}>
            <Image src={Image1} alt="sponser1" width={"auto"} height={"auto"} />
          </div>
          <div className={styles.sporser_box}>
            <Image src={Image2} alt="sponser2" width={"auto"} height={"auto"} />
          </div>
          <div className={styles.sporser_box}>
            <Image src={Image3} alt="sponser3" width={"auto"} height={"auto"} />
          </div>
          <div className={styles.sporser_box}>
            <Image src={Image4} alt="sponser4" width={"auto"} height={"auto"} />
          </div>
          <div className={styles.sporser_box}>
            <Image src={Image5} alt="sponser5" width={"auto"} height={"auto"} />
          </div>
          <div className={styles.sponser_title}>
            <p>Ishonchli Mizozlarimiz</p>
          </div>
        </div>
        <div className={styles.about_title}>
          <h2>Bizning Xizmatlarimiz</h2>
          <p>
            Biz IT sohasidagi muammolarni hal qilishga yordam beramiz. Istalgan
            turdagi veb-sayt, telegram bot, mobil ilova, internet magazinlarni
            siz uchun yaratamiz!
          </p>
          <div className={styles.about_video}>
            <video src={video} loop muted autoPlay></video>
          </div>
        </div>

        <div className={styles.about_services}>
          <div className={styles.service_item}>
            <div className={styles.item_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.331 2.5C33.7053 2.5 33.0937 2.68519 32.5731 3.03223L24.1081 8.67555C21.781 10.227 19.681 12.0782 17.8587 14.1743C21.3833 15.775 24.2249 18.6166 25.8256 22.1413C27.9217 20.319 29.7729 18.219 31.3244 15.8918L36.9677 7.42681C37.3147 6.90625 37.4999 6.29462 37.4999 5.66898C37.4999 3.9188 36.0811 2.5 34.331 2.5ZM20.4991 25.8748C21.7967 25.154 23.0372 24.3438 24.2127 23.4519C22.7926 19.981 20.019 17.2073 16.548 15.7872C15.6561 16.9627 14.8459 18.2033 14.1251 19.5008L13.6609 20.3364C16.555 21.1642 18.8358 23.4449 19.6636 26.339L20.4991 25.8748ZM11.2499 22.5C7.79811 22.5 4.99992 25.2982 4.99992 28.75C4.99992 30.1307 3.88064 31.25 2.49992 31.25C2.44332 31.25 2.38698 31.2481 2.331 31.2444C1.87074 31.214 1.43114 31.4395 1.18736 31.8311C0.943591 32.2226 0.935277 32.7167 1.16573 33.1162C2.6754 35.7336 5.50561 37.5 8.74992 37.5C13.5824 37.5 17.4999 33.5825 17.4999 28.75C17.4999 25.2982 14.7017 22.5 11.2499 22.5Z"
                  fill="url(#paint0_linear_39_789)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_789"
                    x1="19.2492"
                    y1="2.5"
                    x2="19.2492"
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0079FF" />
                    <stop offset="1" stopColor="#92C6FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Dizayn</h2>
            <p>
              Bizning professional dizayn jamoamiz, internet-saytlar uchun
              innovatsion va eng yaxshi texnologiyalarni ishlatadi. Sizning
              biznesingizni ommaga ko'rsatish uchun zamonaviy dizaynlardan
              foydalaning. Boshqalar orasida ajratiladigan eng yaxshi dizaynlar
              uchun bizga murojaat qiling.
            </p>
            <button>Buyurtma berish</button>
          </div>
          <div className={styles.service_item}>
            <div className={styles.item_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.331 2.5C33.7053 2.5 33.0937 2.68519 32.5731 3.03223L24.1081 8.67555C21.781 10.227 19.681 12.0782 17.8587 14.1743C21.3833 15.775 24.2249 18.6166 25.8256 22.1413C27.9217 20.319 29.7729 18.219 31.3244 15.8918L36.9677 7.42681C37.3147 6.90625 37.4999 6.29462 37.4999 5.66898C37.4999 3.9188 36.0811 2.5 34.331 2.5ZM20.4991 25.8748C21.7967 25.154 23.0372 24.3438 24.2127 23.4519C22.7926 19.981 20.019 17.2073 16.548 15.7872C15.6561 16.9627 14.8459 18.2033 14.1251 19.5008L13.6609 20.3364C16.555 21.1642 18.8358 23.4449 19.6636 26.339L20.4991 25.8748ZM11.2499 22.5C7.79811 22.5 4.99992 25.2982 4.99992 28.75C4.99992 30.1307 3.88064 31.25 2.49992 31.25C2.44332 31.25 2.38698 31.2481 2.331 31.2444C1.87074 31.214 1.43114 31.4395 1.18736 31.8311C0.943591 32.2226 0.935277 32.7167 1.16573 33.1162C2.6754 35.7336 5.50561 37.5 8.74992 37.5C13.5824 37.5 17.4999 33.5825 17.4999 28.75C17.4999 25.2982 14.7017 22.5 11.2499 22.5Z"
                  fill="url(#paint0_linear_39_789)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_789"
                    x1="19.2492"
                    y1="2.5"
                    x2="19.2492"
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0079FF" />
                    <stop offset="1" stopColor="#92C6FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Ilovalar</h2>
            <p>
              Istalgran turdagi saytlar yani Landing page, Korporativ saytlar,
              Onlayn do'konlar kabi saytlarni koperayting bilan birga siz uchun
              tayyorlab beramiz.
            </p>
            <button>Buyurtma berish</button>
          </div>
          <div className={styles.service_item}>
            <div className={styles.item_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.331 2.5C33.7053 2.5 33.0937 2.68519 32.5731 3.03223L24.1081 8.67555C21.781 10.227 19.681 12.0782 17.8587 14.1743C21.3833 15.775 24.2249 18.6166 25.8256 22.1413C27.9217 20.319 29.7729 18.219 31.3244 15.8918L36.9677 7.42681C37.3147 6.90625 37.4999 6.29462 37.4999 5.66898C37.4999 3.9188 36.0811 2.5 34.331 2.5ZM20.4991 25.8748C21.7967 25.154 23.0372 24.3438 24.2127 23.4519C22.7926 19.981 20.019 17.2073 16.548 15.7872C15.6561 16.9627 14.8459 18.2033 14.1251 19.5008L13.6609 20.3364C16.555 21.1642 18.8358 23.4449 19.6636 26.339L20.4991 25.8748ZM11.2499 22.5C7.79811 22.5 4.99992 25.2982 4.99992 28.75C4.99992 30.1307 3.88064 31.25 2.49992 31.25C2.44332 31.25 2.38698 31.2481 2.331 31.2444C1.87074 31.214 1.43114 31.4395 1.18736 31.8311C0.943591 32.2226 0.935277 32.7167 1.16573 33.1162C2.6754 35.7336 5.50561 37.5 8.74992 37.5C13.5824 37.5 17.4999 33.5825 17.4999 28.75C17.4999 25.2982 14.7017 22.5 11.2499 22.5Z"
                  fill="url(#paint0_linear_39_789)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_789"
                    x1="19.2492"
                    y1="2.5"
                    x2="19.2492"
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0079FF" />
                    <stop offset="1" stopColor="#92C6FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>SEO optimization</h2>
            <p>
              Internet trafikini oshirish va onlayn ko'rsatishlarini yaxshilash
              uchun SEO xizmatlarimiz ham mavjud! Bizning SEO mutaxassislarimiz
              sizning saytingizni qidiruv tizimlarining ustunligidan foydalanish
              uchun muhim kalitlarni belgilaydi va sizning tashrifchilaringiz
              sonini oshiradi. Biz bilan hamkorlik qiling va saytingizni
              ko'rsatish va topishda eng yaxshi natijalarga erishishga yordam
              bering!
            </p>
            <button>Buyurtma berish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
