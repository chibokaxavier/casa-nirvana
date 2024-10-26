"use client";
import React from "react";
import CountUp from "react-countup";
const Stat = [
  { num: 16, text: "Years of Experience" },
  { num: 200, text: "Awards gained " },
  { num: 1200, text: "Property ready" },
];
const plus = "+";

const Stats = () => {
  return (
    <section>
      <div className="mx-auto container mt-10 text-balck">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
          {Stat.map((item, index) => {
            return (
              <div
                className="flex justify-center xl:justify-start items-center flex-1 gap-4"
                key={index}
              >
                <span className="flex justify-center items-center">
                  <CountUp
                    className="font-semibold text-[30px] xl:text-4xl"
                    end={item.num}
                    duration={5}
                    delay={2}
                  />
                  +
                </span>
                <p
                  className={`${
                    item.text.length > 15 ? "max-w-[150px]" : "max-w-[150px]"
                  } leading-snug `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
