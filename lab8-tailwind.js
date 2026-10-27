const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const form = document.querySelector("#newsletter-form");
const storedTheme = localStorage.getItem("lab8-tailwind-theme");

function setTheme(theme) {
  root.dataset.theme = theme;
  themeColor.content = theme === "dark" ? "#191513" : "#f7f2ea";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.textContent = theme === "dark" ? "☀️ Цайвар горим" : "🌙 Харанхуй горим";
}

setTheme(storedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("lab8-tailwind-theme", nextTheme);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input")];
  let valid = true;

  fields.forEach((field) => {
    const error = field.parentElement.querySelector(".field-error");
    const fieldValid = field.checkValidity();
    error.classList.toggle("hidden", fieldValid);
    valid = valid && fieldValid;
  });

  if (valid) {
    document.querySelector("#form-status").textContent = "Бүртгэл амжилттай!";
    form.reset();
  }
});
