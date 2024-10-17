# Dev FullCycle - Desafio 02: Executar uma aplicação node com nginx como proxy reverso

## 🚀 Descrição:
Levantar um servidor com nginx como proxy reverso que ao ser acessado será redirecionado para uma aplicação node. O retorno da aplicação node.js para o nginx deverá ser:
```
  <h1>Full Cyle Rocks!</h1>
  [Lista de usuários cadastrados no banco]
```

## 🖥️ Como executar:
Com o docker instalado, basta executar no terminal linux ou bash (GIT):
```
  git clone https://github.com/leorms11/FullCycle-Desafio02-node-nginx.git && \
  cd FullCycle-Desafio02-node-nginx && \
  docker-compose up -d
```
Obs: Quando a aplicação node é inicializada, a base é limpa e populada com 10 novos nomes.

Acessar http://localhost:8080/
Retorno esperado:

![image](https://github.com/user-attachments/assets/a3fdcd3f-d2ab-4795-8f44-11dcee09e939)

