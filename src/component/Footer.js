import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center bg-black text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40"
      id="footer"
    >
      <div className="w-full max-w-[1240px] min-h-[auto]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="flex flex-col w-full lg:w-1/2 items-start">
            <div className="mx-0 md:m-0">
              <svg
                className="h-8 w-auto"
                viewBox="0 0 85 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                style={{}} 
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="green"
                />
              </svg>
            </div>
            <div className="text-grey-dark text-[13px] lg:text-base">
              <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:w-[360px]">
                Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
                Koramangala, Bengaluru, Karnataka 560034
              </p>
              <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:w-[360px] mt-4">
                Contact Us:{" "}
                <a href="" className="text-white">
                  080 68216821
                </a>
              </p>
              <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:w-[360px]">
                Email:{" "}
                <a href="" className="text-white">
                  care@uni.club
                </a>
              </p>
              <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:w-[360px] mt-4">
                <u>
                  <a
                    href=""
                    className="text-white"
                  >
                    Delete Account
                  </a>
                </u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8"></div>
      <div className="py-4 w-full max-w-[1240px] min-h-[auto] flex justify-between">
        <div className="flex">
          <p>
            <a
              href=""
              className="text-[#FFFFFF]"
            >
              <u>Grievance Redressal Mechanism</u> - SBM Bank India
            </a>
          </p>
          <p className="pl-4">|</p>
          <p className="pl-4">
            <a
              href=""
              className="text-[#FFFFFF]"
            >
              <u>Grievance Redressal Mechanism</u> - Yes Bank India
            </a>
          </p>
        </div>
        <p className="ml-auto">
          <a
            href=""
            className="text-[#FFFFFF]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>CSR Policy</u>
          </a>
        </p>
      </div>
      <div className="spacer-gradient h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8"></div>
      <div className="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
        <div className="flex w-full flex-wrap flex-1 justify-center md:justify-start">
          <div className="h-10 w-30">
            <a
              className="py-0 px-[18px] h-[60px] flex items-center"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <img
              width="6px"
              height="6px"
              src=""
              alt="arrow"
              className="inline-block ml-2"
            />
          </div>
          <div className="h-10 w-30">
            <a
              className="py-0 px-[18px] h-[60px] flex items-center"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <img
              width="6px"
              height="6px"
              src="https://www.uni.cards/images/footer-arrow.png"
              alt="arrow"
              className="inline-block ml-2"
            />
          </div>
          <div className="h-10 w-30">
            <a
              className="py-0 px-[18px] h-[60px] flex items-center"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <img
              width="6px"
              height="6px"
              src="https://www.uni.cards/images/footer-arrow.png"
              alt="arrow"
              className="inline-block ml-2"
            />
          </div>
          <div className="h-10 w-30">
            <a
              className="py-0 px-[18px] h-[60px] flex items-center"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <img
              width="6px"
              height="6px"
              src="https://www.uni.cards/images/footer-arrow.png"
              alt="arrow"
              className="inline-block ml-2"
            />
          </div>
          <div className="h-10 w-30">
            <a
              className="py-0 px-[18px] h-[60px] flex items-center"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </a>
            <img
              width="6px"
              height="6px"
              src="https://www.uni.cards/images/footer-arrow.png"
              alt="arrow"
              className="inline-block ml-2"
            />
          </div>
        </div>
        <div className="p-0 pb-5 flex justify-center flex-wrap">
          <span data-testid="cc-kfs">
            <a
              className="h-[60px]"
              href=""
              target="_blank"
            >
              Credit Card KFS
            </a>
            <span className="px-2">|</span>
          </span>
          <span data-testid="nxwave-tnc">
            <a className="h-[60px]" href="" target="_blank">
              Credit Card MITCs
            </a>
            <span className="px-2">|</span>
          </span>
          <span data-testid="uni-tnc">
            <a className="h-[60px]" href="" target="_blank">
              Uni T&Cs
            </a>
            <span className="px-2">|</span>
          </span>
          <span data-testid="nbfc-tnc">
            <a className="h-[60px]" href="" target="_blank">
              Lending Partner TnCs
            </a>
          </span>
        </div>
      </div>
      <div className="sm:h-40 md:hidden"></div>
    </footer>
  );
};

export default Footer;
