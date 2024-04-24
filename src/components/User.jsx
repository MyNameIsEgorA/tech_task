import "./User.css"

const User = ({ name, onClick }) => {
    return (
        <div className="user-item" onClick={onClick}>
            {name}
        </div>
    );
};

export default User;