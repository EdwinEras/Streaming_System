import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center  z-50">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;