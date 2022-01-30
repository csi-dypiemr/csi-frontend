// import React from "react";

// class App extends React.Component<
//   {},
//   {
//     // no props
//     text: string;
//   }
// > {
//   state = {
//     text: ""
//   };

//   // typing on RIGHT hand side of =
//   onChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     this.setState({ text: e.currentTarget.value });
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.text} onChange={this.onChange} />
//       </div>
//     );
//   }
// }


import React from "react";

export type IInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField: React.FC<IInput> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <input
      // className={`py-2 px-6 font-medium text-white bg-blue-500 rounded hover:bg-blue-200 transition duration-300 ${className}`}
      className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${className}`}
      // px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0
      {...rest}
    >
      {children}
    </input>
  );
};
