
# Projeto criado seguindo o curso Next.js From Scratch 2024

Este projeto cria um site de aluguel de imóveis, permitindo cadastrar os imóveis e suas informações.

Cada usuário pode cadastrar imóveis e pode também favoritar imóveis de outros usuários, podendo também enviar mensagens na página do imóveis.



## Aprendizados

Ao construir esse projeto melhorei minhas habilidades no desenvolvimento de um sistema completo, lidando com login usando Google OAuth, realizando o upload de imagens na plataforma Cloudinary e cadastrando as informações no banco de dados MongoDB.

Por mais que o projeto não seja tão grande traz um bom aprendizado ao interligar vários itens, permitindo aprender a lógica e o funcionamento de sistemas diversos.

## Stack utilizada

**Front-end:** React, TailwindCSS

**Back-end:** Node, Next.js

**Banco de dados:** MongoDB


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/brenobele/course-property-pulse.git
```

Entre no diretório do projeto

```bash
  cd course-property-pulse
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Roadmap

- Melhorar o layout
- Adicionar opção para vídeos dos imóveis
- Implementar acesso de administrador
- Permitir bate papo entre usuários (troca de mensagens)
## Funcionalidades

- Login com conta do Google
- Cadastro de imóveis
- Favoritar imóveis
- Enviar mensagens


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGODB_URI` - `NEXT_PUBLIC_DOMAIN` - `GOOGLE_CLIENT_ID` - `GOOGLE_CLIENT_SECRET` - `NEXTAUTH_URL`

`NEXTAUTH_URL_INTERNAL` - `NEXTAUTH_SECRET` - `CLOUDINARY_CLOUD_NAME` - `CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET` - `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY` - `NEXT_PUBLIC_MAPBOX_TOKEN`
## Referência

 - [Next.js From Scratch 2024](https://www.udemy.com/course/nextjs-from-scratch)

