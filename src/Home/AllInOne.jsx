import search from "../assets/search.png";
import connect from "../assets/connect.png";
import research from "../assets/research.png";
import academy from "../assets/academy.png";
import students from '../assets/students.png'

const AllInOne = () => {
  return (
    <div className="mt-28  px-8 lg:px-0 mx-12">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p className="lg:text-6xl text-2xl font-bold">
            All-in-One platform that Makes Easier
          </p>

          <p className="text-lg font-semibold mt-5">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-10 text-lg font-semibold">
            <div className=" flex items-center gap-2">
              <div>
                <img src={search} alt="" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">SEARCH</span> for vital
                company information{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={connect} alt="" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">CONNECT</span> with the
                resources to meet your business needs
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={research} alt="" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">RESEARCH</span> and
                generate reports that drive growth{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={academy} alt="" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">ACADEMY</span> to give
                you the skills for success in your career
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-16 lg:mt-0 relative">
          <img src={students} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
