
function recupUser(){

    user: User = new User();
    user.id = localStorage.getItem("id");
    user.mail = localStorage.getItem("mail");
    user.pseudo = localStorage.getItem("pseudo");
    user.mdp = localStorage.getItem("mdp");

    return user;

};