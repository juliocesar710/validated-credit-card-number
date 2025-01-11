# **Credit Card Number Validator**

Este projeto implementa uma solução eficiente para validação de números de cartões de crédito, abrangendo os principais tipos de bandeiras e utilizando o **algoritmo de Luhn** para garantir a autenticidade dos dados.

---

## **Principais Recursos**

- Suporte para validação dos seguintes tipos de cartões:
  - **Visa**
  - **MasterCard**
  - **American Express**
  - **Discover**
  - **Diners Club**
  - **EnRoute**
  - **JCB**
  - **Voyager**
  - **Hipercard**
  - **Aura**
  
- **Verificação de padrão de bandeira:** Identificação da bandeira do cartão com base em expressões regulares específicas para cada tipo.
- **Validação com o algoritmo de Luhn:** Garantia de conformidade com os padrões de autenticação da indústria.

---

## **Algoritmo de Luhn**

O **algoritmo de Luhn**, amplamente utilizado para validação de números de cartões, segue os passos abaixo:

1. **Iteração:** Comece pelo último dígito (à direita) do número do cartão e mova-se para a esquerda.
2. **Dobrar valores:** Dobre o valor de cada segundo dígito. 
   - Exemplo: Para o número `1234`, dobre os valores `2` e `4`.
3. **Reduzir valores:** Caso o resultado da multiplicação seja maior que `9`, subtraia `9`.
   - Exemplo: `8 * 2 = 16`, então `16 - 9 = 7`.
4. **Somar dígitos:** Some todos os dígitos transformados e inalterados.
5. **Verificação de múltiplo de 10:** Se a soma total for divisível por `10`, o número do cartão é considerado **válido**.

---

## **Como Utilizar**

### **Clonando o Repositório**

1. Clone o projeto para sua máquina local:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>

2. Acesse o diretório do proejeto:

`cd credit-card-validator
`

##  Executando o Código

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Execute o script principal:
`node src/index.js
`
## Exemplo de Função de Validação

A função principal `validateCreditCardNumber` realiza as etapas de validação, retornando informações sobre a bandeira do cartão e sua validade.
```
function validateCreditCardNumber(cardNumber) {}
```
## Exemplo de Saída

```
Número do Cartão: 4111111111111111
Bandeira: Visa
Validade: Válido
```

## Estrutura do Projeto

```
|──src/
|   |──index.js
|──Readme.md

```

## Contribuindo
Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
`git checkout -b minha-feature
`
3. Commit suas alterações:
`git commit -m "Descrição da alteração"
`
4. Envie suas alterações:
`git push origin minha-feature
`
5. Abra um pull request no repositório principal.
