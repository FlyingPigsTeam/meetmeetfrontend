import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.homepage}>
        <div className={style.title}>
          <span className={style.heading}>Meet Meet</span>
          <button
            className={style.login_button}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
        <div className={style.content}>
          <div className={style.text1}>
            This is a Different website for
            <br /> getting entertained
          </div>
          <div className={style.text2}>
            in Meet Meet, you can make different events <br />
            and join others to make plans for your freedom
          </div>
          <button className={style.login_button1} onClick={()=>navigate("/homepage")}>Join us Now</button>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.text3}>Knight offers everything you need.</div>
        <div className={style.text4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          nisi commodo, tempus odio a, vestibulum nibh.
        </div>
        <div className={style.features}>
          <div>
            <div className={style.icon1}></div>
            <h5 className={style.h5}>Create once. Share everywhere.</h5>
            <p className={style.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.
            </p>
          </div>
          <div>
            <div className={style.icon2}></div>
            <h5 className={style.h5}>Unlimited devices</h5>
            <p className={style.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.
            </p>
          </div>
          <div>
            <div className={style.icon3}></div>
            <h5 className={style.h5}>Beautiful tempates & layouts</h5>
            <p className={style.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.
            </p>
          </div>
          <div>
            <div className={style.icon4}></div>
            <h5 className={style.h5}>Available globally</h5>
            <p className={style.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.
            </p>
          </div>
        </div>
      </div>
      <div className={style.plans}>
        <div className={style.pt1}>Choose your pricing plan.</div>
        <div className={style.pt2}>Simply pricing - 7 Days free trial</div>
        <div className={style.gridForPlan}>
          <div className={style.login_plans}>
            <div className="card-body">
              <h3 className="card-title pt-3" className={style.planHeading}>
                Regular
              </h3>
              <h2
                className="card-title text-primary mb-0 pt-4"
                className={style.PlanPrice}
              >
                $4
              </h2>
              <div
                className="text-muted font-weight-medium mt-2"
                className={style.PlanPerMonth}
              >
                per month
              </div>
              <ul className="list-unstyled" className={style.planAttr}>
                <li className={style.list}>1 user</li>
                <li className={style.list}>10 websites</li>
                <li className={style.list}>Access to premium templates</li>
                <li className={style.list}>Basic support</li>
              </ul>
              <button className={style.PlanButton}>Start Regular</button>
            </div>
          </div>
          <div className={style.login_plans}>
            <div className="card-body">
              <h3 className="card-title pt-3" className={style.planHeading}>
                Premium
              </h3>
              <h2
                className="card-title text-primary mb-0 pt-4"
                className={style.PlanPrice}
              >
                $7
              </h2>
              <div
                className="text-muted font-weight-medium mt-2"
                className={style.PlanPerMonth}
              >
                per month
              </div>
              <ul className="list-unstyled" className={style.planAttr}>
                <li className={style.list}>1 user</li>
                <li className={style.list}>10 websites</li>
                <li className={style.list}>Access to premium templates</li>
                <li className={style.list}>Basic support</li>
              </ul>
              <button className={style.PlanButton}>Start Premium</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.questions}>
        <div className={style.qt1}>Frequently asked questions</div>
        <div className={style.qt2}>Answers to most common questions.</div>
        <div className={style.qGrid}>
          <div className={style.qpart}>
            <p className={style.question}>Can I try it for free?</p>
            <p className={style.answer}>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imper per tem por legere me doming.
            </p>
          </div>
          <div className={style.qpart}>
            <p className={style.question}>Can I try it for free?</p>
            <p className={style.answer}>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imper per tem por legere me doming.
            </p>
          </div>
          <div className={style.qpart}>
            <p className={style.question}>Can I try it for free?</p>
            <p className={style.answer}>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imper per tem por legere me doming.
            </p>
          </div>
          <div className={style.qpart}>
            <p className={style.question}>Can I try it for free?</p>
            <p className={style.answer}>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imper per tem por legere me doming.
            </p>
          </div>
        </div>
        <div className={style.haveQuestion}>Have Questions?</div>
        <button className={style.PlanButton1}>Contact Us</button>
      </div>
      {/* footer */}
      <div className={style.footer}>
        <ul className={style.footerGrid}>
          <li className={style.tags}>Home</li>
          <li className={style.tags}>Services</li>
          <li className={style.tags}>About</li>
          <li className={style.tags}>Terms</li>
          <li className={style.tags}>Privacy Policy</li>
        </ul>
        {/* <div className={style.FIcons}>
          <div className={style.footerIcon1}><a></a></div>
          <div className={style.footerIcon2}></div>
          <div className={style.footerIcon3}></div>
          <div className={style.footerIcon4}></div>
          <div className={style.footerIcon5}></div>
        </div> */}
        <p className={style.copy}>Company Name © 2023</p>
      </div>
    </div>
  );
};

export default Home;
