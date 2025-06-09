interface TempletButtonProps {
    label: string;
    onClick?: () => void;
  }
  
  const TempletButton = ({ label, onClick }: TempletButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100 transition"
      >
        {label}
      </button>
    );
  };
  
  export default TempletButton;