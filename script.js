function getDadosEnderecoPorCEP(cep) {
    const url = 'http://viacep.com.br/ws/'+cep+'/json/'
    
    const xmlHttp = new XMLHttpRequest()
    
    xmlHttp.open('GET', url)

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            
            const dadosJSONText = xmlHttp.responseText
            const dadosJSONObj = JSON.parse(dadosJSONText)
            
            document.getElementById('bairro').value = dadosJSONObj.bairro
            document.getElementById('cidade').value = dadosJSONObj.localidade
            document.getElementById('estado').value = dadosJSONObj.uf
        }
    } 

    xmlHttp.send()    
}