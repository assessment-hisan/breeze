import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({page}) => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <div className=" py-4  border-y-2 mb-3 ">
      <div className="max-w-[120rem] mx-auto flex justify-between items-center text-sm text-gray-600 px-4">
      <div className="text-4xl font-bold text-black">
        {page}
      </div>
        <div className="flex">
        <Link to="/" className="hover:text-primary text-xl">
          Home
        </Link>
        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
          const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <span key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {index + 1 === pathNames.length ? (
                <span className="text-gray-800 font-medium text-xl">{formattedName}</span>
              ) : (
                <Link to={routeTo} className="">
                  {formattedName}
                </Link>
              )}
            </span>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
