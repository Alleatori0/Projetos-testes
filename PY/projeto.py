dados_pessoais = {"Rafael":21, "Ione":19}

def cadastro ():
    nome = input("Digite seu nome: ")
    idade = int(input("Digite sua idade: "))
    dados_pessoais[nome] = idade
    print("Cadastro concluido")

def listagem():
    print("LISTA DE REGISTRO\n")
    for nome, idade in dados_pessoais.items():
        print(f"{nome}, {idade} anos")
        
while True:

    print("MENU INICIAL\n 1- Registrar-se\n 2- Lista de Registros\n 3-Sair")
    resposta = int(input("Olá! Escolha uma opção: "))

    if resposta == 1:
        cadastro()

    elif resposta == 2:
        listagem()

    elif resposta == 3:
        print("Até a proxima!")
        break
    
    else:
        print("Opção invalida!")