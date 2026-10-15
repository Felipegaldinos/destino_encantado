# Destino Encantado

Site de agência de viagens organizado em páginas de destinos, acomodações, experiências e contato. Demonstra navegação de uma aplicação React com conteúdo turístico e componentes compartilhados.

## Funcionalidades

- Oito rotas: início, sobre, destinos, acomodações, experiências, depoimentos, contato e blog.
- Cabeçalho e rodapé compartilhados entre as páginas.
- Títulos e descrições de página com React Helmet.
- Animações com Framer Motion e estilos com Tailwind CSS.

## Tecnologias

React 18, Vite 4, React Router 6, Tailwind CSS, React Helmet e Framer Motion.

## Como executar

Requisitos: Node.js e npm compatíveis com as versões de Vite e dos plugins declaradas em `package.json`.

```sh
git clone https://github.com/Felipegaldinos/destino_encantado.git
cd destino_encantado
npm install
```

```sh
npm run dev
```

Abra o endereço exibido no terminal.

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gerar a versão de produção |
| `npm run preview` | Visualizar o build localmente |

Na hospedagem, configure o fallback das rotas da aplicação para `index.html`, permitindo acesso direto às páginas internas.

## Organização do código

- `src/App.jsx` — definição das oito rotas.
- `src/pages/` — conteúdo de cada página.
- `src/components/Header.jsx e Footer.jsx` — navegação e elementos compartilhados.
- `src/pages/Contact.jsx` — formulário e retorno visual de contato.

## Roteiro de demonstração

Navegue pelas oito rotas e recarregue uma página interna. No formulário de contato, use dados fictícios e observe que a confirmação é apenas visual.

## Limitações atuais

O formulário de contato apenas exibe uma notificação e limpa os campos; não envia a mensagem para um servidor. O botão de WhatsApp em Contact.jsx também exibe uma notificação, sem abrir conversa. Não há reserva ou pagamento implementado nessa página. Informações de contato incluem exemplos e devem ser revisadas antes de uso real.

## Competências demonstradas

Arquitetura de páginas, roteamento e composição de componentes em um site de serviços.

## Autoria

Projeto disponível no perfil de [Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para verificar os termos de licença aplicáveis.
