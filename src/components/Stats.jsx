import React, { Fragment } from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {stats.map(({ id, value, title }, index) => (
      <Fragment key={id}>
        <div className={`flex-1 flex ${styles.flexCenter} flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
            {value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 ">
            {title}
          </p>
        </div>
        {index !== stats.length - 1 ? (
          <div className={`${styles.flexCenter} flex flex-col flex-[0.2]`}>
            <div className="w-[1.7px] h-[14px] bg-dimWhite" />
          </div>
        ) : null}
      </Fragment>
    ))}
  </section>
);

export default Stats;
