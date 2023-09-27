import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="h-screen w-[107px] bg-blue-40 ">
      <div className=" h-full w-full flex flex-col justify-between items-center py-10">
        <Link href="#">
          <img src="/images/logo.svg" alt="" />
        </Link>
        <ul className="flex flex-col items-center justify-center gap-[36px]">
          <li>
            <Link href="#"><img src="/images/home.svg" alt="" /></Link>
          </li>
          <li>
            <Link href="#"><img src="/images/messages.svg" alt="" /></Link>
          </li>
          <li>
            <Link href="#"><img src="/images/friend.svg" alt="" /></Link>
          </li>
         
        </ul>
        <div className="flex flex-col items-center gap-[44px]">
          <ul className="flex flex-col items-center gap-[36px]">
            <li>
                <Link href="#">
                    <img src="/images/notification.svg" alt="" />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <img src="/images/parametrs.svg" alt="" />
                </Link>
            </li>
          </ul>
          <div className="text-white flex flex-col gap-[16px] items-center ">
            <div>
                <img src="/images/line.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] bg-white rounded-lg"> 
            <Link href="#">
                <img className="rounded-lg" src="/images/image.svg" alt="" />
            </Link>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Header;
