import {
  MenuAlt4Icon,
  ShoppingBagIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import CustomLink from '../../atoms/CustomLink';

const Header = () => {
  return (
    <div className="relative flex h-6 w-full items-center bg-black bg-opacity-80 py-6 px-4">
      <div className="space-x-reverse-3 mx-auto flex w-full max-w-[950px] items-center justify-between">
        <MenuAlt4Icon className="icon md:hidden" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="256px"
          height="315px"
          viewBox="0 0 256 315"
          version="1.1"
          preserveAspectRatio="xMidYMid"
          className="mb-1 ml-0 h-4 w-4 cursor-pointer"
        >
          <g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
              fill="black"
              className="fill-gray-300 transition duration-300 ease-out hover:fill-white"
            />
          </g>
        </svg>

        {/* tailwind can be ugly? */}
        <div className=" hidden max-w-3xl flex-1 justify-between text-xs text-gray-300 md:flex">
          <a href="" className="hover:text-white">
            Store
          </a>
          <a href="" className="hover:text-white">
            Mac
          </a>
          <a href="" className="hover:text-white">
            iPad
          </a>
          <a href="" className="hover:text-white">
            iPhone
          </a>
          <a href="" className="hover:text-white">
            Watch
          </a>
          <a href="" className="hover:text-white">
            AirPods
          </a>
          <a href="" className="hover:text-white">
            TV & Home
          </a>
          <a href="" className="hover:text-white">
            Only on Apple
          </a>
          <a href="" className="hover:text-white">
            Accessories
          </a>
          <a href="" className="hover:text-white">
            Support
          </a>
        </div>

        {/* <div className=" hidden max-w-3xl flex-1 justify-between text-xs text-gray-300 md:flex">
          <CustomLink url="/">Store</CustomLink>
          <CustomLink url="/">Mac</CustomLink>
          <CustomLink url="/">iPad</CustomLink>
          <CustomLink url="/">iPhone</CustomLink>
          <CustomLink url="/">Watch</CustomLink>
          <CustomLink url="/">iPhone</CustomLink>
          <CustomLink url="/">Watch</CustomLink>
          <CustomLink url="/">iPhone</CustomLink>
          <CustomLink url="/">Watch</CustomLink>
        </div> */}

        <SearchIcon className="icon hidden md:inline-flex" />
        <ShoppingBagIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
