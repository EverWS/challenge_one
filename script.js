document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText);
    updateOutput(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    updateOutput(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    navigator.clipboard.writeText(outputText.textContent).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
});

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function updateOutput(result) {
    document.getElementById('placeholder-img').classList.add('hidden');
    const outputText = document.getElementById('output-text');
    outputText.textContent = result;
    outputText.classList.remove('hidden');
}
