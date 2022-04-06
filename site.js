function RefreshWysiwyg(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    document.querySelector('#titreWysiwygResultat').textContent = textTitre;

    let textContent = document.getElementById('contentWysiwyg').value;
    document.querySelector('#contentWysiwygResultat').textContent = textContent;

    let imgSrc= document.getElementById('imgWysiwyg').value;
    document.getElementById('imgWysiwygResultat').src = imgSrc;

    let imageMaxWith = document.getElementById("imgMaxWidthWysiwyg").value;
    //document.getElementById('imgWysiwygResultat').clientWidth = imageMaxWith;
}

var btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefreshWysiwyg);
var mesInputsWithEvents = document.querySelectorAll(".onChangeRefreshWysiwyg");

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener("change", RefreshWysiwyg);
});