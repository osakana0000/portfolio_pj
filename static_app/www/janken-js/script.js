// 全戦闘数
let counter = 0;
// 勝ちの数
let winCnt = 0;

// ジェスチャー
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const cpu = document.getElementById("cpu");
const reset = document.getElementById("reset");

// 勝敗数
const count = document.getElementById("count");
// ジェスチャーの表示
const fig = document.getElementById("fig");
// 勝敗のメッセージ
const message = document.getElementById("message");

// 数字とジェスチャーを紐図ける
const handFig = { 1: "グー", 2: "チョキ", 3: "パー" };
// 勝敗の判定
// 負け: 0
// あいこ: 1
// かち： 2

const matchPattern = (player, cpu) => {
  // 勝ちになる場合のリスト
  const patterns = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];

  // あいこの判定
  if (player === cpu) {
    return 1;
  }

  // 勝ちの判定
  for (const pattern of patterns) {
    // patternsに合致する組み合わせがあれば勝ちの判定を下す
    if (player === pattern[0] && cpu === pattern[1]) {
      return 2;
    }
  }

  // どの判定にも通らなければ負けの判定
  return 0;
};

// player: 入力
// who:
const main = (player, who) => {
  // CPUのジェスチャーをランダムに生成(1~3)
  const cpu = Math.floor(Math.random() * 3) + 1;

  // プレーヤーとCPUの勝敗を判定する
  // 負け: 0
  // あいこ: 1
  // かち： 2
  const judge = matchPattern(player, cpu);

  // プレイヤーとCPUのジェスチャーを表示
  fig.innerText = `${who}：${handFig[player]}　CPU：${handFig[cpu]}`;

  // 勝敗に応じて更新
  if (judge === 2) {
    winCnt += 1;
    counter += 1;
    message.innerText = "あなたの勝ち！";
  } else if (judge === 1) {
    message.innerText = "あいこ";
  } else {
    message.innerText = "あなたの負け．．．";
    counter += 1;
  }

  // 勝敗数の表示を更新
  count.innerHTML = `${counter}戦目！　${winCnt}勝${counter - winCnt}敗中！`;
};

// 各ボタンのイベントリスナー
rock.addEventListener("click", () => main(1, "あなた"));
scissors.addEventListener("click", () => main(2, "あなた"));
paper.addEventListener("click", () => main(3, "あなた"));
cpu.addEventListener("click", () => {
  // プレイヤーの代わりとなってジェスチャーをランダムに決める
  const cpuFig = 1 + Math.floor(Math.random() * 3);
  main(cpuFig, "あなた（ランダム）");
});

// 「初期化する」ボタンが押されたとき
reset.addEventListener("click", () => {
  counter = 0;
  winCnt = 0;
  count.innerText = "0戦目！　0勝0敗中！";
  fig.innerText = "ボタンを選んでスタート！";
  message.innerText = "じゃん．．．けん．．．";
});
