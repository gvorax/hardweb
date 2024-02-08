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
            <div>
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
                foydalaning. Boshqalar orasida ajratiladigan eng yaxshi
                dizaynlar uchun bizga murojaat qiling.
              </p>
            </div>
            <button>Buyurtma berish</button>
          </div>
          <div className={styles.service_item}>
            <div>
              <div className={styles.item_icon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 8.89489C18.75 8.30297 18.4399 7.76794 18.0813 7.297C17.7132 6.8135 17.5 6.24 17.5 5.625C17.5 3.89911 19.1789 2.5 21.25 2.5C23.3211 2.5 25 3.89911 25 5.625C25 6.24 24.7868 6.8135 24.4187 7.297C24.0601 7.76794 23.75 8.30297 23.75 8.8949C23.75 9.44881 24.2128 9.891 24.7658 9.858C27.9501 9.66799 31.0831 9.28881 34.1536 8.73164C34.4915 8.67032 34.8398 8.75074 35.1166 8.95401C35.3935 9.15729 35.5744 9.4655 35.6171 9.80628C35.9905 12.7887 36.2021 15.821 36.2431 18.8941C36.2513 19.5047 35.7556 19.9998 35.1449 20C34.553 20 34.0179 19.6899 33.547 19.3313C33.0635 18.9632 32.49 18.75 31.875 18.75C30.1491 18.75 28.75 20.4289 28.75 22.5C28.75 24.5711 30.1491 26.25 31.875 26.25C32.49 26.25 33.0635 26.0368 33.547 25.6687C34.0179 25.3101 34.553 25 35.1449 25C35.6623 25 36.0731 25.4361 36.0357 25.9521C35.8379 28.6831 35.5051 31.3769 35.0439 34.0269C34.9535 34.5466 34.5465 34.9536 34.0267 35.044C30.9949 35.5717 27.9057 35.9312 24.7691 36.1128C24.2141 36.1449 23.75 35.7008 23.75 35.1449C23.75 34.553 24.0601 34.0179 24.4187 33.547C24.7868 33.0635 25 32.49 25 31.875C25 30.1491 23.3211 28.75 21.25 28.75C19.1789 28.75 17.5 30.1491 17.5 31.875C17.5 32.49 17.7132 33.0635 18.0813 33.547C18.4399 34.0179 18.75 34.553 18.75 35.1449C18.75 35.7475 18.2566 36.2342 17.6542 36.2171C15.005 36.142 12.3873 35.94 9.80689 35.6169C9.4661 35.5743 9.15789 35.3933 8.95462 35.1164C8.75135 34.8396 8.67093 34.4913 8.73225 34.1534C9.22038 31.4635 9.57191 28.7256 9.77933 25.9472C9.81763 25.4342 9.40938 25 8.89489 25C8.30297 25 7.76794 25.3101 7.297 25.6687C6.8135 26.0368 6.24 26.25 5.625 26.25C3.89911 26.25 2.5 24.5711 2.5 22.5C2.5 20.4289 3.89911 18.75 5.625 18.75C6.24 18.75 6.8135 18.9632 7.297 19.3313C7.76794 19.6899 8.30297 20 8.8949 20C9.5055 20 10.0013 19.505 9.99289 18.8944C9.95557 16.1807 9.78103 13.5004 9.47598 10.8605C9.43217 10.4813 9.56397 10.103 9.83384 9.8331C10.1037 9.56324 10.4821 9.43144 10.8612 9.47525C13.0984 9.73376 15.3643 9.89854 17.6551 9.96552C18.2569 9.98312 18.75 9.49695 18.75 8.89489Z"
                    fill="url(#paint0_linear_39_806)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_39_806"
                      x1="19.3716"
                      y1="2.5"
                      x2="19.3716"
                      y2="36.2176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#165CAA" />
                      <stop offset="1" stop-color="#8BC2FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2>Ilovalar</h2>
              <p>
                Bizning professional dasturchilar jamoamiz, sizning
                talablaringiz va biznes ehtiyojlariga muvofiq eng yangi va
                samarali ilovalarni ishlab chiqadi. Har bir platforma uchun
                mobil ilovalar, veb ilovalar va tizimlar yaratishda keng
                qamrovli tajribaga ega bo'lgan ekspertizmiz bilan, biz sizning
                ilovalaringizni eng yaxshi shaklda ishlab chiqish uchun intizom
                bilan ishlaymiz.
              </p>
            </div>
            <button>Buyurtma berish</button>
          </div>
          <div className={styles.service_item}>
            <div>
              <div className={styles.item_icon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.285 22.7297C15.285 22.5887 15.3571 22.4618 15.4724 22.3207L21.4275 14.9989C21.8744 14.4346 22.6242 14.8155 22.3647 15.5068L20.4037 20.656H24.0806C24.3546 20.656 24.5997 20.8675 24.5997 21.1216C24.5997 21.2626 24.5276 21.4178 24.3978 21.5447L18.4572 28.8523C18.0102 29.4167 17.2459 29.0358 17.5056 28.3586L19.4809 23.1953H15.7896C15.5157 23.1953 15.285 22.9978 15.285 22.7297ZM7.52757 32.9717H32.4724C35.5005 32.9717 37 31.5187 37 28.6125V14.9707C37 12.0646 35.5005 10.6115 32.4724 10.6115H30.4826V8.72111C30.4826 7.64894 29.8482 7 28.738 7H24.4843C23.3885 7 22.7541 7.64894 22.7541 8.72111V10.6115H17.2603V8.72111C17.2603 7.64894 16.6259 7 15.5157 7H11.2621C10.1518 7 9.53181 7.64894 9.53181 8.72111V10.6115H7.52757C4.514 10.6115 3 12.0646 3 14.9707V28.6125C3 31.5187 4.514 32.9717 7.52757 32.9717Z"
                    fill="url(#paint0_linear_39_817)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_39_817"
                      x1="20"
                      y1="2"
                      x2="20"
                      y2="32.9717"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0079FF" />
                      <stop offset="1" stop-color="#87C0FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2>SEO optimization</h2>
              <p>
                Internet trafikini oshirish va onlayn ko'rsatishlarini
                yaxshilash uchun SEO xizmatlarimiz ham mavjud! Bizning SEO
                mutaxassislarimiz sizning saytingizni qidiruv tizimlarining
                ustunligidan foydalanish uchun muhim kalitlarni belgilaydi va
                sizning tashrifchilaringiz sonini oshiradi.
              </p>
            </div>
            <button>Buyurtma berish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
