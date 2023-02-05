const matchPattern = (player, cpu) => {
  const patterns = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
  if (player === cpu) {
    return 1;
  }

  for (const pattern of patterns) {
    if (player === pattern[0] && cpu === pattern[1]) {
      return 2;
    }
  }
  return 0;
};

window.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  let winCnt = 0;
  const rock = document.getElementById("rock");
  const scissors = document.getElementById("scissors");
  const paper = document.getElementById("paper");
  const cpu = document.getElementById("cpu");
  // const reset = document.getElementById("reset");

  const main = (player, who) => {
    const counterMsg = document.getElementById("counterMsg");
    const message = document.getElementById("message");
    const handFig = {1: "グー", 2: "チョキ", 3: "パー"};
    const cpu = 1 + Math.floor(Math.random() * 3);
    const judge = matchPattern(player, cpu);
    counterMsg.innerHTML = `${counter}戦目！　${winCnt}勝${counter - winCnt}敗中！`;

    let judgeMsg = `<p>${who}：${handFig[player]}　CPU：${handFig[cpu]}</p>`;

    if (judge === 2) {
      winCnt += 1;
      counter += 1;
      judgeMsg += "<p>あなたの勝ち！</p>";
    } else if (judge === 1) {
      judgeMsg += "<p>あいこ</p>";
    } else {
      judgeMsg += "<p>あなたの負け．．．</p>";
      counter += 1;
    }
    message.innerHTML = judgeMsg;
  };

  rock.addEventListener("click", () => main(1, "あなた"));
  scissors.addEventListener("click", () => main(2, "あなた"));
  paper.addEventListener("click", () => main(3, "あなた"));

  cpu.addEventListener("click", () => {
    const cpu = 1 + Math.floor(Math.random() * 3);
    main(cpu, "あなた");
  });
});
