const ProjectCardSkeleton = () => {
  return (
    <div className="w-full bg-gray-100 rounded-md shadow-sm animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-200 rounded-t-md"></div>

      {/* Content placeholder */}
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;