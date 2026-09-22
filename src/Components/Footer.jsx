import Link from "next/link";
import { CiYoutube, CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#060f16]">
        <div className="container mx-auto py-20">
            <ul className="flex justify-center items-center gap-4">
                <li className="p-3 bg-[#182028] rounded-xl">
                    <Link href={`/`}>
                    <CiYoutube size={20} color="#D1C5AC" />
                    </Link>
                </li>
                <li className="p-3 bg-[#182028] rounded-xl">
                    <Link href={`/`}>
                    <CiFacebook  size={20} color="#D1C5AC" />
                    </Link>
                </li>
                <li className="p-3 bg-[#182028] rounded-xl">
                    <Link href={`/`}>
                    <FaInstagram   size={20} color="#D1C5AC" />
                    </Link>
                </li>
                <li className="p-3 bg-[#182028] rounded-xl">
                    <Link href={`/`}>
                    <FaXTwitter   size={20} color="#D1C5AC" />
                    </Link>
                </li>
                <li className="p-3 bg-[#182028] rounded-xl">
                    <Link href={`/`}>
                    <FaWhatsapp   size={20} color="#D1C5AC" />
                    </Link>
                </li>
                
            </ul>
            <ul className="flex justify-center items-center gap-6 my-6">
              <li className="text-[16px] text-[#D1C5AC]">
                <Link href={`/`}>
                Privacy Policy 
                </Link>
              </li>
              <li className="text-[16px] text-[#D1C5AC]">
                <Link href={`/`}>
                Terms and Condition
                </Link>
              </li>
              <li className="text-[16px] text-[#D1C5AC]">
                <Link href="/top-rated">
                Top-rated 
                </Link>
              </li>
              <li className="text-[16px] text-[#D1C5AC]">
                <Link href="/upcoming">
                Upcoming
                </Link>
              </li>
              <li className="text-[16px] text-[#D1C5AC]">
                <Link href="/popular">
                Popular
                </Link>
              </li>
            </ul>
            <div>
              <p className="text-center text-sm text-[#9A9078]">
                This is a practice project by <Link href="https://github.com/mmsabit" className="hover:text-[#D1C5AC] italic underline">M M Sabit</Link>
              </p>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
