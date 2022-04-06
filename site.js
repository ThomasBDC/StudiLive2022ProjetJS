var mesInputsWithEvents = document.querySelectorAll(".onChangeRefreshWysiwyg");

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener("change", RefreshWysiwyg);
});