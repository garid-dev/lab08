const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const storedTheme = localStorage.getItem("lab8-bootstrap-theme");

function setTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  themeColor.content = theme === "dark" ? "#191513" : "#f7f2ea";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.textContent = theme === "dark" ? "☀️ Цайвар горим" : "🌙 Харанхуй горим";
}

setTheme(storedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeButton.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("lab8-bootstrap-theme", nextTheme);
});

document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");
    if (form.checkValidity()) {
      form.querySelector(".form-status").textContent = "Бүртгэл амжилттай!";
      form.reset();
      form.classList.remove("was-validated");
    }
  });
});
