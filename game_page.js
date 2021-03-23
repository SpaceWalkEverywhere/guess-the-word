name1=localStorage.getItem("player1");
name2=localStorage.getItem("player2");
sc1=0;
sc2=0;
chance=3;
qturn="player1";
aturn="player2";
document.getElementById("player1name").innerHTML=name1+" :";
document.getElementById("player2name").innerHTML=name2+" :";
document.getElementById("p1score").innerHTML=sc1;
document.getElementById("p2score").innerHTML=sc2;
document.getElementById("playerq").innerHTML="Question turn - "+name1;
document.getElementById("playera").innerHTML="Answer turn - "+name2;
function send(){
    
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);
    if (word.length>=5){
    charat1=word.charAt(1);
    mletter=Math.floor(word.length/2);
    charat2=word.charAt(mletter);
    console.log(charat2);
    lletter=word.length-1;
    charat3=word.charAt(lletter);

    removecat1=word.replace(charat1,"_");
    removecat2=removecat1.replace(charat2,"_");
    removecat3=removecat2.replace(charat3,"_");
    console.log(removecat3);
    qword="<h4 id='worddisplay'>Q."+removecat3+"</h4>";
    ibox="<br><hr><br><input type='text' id='ans'>";
    cbutton="<br><br><button class='btn btn-success' onclick='check();'>check</button>";
    row=qword+ibox+cbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    document.getElementById("word").placeholder="Type to send a question!";
    document.getElementById("word").style.display="none";
    }
    else {
        document.getElementById("word").value="";
        document.getElementById("word").placeholder="Word must be atleast of 5 letters!!!";
    }

}
function check(){

    answer=document.getElementById("ans").value;
    answer=answer.toLowerCase();
    if (answer===word){

    if (aturn==="player1"){
        sc1++;
        document.getElementById("p1score").innerHTML=sc1;
    }
    else {
        sc2++;
        document.getElementById("p2score").innerHTML=sc2;
    }
    if (qturn==="player1"){
        qturn="player2";
        document.getElementById("playerq").innerHTML="Question - "+name2;
    }
    else {
        qturn="player1";
        document.getElementById("playerq").innerHTML="Question - "+name1;
    }
    if (aturn==="player1"){
        aturn="player2";
        document.getElementById("playera").innerHTML="Answer - "+name2;
    }
    else {
        aturn="player1";
        document.getElementById("playera").innerHTML="Answer - "+name1;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("word").style.display="block";
    }
    else {
        chance--;
        document.getElementById("ans").value="";
        document.getElementById("ans").placeholder="Oops! Try again!!!"
        if (chance==0) {
            if (qturn==="player1"){
                qturn="player2";
                document.getElementById("playerq").innerHTML="Question - "+name2;
            }
            else {
                qturn="player1";
                document.getElementById("playerq").innerHTML="Question - "+name1;
            }
            if (aturn==="player1"){
                aturn="player2";
                document.getElementById("playera").innerHTML="Answer - "+name2;
            }
            else {
                aturn="player1";
                document.getElementById("playera").innerHTML="Answer - "+name1;
            }
            document.getElementById("output").innerHTML="";
            document.getElementById("word").style.display="block"; 
            if (aturn==="player1"){
                sc1--;
                sc2++;
                document.getElementById("p1score").innerHTML=sc1;
                document.getElementById("p2score").innerHTML=sc2;
            }
            else {
                sc2--;
                sc1++;
                document.getElementById("p2score").innerHTML=sc2;
                document.getElementById("p1score").innerHTML=sc1;
            }
        }
    }
}
