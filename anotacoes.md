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

A propriedade "truncate" encurta um link grande, fazendo com que a interface não quebre
 - Pesquisar a propriedade fora do Tailwind

 Mas nesse contexto da div dos links que contém o ícone "Link2" do lucide, por que ele diminui de tamanho ao inserir um gap na div pai ou um link grande demais?
 R: quando se tem um container com display flex e nenhum de seus filhos possui a propriedade 'flex grow' ou 'flex shrink' ele não entende qual dos itens diminuir ou não
 Alternativas para resolver o problema:
    - Colocar flex-1 na div pai
    - Colocar shrink-0 no elemento que diminuiu 
    Isso determina que ele não diminua, mesmo que os demais elementos sejam maiores

Tudo o que é colocado entre colchetes no tailwind é sub-entendido como código CSS puro
EX.: [color-scheme:dark] <!--Altera a cor do ícone do data picker-->

Início do código logo após o commit
  Criação do primeiro componente global - button (por conta da repetibilidade)

  Ponto importante de explicação
  Duas questões a se considerar na criação de componentes globais
  1º) O que fazer quando o conteúdo ou as funcionalidades são diferentes?
  -  Em 'Button' usou-se uma propriedade do React que permite que o componente receba qualquer tipo de conteúdo (não apenas string ou outros tipos, mas, como a classe 'Object' em Java, ReactNode representa qualquer tipo de conteúdo que pode ser inserido).
  O conteúdo filho recebe qualquer tipo de conteúdo. Em outras palavras:
  children: ReactNode
  Ademais, a interface do componente recebe um 'extends', indicando que o objeto pode receber as propriedades e se comportar como um elemento button convencional

  _Para pesquisa_
  Como parâmetro do componente, usa-se o operador Rest do JS (semelhante ao Spread)

    2º) O que fazer quando o estilo muda a depender de onde o componente está inserido?
      Existem várias formas de se fazer isso, incluindo criar mais um componente, o que pode não ser tão funcional quando apenas uma ou poucas características mudam.
      A abordagem utilizada no projeto foi utilizar uma biblioteca do Tailwind chamada:
      # npm i tailwind-variants #  <!--Segundo o Diego, ela é 'incrível' -->

      Como usar a tailwind-variants?
      I - Importa-se o 'tv' (tailwind variants)
      II - Cria-se uma constante que recebe a função tv, cujo parâmetro é um objeto que recebe a estilização genérica (base) e um outro objeto de nome arbitrário que recebe as variações e suas estilizações a seguir (como um CSS convencional).
      Lembrando que também é possível atribuir uma estilização padrão caso nenhuma seja especificada (defaultVariants). Seu conteúdo é o nome do objeto pai de todas as variantes (como um atributo CSS convencional) que recebe como valor o nome da variante criada
      III - Na interface, é necessário incluir todas as variantes separadas pelo símbolo '|' (ou)
        EX.: variant: "primary" | "secondary"
      IV - Adiciona-se o nome do objeto pai de nome arbitrário como parâmetro do componente
      V - Adiciona-se o nome da const que recebeu 'tv' e o nome do objeto de nome arbitrário ao className do componente entre chaves e como parâmetro da função da const
      VI - Atribui-se ao componente inserido no código TSX do arquivo principal a propriedade (atributo) (nome do objeto com nome arbitrário definido no arquivo do componente global, neste caso:) "variant" e o valor necessário

      *Automatizando a adição de variáveis*
      VII - Importar o 'VariantProps' de tailwind-variants
      VIII - Adicionar à interface um extends VariantProps<typeof buttonVariants> e remover o variant dela

      ATIVIDADE
      Fazer um componente para os inputs e para os modais

### AULA 3 - Integrando front-end com a API (back-end) ###
Considerações sobre o input date: é possível restringir o conteúdo digitado através do próprio HTML, mas só é possível utilizar um mesmo date picker que abrange todo um período somente através de bibliotecas, como, no caso, a 'npm install react-day-picker date-fns'

Os dados dos forms devem ser captados para que se possa efetuar a integração com a API. Entretanto, como o código se subdivide, essa "captação" pode se distribuir em toda a aplicação. É daí que vem o conceito de 'Lift State Up'
Deve-se reunir as informações dos componentes secundários no principal
Cria-se um estado para cada informação necessária (destino, data de estadia, etc)

Iniciando a comunicação com a API
npm install axios
Criação da pasta 'lib' em src e axios.ts