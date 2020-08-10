var questionsArray = [
    {
        question: "Q1_ Which is the largest animal in the world ?",
        answer: "blue whale",
        options: [
            "blue whale",
            "shark",
            "dolphine",
            "none of the above",
        ]
    },
    {
        question: "Q2_ Which is the biggest bird in the world ??",
        answer: "ostrich",
        options: [
            "egale",
            "ostrich",
            "dalmatian pelican",
            "none of the above",
        ]
    },
    {
        question: "Q3_ Which is the tallest animal on the earth ?",
        answer: "giraffe",
        options: [
            "zebra",
            "giraffe",
            "elephant",
            "none of the above",
        ]
    },
    {
        question: "Q4_ Which is the largest fish in the world ?",
        answer: "whale shark",
        options: [
            "blue whale",
            "dolphine",
            "whale shark",
            "none of the above",
        ]
    },
    {
        question: "Q5_ Which is the largest ocean in the world ?",
        answer: "pacific ocean",
        options: [
            "indian ocean",
            "pacific ocean",
            "arabic ocean",
            "none of the above",
        ]
    },
];

function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}


//function to show question:

function showQuestion(e){
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML= questionsArray[e].question;

//function to show options:

    var optionElement = document.getElementsByClassName("optionElement");
    for(var i=0; i < optionElement.length; i++){
    optionElement[i].innerHTML = questionsArray[e].options[i]    
    
    }


}
//funtion to next:

var questioncount =0 ;
var score = 0;

function nextQuestion(){
    checkanswer(questioncount);
   
    questioncount++;
    if(questioncount <= questionsArray.length-1
        ){
            showQuestion(questioncount);
    }
   
   
    removeActiveclass();
    setResult();
    

}
//funtion for active option:

function putActiveclass(e){
    removeActiveclass()
    e.classList.add("active")

}

function removeActiveclass(){
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    
    }
}

function checkanswer(x){
    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML == questionsArray[x].answer){
        score += 10;
        console.log(score)
    }
}   

function setResult(){
    if(questioncount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function showresult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored "+ cs +" out of 50";

}

