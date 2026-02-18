# 📊 Visualizador assintótico

Ferramenta acadêmica interativa para visualização e comparação de complexidades assintóticas de algoritmos.

---

## 🛠️ Tecnologias 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge)
![Recharts](https://img.shields.io/badge/Recharts-FF4F4F?style=for-the-badge)

---

## 🎯 Objetivo

Este projeto foi desenvolvido com fins acadêmicos para auxiliar na compreensão do comportamento assintótico de algoritmos, permitindo a comparação prática entre diferentes classes de complexidade temporal por meio de gráficos dinâmicos.

---

## 📚 Fundamentação Teórica

A análise assintótica descreve o comportamento do tempo de execução de algoritmos conforme o tamanho da entrada cresce. O projeto contempla as seguintes notações:

| Notação       | Descrição         |
|---------------|-------------------|
| `O(1)`        | Constante         |
| `O(log n)`    | Logarítmica       |
| `O(n)`        | Linear            |
| `O(n log n)`  | Linearítmica      |
| `O(n²)`       | Quadrática        |
| `O(2ⁿ)`       | Exponencial       |

As funções matemáticas são implementadas via `complexityMap`, permitindo que cada notação seja representada graficamente.

---

## ✨ Funcionalidades

- Seleção dinâmica de múltiplas complexidades
- Geração automática de dados para `n` de 1 até 20
- Atualização reativa do gráfico
- Comparação simultânea de curvas
- Reset para estado inicial

---

## 🧮 Modelo Matemático

As funções são definidas e aplicadas dinamicamente com base na seleção do usuário:
```ts
const complexityMap = {
  'O(1)':       ()  => 1,
  'O(log n)':   (n) => Math.log2(n),
  'O(n)':       (n) => n,
  'O(n log n)': (n) => n * Math.log2(n),
  'O(n²)':      (n) => n * n,
  'O(2ⁿ)':      (n) => Math.pow(2, n),
};
```

---

## 🚀 Como Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/lucasrodriguescunha/asymptotic-visualizer.git
cd asymptotic-visualizer
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Executar em modo de desenvolvimento
```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 📄 Licença

Este projeto está sob a licença MIT.
