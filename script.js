
const input = document.getElementById('cepInput');
const button = document.getElementById('searchBtn');
const logradouro = document.getElementById('logradouro');
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');
const uf = document.getElementById('uf');

button.addEventListener('click', () => {
    const cep = input.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    
    axios.get(url)
        .then(response => {
            const data = response.data;
            logradouro.innerText = data.logradouro
            console.log('Logradouro:', data.logradouro);
            cidade.innerText = data.localidade
            console.log('Cidade:', data.localidade);
            bairro.innerText = data.bairro
            console.log('Bairro:', data.bairro);
            uf.innerText = data.uf
            console.log('UF:', data.uf);
            })
            .catch(error => {
                console.error('Erro ao obter os dados:', error);
            });
    });

  