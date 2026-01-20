import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FreelanceCollage() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`my-12 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transition: 'opacity 0.7s ease-out',
      }}
    >
      {/* Bento box grid - 5 images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[180px]">
        {/* Large image - spans 2 columns and 2 rows */}
        <div className="col-span-2 row-span-2">
          <img
            src="/images/team1.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width={600}
            height={360}
          />
        </div>

        {/* Top right */}
        <div className="col-span-1">
          <img
            src="/images/team2.jpg"
            alt="Team working together"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width={300}
            height={180}
          />
        </div>

        {/* Top far right */}
        <div className="col-span-1">
          <img
            src="/images/team4.jpg"
            alt="Coworking space"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width={300}
            height={180}
          />
        </div>

        {/* Bottom middle */}
        <div className="col-span-1">
          <img
            src="/images/team3.jpg"
            alt="Focused work"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width={300}
            height={180}
          />
        </div>

        {/* Bottom right */}
        <div className="col-span-1">
          <img
            src="/images/team5.jpg"
            alt="Remote team"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width={300}
            height={180}
          />
        </div>
      </div>
    </div>
  );
}
