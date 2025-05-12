document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eightBallForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("nameInput").value.trim();
    const userQuestion = document.getElementById("questionInput").value.trim();

    if (!userQuestion) {
      output.textContent = "❌ Please enter a question.";
      return;
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy, try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
    }

    const displayName = userName || 'You';
    output.innerHTML = `<strong>${displayName} asked:</strong> "${userQuestion}"<br><strong>🎱 The 8-Ball says:</strong> ${eightBall}`;
  });
});
