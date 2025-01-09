let images = [ "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"];
let questions = [
    { question: "What’s my favorite dessert?", answer: "Guntas" },
    { question: "What’s our favorite song?", answer: "Her's" },
    { question: "Where did we first meet?", answer: "Nesci Party" },
    { question: "What do i love about you?", answer: "Everything"}
];

let currentSlide = 0;
let currentQuestion = 0;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    document.getElementById("slideshow-image").src = images[currentSlide];

    // Update the question to match the current slide
    currentQuestion = currentSlide;
    document.getElementById("question").innerText = questions[currentQuestion].question;
}

function submitAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("feedback").innerText = "Correct! 😊";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Oops! Try again. 😅";
        document.getElementById("feedback").style.color = "red";
    }
}
