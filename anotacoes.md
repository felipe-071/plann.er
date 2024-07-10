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