// components/layout/HeroSkeleton.jsx
export function HeroSkeleton() {
  return (
    <section className="hero bg-[#F1F3FD] relative z-[1] min-h-[500px] md:min-h-[800px] flex items-center">
      <div className="container mx-auto py-24 sm:py-24 lg:py-20 pb-0 relative z-10 w-full">
        <div className="flex flex-col justify-center items-start max-w-lg space-y-6">
          {/* Title skeleton */}
          <div className="space-y-2 animate-pulse w-full">
            <div className="h-8 sm:h-10 lg:h-12 bg-[#12283F]/10 rounded"></div>
            <div className="h-6 sm:h-7 bg-[#12283F]/10 rounded w-4/5"></div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-2 animate-pulse w-full">
            <div className="h-4 bg-[#707070]/30 rounded"></div>
            <div className="h-4 bg-[#707070]/30 rounded w-5/6"></div>
            <div className="h-4 bg-[#707070]/30 rounded w-4/5"></div>
          </div>

          {/* Button skeleton */}
          <div className="w-32 sm:w-40 h-10 bg-[#236BFD]/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
