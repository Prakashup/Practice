// Questions https://www.algoexpert.io/api/fe/questions
//Submissions https://www.algoexpert.io/api/fe/submissions

// [{
//     "id": "sign-up-form",
//     "name": "Sign-Up Form",
//     "category": "HTML"
//     },
//     {
//         "id": "tik-tok",
//         "name": "tik tok",
//         "category": "css"
//         }
// ]

// <div class="category">
//     <h2>HTML</h2>
//     <div class="questions">
//     <h3>Stop watch</h3>
//     </div>
//     <div class="questions">
//     <h3>Tik Tok</h3>
//     </div>
// </div>   

var question_api_url = "https://www.algoexpert.io/api/fe/questions";
var submission_api_url = "https://www.algoexpert.io/api/fe/submissions";

fetchAndAppendquestions();

async function fetchAndAppendquestions(){
   
   const getQuestions = await fetchQuestions();
   const questionsByCategory = getQuestionsByCategory(getQuestions);
  
   const wrapperDiv = document.getElementById('wrapper');

   for (const [category, questions] of Object.entries(questionsByCategory)) {
    const categoryDiv = createCategory(category, questions);
    wrapperDiv.append(categoryDiv);
   }

}


async function fetchQuestions(){
   const response = await fetch(question_api_url);
   const questions = await response.json();
    return questions;
}


function getQuestionsByCategory(questions){
  const questionsByCategory = {};
  questions.forEach(question => {
    if (questionsByCategory.hasOwnProperty(question.category)){
        questionsByCategory[question.category].push(question);
    } else {
        questionsByCategory[question.category] = [question];
    }
  });
  console.log(questionsByCategory);
   return questionsByCategory;
}

function createCategory(category, questions){
   const categoryDiv = document.createElement('div');
   categoryDiv.classList.add('category');
   const h2 = document.createElement('h2');
   h2.textContent = category;
   categoryDiv.append(h2);

   questions.forEach(question => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    const h3 = document.createElement('h3');
    h3.textContent= question.name;
    questionDiv.append(h3);
    categoryDiv.append(questionDiv);
   })
   return categoryDiv;
}
