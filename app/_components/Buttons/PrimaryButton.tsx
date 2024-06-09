interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white text-xs lg:text-base py-2 lg:py-4 px-4 lg:px-6 bg-primary-blue hover:bg-secondary-blue transition-colors duration-300 ease-in-out rounded lg:font-bold"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
