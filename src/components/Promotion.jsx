import React from "react";
import styles from "@/styles/Promotion.module.scss";
import Image from "next/image";
import FAQItem from "./FAQ";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Link from "next/link";
import Icon3 from "@/assets/Icon3.png";
import video from "@/assets/12201.mp4";

import logo from "@/assets/logo.png";

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

  return (
    <div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video
            src={video}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>Nima uchun HardWeb</h1>
          <p className={styles.promotion_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
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
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
              <Image src={Icon3} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
              <Image src={Icon3} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
              <Image src={Icon3} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video
            src={video}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>
            Mijozlarimiz biz haqimizda nima deyishadi
          </h1>
          <p className={styles.promotion_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.promotion_text}>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
                  </div>
                </div>
                <a href="#">Saytga kirish</a>
              </div>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <h2 className={styles.item_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </h2>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>

              <div className={styles.feedbacks}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.feedback_img}>
                    <Image
                      src={require("@/assets/Profile.png")}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.feedback_text}>
                    <h3>Ahmadov Ahmad</h3>
                    <p>Vital kompaniyasi rahbari</p>
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
          <video
            src={video}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>
            Tez-Tez so'raladigan savollar
          </h1>
          <p className={styles.promotion_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="container">
        <FAQItem />
      </div>
      <div className={styles.promotion} style={{height:'545px',marginTop:'50px'}}>
        <div className={styles.promotion_bg_video}>
          <video
            src={video}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.promotion_content}>
          <div className={styles.promotion_logo}>
            <Image src={require("@/assets/logo.png")} alt="logo" />
          </div>
          <h1 className={styles.promotion_title}>
            Hard Web-ga qiziqqaningiz uchun tashakkur.
          </h1>
          <p className={styles.promotion_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className={styles.promotion_btn}>
            <a href="#">Loyihani boshlash</a>
          </div>
        </div>
      </div>
      <div className={styles.forms}>
        <div className={styles.form}>
          <div className={styles.form_name}>
            <div className={styles.name}>
              <label>F.I.SH</label>
              <input type="text" placeholder="Shu yerga" />
            </div>
            <div className={styles.name}>
              <label>Telefon</label>
              <input type="text" placeholder="Shu yerga 99 123 45 57" />
            </div>
          </div>
          <div className={styles.types}>
            <p>Nega biz bilan bog'lanyapsiz?</p>
            <div className={styles.checkbox}>
              <div className={styles.checkbox_item}>
                <div className={styles.item_check}>
                  <input type="checkbox" />
                  <span></span>
                  <label>Web sayt</label>
                </div>
                <div className={styles.item_check}>
                  <input type="checkbox" />
                  <label>Telegram bot</label>
                </div>
              </div>
              <div className={styles.checkbox_item}>
                <div className={styles.item_check}>
                  <input type="checkbox" />
                  <label>Web sayt</label>
                </div>
                <div className={styles.item_check}>
                  <input type="checkbox" />
                  <label>Telegram bot</label>
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
            <input type="text" placeholder="Shu yerga" />
          </div>
          <div className={styles.form_btn}>
            <a href="#">Yuborish</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className="container flex-between">
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
                <Image src={require("@/assets/instagram.png")} alt="img" />
              </a>
              <a href="#">
                <Image src={require("@/assets/linkedin.png")} alt="img" />
              </a>
              <a href="#">
                <Image src={require("@/assets/facebook.png")} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className="container flex-between">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
