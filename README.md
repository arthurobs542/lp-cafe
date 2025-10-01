# ☕ Café Aroma - Landing Page

Uma landing page moderna e responsiva para uma cafeteria, desenvolvida com HTML5, CSS3 e JavaScript vanilla. O projeto apresenta um design elegante com carrossel interativo, menu dinâmico e animações suaves.

## 🚀 Demonstração

Acesse o projeto: [Café Aroma Landing Page](https://seu-dominio.com)

## 📋 Índice

- [Características](#-características)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Paleta de Cores](#-paleta-de-cores)
- [Ícones](#-ícones)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Responsividade](#-responsividade)
- [Performance](#-performance)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e elegante com gradientes e sombras
- 📱 **Totalmente Responsivo**: Adaptável a todos os dispositivos
- 🎭 **Animações Suaves**: Transições e efeitos visuais profissionais
- 🖼️ **Carrossel Interativo**: Slides automáticos com controles manuais
- 🍽️ **Menu Dinâmico**: Filtros por categoria com animações
- 📧 **Formulário de Contato**: Validação e feedback visual
- ⌨️ **Navegação por Teclado**: Suporte completo a acessibilidade
- 👆 **Gestos Touch**: Suporte a gestos em dispositivos móveis
- ⚡ **Performance Otimizada**: Carregamento rápido e lazy loading

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com CSS Grid, Flexbox e animações
- **JavaScript ES6+**: Funcionalidades interativas e dinâmicas
- **Lucide Icons**: Biblioteca de ícones SVG moderna

### Bibliotecas Externas

- **Lucide Icons**: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`

### Recursos CSS

- **CSS Custom Properties (Variáveis)**: Para consistência de cores e espaçamentos
- **CSS Grid**: Layout responsivo para cards do menu
- **Flexbox**: Alinhamento e distribuição de elementos
- **CSS Animations**: Animações keyframes personalizadas
- **Backdrop Filter**: Efeito de blur no header
- **CSS Transitions**: Transições suaves em hover e focus

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores inspirada em tons de café e madeira:

```css
:root {
  --primary-color: #8b4513; /* Marrom escuro (café) */
  --secondary-color: #d2691e; /* Laranja dourado */
  --accent-color: #f4a460; /* Bege claro */
  --text-dark: #2c1810; /* Marrom muito escuro */
  --text-light: #f5f5dc; /* Bege claro para texto */
  --bg-light: #fff8dc; /* Fundo bege claro */
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}
```

### Significado das Cores

- **Primary (#8b4513)**: Cor principal do café torrado
- **Secondary (#d2691e)**: Cor de destaque para CTAs e elementos importantes
- **Accent (#f4a460)**: Cor de apoio para hover e estados ativos
- **Text Dark (#2c1810)**: Texto principal com boa legibilidade
- **Text Light (#f5f5dc)**: Texto sobre fundos escuros
- **Background Light (#fff8dc)**: Fundo suave para seções alternadas

## 🎯 Ícones

O projeto utiliza ícones da biblioteca **Lucide Icons**:

### Ícones de Navegação

- `menu` - Menu hambúrguer mobile
- `chevron-left` / `chevron-right` - Controles do carrossel
- `chevron-up` - Botão voltar ao topo

### Ícones de Menu

- `coffee` - Bebidas de café
- `croissant` - Doces e pães
- `cookie` - Doces e sobremesas
- `sandwich` - Lanches e refeições

### Ícones de Contato

- `map-pin` - Endereço
- `phone` - Telefone
- `mail` - Email
- `clock` - Horário de funcionamento

### Ícones de Funcionalidades

- `award` - Prêmios e qualidade
- `heart` - Feito com amor
- `send` - Enviar mensagem
- `check` - Confirmação de envio
- `loader-2` - Loading state

### Ícones Sociais

- `instagram` - Instagram
- `facebook` - Facebook
- `twitter` - Twitter

## 📁 Estrutura do Projeto

```
landing-page-cafe/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Funcionalidades JavaScript
├── README.md               # Documentação do projeto
└── assets/
    └── img/                # Imagens do projeto
        ├── logo.jpg        # Logo da cafeteria
        ├── close-up-barista-making-cappuccino-bartender-preparing-coffee-drink.jpg
        ├── interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg
        ├── freshly-baked-pastry-with-cup-coffee-wooden-table.jpg
        ├── person-serving-cup-coffee.jpg
        ├── coffee-glass-cabinet-with-baked-food.jpg
        ├── pexels-*.jpg    # Imagens do Pexels
        └── ...             # Outras imagens
```

### Descrição dos Arquivos

- **`index.html`**: Estrutura HTML semântica com seções bem definidas
- **`styles.css`**: Estilos CSS organizados com variáveis e responsividade
- **`script.js`**: JavaScript modular com funcionalidades interativas
- **`assets/img/`**: Pasta com todas as imagens otimizadas

## 🚀 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação Local

1. **Clone ou baixe o projeto**

   ```bash
   git clone https://github.com/seu-usuario/landing-page-cafe.git
   cd landing-page-cafe
   ```

2. **Abra o projeto**

   - Opção 1: Abra o arquivo `index.html` diretamente no navegador
   - Opção 2: Use um servidor local (recomendado)

3. **Servidor Local (Recomendado)**

   ```bash
   # Usando Python
   python -m http.server 8000

   # Usando Node.js (http-server)
   npx http-server

   # Usando PHP
   php -S localhost:8000
   ```

4. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

## 💻 Uso

### Navegação

- **Desktop**: Use o menu superior para navegar entre seções
- **Mobile**: Toque no ícone de menu para abrir a navegação
- **Teclado**: Use as setas ← → para navegar no carrossel, ESC para fechar menu

### Carrossel Hero

- **Automático**: Slides mudam a cada 5 segundos
- **Manual**: Use os botões ← → ou indicadores na parte inferior
- **Touch**: Deslize para esquerda/direita em dispositivos móveis
- **Teclado**: Use as setas do teclado para navegar

### Menu

- **Filtros**: Clique nos botões de categoria (Bebidas, Doces, Lanches)
- **Hover**: Passe o mouse sobre os itens para ver animações
- **Responsivo**: Layout se adapta automaticamente ao tamanho da tela

### Formulário de Contato

- **Validação**: Campos obrigatórios são validados automaticamente
- **Feedback**: Visual feedback durante o envio
- **Reset**: Formulário é limpo após envio simulado

## ⚙️ Funcionalidades

### 🎠 Carrossel Hero

- Slides automáticos com intervalo de 5 segundos
- Controles manuais (botões e indicadores)
- Pausa no hover
- Navegação por teclado e touch
- Efeito parallax sutil

### 🍽️ Menu Dinâmico

- Filtros por categoria
- Animações de entrada escalonadas
- Layout responsivo em grid
- Hover effects com zoom nas imagens

### 📱 Menu Mobile

- Menu hambúrguer responsivo
- Overlay com animação suave
- Fechamento automático ao clicar fora
- Navegação suave entre seções

### 📧 Formulário de Contato

- Validação em tempo real
- Estados de loading e sucesso
- Reset automático após envio
- Feedback visual com ícones

### ⬆️ Botão Voltar ao Topo

- Aparece após scroll de 300px
- Animação suave de entrada/saída
- Scroll suave para o topo

### 🎭 Animações

- Intersection Observer para animações no scroll
- Lazy loading de imagens
- Transições suaves em todos os elementos
- Efeitos de hover personalizados

## 📱 Responsividade

### Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

### Adaptações Mobile

- Menu hambúrguer
- Carrossel com controles menores
- Grid de menu em coluna única
- Formulário otimizado para touch
- Botão voltar ao topo menor

### Otimizações Touch

- Área de toque adequada (min 44px)
- Gestos de swipe no carrossel
- Feedback visual em interações
- Scroll suave otimizado

## ⚡ Performance

### Otimizações Implementadas

- **Lazy Loading**: Imagens carregam conforme necessário
- **Debounced Scroll**: Scroll otimizado com debounce
- **CSS Variables**: Reutilização de valores
- **Minified Assets**: Código otimizado
- **Intersection Observer**: Animações eficientes

### Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🎨 Personalização

### Cores

Para alterar as cores do projeto, modifique as variáveis CSS em `styles.css`:

```css
:root {
  --primary-color: #sua-cor-primaria;
  --secondary-color: #sua-cor-secundaria;
  --accent-color: #sua-cor-destaque;
  /* ... outras variáveis */
}
```

### Conteúdo

- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua as imagens na pasta `assets/img/`
- **Menu**: Adicione/remova itens no HTML e JavaScript
- **Contato**: Atualize informações de contato

### Funcionalidades

- **Carrossel**: Modifique o intervalo em `script.js` (linha 47)
- **Animações**: Ajuste durações nas variáveis CSS
- **Breakpoints**: Modifique os media queries conforme necessário

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Teste em diferentes navegadores e dispositivos
- Siga as convenções de nomenclatura existentes
- Adicione comentários para funcionalidades complexas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:

- 📧 Email: contato@cafearoma.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/landing-page-cafe/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/seu-usuario/landing-page-cafe/discussions)

## 🙏 Agradecimentos

- **Pexels** pelas imagens de alta qualidade
- **Lucide** pelos ícones modernos
- **Comunidade CSS** pelas técnicas de layout
- **MDN** pela documentação completa

---

**Desenvolvido com ☕ e ❤️ para a comunidade de desenvolvedores**

_Última atualização: Dezembro 2024_
