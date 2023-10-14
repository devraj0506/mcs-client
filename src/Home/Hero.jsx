import {useEffect,useState} from 'react'
import heroImg from '../assets/Hero.png'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Hero() {

    const [selectedUser, setSelectedUser] = useState(null);
  const [options, setOptions] = useState();
  const history = useNavigate();

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://mcs-server-eta.vercel.app/')
      .then((response) => {
        const userOptions = response.data.map((user) => ({
          value: user._id,
          label: user.name,
        }));
        setOptions(userOptions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const handleUserSelect = (selectedOption) => {
    console.log(selectedOption)
    setSelectedUser(selectedOption);
    history(`/${selectedOption.value}`);
  };


  return (
    <section className="my-12 flex">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      Find  <span className='text-gradient'>Partners</span> (CAs) available online
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-500">
      CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support
      </p>

     {options && <div className='flex'><Select
        options={options}
        value={selectedUser}
        onChange={handleUserSelect}
        isSearchable
        placeholder="Search by name"
        className='w-3/6 custom-select'
      />
      <button className='bg-[#0076CE] text-white border-2 border-[#0076CE] px-4 py-1 rounded-lg'>Search</button>
      </div>
}
      
    </div>
    <div className="my-4 lg:mt-0 lg:col-span-5 flex">
      <img
        src={heroImg}
        alt="mockup"
      />
    </div>
  </div>
</section>

  )
}

export default Hero