let farbenGetauscht = false;

zeichneSchachbrett();

function zeichneSchachbrett() {
    let result = '';

    for (let zeile = 0; zeile < 8; zeile++) {
        for (let spalte = 0; spalte < 8; spalte++) {
            const istSchwarz = (zeile + spalte) % 2 === 0;
            const klasse = istSchwarz !== farbenGetauscht ? 'black' : 'white';
            result += `<div class="${klasse}"></div>`;
        }
    }

    document.getElementsByTagName('body')[0].innerHTML = result;

    window.setTimeout(() => {
        farbenGetauscht = !farbenGetauscht;
        zeichneSchachbrett();
    }, 500);
}
