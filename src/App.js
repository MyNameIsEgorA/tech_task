import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {

    return (
        <div className="App container">
            <UsersList />
            <UserProfile/>
        </div>
    );
}

export default App;