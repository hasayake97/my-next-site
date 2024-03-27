import { TextPropsType } from "@/types";

const Text = ({ children, className = '', inlineBlock }: TextPropsType) => {
  return (
    <p className={`p-1 bg-white ${className} ${inlineBlock ? 'inline-block' : ''}`}>
      {children}
    </p>
  );
};

export default Text;
