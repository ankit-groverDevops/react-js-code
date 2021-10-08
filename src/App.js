//import Accordion from "./component/Accordion";
import SearchComponent from './component/SearchComponent'
// const items = [{
//     title: "What is react??",
//     content: "React is a javascript front-end library."
// }, {
//     title: "Why use react??",
//     content: "React is a favorite JS library among engineers."
// }, {
//     title: "How do you use react??",
//     content: "You use react by creating components"

// }];
const App= () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <SearchComponent/>
        </div>
    );
};
export default App;