const pontos = [
    { id: 1, nome: "Ecoponto Central", tipo: "Eletrônicos e Baterias", end: "Av. Principal, 100", distancia: "1.2 km" },
    { id: 2, nome: "Coleta Verde", tipo: "Óleo e Plástico", end: "Rua das Flores, 500", distancia: "3.5 km" },
    { id: 3, nome: "Recicla Tech", tipo: "Informática", end: "Praça da Matriz, Loja 2", distancia: "500 m" }
];

const container = document.getElementById('app-content');

// Função de Controle de Navegação
function setActiveNav(element) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// 1. Renderização da Tela Inicial (Home)
function renderHome(navElement) {
    if (navElement) setActiveNav(navElement);

    let html = '<h2>Pontos de Coleta Próximos</h2>';
    
    // Gerando os cards dinamicamente
    pontos.forEach(p => {
        html += `
        <div class="card">
            <div class="card-content">
                <h3>${p.nome}</h3>
                <p><strong>Aceita:</strong> ${p.tipo}</p>
                <p>${p.end} (${p.distancia})</p>
            </div>
            <a href="#" class="icon-btn" title="Ver no mapa"><span class="material-icons">place</span></a>
        </div>`;
    });
    container.innerHTML = html;
}

// 2. Renderização da Tela de Mapa (MVP Simples)
function renderMap(navElement) {
    if (navElement) setActiveNav(navElement);

    container.innerHTML = `
        <div style="text-align:center; padding: 2rem; background: white; border-radius: 8px;">
            <span class="material-icons" style="font-size: 4rem; color: #78909C;">map</span>
            <h3>Funcionalidade de Mapa</h3>
            <p>O mapa interativo seria integrado aqui na próxima iteração do projeto.</p>
            <p style="color: #4CAF50;">Status MVP: Exibe placeholder.</p>
        </div>`;
}

// 3. Renderização da Tela Sobre/ODS
function renderAbout(navElement) {
    if (navElement) setActiveNav(navElement);

    container.innerHTML = `
        <div class="card">
            <div class="card-content">
                <h3>Sobre o Projeto EcoPonto</h3>
                <p><strong>ODS:</strong> 12 — Consumo e Produção Responsáveis</p>
                <p><strong>Meta:</strong> 12.5 (Reduzir substancialmente a geração de resíduos).</p>
                <br>
                <p>Este aplicativo é um MVP desenvolvido para facilitar o descarte correto de resíduos especiais, promovendo a sustentabilidade e a economia circular em nossa comunidade.</p>
            </div>
        </div>`;
}

// Inicialização: Carrega a tela Home ao iniciar o app
document.addEventListener('DOMContentLoaded', () => {
    renderHome(document.getElementById('nav-home'));
});