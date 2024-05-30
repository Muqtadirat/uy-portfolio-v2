interface LabelProps {
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <div className="bg-greyScale-30 text-greyScale-60 w-fit px-4 py-1 rounded">
      {children}
    </div>
  );
};

export default Label;
