#language: pt

# Funcionalidade: Login
>Como usuario do app KnowBre
>
>Fulano quer completar o login 
>
>Para que ele tenha acesso as funcionalidades do usuario logado
>   
## Contexto:
>Dado que fulano possuí uma conta no sistema
>
## Cenário: Login válido
>E ele acessa a página de login
>
>E preenche suas credenciais válidas
>
>Quando ele aciona a opção para logar
>
>Então ele deve ser redirecionado para a página principal de usuário logado (Home)
>
## Cenário: Login con dados incorretos
>E ele acessa a página de login
>
>E preenche suas credenciais inválidas
>
>Quando ele aciona a opção para logar
>
>Então uma mensagem de usuário e/ou senha incorreta deve ser exibida 
>

# Funcionalidade: Esqueci minha senha
>Dado que fulano esqueceu sua senha de cadastro
>
>Quando ele aciona a opção para recuperar senha
>
>E preenche com seu e-mail cadastrado
>
>Então uma mensagem de aviso para verificar seu e-mail e resetar a senha deve ser exibida
>
# Contexto
>Dado que Fulano esqueceu sua senha
>
>E deseja recuperar sua conta
>
>Quando o usuário aciona a função "Esqueci minha senha"
>
## Cenário: Fulano preenche com um email anteriormente cadastrado
>E Fulano preenche o formulário com um email cadastrado
>
>Então uma mensagem de aviso pede para Fulano checar seu emaiil
>
>Então uma mensagem é enviada pelo emaail preenchido para ele recuperar sua senha
>
## Cenário: Fulano preenche com um email nã cadastrado
>E Fulano preenche o formulário com um email não cadastrado
>
>Então uma mensagem de aviso informa que o email preenchido não tem uma conta relacionada
>
>E pede para Fulano criar uma nava conta
>

# Funcionalidade: Cadastro
>Como usuario do app KnowBre
>
>Fulano quer completar o cadastro 
>
>Para que ele tenha acesso as funcionalidades de um usuário cadastrado
>
## Contexto:
>Dado que Fulano não possuí uma conta no sistema
>
## Cenário: Cadastro válido
>E ele acessa a página de cadastro
>
>E preenche suas credenciais válidas
>
>Quando ele aciona a opção para cadastrar
>
>Então o sistema verifica se os dados registrados são válidos
>
>Então ele deve ser redirecionado para a página de usuário cadastrado
>
## Cenário: Cadastro com credencial incorreta
>E ele acessa a página de cadastro
>
>E preenche suas credenciais inválidas
>
>Quando ele aciona a opção para cadastrar
>
>Então o sistema verifica se os dados registrados são válidos
>
>Então uma mensagem destacando a credencial inválida deve ser exibida

# Funcionalidade: Abrir card Knowbre
>Dado que Fulano esteja logado
>
>E clique em cima de um card Knowbre
>
>Então Fulano deve visualizar o conteúdo do cord
## Contexto
>Dado que Fulano tem uma conta no sistema
>
>E acessa a página prncipal
>
## Cenário: Usuário clica no card
>Quando ele clica em cima de um card Knowbre
>
>Então o conteúdo do card deve ser monstrado e apliado na tela do Fulano
>


Dado
Quando
Então
E
Mas