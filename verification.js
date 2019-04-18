let maj ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice('');
let min ='abcdefghijklmnopqrstuvwxyz'.slice('');
let spec='!*/+.&$€'.slice('');
let chiffres= '0123456789'.slice('');
function verifier () {
    document.getElementById('verif').style.display = "block";
    let position = 0;
    let verif = 0;
    let positionmin = 0;
    let positionspec = 0;
    let positionchiffres = 0;
    for(let i = 0; i<=25; i++){
        
        position = position + document.getElementById('password').value.indexOf(maj[i]);
    }
    for(let i = 0; i<=25; i++){
        
        positionmin = positionmin + document.getElementById('password').value.indexOf(min[i]);
    }
    for(let i = 0; i<=9; i++){
        
        positionspec = positionspec + document.getElementById('password').value.indexOf(spec[i]);
    } 
    for(let i = 0; i<=9; i++){
        
        positionchiffres = positionchiffres + document.getElementById('password').value.indexOf(chiffres[i]);
    }
    let count = document.getElementById('password').value.length;
    if (count < 8){
        document.getElementById('passwordl').innerText = 'Le mot de passe est trop court';
        document.getElementById('rondl').style.background = "red";
    } else if (count >= 8){
        document.getElementById('passwordl').innerText = 'Le mot de passe est assez long';
        verif= verif+1;
        document.getElementById('rondl').style.background = "green";

    }  if (position == -26){
        document.getElementById('passwordmaj').innerText = 'Il n\'y a pas de majuscule';
        document.getElementById('rondmaj').style.background = "red";
    } else if (position !== -26){
        document.getElementById('passwordmaj').innerText = 'Il y a bien une majuscule';
        verif= verif+1;
        document.getElementById('rondmaj').style.background = "green";
    }  if (positionmin == -26) {
        document.getElementById('passwordmin').innerText ='Il n\'y a pas de minuscule';
        document.getElementById('rondmin').style.background = "red";
    } else if (positionmin !== -26) {
        document.getElementById('passwordmin').innerText ='Il y a bien une minuscule';
        verif= verif+1;
        document.getElementById('rondmin').style.background = "green";
    }  if (positionspec == -10){
        document.getElementById('passwordspec').innerText ='Il n\'y a pas de caractères spéciaux';
        document.getElementById('rondspec').style.background = "red";
    }  else if (positionspec !== -10){
        document.getElementById('passwordspec').innerText ='Il y a bien des caractères spéciaux';
        verif= verif+1;
        document.getElementById('rondspec').style.background = "green";
    }if (positionchiffres == -10){
        document.getElementById('passwordchiffres').innerText ='Il n\'y a pas de chiffres';
        document.getElementById('rondchiffres').style.background = "red";
    }  else if (positionchiffres !== -10){
        document.getElementById('passwordchiffres').innerText ='Il y a bien des chiffres';
        verif= verif+1;
        document.getElementById('rondchiffres').style.background = "green";
    } if (verif ==5){
        document.getElementById('go').disabled = false;
        document.getElementById('verif').style.background = "green";
    } else if (verif != 5){
        document.getElementById('go').disabled = true;
        document.getElementById('verif').style.background = "red";
    }
}
