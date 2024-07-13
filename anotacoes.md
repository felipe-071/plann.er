### AULA 1 ###

Trecho importante para [conferir a explicação da aula]
*{
    min-width: 0;
}

Pacote de ícones utilizado: npm i lucide-react

Pergunta da aula: qual a diferença de colocar imagens na pasta 'public' e na pasta 'src'?

Conceito de 'estado' no React
Estado é uma variável à qual atribuimos uma função (useState()) que possui em seu parâmetro um valor inicial. Neste caso do segundo input da home do plann.er, queremos deixar ele visível (true) ou não (false), portanto, foi atribuído o tipo boolean, iniciando com false.

O useState() não retorna somente uma variável, mas sim um array, e os colchetes perto da palavra reservada 'const' são a desestruturação da constante
A segunda posição do array é uma function, que altera o valor da variável, a qual está na primeira posição, e se assemelha aos 'setters' de Java

//IMPLEMENTAÇÃO DO ARRAY DE EMAILS ADICIONADOS
O professor do YouTube mostrava como captar o conteúdo de um input através da criação de dois states. Na aula, por outro lado, o Diego mostra como fazer isso a partir da própria function executada no evento de submit do form

ETAPAS
1) Passar o evento como parâmetro da função e "tipar o evento" (conferir se isso é feito apenas no TS)
2) Criar uma const que capta/recebe os dados do campo do contexto
3) Especificar que o "FormEvent" se trata de um evento disparado por um elemento HTML de formulário

  ### ENTENDENDO A FUNÇÃO QUE ADICIONA UM NOVO EMAIL NO EVENTO DE SUBMIT DO FORM
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) { 
    <!-- Especificar o tipo de evento é exclusivo do TS -->
    event.preventDefault();
    <!-- A const 'data' recebe o valor vigente do input (conferir se FormData é uma function) -->
    const data = new FormData(event.currentTarget)

    <!-- A const 'email' recebe um método que capta 'email' (conferir se é relativo ao nome do input. O valor é convertido para string porque é recebido como um valor de entrada 
    ## Pesquisar: o que significa o '?' antes de '.toString()'?##-->
    const email = data.get('email')?.toString()

    <!-- // Haverá erro sem o if porque nada pode ser adicionado ao array ou renderizado caso o campo seja nulo (undefined) -->
    if(!email){
      return
    }
    console.log(email)

    setEmailsToInvite([
      ...emailsToInvite, email
    ])
  }

Em linguagens performáticas como o React, há o conceito de imutabilidade. Ou seja, tudo se cria, nada se perde, nada se transforma. Não é possível alterar o conteúdo do array de um estado. Dessa forma, para renderizar esse array com novos dados, deve-se unir novas informações no final de um novo array e, no início do mesmo, o antigo array com o método spread ("...", para deixar as informações livres)

### ENTENDENDO A LÓGICA DO BOTÃO QUE REMOVE UM EMAIL DA DIV
Funções com parâmetros só podem ser executadas se encapsuladas dentro de funções anônimas
button onClick={() => removeEmailFromInvites(email)} type="button">
                        <X className="size-4 text-zinc-400" />
                      </button>

### AULA 02 ###
No projeto, foi instalado o React Router, pacote responsável pela criação de rotas do projeto. A const 'router' recebe um array com todas as rotas da aplicação
Para implementar a navegabilidade, usa-se o "useNavigate" do react-router-dom, que nada mais é que uma função que recebe como parâmetro o link de destino 
DÚVIDA: Por que não basta apenas colocar o caminho da rota no valor do link?

Desestruturação de 'props'

Antes
props: InviteGuestsModalProps

Depois (extração de cada propriedade do objeto "props" em uma variável separada)

Detalhamento do commit
Os trechos do código estão sendo divididos da forma mais semântica possível em componentes, incluindo todos os modais. Dessa forma, transere-se o código para arquivos separados e usa-se o conceito de props para compartilhar as variáveis entre os arquivos. Portanto, o arquivo 'app' fica, maioritariamente, responsável pela centralização das funções usadas, e os demais pelo conteúdo
Neste caso, o modal de convidar usuários foi incluso em 'app' como um componente com atributos (propriedades). As funções também são repassadas e é criada uma interface no novo arquivo, na qual são tipados os elementos (funções, arrays e etc)

DICA DE OURO
O evento de 'submit' também é executado através de uma ação no teclado. Portanto, é interessante incluir a função 'create trip' no evento onSubmit do form, não se limitando ao clique do mouse
Pesquisar: por que o 'event: FormEvent<HTMLFormElement>' é necessário?
O critério principal de separação de componentes não é o visual (rodapé, cabeçalho etc), mas a semântica