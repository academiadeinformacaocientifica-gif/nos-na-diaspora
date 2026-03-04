# AngolaOnline

Portal institucional de notícias de Angola. Cobertura completa de economia, política, sociedade, ambiente, indústria, saúde, tecnologia, cultura e educação. Informação credível e profissional sobre o melhor de Angola, diariamente.

## Tecnologias Utilizadas

- **Frontend**: React com TypeScript
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS
- **Componentes UI**: ShadCN UI
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado**: TanStack Query
- **Ícones**: Lucide React

## Funcionalidades

- Página inicial com notícias em destaque e últimas atualizações
- Navegação por categorias (Economia, Política, Sociedade, etc.)
- Páginas de artigos individuais
- Design responsivo para desktop e mobile
- Suporte a múltiplos idiomas (Português, Inglês, Francês)
- Pesquisa integrada
- Links para redes sociais

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd angolaonline-main
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run build:dev`: Compila em modo desenvolvimento
- `npm run lint`: Executa o linter ESLint
- `npm run preview`: Visualiza a build de produção

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes ShadCN
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/              # Páginas da aplicação
├── data/               # Dados mock
├── hooks/              # Hooks customizados
├── lib/                # Utilitários
└── assets/             # Imagens e recursos
```

## Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

## Contacto

Para questões ou sugestões, entre em contacto através de [contactos@angolaonline.ao](mailto:contactos@angolaonline.ao).
