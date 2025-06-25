
const AddButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-14 h-14 rounded-full bg-primary text-white text-2xl flex items-center justify-center shadow-lg cursor-pointer"
  >
    +
  </button>
);

export default AddButton;