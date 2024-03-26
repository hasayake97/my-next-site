import { TextPropsType } from "@/types";

const Text = ({ children, inlineBlock }: TextPropsType) => {
  return (
    <p className={`p-1 bg-white ${inlineBlock ? 'inline-block' : ''}`}>
      {children}
    </p>
  );
};

export default Text;
