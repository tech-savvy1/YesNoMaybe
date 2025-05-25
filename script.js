function makeDecision() {
    const question = document.getElementById("question").value.trim();
    const optionsInput = document.getElementById("options").value.trim();
    const resultDiv = document.getElementById("result");
    const mode = document.querySelector('input[name="mode"]:checked').value;
  
    if (!question || !optionsInput) {
      resultDiv.innerHTML = "Please enter both a question and some options!";
      return;
    }
  
    const options = optionsInput.split(",").map(opt => opt.trim()).filter(opt => opt !== "");
  
    if (options.length < 2) {
      resultDiv.innerHTML = "Please enter at least two options.";
      return;
    }
  
    const chosen = options[Math.floor(Math.random() * options.length)];
  
    if (mode === "fun") {
      const reactions = [
        `🔥 The universe says: <b>${chosen}</b>!`,
        `🎲 Spin complete! It's <b>${chosen}</b>!`,
        `🌟 Destiny has chosen: <b>${chosen}</b>!`,
        `🎉 Go with <b>${chosen}</b> and own it!`
      ];
      resultDiv.innerHTML = reactions[Math.floor(Math.random() * reactions.length)];
    } else {
      resultDiv.innerHTML = `Your decision is: <b>${chosen}</b>`;
    }
  }
  