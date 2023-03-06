function signOut(setLoggedIn) {
    setLoggedIn(false);
    localStorage.removeItem('token');
}

export default signOut;