function RefreshWysiwyg(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    document.querySelector('#titreWysiwygResultat').textContent = textTitre;

    let colorTitle = document.getElementById("colorTitleWysiwyg").value;
    document.getElementById('titreWysiwygResultat').style.color = colorTitle;

    let sizeTitle = document.getElementById("tailleTitleWysiwyg").value;
    document.getElementById('titreWysiwygResultat').style.fontSize = `${sizeTitle}px`; 

    let textContent = document.getElementById('contentWysiwyg').value;
    document.querySelector('#contentWysiwygResultat').textContent = textContent;

    let imgSrc= document.getElementById('imgWysiwyg').value;
    document.getElementById('imgWysiwygResultat').src = imgSrc;

    let imageMaxWith = document.getElementById("imgMaxWidthWysiwyg").value;
    document.getElementById('imgWysiwygResultat').style.width = ''+imageMaxWith+'px';
}

function OnMouseOver(){
    var tousLabels = document.querySelectorAll("input");
    tousLabels.forEach(monLabel => {
        monLabel.style.padding = '5px';
    });
}

function OnMouseLeave(){
    var tousLabels = document.querySelectorAll("input");
    tousLabels.forEach(monLabel => {
        monLabel.style.padding = 'inherit';
    });
}

var btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefreshWysiwyg);


var mesInputsWithEvents = document.querySelectorAll(".onChangeRefreshWysiwyg");

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener("change", RefreshWysiwyg);

    monInput.addEventListener("mouseover", OnMouseOver)
    monInput.addEventListener("mouseleave", OnMouseLeave)
});

