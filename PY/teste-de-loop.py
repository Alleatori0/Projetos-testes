cliente = { "Rafael": 500, "Lucas": 200, "Joao": 0 }
crediario = { "Rafael": 1000, "Lucas": 500, "Joao": -100 }

def saldo(cliente, crediario):
    for nome in cliente:
        nome = input("Ola! Digite seu nome: ").strip().title()
        if nome in cliente: 
            print(f'Bem-vindo {nome}!')
            opção = int(input("Selecione uma possição:\n1 - Saldo\n2 - Crediario\n3 - Sair\n"))
            if opção == 1:
                print (f'{nome}, seu saldo é: {cliente[nome]}')
                break
            elif opção == 2: 
                print (f'{nome}, seu crediario é de: {crediario[nome]}')
                break
            elif opção == 3:
                print ("Obrigado, volte sempre!")
                break
            else:
                print ("Opção inválida, tente novamente.")
        else:
            print ("Nome não encontrado, tente novamente.")

saldo(cliente, crediario)
            
                


