// ページが読み込まれたときアラートを出す
window.addEventListener('DOMContentLoaded', () => {
    alert('ページを見てくれてありがとう！');
});

// ボタンを押したらテキストを変える
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'ありがとう！また会いましょう！';
});
