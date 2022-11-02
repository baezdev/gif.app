export const GifCard = ({ id, title, url }) => {
  return (
    <div className="w-full h-fit p-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <img src={url} alt={title} className="w-full" />
        <p className="bg-slate-100 px-4 py-7 text-base text-center font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};
