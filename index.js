var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
console.log(chalk.bold.yellowBright('Welcome To ISRO Quiz '));
console.log(chalk.bold.yellowBright("------------------------------------"));
var username = readlineSync.question("Please enter your name: ");
console.log("Welcome " + chalk.yellowBright(username));

var quizArr = [
{
  question:'1. Where is the Headquarters of ISRO ?\na) Pune\nb) Bangalore\nc) Mumbai\n',
  answer:'b'
},
{
  question: "2. When was ISRO formed?\na) 15 August 1947\nb) 15 August 1952\nc) 15 August 1969\n",
  answer: "c",
},
{
  question:'3. Who is the Father of the Indian Space Program?\na) Vikram Sarabhai\nb) M. G. K. Menon\nc) A. P. J. Abdul Kalam\n',
  answer:'a',
},
{
  question:"4. When was Chandrayaan-1 launched?\na) 22 October 2018\nb) 22 October 2006\nc) 22 October 2008\n",
  answer:'c',
},
{
  question:"5. Name the First Satellite built by India?\na) Aryabhata\nb) Chandrayaan-1\nc) SPADEX\n",
  answer:"a"

},
];

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.bold(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.green("Correct Answer !"));
    console.log(chalk.bold("Score is " + score));
  }
  else{
    console.log(chalk.red("Oops you missed it"));
    console.log(chalk.bold("Score is " + score));
  }
  console.log("-------------")


}

for(i=0;i<quizArr.length;i++){
  currentQues = quizArr[i].question;
  currentAns = quizArr[i].answer;
  play(currentQues,currentAns);
}

console.log(chalk.blueBright('Yaay!!!! you scored ' + score + ' in ISRO Quiz' ));