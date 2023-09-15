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
function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
  
  function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }

  export default App;