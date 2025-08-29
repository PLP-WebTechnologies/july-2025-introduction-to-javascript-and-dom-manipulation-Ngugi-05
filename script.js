
let userName = "Wairimu";
const blogTitle = "Life Unfiltered";
var userAge = 22;



if (userAge < 18) {
    console.log(`${userName}, you are too young to have a blog!`);
} else if (userAge >= 18 && userAge <= 30) {
    console.log(`${userName}, you are in your twenties – perfect time to share your thoughts!`);
} else {
    console.log(`${userName}, wisdom at its finest! Keep writing.`);
}

let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Happy Sunday! New week, new posts.");
        break;
    case 6:
        console.log("It’s Saturday! Perfect time to write a weekend story.");
        break;
    default:
        console.log("It’s a weekday, stay consistent with your blog posts!");
        break;
}





function greetUser(name) {
    return `Welcome back, ${name}!`;
}


function countPosts() {
    let posts = document.querySelectorAll(".card").length;
    return `You currently have ${posts} posts displayed.`;
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
}





for (let i = 1; i <= 3; i++) {
    console.log(`For Loop Example: Post number ${i}`);
}


let counter = 1;
while (counter <= 2) {
    console.log(`While Loop Example: Counter = ${counter}`);
    counter++;
}


let navLinks = document.querySelectorAll("nav a");
for (let link of navLinks) {
    console.log(`For...of Loop Example: Found nav link → ${link.textContent}`);
}


document.querySelector("header h1").textContent = greetUser(userName);


let newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "✨ New Spontaneous Post!";
document.querySelector(".card-container").appendChild(newCard);


document.querySelector("footer p").textContent = "© 2025 Life Unfiltered | Powered by JavaScript";


document.querySelector("nav").style.backgroundColor = "#ffcccc";


let postCountMessage = document.createElement("p");
postCountMessage.textContent = countPosts();
document.querySelector("#stories").appendChild(postCountMessage);
