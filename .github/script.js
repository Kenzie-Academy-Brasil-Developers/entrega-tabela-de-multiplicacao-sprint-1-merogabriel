function tabelaMultiplicacao(){
    let tabela = []
    let mult = 0

    for(let i = 0; i <= 10; i++){
        tabela[i] = [i]
        for(let j = 0; j <= 10; j++){
            mult = j * i
        tabela[i][j] = mult
        }
    }
    console.table(tabela)
}