assentosLivres = [1,2,3,4]
assentosReservados = [5,6,7,8]
usuario = []

def reservarAssento():
    print("Ola! qual assento deseja reservar?")
    escolha = int(input(f'assentos livres: {assentosLivres} ')) 

    if escolha  in assentosLivres:
        print(f'Assento {escolha} reservado com sucesso!')
        assentosLivres.remove(escolha)
        usuario.append(escolha)
    else:
        print('Assento indisponível ou inválido.')

reservarAssento()



