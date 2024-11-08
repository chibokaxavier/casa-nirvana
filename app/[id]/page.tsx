import { dummyData } from "@/lib/data";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const page = ({ params }: { params: { id: string } }) => {
  const prod = dummyData.find((item) => item.id.toLocaleString() === params.id);
  return (
    <div>
      <div className="flex sm:max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px]  h-[100vh]  lg:mx-20  mx-10">
        <div className=" w-[70%] flex flex-col">
          <div>image</div>
          <div className="flex flex-col">
            <div className="flex">
              <div>
                <h2 className="text-4xl">{prod?.title}</h2>
                <p className="flex items-center ">
                  <CiLocationOn /> <span>{prod?.address}</span>
                </p>
                <p className="bg-yellow-200 text-black rounded-md p-1 w-fit">
                  $ {prod?.price}
                </p>
              </div>
              <div></div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              exercitationem architecto eos placeat veniam ab molestias hic
              facere, aut reprehenderit, quaerat fugit recusandae temporibus
              dolor. Velit officia pariatur nostrum voluptatem? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Distinctio totam
              facilis velit, sint doloribus doloremque incidunt ratione fugiat
              quisquam explicabo quas quaerat, quasi, praesentium labore magnam
              adipisci dolorem ad quo!
            </div>
          </div>
        </div>

        <div className="w-[30%]">bgh</div>
      </div>{" "}
    </div>
  );
};

export default page;
