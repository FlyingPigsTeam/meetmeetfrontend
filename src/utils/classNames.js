export default function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

//usage example:
// ----------------------------------------------------------------------------

/* <button className={classNames('this is always applied', 
        isTruthy && 'this only when the isTruthy is truthy', 
        active ? 'active classes' : 'inactive classes')}>Text</button> */
// ----------------------------------------------------------------------------



//   import { useState } from "react";
//   import classNames from "./classNames";
//   import "./style.css";

//   function Example() {
//     const [isSelected, setSelected] = useState(false);

//     return (
//       <button
//         className={classNames("bordered accent", isSelected && "selected")}
//         onClick={() => setSelected(!isSelected)}
//       >
//         Click Me
//       </button>
//     );
//   }
