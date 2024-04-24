// UsersList.js
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import "./UsersList.css";
import { useEffect, useRef, useState } from "react";
import {addUserInfo} from "../stores/UserStore/actions";

const UsersList = () => {
    const usersData = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const listRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [fullHeight, setFullHeight] = useState(0);

    const handleScroll = () => {
        const { scrollTop, offsetHeight, scrollHeight } = listRef.current;
        setScrollPosition(scrollTop + offsetHeight);
        setFullHeight(scrollHeight);

        if (scrollPosition >= fullHeight - 300) {
            dispatch({ type: "ADD_USERS" });
        }
    };

    useEffect(() => {
        const currentRef = listRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            currentRef.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const handleUserClick = (userInfo) => {
        dispatch(addUserInfo(userInfo));
    };

    return (
        <div className="users-list" ref={listRef}>
            {usersData.map((user, index) => (
                <User key={index} name={user.name} onClick={() => handleUserClick(user)} />
            ))}
        </div>
    );
};

export default UsersList;