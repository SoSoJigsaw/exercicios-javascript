# Exercícios JavaScript

## 1. Desafio Portaria
Desenvolva um algoritmo para uma casa de eventos que solicite ao usuário seu nome, idade e se está acompanhado. Crie três variáveis: nome, idade e estaAcompanhado. A variável estaAcompanhado é do tipo booleana, mas o usuário vai fornecer a resposta como "s" para sim ou "n" para não. Teste se a idade é igual ou superior a 18 anos. Se não for, exiba um alerta informando: "Entrada não permitida para [nome]: Menor de idade." Se a idade for 18 anos ou mais, verifique se o usuário está acompanhado. Se estiver, exiba: "Entrada permitida para [nome]: Conceder desconto." Caso contrário, exiba: "Entrada permitida para [nome]: Valor integral."

## 2. Aprovado ou Reprovado
Você foi encarregado de criar um algoritmo capaz de determinar se um aluno foi aprovado ou não. Para que um aluno seja aprovado, a média total das notas deve ser superior a 8 e a presença deve ser maior que 6. Desenvolva um algoritmo que solicite as seguintes informações do aluno: matéria, nome, nota e presença. As notas para cada matéria variam de 0 a 10. Armazene cada informação em uma variável. O nome e a presença serão solicitados apenas uma vez, enquanto nota e matéria serão solicitadas ao usuário várias vezes. Portanto, você deve usar estrutura de repetição para atualizar valores de algumas variáveis para cada matéria e cada nota.

## 3. Acerte o Número
Você foi incumbido de criar uma aplicação onde um número aleatório é gerado e os participantes tentam adivinhar esse número. Para isso, siga os passos abaixo:

    - Desenvolva a Função de Geração de Número Aleatório:
    Crie uma função chamada gerarNumeroAleatorio() que não recebe parâmetros. Esta função deve utilizar Math.random() para gerar um número aleatório. Para garantir que o número gerado seja um inteiro positivo até 20, você precisa arredondar o valor para o inteiro mais próximo.

    - Desenvolva a Função para Verificar o Palpite:
    Crie uma função chamada verificarPalpite(numeroAleatorio, palpite). Esta função receberá o número aleatório gerado e o palpite do usuário. Inicie uma variável chamada tentativa com o valor 1.

    - Use um laço while para verificar se o numeroAleatorio é igual ao palpite. A cada iteração do laço, incremente a variável tentativa em +1.

    - Enquanto o palpite estiver incorreto, emita um alerta com a mensagem: "Tente novamente."

    - Se o palpite estiver correto, emita um alerta indicando a tentativa: "Você acertou na tentativa [x]."

    - Gere o Número Aleatório e Obtenha o Palpite do Usuário:
    Crie uma variável chamada numeroAleatorio para armazenar o resultado da função gerarNumeroAleatorio().

    - Utilize o prompt para obter o palpite do usuário. Assegure-se de aceitar somente inteiros positivos.

    - Chame a Função de Verificação de Palpite:
    Chame a função verificarPalpite(numeroAleatorio, palpite) passando o número aleatório gerado e o palpite do usuário como argumentos.

Ao seguir esses passos, você terá uma aplicação funcional onde os participantes podem tentar adivinhar um número aleatório.

## 4. Enigma
Você faz parte da equipe de inteligência da polícia e está investigando a troca de mensagens entre dois grupos de crackers. O chefe de polícia suspeita que eles estejam planejando algo, mas até agora, apenas algumas letras foram identificadas. A dificuldade está em separar essas letras em palavras compreensíveis, já que não há espaços entre elas.

Sua missão é criar um programa que automatize o processo de contar quantas palavras existem no texto digitado, seguindo a regra: qualquer caractere que não seja uma letra minúscula de 'a' a 'z' é considerado um separador de palavra.

## 5. Gestão de Perguntas
Você foi contratado para criar uma aplicação chamada Slenzie, que será usada para armazenar perguntas em eventos digitais. O sistema deve ser capaz de criar eventos, adicionar perguntas, gerenciar votos e indicar quais perguntas foram respondidas. 

