// 引入样式
import './style/index.less'

// import Food from './modules/Food'


// const food =  new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

// import ScorePanel from './modules/ScorePanel'
// const scorepanel = new ScorePanel(10, 10)
// setInterval(() => {
//     scorepanel.addScore()
//     console.log(scorepanel.score,scorepanel.level)
// }, 30)
import gameControl from './modules/GameControl'
const GameControl =new gameControl()