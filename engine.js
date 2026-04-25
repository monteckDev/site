// engine.js - O Coração do LearnGG
window.iniciarTransicao = function(destino) {
    // 1. Criar o elemento da transição se ele não existir
    if (!document.getElementById('rpg-transition')) {
        const div = document.createElement('div');
        div.id = 'rpg-transition';
        div.innerHTML = `
            <div class="d20-container" id="d20-box">
                <svg viewBox="0 0 100 100" class="d20-svg">
                    <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="rgba(0, 255, 204, 0.05)" stroke="#00ffcc" stroke-width="2"/>
                    <polygon points="25,35 75,35 50,65" fill="rgba(0, 255, 204, 0.1)" stroke="#00ffcc" stroke-width="2"/>
                    <text x="50" y="52" text-anchor="middle" dominant-baseline="middle" fill="#00ffcc" id="d20-number">1</text>
                </svg>
            </div>
            <div class="roll-text" id="roll-text">TESTE DE INICIATIVA...</div>
        `;
        document.body.appendChild(div);
        
        // Injetar o CSS necessário para o dado aparecer
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
            #rpg-transition { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #000; z-index: 9999; display: flex; flex-direction: column; justify-content: center; align-items: center; }
            .d20-container { width: 300px; height: 300px; }
            .d20-svg { width: 100%; height: 100%; animation: spin 1.5s ease-out forwards; }
            #d20-number { font-family: 'VT323', monospace; font-size: 30px; }
            .roll-text { color: #00ffcc; font-family: 'VT323', monospace; font-size: 2rem; margin-top: 20px; }
            @keyframes spin { 0% { transform: scale(0.1) rotate(-720deg); } 100% { transform: scale(1) rotate(0deg); } }
        `;
        document.head.appendChild(style);
    }

    const num = document.getElementById('d20-number');
    let rolls = 0;
    const interval = setInterval(() => {
        num.textContent = Math.floor(Math.random() * 20) + 1;
        if (rolls++ > 20) {
            clearInterval(interval);
            num.textContent = "20";
            setTimeout(() => { window.location.href = destino; }, 1000);
        }
    }, 50);
};