## 6. Caixa Eletrônico
Nesta atividade vamos desenvolver as funcionalidades de um caixa eletrônico, a partir das informações de um cliente.

Nós sabemos que um caixa eletrônico, possui algumas responsabilidades, como: saque, saldo, depósito, entre outros... Agora, vamos manipular informações de um objeto para realizar algumas destas ações.

Dado o objeto:

const user = {
name: "Jhon Doyle Fox",
savingsBalance: 500,
cardsInformation: [
  {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      ensign: "American Express",
    },
  ],
};

Iremos desenvolver as seguintes funcionalidades:

   - Saldo
   - Depósito
   - Saque

## 7. Dados Escolares
Você foi contratado para desenvolver uma solução para consultas referentes aos dados dos alunos. Com base nos dados de um aluno, você deverá desenvolver a lógica para consultar o curso, matérias, situação da matrícula e gerar a carteirinha de estudante.

Dado o objeto:

const alunoCurso = {
  nome: "João",
  idade: 31,
  curso: "FullStack",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};

Desenvolva um algoritmo que recebe via prompt o tipo de consulta que o sistema deve realizar. A entrada deverá ser um número de 1 a 4, representando as opções a seguir:

- Curso

- Matéria

- Situação de Matrícula

- Gerar Carteira

## 8. Lista de Codewars: Variáveis 
- Exercício: Pillars.

- Exercício: Will you make it?

- Exercício: Grasshopper If/else syntax debug

## 9. Lista de Codewars: Variáveis II
- Exercício: Holiday VIII Duty Free
- Exercício: For Twins: 2. Math operations
- Exercício: Easy logs

## 10. Lista de Codewars: Variáveis III
- Exercício BASIC: Making Six Toast.
- Exercício: Blood-Alcohol Content
- Exercício: Do I get a bonus?
- Exercício: Miles per gallon to kilometers per liter

## 11. Lista de Codewars: Arrays I
- Exercício: My head is at the wrong end!
- Exercício: Count the Monkeys!
- Exercício: What is between?
- Exercício: Beginner Lost Without a Map
- Exercício: Beginner Reduce but Grow
- Exercício: Unfinished Loop Bug Fixing #1

## 12. Lista de Codewars: Arrays II
- Exercício: Convert a string to an array
- Exercício: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
- Exercício: Century From Year
- Exercício: Array plus array

## 13. Lista de Codewars: Arrays III
- Exercício: To square(root) or not to square(root)
- Exercício: Points of Reflection
- Exercício: Generate range of integers

## 14. Lista de Codewars: Arrays IV
- Exercício: Sum of differences in array
- Exercício: Find the first non-consecutive number
- Exercício: Abbreviate a Two Word Name
- Exercício: Remove String Spaces
- Exercício: You only need one

## 15. Lista de JavaScript: Debug I
Esta é uma atividade de debug. Os códigos estão parcialmente criados, ou totalmente criados, mas funcionando incorretamente.

Investigue o código, teste e corrija o que achar necessário.
Contexto

Um mercado te pediu um sistema para ajudar organizar as seções e seus respectivos itens, além de algumas funcionalidades administrativas, como serviço de login e ponto.

A equipe de TI anterior começou a desenvolver, mas não estava dando muito certo. O seu trabalho é fazer com que o sistema funcione.
Funções

Conforme a equipe anterior, as funções abaixo já foram desenvolvidas, porém, nenhuma delas funciona da forma que deveria.

### - adicionarSecaoAoMercado()
Esta função recebe uma seção (lista de itens) como parâmetro.

Esta função deve ter a funcionalidade de inserir uma nova seção de itens ao mercado.

Erros: Existe um erro na construção da estrutura.

### - adicionarItemASecao()
Esta função recebe um item (string) como parâmetro e a seção (lista) para a inserção.

Esta função deve ter a funcionalidade de inserir novos itens à seção de itens.

Erros: Existe um erro na forma de inserir o elemento.

### - retornarItemDaSecao()
Esta função recebe como parâmetro o nome de um item da lista.

Esta função deve ter a funcionalidade de buscar e retornar o item pelo nome na lista.

Erros: Existe erro de sintaxe, verifique a função do método.

