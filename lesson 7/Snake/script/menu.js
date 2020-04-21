class Menu {
    constructor() {
        this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
    }

    addButtonsClickListeners(startBtnElHandler, pauseBtnElHandler) {
        this.startBtnEl.addEventListener('click', startBtnElHandler);
        this.pauseBtnEl.addEventListener('click', pauseBtnElHandler);
    }
}