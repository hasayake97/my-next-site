import { TextPropsType } from "@/types";

const Text = ({ children, className = '', inlineBlock, ...other }: TextPropsType) => {
  return (
    <p className={`p-1 bg-white ${className} ${inlineBlock ? 'inline-block' : ''}`} {...other}>
      {children}
    </p>
  );
};

export default Text;
