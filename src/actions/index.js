export function selectUser(user) {
    console.log("A User has been selected:", user.login.username);
    return {
        type: 'USER_SELECTED',
        payload: user
    };
}

