export default ($rootScope, AuthService) => {
    AuthService
        .checkLogin();
};