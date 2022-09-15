#language: pt

## Funcionalidade: Login
    Como usuario do app KnowBre
    Fulano quer completar o login 
    Para que ele tenha acesso as funcionalidades do usuario logado

    ## Contexto:
    Dado que fulano possuí uma conta no sistema

    ## Cenário: Login válido
    E ele acessa a página de login
    E preenche suas credenciais válidas
    Quando ele aciona a opção para logar
    Então ele deve ser redirecionado para a página de usuário logado

    ## Cenário: Login con senha incorreta
    E ele acessa a página de login
    E preenche suas credenciais com senha incorreta
    Quando ele aciona a opção para logar
    Então uma mensagem de senha correta deve ser exibida 

## Funcionalidade: Esqueci minha senha
    Dado que fulano esqueceu sua senha de cadastro
    Quando ele aciona a opção para recuperar senha
    E preenche com seu e-mail válido
    Então uma mensagem de aviso para verificar seu e-mail e resetar a senha deve ser exibida

## Funcionalidade: Cadastro
    Como usuario do app KnowBre
    Fulano quer completar o cadastro 
    Para que ele tenha acesso as funcionalidades de um usuário cadastrado

    ## Contexto:
    Dado que fulano não possuí uma conta no sistema

    ## Cenário: Cadastro válido
    E ele acessa a página de cadastro
    E preenche suas credenciais válidas
    Quando ele aciona a opção para cadastrar
    Então ele deve ser redirecionado para a página de usuário cadastrado

    ## Cenário: Cadastro com credencial incorreta
    E ele acessa a página de cadastro
    E preenche suas credenciais inválidas
    Quando ele aciona a opção para cadastrar
    Então uma mensagem destacando a credencial inválida deve ser exibida



Dado
Quando
Então
E
Mas