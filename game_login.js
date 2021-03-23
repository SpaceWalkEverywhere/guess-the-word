function addusers() {
    player1=document.getElementById("player_1").value;
    player2=document.getElementById("player_2").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location.replace("game_page.html");
}
function setnames() {
    name1=localStorage.getItem("player1");
    name2=localStorage.getItem("player2");
    document.getElementById("player_1").value=name1;
    document.getElementById("player_2").value=name2;
    console.log(name1);
    console.log(name2);
}
function adduserswsm() {
    player1=name1;
    player2=name2;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location.replace("game_page.html");
}
