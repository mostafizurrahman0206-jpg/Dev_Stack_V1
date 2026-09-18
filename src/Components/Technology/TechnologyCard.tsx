type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="flex min-h-[290px] flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 flex-1 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-[10px]">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-gray-700">
          ⭐ {technology.rating}
        </span>

      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2 text-xs font-semibold ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-[#0b1220] text-white hover:bg-[#1d2939]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;