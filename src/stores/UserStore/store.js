// store.js
import { createStore } from 'redux';

const updateUsersList = (length, arr) => {
    for (let i = length + 1; i < length + 10; i++) {
        arr.push({
            id: i,
            name: `User number ${i}`,
            department: `User department ${i}`,
            company: `User company ${i}`,
        });
    }

    return [...arr];
};

const createInitialState = () => {
    let arr = []
    for (let i = 1; i <= 50; i++) {
        arr.push({
            id: i,
            name: `User number ${i}`,
            department: `User department ${i}`,
            company: `User company ${i}`,
        });
    }
    return { usersData: arr, userInfo: {name: '', department: '', company: ''}};
};

const counterReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {
                ...state,
                usersData: updateUsersList(state.usersData.length, state.usersData),
            };
        case "ADD_USER_INFO":
            return {
                ...state,
                userInfo: action.payload,
            };
        case "UPDATE_USER_INFO":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            ...action.payload
                        };
                    }
                    return user;
                })
            };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;