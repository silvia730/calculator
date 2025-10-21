 const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "AC") {
          display.textContent = "";
        } else if (value === "DEL") {
          display.textContent = display.textContent.slice(0, -1);
        } else if (value === "=") {
          try {
            display.textContent = eval(display.textContent);
          } catch {
            display.textContent = "Error";
          }
        } else {
          display.textContent += value;
        }
      });
    });

    // ✅ Keyboard support
    document.addEventListener("keydown", (e) => {
      if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
        display.textContent += e.key;
      } else if (e.key === "Backspace") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (e.key === "Enter") {
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = "Error";
        }
      } else if (e.key === "Escape") {
        display.textContent = "";
      }
    });