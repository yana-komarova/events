export default class App {
    constructor() {
      this.boardSize = 4;
      this.board = [];
      this.goblin = null;
      this.score = 0;
      this.missedCount = 0;
      this.isGameOver = false;
    }
  
    init() {
      this.createBoard();
      this.createGoblin();
      this.startGame();
    }
  
    createBoard() {
      for (let i = 0; i < this.boardSize; i++) {
        this.board[i] = [];
        for (let j = 0; j < this.boardSize; j++) {
          this.board[i][j] = null;
        }
      }
    }
  
    createGoblin() {
      const goblinImage = new Image();
      goblinImage.src = "./goblin.png";
      this.goblin = {
        image: goblinImage,
        x: null,
        y: null
      };
    }
  
    startGame() {
      this.renderBoard();
      this.generateGoblin();
      this.setGameInterval();
    }
  
    renderBoard() {
      // Отрисовка игрового поля
    }
  
    generateGoblin() {
      // Генерация случайной позиции для гоблина
    }
  
    setGameInterval() {
      // Установка интервала для обновления гоблина
    }
  
    handleClick(event) {
      // Обработка клика по игровому полю
    }
  
    updateScore() {
      // Обновление счета
    }
  
    checkGameOver() {
      // Проверка на конец игры
    }
  }