function printResult1(noun, adj, name)
{
   // e.preventDefault();
    // console.log("HELLO");
    
    // var noun=document.getElementById("noun1");
    // var adj=documnet.getElementById("adj1");
    // var name=document.getElementById("name1");
    var story1="Othello is a "+noun+" .He can be a little "+adj+" .Desdemona made out with "+name+" in a piblic park.";
    document.getElementById("first-game").innerHTML=story1;
}

// function printResult1()
// {
//     var noun=document.getElementById("noun2").value;
//     var adj=documnet.getElementById("adj2").value;
//     var name=document.getElementById("name2").value;
//     var story1="Othello is a "+noun+" .He can be a little "+adj+" .Desdemona made out with "+name+" in a piblic park.";
//     document.getElementById("second-game").style.display="none";
//     document.getElementById("result1").style.display="inline-block";
//     document.getElementById("result1").innerHTML=story1;

// }

function printResult2(noun,adj,name){
    var story2="Iron man loves "+name+". captain marvel is a waste of time. There was no need for tony stark to die. you can be "+adj+". peter parker has a crush on: "+name;
    document.getElementById("sec-game").innerHTML=story2;
}

function printResult3(noun,adj,name){
    var story3="Joker is a good dancer. Harley Quinn farts a lot. Flash met a "+noun+" and he start kicking it. Batman loves "+name+" Superman should stop being "+adj+".";
    document.getElementById("third-game").innerHTML=story3;
}