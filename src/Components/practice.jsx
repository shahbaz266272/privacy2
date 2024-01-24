// import React, {useReducer} from 'react'
// const reducer = (state,action) => {
//     switch(action.type){
//         case 'ADD_ITEM':
//             return {items : [...state.items, action.payload]};
//             case 'EDIT_ITEM':
//                 return {
//                   items: state.items.map(item =>
//                     item.id === action.payload.id ? action.payload : item
//                   ),
//                 };
//               case 'DELETE_ITEM':
//                 return {
//                   items: state.items.filter(item => item.id !== action.payload),
//                 };
//             default: 
//             return state 
//     }
// }
// const PracticeComponents = () => {
//     const initialState = {items: []}
// const [state, dispatch] = useReducer(reducer, initialState)

// const addItem = text => {
// const newItem = {id: Math.random(), text}
// dispatch({ type: 'ADD_ITEM', payload: newItem })
// }
// const editItem = (id, newText) => {
//     const updatedItem = state.items.find(item => item.id === id);
//     if (updatedItem) {
//       updatedItem.text = newText;
//       dispatch({ type: 'EDIT_ITEM', payload: updatedItem });
//     }
//   };

//   const deleteItem = id => {
//     dispatch({ type: 'DELETE_ITEM', payload: id });
//   };
//   return (
//     <div>  <div>
//       <h2>Todo List</h2>
//       <ul>
//         {state.items.map(item => (
//           <li key={item.id}>
//             {item.text}
//             <button onClick={() => editItem(item.id, prompt('Edit item:', item.text))}>Edit</button>
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addItem(prompt('Enter new item:'))}>Add Item</button>
//     </div></div>
//   )
// }

// export default PracticeComponents




// // Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve(randomNumber);
//       } else {
//         reject('Random number too small');
//       }
//     }, 1000);
//   });
  
//   // Consuming the Promise
//   myPromise
//     .then((resolvedValue) => {
//       console.log('Resolved:', resolvedValue);
//     })
//     .catch((errorReason) => {
//       console.log('Rejected:', errorReason);
//     })
//     .finally(() => {
//       console.log('Promise finished');
//     });

    
//     import { useState, useEffect } from 'react';

// function useCounter(initialValue, step) {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => {
//     setCount(count + step);
//   };

//   return { count, increment };
// }

// function App() {
//   const { count, increment } = useCounter(0, 1);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }


// import React from 'react';

// const MyComponent = React.memo(({ value }) => {
//   return <div>{value}</div>;
// });

// export default MyComponent;