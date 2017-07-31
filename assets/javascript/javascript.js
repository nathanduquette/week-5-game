//start timer
var total_seconds = 60*0.5;
var seconds = parseInt(total_seconds%60);

function timer(){
	$("#timer").html("Time left: " +seconds);

	if(total_seconds <=0){
	setTimeout(onSubmit(),1);
	} else {
	total_seconds = total_seconds -1;
	seconds = parseInt(total_seconds%60);
	setTimeout("timer()",1000);
	}}
	setTimeout("timer()",1000);


function onSubmit(){
	// alert("works");

	var score=0;
	var numOfQuestions = 6;
	var ansArr = ["a", "c", "a", "b", "d", "c"];

	var q1 = document.forms["quiz"]["q1"].value;
	var q2 = document.forms["quiz"]["q2"].value;
	var q3 = document.forms["quiz"]["q3"].value;
	var q4 = document.forms["quiz"]["q4"].value;
	var q5 = document.forms["quiz"]["q5"].value;
	var q6 = document.forms["quiz"]["q6"].value;

	for(var i =1; i <= numOfQuestions; i++){
		if(eval("q" + i) == ""){
			alert("quest has failed at " + i);
		}

	for(var i = 1; i <= numOfQuestions; i++){
		if(eval("q" + i) == ansArr[i - 1]){
			score++;
		}
	}

	var results = document.getElementById("correct")
	results.innerHTML="<h2>You answered " + score + " out of " + numOfQuestions + " correctly!</h2>"
	alert("you scored " + score + " out of " +numOfQuestions);
	return false;
	}
}


	







// $(document).ready(function() {
//     var startBtn = $(".startBtn");
//     var resetBtn = $(".resetBtn");
//     var time = 200
    
//     function quizQuest() {

// 		var quizzes = [
// 			{
// 				question:"Which unit indicates the light intensity?",
// 				choices:["Candela","B","C","D"],
// 				answer:"Candela"
// 			},
// 			{
// 				question:"Who is the father of the atomic bomb?",
// 				choices:["Robert Oppenheimer","B","C","D"],
// 				answer:"Robert Oppenheimer"
// 			},
// 			{
// 				question:"Who invented the barometer?", 
// 				choices:["Torricelli","B","C","D"],
// 				answer:"Torricelli"
// 			},
// 			{
// 				question:"Who was the first American in space?",
// 				choices:["Alan Shepard","B","C","D"],
// 				answer:"Alan Shepard"
// 			},
// 			{
// 				question:"Two brothers invented the hot air balloon. What was their surname?", 
// 				choices:["Montgolfier","B","C","D"],
// 				answer:"Montgolfier"
// 			},
// 			{
// 				question:"Who was the inventor of the steam engine?", 
// 				choices:[],
// 				answer:"James Watt"
// 			},
// 			{
// 				question:"What are the three primary colors?", 
// 				choices:[],
// 				answer:"Blue, yellow and red"
// 			},
// 			{
// 				question:"Which device was invented by Henry Mill?", 
// 				choices:[],
// 				answer:"The typewriter"
// 			},
// 			{
// 				question:"What is the lightest existing metal?", 
// 				choices:[],
// 				answer:"Aluminium"
// 			},
// 			{
// 				question:"What is the substance known by the chemical formula NH3?", 
// 				choices:[],
// 				answer:"Ammoniac"
// 			}

// 		];

//  for(var i = 0; i < quizzes.length; i++){
//             var quiz = quizzes[i];
//             console.log('here')
//             console.log(quiz)
//             // this is the format you need jquery to render
//             // <div class="question">
//             //              <h3>{Barnet Fair}</h3>
//             //              <input type="radio" name="q5" value={'a'}>Hair
//             //              <input type="radio" name="q5" value="b">Grizzly Bear
//             //              <input type="radio" name="q5" value="c">Rocking Chair
//             //              <input type="radio" name="q5" value="d">Mare
//             //              <br>
//             // </div>
//             var quizDiv = $("<div class='question'></div>")
//             var question = $("<h3>" + quiz.question + "</h3>")
//             $(quizDiv).append(question);

//             for(var k = 0; k < quiz.choices.length; k++){
//                 var choice = quiz.choices[k];
//                 console.log(choice);
//                 var choiceInput = $("<input type='radio' name=" + i + " value=" + choice + " >");
//                 $(quizDiv).append(choiceInput);
//             }
//             $(quizDiv).append($("<br>"));
//             $(".middle").append(quizDiv);
//         }
//     }




    
//     function endScreen() {
//         $(".start").hide();
//         $(".middle").hide();
//         $(".end").show();
//     };
// //
//     startBtn.click(function() {
//         showQuiz(); 
//         $(".start").hide();
//         $(".middle").show();
//         setInterval(function(){
//             time--;
//             $(".timer").text(time);
//             if(time === 0){
//                 endScreen();
//             }
//         }, 1000);
//     });
//     $("form").submit(function(){
//             endScreen();
//             event.preventDefault();
//     });
//     resetBtn.click(function(){
//         window.location.reload();
//     });
// });












// variables

//  var question = ["Which unit indicates the light intensity?","Who is the father of the atomic bomb?", "Who invented the barometer?", "Who was the first American in space?",
//   "Two brothers invented the hot air balloon. What was their surname?", "Who was the inventor of the steam engine?", "Which device was invented by Henry Mill?", 
//   "What is the lightest existing metal?", "What is the substance known by the chemical formula NH3?", "What are the three primary colors?"];
//   //arrays for each question
// var answers = [["Candela", ], ["Robert Oppenheimer"], ["Torricelli"], ["Alan Shepard"], ["Montgolfier"], ["James Watt"], ["The typewriter"],
// 	["Aluminium"], ["Ammoniac"], ["Blue, yellow and red"];
//  //array of correct answers
// var correctAnswers = ["Candela", "Robert Oppenheimer", "Torricelli", "Alan Shepard", "Montgolfier", "James Watt", "The typewriter",
//   "Aluminium", "Ammoniac", "Blue, yellow and red";
// //questions and answers
// //1 Which unit indicates the light intensity?							Candela
// //2 Who is the father of the atomic bomb?								Robert Oppenheimer
// //3 Who invented the barometer?											Torricelli
// //4 Who was the first American in space?								Alan Shepard
// //5 Two brothers invented the hot air balloon. What was their surname?	Montgolfier
// //6 Who was the inventor of the steam engine?							James Watt
// //7 Which device was invented by Henry Mill?							The typewriter
// //8 What is the lightest existing metal?								Aluminium
// //9 What is the substance known by the chemical formula NH3?			Ammoniac
// //10 What are the three primary colors?									Blue, yellow and red

// window.onload = function(){
// 	//prompt user to play game

// };

// //display question and possible answers
// //$("#question").html()
// function generateHTML() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>"

// 	 + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "

// 	 +answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
// 	$(".mainArea").html(gameHTML);
// }

//start timer
// var total_seconds = 60*0.5;
// var seconds = parseInt(total_seconds%60);

// function timer(){
// $("#timer").html("Time left: " +seconds);

// if(total_seconds <=0){
// setTimeout('document.quiz.submit()',1);
// } else {
// total_seconds = total_seconds -1;
// seconds = parseInt(total_seconds%60);
// setTimeout("timer()",1000);
// }}
// setTimeout("timer()",1000);


//if correct add point to win
//else if wrong or timer runs out add point to fail 
