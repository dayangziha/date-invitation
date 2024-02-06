const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no-btn");

function navigateToAnotherPage() {
    
    window.location.href = "invite.html";
}

noBtn.addEventListener("click", () => {
    alert("WRONG ANSWER! Try again (｡•̀ᴗ-)✧");
});
