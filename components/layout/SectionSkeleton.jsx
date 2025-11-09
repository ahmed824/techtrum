// Section Skeleton Component
function SectionSkeleton({ height = "400px" }) {
  return (
    <div className="animate-pulse" style={{ minHeight: height }}>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-8 space-y-4">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
export default SectionSkeleton ;