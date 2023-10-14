import logoWhite from '../assets/logoWhite.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import li from '../assets/lin.png'
import wa from '../assets/wa.png'


function Footer() {
  return (
    <footer className="back-gradient">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex ">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={logoWhite}
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
            </a>
              <p className="text-white">India's first platform dedicated to simplifying partner search</p>

          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 justify-around">
            <div className="mx-12">
              <h2 className="mb-6 text-sm font-bold text-White uppercase dark:text-white">
              COMPANY
              </h2>
              <ul className="text-white dark:text-white ">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-12">
              <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                Solutions
              </h2>
              <ul className="text-white dark:text-white ">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Search
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Connect
                  </a>
                </li > 
                <li className="mb-1">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Academy
                  </a>
                </li >
              </ul>
            </div>
            <div className="mx-12">
              <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-white dark:text-white ">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Forms
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-12">
              <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                Support
              </h2>
              <ul className="text-white ">
                <li className="mb-1" >
                  <a
                    href="#"
                    className="hover:underline "
                  >
                    Blogs
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Forms
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-12">
              <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-white ">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Terms 
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Accessibility 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto dark:border-White lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-white">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <img src={fb} alt="" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
             
              <img src={ig} alt="" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              
              <img src={li} alt="" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <img src={wa} alt="" />
            </a>
            
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <p className="text-center text-white p-3">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
