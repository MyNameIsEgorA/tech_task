export const updateUserInfo = (updatedInfo) => {
    return {
        type: "UPDATE_USER_INFO",
        payload: updatedInfo,
    };
};

export const addUserInfo = (userInfo) => {
    return {
        type: "ADD_USER_INFO",
        payload: userInfo,
    };
};