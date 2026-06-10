# 🛍️ Euphoria Store — E-commerce de Moda Contemporânea

Uma plataforma moderna de e-commerce de moda com foco em design minimalista, alta performance e experiência do usuário otimizada. A aplicação exibe coleções sazonais, categorias segmentadas e gerencia um carrinho de compras totalmente interativo.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end:

- **React 18** — Biblioteca declarativa para construção de interfaces.
- **Vite** — Build tool ultra-rápido para desenvolvimento moderno.
- **Redux & Redux Toolkit** — Gerenciamento de estado global previsível para o carrinho.
- **React Router Dom v6** — Navegação de páginasSPA fluida e otimizada.
- **Pexels API** — Integração com serviço de fotos profissionais para exibição dinâmica de produtos e coleções reais.
- **CSS Vanilla (Módulos & Globais)** — Estilização personalizada com excelente performance visual.

---

## ✨ Principais Funcionalidades

- **Exibição Dinâmica via API**: Produtos reais carregados em tempo real através da API do Pexels usando IDs de coleções temáticas (Estilo Masculino, Feminino, Verão e Inverno).
- **Cálculo de Preço Realista**: Os valores dos itens são calculados dinamicamente baseados nas propriedades das imagens originais obtidas da API.
- **Carrinho de Compras Completo (Redux)**:
  - Adição rápida de itens direto na página de detalhes.
  - Controle interativo de quantidades (aumentar/diminuir) diretamente no carrinho.
  - Remoção de itens.
  - Atualização do valor total da compra em tempo real.
- **Navegação Modularizada**: Divisão de categorias de fácil acesso: Masculino, Feminino, Coleção de Verão, Coleção de Inverno e Loja Completa.
- **Responsividade & Micro-Interações**: Efeitos de hover atraentes, transições de slides e carregamento dinâmico com feedbacks visuais (loaders personalizados).

---

## 📂 Estrutura de Pastas do Projeto

```text
Loja-Online-main/
├── public/                 # Ícone da aplicação e assets públicos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis (Navbar, Footer, Botões, Ícones, etc.)
│   ├── pages/              # Páginas da aplicação (Shop, Products, ProductItem, CartProducts)
│   ├── redux/              # Configuração do Redux, fatias (slices), ações e seletores do carrinho
│   ├── static/             # Imagens e gifs locais utilizados na interface
│   ├── App.jsx             # Componente de roteamento principal (Outlet)
│   ├── index.css           # Estilos globais e variáveis de design
│   └── index.jsx           # Ponto de entrada da aplicação React
├── index.html              # HTML base configurado para o Vite
├── package.json            # Script de inicialização e dependências
└── vite.config.js          # Configurações do Vite e React Plugin
```

---

## 🛠️ Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação em seu ambiente local:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 2. Instalar Dependências
No terminal, dentro da pasta raiz do projeto, instale os pacotes necessários:
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
Inicie o servidor local:

- **No CMD / Linux / macOS**:
  ```bash
  npm run dev
  ```
- **No Windows PowerShell** *(caso sua política de script esteja bloqueada)*:
  ```powershell
  npm.cmd run dev
  ```

O terminal indicará o endereço para acesso, geralmente `http://localhost:5173/` (ou `http://localhost:5174/` se a porta anterior estiver em uso).

---

## 📦 Como Realizar o Build de Produção

Para gerar uma versão otimizada da aplicação pronta para hospedagem:

```bash
npm run build
```
Os arquivos gerados serão salvos na pasta `/dist`, prontos para serem servidos por qualquer provedor de hospedagem estática.