### - retornaUltimoItemDaSecao()
Esta função recebe um parâmetro a seção (lista).

Esta função deve ter a funcionalidade de retornar o último item da lista, independente do tamanho da lista.

Erros: Existe erro de lógica na captura do último elemento.

⁠Caso de uso:
Entrada: secao
Saída: undefined
Saída esperada: o último item da lista

### - consultaSecoesMercado()
Esta função recebe a lista de seções do mercado como parâmetro.

Esta função deve ter a funcionalidade de imprimir todas seções no console.

Erros: Existem erros de lógica na comparação e no retorno.

⁠Caso de uso:
Entrada: secoesMercado
Saída: apenas o elemento do índice 0
Saída esperada: Todos os elementos da lista.

### - somaItens()
Esta função recebe dois valores como parâmetro.

Esta função deve ter a funcionalidade de retornar a soma dos dois valores.

Erros: Existe erro de lógica.

⁠Caso de uso:
Entrada: "1", "1"
Saída: 11
Saída esperada: 2

### - baterPonto()
Esta função recebe como parâmetro o nome de um funcionário.

Esta função deve ter a funcionalidade de registrar o ponto, caso o funcionário esteja registrado.

Erros: Existe erro de lógica.

⁠Caso de uso:
Entrada: "sonia", 0
Saída: Funcionario não cadastrado
Saída esperada: Turno processado.

### - loginSistema()
Esta função recebe como parâmetro um nome de usuário e uma senha.

Esta função tem a funcionalidade de realizar o login de um funcionário.

Erros: Existem erros de sintaxe e de lógica, corrija primeiro os erros de sintaxe

Caso de uso:
Entrada: "luffy123", 326541
Saída: Acesso liberado.
Saída esperada: Acesso negado.

## 16. Lista de JavaScript: Debug II
Você é desenvolvedor em uma empresa. Uma equipe de desenvolvedores começou a desenvolver uma solução para o cálculo dos orçamentos para um cliente da área de agropecuária e serviços agrícolas.

O problema é que grande parte das funcionalidades desenvolvidas não faz exatamente o que está sendo proposto, quando não fazem nada.

### - insereProduto()

A função não faz a inserção de um produto como deveria ser feito. Além de sempre alterar o produto que estava antes, a lista sempre fica com um item vazio.

O esperado é que o produto fosse inserido na última posição da lista, mas no momento está retorno está assim: [empty, {…}]

### - criaProduto()

A função de criar produtos não está funcionando, o produto criado não retorna e dá um erro.

O esperado é que o produto fosse retornado, mas no momento acontece um erro.

### - renderizaProdutos()

A função de renderizar produtos deve mostrar os preços no console para teste, porém não está funcionando como deveria.

O produto é impresso no console, mas com o nome object, sendo que deveria imprimir o preço.

O esperado é que o preço de cada um dos produtos da lista fossem impressos no console.

### - cadastraServicos()

A função de cadastrar serviços não atualiza a lista corretamente, com o novo elemento cadastrado. Sempre que um desenvolvedor tenta armazenar a lista atualizada após uma inserção, a variável fica com o valor undefined, e não com o valor atualizado da lista.

O esperado é que a cada inserção de um objeto serviço a lista de serviços fosse retornada de forma atualizada.

### - calculaValorServico()

A função de calcular o valor do serviço não funciona. Ela recebe uma lista de serviços, mas o valor a cobrar calculado nunca é exatamente o valor correto a ser cobrado, quase sempre é menor, exceto quando o cliente faz apenas um serviço.

O esperado aqui é que o valor retornado fosse: R$ 2550,00. No momento dá erro e quando estava funcionando, retornava apenas R$ 500,00 para este caso.

## 17. Lista de Codewars: Objetos I
- Exercício 1: Job Matching #1
- Exercício 2: Push a hash/an object into array
- Exercício 3: "this" is a problem
- Exercício 4: Improving Math.round(x)

## 18. Lista de Codewars: Objetos II
- Exercício 1: Split The Bill
- Exercício 2: Fix my method
- Exercício 3: Re-open class
- Exercício 4: Refactored Greeting
