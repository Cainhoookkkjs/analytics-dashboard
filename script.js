// Animação de contadores
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (element.dataset.stat === 'revenue') {
            element.textContent = 'R$ ' + Math.floor(current).toLocaleString('pt-BR');
        } else if (element.dataset.stat === 'users') {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        } else if (element.dataset.stat === 'orders') {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        } else if (element.dataset.stat === 'conversion') {
            element.textContent = current.toFixed(1) + '%';
        }
    }, 16);
}

// Inicializar contadores ao carregar
window.addEventListener('load', () => {
    const revenueEl = document.querySelector('[data-stat="revenue"]');
    const usersEl = document.querySelector('[data-stat="users"]');
    const ordersEl = document.querySelector('[data-stat="orders"]');
    const conversionEl = document.querySelector('[data-stat="conversion"]');

    animateCounter(revenueEl, 524780);
    animateCounter(usersEl, 8234);
    animateCounter(ordersEl, 1547);
    animateCounter(conversionEl, 3.8);
});

// Configuração do gráfico principal
const mainCtx = document.getElementById('mainChart').getContext('2d');
const mainChart = new Chart(mainCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Receita',
                data: [32500, 38200, 42100, 45800, 49200, 52600, 48900, 55300, 58700, 62100, 59400, 65800],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#667eea',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
                borderWidth: 3
            },
            {
                label: 'Lucro',
                data: [22100, 26800, 29400, 32200, 35100, 37800, 34200, 39600, 42300, 45200, 42800, 48900],
                borderColor: '#00f2fe',
                backgroundColor: 'rgba(0, 242, 254, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#00f2fe',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#a0a0c0',
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 13,
                        weight: '500'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 15, 30, 0.95)',
                titleColor: '#fff',
                bodyColor: '#a0a0c0',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': R$ ' + context.parsed.y.toLocaleString('pt-BR');
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b6b8a',
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    drawBorder: false
                },
                ticks: {
                    color: '#6b6b8a',
                    font: {
                        size: 12
                    },
                    callback: function (value) {
                        return 'R$ ' + (value / 1000) + 'k';
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    }
});

// Configuração do gráfico de categorias (Doughnut)
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Eletrônicos', 'Acessórios', 'Periféricos', 'Audio', 'Outros'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)',
                'rgba(79, 172, 254, 0.8)',
                'rgba(0, 242, 254, 0.8)',
                'rgba(240, 147, 251, 0.8)'
            ],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#a0a0c0',
                    usePointStyle: true,
                    padding: 15,
                    font: {
                        size: 12,
                        weight: '500'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 15, 30, 0.95)',
                titleColor: '#fff',
                bodyColor: '#a0a0c0',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                callbacks: {
                    label: function (context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        cutout: '70%'
    }
});

// Mini gráficos (sparklines) para os cards de estatísticas
function createSparkline(canvasId, data, color) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(data.length).fill(''),
            datasets: [{
                data: data,
                borderColor: color,
                backgroundColor: color.replace('1)', '0.2)'),
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });
}

// Dados para mini gráficos
setTimeout(() => {
    createSparkline('revenueChart', [20, 35, 28, 42, 38, 48, 45, 52], 'rgba(102, 126, 234, 1)');
    createSparkline('usersChart', [12, 18, 15, 22, 25, 28, 32, 35], 'rgba(0, 242, 254, 1)');
    createSparkline('ordersChart', [45, 42, 38, 35, 32, 30, 28, 26], 'rgba(240, 147, 251, 1)');
    createSparkline('conversionChart', [2.5, 2.8, 3.1, 3.4, 3.6, 3.8, 4.0, 4.2], 'rgba(250, 112, 154, 1)');
}, 100);

// Interatividade dos botões de controle do gráfico
document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Aqui você pode adicionar lógica para atualizar os dados do gráfico
        // baseado no período selecionado (Mês, Semana, Dia)
    });
});

// Atualização em tempo real simulada
setInterval(() => {
    // Simular atualização de dados
    const activityList = document.querySelector('.activity-list');
    const firstActivity = activityList.querySelector('.activity-item');

    // Pequeno efeito de pulsar no card de notificações
    const notificationBtn = document.querySelector('.notification-btn');
    notificationBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        notificationBtn.style.transform = 'scale(1)';
    }, 200);
}, 15000);

// Efeito de hover nos cards de produtos
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const progressFill = this.querySelector('.progress-fill');
        const currentWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = currentWidth;
        }, 50);
    });
});

// Navegação do sidebar com feedback visual
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active de todos
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));

        // Adiciona active no clicado
        this.classList.add('active');

        // Pega o texto do menu clicado
        const menuText = this.querySelector('.text').textContent;

        // Atualiza o título do header
        const headerTitle = document.querySelector('.dashboard-header h2');
        const headerSubtitle = document.querySelector('.dashboard-header .subtitle');

        // Títulos personalizados para cada seção
        const titles = {
            'Dashboard': {
                title: 'Dashboard de Análises',
                subtitle: 'Bem-vindo de volta! Aqui está seu resumo de hoje.'
            },
            'Receitas': {
                title: 'Receitas e Faturamento',
                subtitle: 'Acompanhe suas receitas e  desempenho financeiro.'
            },
            'Usuários': {
                title: 'Gerenciamento de Usuários',
                subtitle: 'Visualize e gerencie todos os usuários da plataforma.'
            },
            'Produtos': {
                title: 'Catálogo de Produtos',
                subtitle: 'Gerencie seu inventário e produtos disponíveis.'
            },
            'Configurações': {
                title: 'Configurações do Sistema',
                subtitle: 'Ajuste preferências e configurações da plataforma.'
            }
        };

        // Atualiza com animação
        headerTitle.style.opacity = '0';
        headerSubtitle.style.opacity = '0';

        setTimeout(() => {
            headerTitle.textContent = titles[menuText].title;
            headerSubtitle.textContent = titles[menuText].subtitle;
            headerTitle.style.transition = 'opacity 0.3s ease';
            headerSubtitle.style.transition = 'opacity 0.3s ease';
            headerTitle.style.opacity = '1';
            headerSubtitle.style.opacity = '1';
        }, 150);

        // Mostra notificação toast
        showToast(`📍 Navegando para: ${menuText}`);

        // Efeito de "carregamento" suave
        const mainContent = document.querySelector('.main-content');
        mainContent.style.opacity = '0.7';
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.3s ease';
            mainContent.style.opacity = '1';
        }, 200);
    });
});

// Função para mostrar notificação toast
function showToast(message) {
    // Remove toast anterior se existir
    const oldToast = document.querySelector('.toast-notification');
    if (oldToast) oldToast.remove();

    // Cria novo toast
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        font-size: 0.95rem;
    `;

    document.body.appendChild(toast);

    // Remove após 2 segundos
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Adiciona animações CSS para o toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .chart-card, .activity-item, .product-item').forEach(el => {
    observer.observe(el);
});

// Responsividade do sidebar
const sidebar = document.querySelector('.sidebar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 768) {
        if (scrollTop > lastScrollTop) {
            sidebar.style.transform = 'translateX(-100%)';
        } else {
            sidebar.style.transform = 'translateX(0)';
        }
    }

    lastScrollTop = scrollTop;
});

console.log('🎨 Analytics Dashboard carregado com sucesso!');
console.log('📊 Dashboard desenvolvido por Caio Oliveira');
