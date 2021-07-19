# slide-templates
Projeto de slide-show com o propósito de utilizar diferentes templates através de dados vindos de uma api

![Capturar](https://user-images.githubusercontent.com/28053853/126196133-ce959955-ae0b-4a96-8bcb-c40ae144df19.PNG)

## Para rodar o projeto
- npm i
- npm start

### Iniciar um servidor no arquivo slides.json
No meu modelo, eu utilizei o **json server**
- npm i -g json-server

No terminal entrar na pasta api e rodar:
- json-server --watch slides.json 

## Escolher o template
Abrir o arquivo index.js dentro de src e passar a string **'template01'** ou **'template02'** ou **'template03'** ou **'template04'** na função **renderSlides**

**Importante:** Ter em uma versão atualizada do Node para que tudo funcione

Se tudo rodar corretamente, o projeto abrirá no navegador em uma url local
