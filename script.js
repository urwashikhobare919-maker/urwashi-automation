const form = document.getElementById("googleForm");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  loader.classList.remove("hidden");

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    projectTitle: document.getElementById("projectTitle").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyIWC8EHDDBAjJ62NkInAIYeGGuH9FzJ5592MwXEV5jJnzCnpeTR-Jl-s43DjF8QfAb/exec", {
  method: "POST",
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(text => {
  console.log(text);
  loader.classList.add("hidden");
  alert("Submitted Successfully ✅");
  form.reset();
})
.catch(err => {
  loader.classList.add("hidden");
  alert("Submission Failed ❌");
  console.error(err);
});


});
