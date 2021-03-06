import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BarsIcon from "react-line-awesome/dist/icons/BarsIcon";
import CloseIcon from "react-line-awesome/dist/icons/CloseIcon";

export const NavMobile = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const changeNavbarStyle = () => {
      if (window.scrollY > 150) return setNavVisible(true);
      setNavVisible(false);
    };
    changeNavbarStyle();

    window.addEventListener("scroll", changeNavbarStyle, true);

    return () => {
      window.removeEventListener("scroll", changeNavbarStyle, true);
    };
  }, []);

  function changeRoute(route) {
    document.documentElement.style.overflowY = "visible";
    setMenuOpened(false);
    router.push(route);
  }

  return (
    <>
      {navVisible && (
        <div className="h-[60px] w-full fixed top-0 z-50 bg-white drop-shadow">
          <div className="h-full content flex items-center justify-between px-2">
            <div className="flex items-center">
              <Link href={"/"} passHref={undefined}>
                <Image src="/logo_colors.png" width={88} height={41.6} alt="" />
              </Link>
            </div>

            <div className="flex gap-5 items-center">
              {!menuOpened && (
                <div>
                  <p
                    onClick={() => changeRoute("/#cadastro")}
                    className="text-md bg-gradient-to-br from-pink-600 to-pink-800 px-4 py-1 text-white rounded cursor-pointer"
                  >
                    Teste grátis
                  </p>
                </div>
              )}
              {menuOpened ? (
                <CloseIcon
                  onClick={() => {
                    document.documentElement.style.overflowY = "visible";
                    setMenuOpened(false);
                  }}
                  className="text-mainPink !text-3xl"
                />
              ) : (
                <BarsIcon
                  onClick={() => {
                    document.documentElement.style.overflowY = "hidden";
                    setMenuOpened(true);
                  }}
                  className="text-mainPink !text-3xl"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className={`bg-white w-screen ${
          menuOpened ? "h-screen" : "h-0"
        } z-40 fixed overflow-hidden animated-nav`}
      >
        <div className="content h-full flex flex-col gap-6 py-8 items-center">
          <div className="mt-[150px]">
            <p
              onClick={() => changeRoute("/#inicio")}
              className="text-xl text-mainPurple font-bold"
            >
              Início
            </p>
          </div>
          <div>
            <p
              onClick={() => changeRoute("/#sobre-nos")}
              className="text-xl text-mainPurple font-bold"
            >
              Sobre nós
            </p>
          </div>
          <div>
            <p
              onClick={() => changeRoute("/#funcionalidades")}
              className="text-xl text-mainPurple font-bold"
            >
              Funcionalidades
            </p>
          </div>
          <div>
            <p
              onClick={() => changeRoute("/#como-comecar")}
              className="text-xl text-mainPurple font-bold"
            >
              Como começar
            </p>
          </div>
          <div>
            <p
              onClick={() => changeRoute("/#precos")}
              className="text-xl text-mainPurple font-bold"
            >
              Preços
            </p>
          </div>
          <div>
            <p
              onClick={() => changeRoute("/#cadastro")}
              className="text-xl mt-8 bg-gradient-to-br from-pink-600 to-pink-800 px-14 py-2 text-white rounded cursor-pointer"
            >
              Teste grátis
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
