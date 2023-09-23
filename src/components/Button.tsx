interface ButtonProps {
  name: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        className="text-white p-[0.125rem] rounded bg-slate-600 hover:bg-slate-500"
        type={props.type}
        onClick={() => props.onClick!()}
      >
        {props.name}
      </button>
    </>
  );
}
