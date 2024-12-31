const TwoImageSection = () => {
    return (
      <div className="max-w-[120rem] mx-auto  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4">
          {/* Image 1 */}
          <div className="relative ">
            <img
              src="adsection/ad.webp" // Replace with the actual image path
              alt="Image 1"
              className="w-full h-full object-cover "
            />
          </div>
  
          {/* Image 2 */}
          <div className="relative">
            <img
              src="adsection/ad.webp" // Replace with the actual image path
              alt="Image 2"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default TwoImageSection;
  