import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../stores/UserStore/actions"; // Импорт экшена
import "./UserProfile.css";
import {useEffect, useState} from "react";

const UserProfile = () => {
    const user = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const [localUserInfo, setLocalUserInfo] = useState(user);

    useEffect(() => {
        setLocalUserInfo(user)
    }, [user]);

    const changeUserInfo = (e, name) => {
        setLocalUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: e.target.value
        }));
    };

    const saveUserInfo = () => {
        dispatch(updateUserInfo(localUserInfo));
    };

    const isUserInfoEmpty = Object.values(localUserInfo).every(value => value === '');
    if (isUserInfoEmpty) {
        return null;
    }


    return (
        <div className={"user-profile"}>
            <div className={"flex"}>
                <div className={"field"}>Имя:</div>
                <input value={localUserInfo.name} onChange={(e) => changeUserInfo(e, "name")} />
            </div>
            <div className={"flex"}>
                <div className={"field"}>Отдел:</div>
                <input value={localUserInfo.department} onChange={(e) => changeUserInfo(e, "department")} />
            </div>
            <div className={"flex"}>
                <div className={"field"}>Компания:</div>
                <input value={localUserInfo.company} onChange={(e) => changeUserInfo(e, "company")} />
            </div>
            <button onClick={saveUserInfo}>Сохранить</button>
        </div>
    );
};

export default UserProfile;