import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import { AppConfig } from "@/config/AppConfig";

const Main = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="antialiased w-full text-gray-700 px-1">
      {props.meta}

      <div className="w-full container mx-auto">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="font-bold text-3xl text-gray-900">
              {AppConfig.title}
            </div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href="/">
                  <a
                    className={`${
                      router.pathname === "/" &&
                      "text-red-400 border-b-4 border-green-400"
                    } text-gray-700 border-none hover:text-gray-900`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/about/">
                  <a
                    className={`${
                      router.pathname === "/about" && "text-red-400 border-b-2"
                    } text-gray-700 border-none hover:text-gray-900`}
                  >
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-xl content">{props.children}</div>

        <footer className="border-t border-gray-300 text-center py-8 text-sm">
          Footer
        </footer>
      </div>
    </div>
  );
};

Main.propTypes = {
  meta: PropTypes.node,
  children: PropTypes.node,
};

export { Main };
