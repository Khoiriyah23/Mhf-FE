type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'green';
  className?: string
};

const Button = ({ type, title, variant }: ButtonProps) => {
  // Define background colors based on the variant
  const backgroundColors: Record<string, string> = {
    green: 'bg-[rgba(131,151,88,1)] hover:bg-[rgba(111,131,68,1)] transition',
  };

  return (
    <button
      type={type}
      className={`flexCenter gap-3 h-30 text-white rounded-md py-2 px-6 ${backgroundColors[variant]}`}
    >
      <label htmlFor="" className="whitespace-normal">
        {title}
      </label>
    </button>
  );
};

export default Button;
