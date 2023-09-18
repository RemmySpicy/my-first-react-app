// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {
//                 props.animals.map(animal => {
//                     return <ListItem key={animal} animal={animal} />;
//                 })
//             }
//         </ul>
//     )
// }

// export default function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     )
// }


// function ListItem(props) {
//     return <li>{props.animal}</li>
//   }
  
//   function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return <ListItem key={animal} animal={animal} />;
//         })}
//       </ul>
//     );
//   }
  
//   export default function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard", "Lion"];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }


// Conditional rendering with ternary operator
// function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//         })}
//       </ul>
//     );
//   }
  
//   function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   } 


// Using the && operator
// function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//         })}
//       </ul>
//     );
//   }
  
//   function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }

// Using If conditons
// function List(props) {
//     if (!props.animals) {
//       return <div>Loading...</div>;
//     }
  
//     if (props.animals.length === 0) {
//       return <div>There are no animals in the list!</div>;
//     }
  
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return <li key={animal}>{animal}</li>;
//         })}
//       </ul>
//     );
//   }
  
//   function App() {
//     const animals = [];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }


// Using ternary operator
function List(props) {
    return (
      <>
        {!props.animals ? (
          <div>Loading...</div>
        ) : props.animals.length > 0 ? (
          <ul>
            {props.animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        ) : (
          <div>There are no animals on the list!</div>
        )}
      </>
    );
  }
  
  // or
//   Using && operator
//   function List(props) {
//     return (
//       <>
//         {!props.animals && <div>Loading...</div>}
//         {props.animals && props.animals.length > 0 && (
//           <ul>
//             {props.animals.map((animal) => {
//               return <li key={animal}>{animal}</li>;
//             })}
//           </ul>
//         )}
//         {props.animals && props.animals.length === 0 && <div>There are no animals in the list!!!</div>}
//       </>
//     );
//   }
  
//   function App() {
//     const animals = [];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }


export default App;