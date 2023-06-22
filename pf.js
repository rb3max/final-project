
let scoree=0

//math section
function calculateScore() {
    var math = parseFloat(document.getElementById("math").value);
    var science = parseFloat(document.getElementById("science").value);
    var physique = parseFloat(document.getElementById("physique").value);
    var arabic = parseFloat(document.getElementById("arabic").value);
    var informatique = parseFloat(document.getElementById("informatique").value);
    var francais = parseFloat(document.getElementById("francais").value);
    var english = parseFloat(document.getElementById("english").value);
    var philo = parseFloat(document.getElementById("philo").value);
    var sport = parseFloat(document.getElementById("sport").value);
    var option = parseFloat(document.getElementById("options").value);

   
        if(option>10){
            var score = ((math * 4 + science * 1 + physique * 4 + arabic * 1 + informatique * 1 + francais * 1 + english * 1 + philo * 1 + sport * 1) + (option-10)) / 15;
        }
        else{
            var score = (math * 4 + science * 1 + physique * 4 + arabic * 1 + informatique * 1 + francais * 1 + english * 1 + philo * 1 + sport * 1)  / 15;
        }
    
       
    
    scoree=score

}

//end math section



//sience section

    function calculateScore1() {
        var math1 = parseFloat(document.getElementById("math1").value);
        var science1 = parseFloat(document.getElementById("science1").value);
        var physique1 = parseFloat(document.getElementById("physique1").value);
        var arabic1 = parseFloat(document.getElementById("arabic1").value);
        var informatique1 = parseFloat(document.getElementById("informatique1").value);
        var francais1 = parseFloat(document.getElementById("français1").value);
        var english1 = parseFloat(document.getElementById("english1").value);
        var philo1 = parseFloat(document.getElementById("philo1").value);
        var sport1 = parseFloat(document.getElementById("sport1").value);
        var option1 = parseFloat(document.getElementById("option1").value);

       
            if(option1>10){
                var score1 = ((math1 * 3 + science1 * 4 + physique1 * 4 + arabic1 * 1 + informatique1 * 1 + francais1 * 1 + english1 * 1 + philo1 * 1 + sport1 * 1) + (option1-10)) / 17;
            }
            else{
                var score1 = (math1 * 3 + science1 * 4 + physique1 * 3 + arabic1 * 1 + informatique1 * 1 + francais1 * 1 + english1 * 1 + philo1 * 1 + sport1 * 1)  / 17;
            }
            
        
            
        
        scoree=score1
    }
//end science section



// technique section 
function calculateScore2() {
    var math2 = parseFloat(document.getElementById("math2").value);
    var technique2 = parseFloat(document.getElementById("technique2").value);
    var physique2 = parseFloat(document.getElementById("physique2").value);
    var arabic2 = parseFloat(document.getElementById("arabic2").value);
    var informatique2 = parseFloat(document.getElementById("informatique2").value);
    var francais2 = parseFloat(document.getElementById("français2").value);
    var english2 = parseFloat(document.getElementById("english2").value);
    var philo2 = parseFloat(document.getElementById("philo2").value);
    var sport2 = parseFloat(document.getElementById("sport2").value);
    var option2 = parseFloat(document.getElementById("option2").value);
    
    
   
    
        if(option2>10){
            var score2 = ((math2 * 3 + technique2 * 4 + physique2 * 3 + arabic2 * 1 + informatique2 * 1 + francais2 * 1 + english2 * 1 + philo2 * 1 + sport2 * 1) + (option2-10)) / 16;
        }
        else{
            var score2 = (math2 * 3 + technique2 * 4 + physique2 * 3 + arabic2 * 1 + informatique2 * 1 + francais2 * 1 + english2 * 1 + philo2 * 1 + sport2 * 1)  / 16;
        }
    
        
    
    scoree=score2
   
}
//end technique section

let modal=document.getElementsByClassName("modal")
    let close_modal=document.getElementsByClassName("close_modal")
    let greeting=document.getElementsByClassName("greeting")
    let open_modal=document.getElementsByClassName("open_modal")
    let final_score=document.getElementsByClassName("final_score")
    let sentence=document.getElementsByClassName("sentence")
    for (let index = 0; index < open_modal.length; index++) {
        open_modal[index].addEventListener("click",function(){
            final_score[0].textContent=scoree.toFixed(2)
            modal[0].style.display="flex"
            if(Number(final_score[0].textContent)>10){
                greeting[0].textContent="congrats"
                greeting[0].style.color="green"
                final_score[0].style.display="block";
                sentence[0].style.display="block";
                greeting[0].style.fontSize = '80px';
            }
            else if(Number(final_score[0].textContent)>=7 && Number(final_score[0].textContent)<10 ){
                greeting[0].textContent="control"
                final_score[0].style.display="block";
                sentence[0].style.display="block";
                greeting[0].style.fontSize = '80px';
                greeting[0].style.color="black"
            }
            else if(Number(final_score[0].textContent)<7){
                greeting[0].textContent="you failed"
                greeting[0].style.color="red"
                final_score[0].style.display="block";
                sentence[0].style.display="block";
                greeting[0].style.fontSize = '80px';
            }
            else if(isNaN(Number(final_score[0].textContent))){
                greeting[0].textContent="Please fill in all the fields"
                greeting[0].style.fontSize = '20px';
                final_score[0].style.display="none";
                sentence[0].style.display="none";

            }

        })
        
    }
    close_modal[0].addEventListener("click",function(){
        modal[0].style.display="none"
    })