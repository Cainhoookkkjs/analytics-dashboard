# 📊 Analytics Dashboard

![Dashboard Preview](https://img.shields.io/badge/Status-Production-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)

> Dashboard moderno de análise de dados com design glassmorphism e gráficos interativos em tempo real

## ✨ Características

### 🎨 Design Premium
- **Glassmorphism UI** - Interface moderna com efeito de vidro fosco
- **Dark Theme** - Tema escuro profissional com gradientes vibrantes
- **Animações Suaves** - Micro-interações e transições fluidas
- **Totalmente Responsivo** - Adaptado para desktop, tablet e mobile

### 📈 Funcionalidades
- **Dashboard Interativo** - Cards de estatísticas com dados em tempo real
- **Gráficos Avançados** - Visualização de dados com Chart.js
  - Gráfico de linha para receitas mensais
  - Gráfico de rosca para categorias de produtos
  - Mini gráficos (sparklines) nos cards de estatísticas
- **Contadores Animados** - Números que animam ao carregar a página
- **Atividades Recentes** - Feed de atividades em tempo real
- **Top Produtos** - Ranking de produtos mais vendidos com barras de progresso

### 💎 Destaques Técnicos
- Código limpo e bem estruturado
- Sem dependências de frameworks pesados
- Performance otimizada
- Design system consistente
- Acessibilidade considerada

## 🚀 Demo

Acesse a demonstração ao vivo: [Ver Demo](https://cainhookkj.github.io/analytics-dashboard)

## 📸 Screenshots

### Dashboard Principal
![Dashboard](./screenshots/dashboard.png)

### Gráficos Interativos
![Charts](./screenshots/charts.png)

### Responsivo Mobile
![Mobile](./screenshots/mobile.png)

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - CSS Grid & Flexbox
  - Custom Properties (variáveis CSS)
  - Backdrop Filter (glassmorphism)
  - Animações e transições CSS
- **JavaScript ES6+** - Lógica e interatividade
- **Chart.js** - Biblioteca de gráficos

## 📦 Instalação

### Método 1: Clone Direto
```bash
# Clone o repositório
git clone https://github.com/Cainhookkj/analytics-dashboard.git

# Entre na pasta
cd analytics-dashboard

# Abra o index.html no navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Método 2: Download ZIP
1. Clique em "Code" → "Download ZIP"
2. Extraia o arquivo
3. Abra `index.html` no seu navegador

### Método 3: Live Server (Recomendado para desenvolvimento)
```bash
# Instalar Live Server globalmente
npm install -g live-server

# Na pasta do projeto
live-server
```

## 📁 Estrutura do Projeto

```
analytics-dashboard/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
│
└── screenshots/        # Imagens de demonstração
    ├── dashboard.png
    ├── charts.png
    └── mobile.png
```

## 🎯 Como Usar

1. **Navegação**: Use o menu lateral para navegar entre seções
2. **Gráficos**: Passe o mouse sobre os gráficos para ver detalhes
3. **Controles**: Use os botões "Mês/Semana/Dia" para filtrar dados
4. **Responsivo**: Redimensione a janela para ver a adaptação mobile

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* ... outras cores */
}
```

### Modificar Dados dos Gráficos
Edite os arrays de dados no arquivo `script.js`:

```javascript
datasets: [{
    data: [32500, 38200, 42100, ...], // Seus dados aqui
    // ...
}]
```

### Adicionar Novas Estatísticas
Adicione um novo card no `index.html` e estilize com as classes existentes.

## 🌟 Funcionalidades Futuras

- [ ] Integração com API real
- [ ] Exportação de relatórios em PDF
- [ ] Gráficos adicionais (barras, área, scatter)
- [ ] Filtros de data personalizados
- [ ] Sistema de notificações
- [ ] Modo claro/escuro toggle
- [ ] Multi-idioma (i18n)

## 📊 Performance

- ⚡ Tempo de carregamento: < 1s
- 📦 Tamanho total: ~150KB (sem imagens)
- 🎨 60 FPS em animações
- 📱 100% responsivo

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Caio Oliveira**

- GitHub: [@Cainhookkj](https://github.com/Cainhookkj)
- LinkedIn: [Caio Oliveira](https://linkedin.com/in/caio-oliveira)
- Portfolio: [caio-oliveira.dev](https://caio-oliveira.dev)

## 🙏 Agradecimentos

- [Chart.js](https://www.chartjs.org/) pela excelente biblioteca de gráficos
- [Google Fonts](https://fonts.google.com/) pela fonte Inter
- Comunidade open source por inspirações e recursos

---

<div align="center">

**Se este projeto foi útil, deixe uma ⭐!**

Feito com ❤️ por [Caio Oliveira](https://github.com/Cainhookkj)

</div>
