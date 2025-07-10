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
      className={`rounded-4xl w-[219px] h-auto bg-neutral-50 group cursor-pointer relative hover:w-[329px] hover:h-[331px] hover:bg-white transition-all duration-500 ease-out transform-gpu ${
        className || ""
      }`}
      style={style}
    >
      {/* Normal state: compact card with background image */}
      <div
        className="size-[213px] rounded-4xl bg-cover bg-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Hover state: expanded card with content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:-translate-y-12 z-10 pointer-events-none group-hover:pointer-events-auto">
        {/* White background card */}
        <div className="bg-white rounded-4xl overflow-hidden w-[329px] h-auto min-h-[329px] flex flex-col gap-2.5 p-1.5 pb-6 shadow-card">
          {/* Image section */}
          <div
            className="w-full h-[213px] rounded-[26px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />

          {/* Content section */}
          <div className="flex flex-col gap-0.5 px-5">
            {title && (
              <p className="text-xl font-semibold text-gray-950 line-clamp-1">
                {title}
              </p>
            )}
            {description && (
              <p className="text-gray-950 text-md line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
