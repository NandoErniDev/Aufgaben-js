function aendereFarben() {
    let hintergrundfarbe = document.getElementById('bg-picker').value;
    let schriftfarbe = document.getElementById('font-picker').value;

    document.getElementsByTagName('body')[0].setAttribute(
        'style',
        'background-color:' + hintergrundfarbe + '; color:' + schriftfarbe + ';'
    );
}
