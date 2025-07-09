type HoverCardProps = {
  img?: string;
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const HoverCard = ({ props }: { props: HoverCardProps }) => {
  const { img, title, description, className, style } = props;

  return (
    <div
      className={`rounded-4xl p-3 bg-neutral-50 size-[213px] bg-cover transition-all duration-300 ease-in-out hover:scale-105 group cursor-pointer overflow-hidden hover:shadow-lg hover:h-auto hover:w-auto relative ${className}`}
      style={{
        backgroundImage: `url(${img})`,
        ...style,
      }}
    >
      {/* Default state: just the background image */}

      {/* White background overlay that appears on hover */}
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-white transition-opacity duration-300 ease-in-out"></div>

      {/* Expanded content that appears on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:mt-4 relative z-10">
        {/* Image section for hover state */}
        <div
          className="hidden group-hover:block w-full h-48 bg-cover bg-center rounded-xl mb-4 -mt-3 -mx-3"
          style={{ backgroundImage: `url(${img})` }}
        />

        {/* Content section */}
        <div className="hidden group-hover:block p-3">
          {title && (
            <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
