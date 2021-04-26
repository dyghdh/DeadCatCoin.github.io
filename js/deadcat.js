function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
function copy() {
    copyToClipboard('0xCE22Ba2E7b9BEea82870bD0d4c42f0c7C4448DFc');
    console.log('Copied!');
}

