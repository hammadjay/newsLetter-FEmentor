interface ButtonPops {
  title: String;
  onClick?(): any;
}
export default function CustomButton({ title, onClick }: ButtonPops) {
  return (
    <button
      className="p-2 py-3 mt-3 w-full rounded-md transition-all bg-[--dark-slate-grey] hover:bg-gradient-to-r from-[var(--primary-reddish)] to-[var(--primary-tomato)] "
      type="button"
      onClick={onClick}
    >
      <p className="text-xs font-bold text-white">{title}</p>
    </button>
  );
}
