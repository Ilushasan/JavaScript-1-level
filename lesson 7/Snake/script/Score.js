class Score {
    constructor() {
        this.currentEl = document.querySelector('.current');
        this.toWinEl = document.querySelector('.toWin');
    }
    //Настройки
    init(settings) {
        this.settings = settings;
    }
    //Метод устанавливает кол-во очков для выигрыша.
    setToWin (text) {
        this.toWinEl.textContent = text;
    }
    //Метод устанавливает текущий счет игры
    setCurrent(text) {
        this.currentEl.textContent = text;
    }
}