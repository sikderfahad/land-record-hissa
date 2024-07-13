import { useState } from "react";
import bgImg from "./assets/hissa.png";
import logo from "../public/logo.png";
import { AwesomeButtonProgress } from "react-awesome-button";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";

import "react-awesome-button/dist/styles.css";

const App = () => {
  const [hissa, setHissa] = useState(null);
  const [landKali, setLandKali] = useState(null);
  const [openHissa, setOpenHissa] = useState(true);
  const [openKali, setOpenKali] = useState(false);

  function handleHissaBtn() {
    setOpenKali(false);
    setOpenHissa(true);
    console.log(openHissa);
  }
  function handleLandKaliBtn() {
    setOpenKali(true);
    setOpenHissa(false);
    console.log(openKali);
  }

  function hissaCount(
    ana = 0,
    gonda = 0,
    kora = 0,
    kranti = 0,
    til = 0,
    total = 0
  ) {
    const oneAna = total / 16;
    const oneGonda = oneAna / 20;
    const oneKora = oneGonda / 4;
    const oneKranti = oneKora / 3;
    const oneTil = oneKranti / 20;

    const totalHissa =
      ana * oneAna +
      gonda * oneGonda +
      kora * oneKora +
      kranti * oneKranti +
      til * oneTil;
    return totalHissa;
  }

  function handleHissaSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const ana = Number(form.ana.value);
    const gonda = Number(form.gonda.value);
    const kora = Number(form.kora.value);
    const kranti = Number(form.kranti.value);
    const til = Number(form.til.value);
    const total = Number(form.total.value);

    const getHissa = hissaCount(ana, gonda, kora, kranti, til, total);
    setHissa(getHissa);
    // form.reset();
    console.log(getHissa);
  }

  function handleLandKaliSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const length_1 = Number(form.length_1.value);
    const length_2 = Number(form.length_2.value);
    const width_1 = Number(form.width_1.value);
    const width_2 = Number(form.width_2.value);

    const lengthAvg = (length_1 + length_2) / 2;
    const widthAvg = (width_1 + width_2) / 2;

    const totalLandKaliArea = (lengthAvg * widthAvg) / 435.6;
    setLandKali(totalLandKaliArea);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen"
    >
      <div
        style={{ backgroundColor: "rgb(0 0 0 / 81%)" }}
        className=" w-full min-h-screen"
      >
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* All Page content here */}

            {/* Start Navigation bar */}

            <div
              className="navbar fixed backdrop-blur-[15] z-[1] "
              style={{
                backgroundColor: "rgb(0 0 0 / 10%)",
                backdropFilter: "blur(15px)",
              }}
            >
              <div className="navbar-start">
                <img src={logo} className="h-16 w-16" alt="" />
              </div>
              <div className="navbar-center hidden lg:flex"></div>
              <div className="navbar-end">
                <label htmlFor="my-drawer" className="">
                  <GiHamburgerMenu className="text-4xl hover:text-green-600 duration-300 transform hover:rotate-180 lg:hover:rotate-0" />
                </label>
              </div>
            </div>

            {/* End Navigation bar */}

            {/* Start Page content */}
            <div className="flex flex-col z-[0] mt-20">
              {/* Hissa counting part */}
              <div id="hissaCount" className={!openHissa && "hidden"}>
                <div className="hero flex items-center justify-center">
                  <div className="hero-content flex-col">
                    <div className="text-center">
                      <h1 className="text-lg md:text-2xl lg:text-5xl font-bold"></h1>
                    </div>
                    {hissa && (
                      <div className="text-lg md:text-2xl lg:text-5xl font-bold border border-green-600 p-3 md:p-6 lg:p-12 rounded-lg">
                        মোট হিস্যাংশঃ{" "}
                        <span className="text-red-500 animate-pulse">
                          {hissa}
                        </span>{" "}
                        <span>শতাংশ</span>
                      </div>
                    )}
                    <div
                      style={{
                        backgroundColor: "rgb(0 0 0 / 44%)",
                        backdropFilter: "blur(10px)",
                      }}
                      className="card shrink-0 w-full w-sm md:max-w-md lg:max-w-xl shadow-2xl mt-10"
                    >
                      <form onSubmit={handleHissaSubmit} className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">আনা</span>
                          </label>
                          <input
                            type="number"
                            name="ana"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">গন্ডা</span>
                          </label>
                          <input
                            type="number"
                            name="gonda"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">করা</span>
                          </label>
                          <input
                            type="number"
                            name="kora"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">ক্রান্তি</span>
                          </label>
                          <input
                            type="number"
                            name="kranti"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">তিল</span>
                          </label>
                          <input
                            type="number"
                            name="til"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              মোট জমির পরিমাণ <sub>(শতাংশ)</sub>
                            </span>
                          </label>
                          <input
                            type="number"
                            name="total"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button
                            type="submit"
                            className="btn text-green-600 bg-transparent text-lg border border-green-400"
                          >
                            হিস্যা
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Land kali part */}
              <div id="landKali" className={!openKali && "hidden"}>
                <div className="hero flex items-center justify-center">
                  <div className="hero-content flex-col">
                    <div className="text-center">
                      <h1 className="text-lg md:text-2xl lg:text-5xl font-bold"></h1>
                    </div>
                    {landKali && (
                      <div className="text-lg md:text-2xl lg:text-5xl font-bold border border-green-600 p-3 md:p-6 lg:p-12 rounded-lg">
                        মোট জমিঃ{" "}
                        <span className="text-red-500 animate-pulse">
                          {landKali}
                        </span>{" "}
                        <span>শতাংশ</span>
                      </div>
                    )}
                    <div
                      style={{
                        backgroundColor: "rgb(0 0 0 / 44%)",
                        backdropFilter: "blur(10px)",
                      }}
                      className="card shrink-0 w-full w-sm md:max-w-md lg:max-w-xl shadow-2xl mt-10"
                    >
                      <form
                        onSubmit={handleLandKaliSubmit}
                        className="card-body"
                      >
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              দৈর্ঘ্য<sup>১ম</sup>
                            </span>
                          </label>
                          <input
                            type="text"
                            name="length_1"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              {" "}
                              দৈর্ঘ্য<sup>২য়</sup>
                            </span>
                          </label>
                          <input
                            type="text"
                            name="length_2"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              {" "}
                              প্রস্থ<sup>১ম</sup>
                            </span>
                          </label>
                          <input
                            type="text"
                            name="width_1"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              {" "}
                              প্রস্থ<sup>২য়</sup>
                            </span>
                          </label>
                          <input
                            type="text"
                            name="width_2"
                            className="input input-bordered"
                          />
                        </div>

                        <div className="form-control mt-6">
                          <button
                            type="submit"
                            className="btn text-green-600 bg-transparent text-lg border border-green-400"
                          >
                            কালি
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className=" text-sm my-10 italic text-center">
                Developed by ❤️{" "}
                <span className="animate-pulse">Fahad Sikder</span>
              </div>
            </div>
            {/* End Page content */}
          </div>
          <div className="drawer-side z-[2]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu flex flex-col gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <div className="flex justify-end">
                <label
                  htmlFor="my-drawer"
                  className="text-red-600 font-bold text-xl py-2 px-4 border border-red-600 rounded-full bg-transparent hover:bg-red-600 hover:text-base-200 duration-300 transform hover:rotate-180"
                >
                  X
                </label>
              </div>

              <AwesomeButtonProgress
                type="primary"
                onPress={async (element, next) => {
                  handleHissaBtn();
                  next();
                }}
              >
                খতিয়ানের হিস্যা করন
              </AwesomeButtonProgress>

              <AwesomeButtonProgress
                type="danger"
                onPress={async (element, next) => {
                  handleLandKaliBtn();
                  next();
                }}
              >
                জমির প্লট কালি করন
              </AwesomeButtonProgress>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
