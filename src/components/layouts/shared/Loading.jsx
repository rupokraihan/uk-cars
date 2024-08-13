import React from 'react';

const Loading = () => {
  return (
      <div>
          <div className="flex justify-center  mt-10">
              <div className="w-8 h-8 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
          </div>
      </div>
  );
};

export default Loading;
