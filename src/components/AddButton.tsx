
const AddButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-800 text-white text-2xl flex items-center justify-center shadow-lg"
  >
    +
  </button>
);

export default AddButton;