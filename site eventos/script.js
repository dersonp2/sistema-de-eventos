const API = 'http://localhost:3000/eventos'

const form = document.getElementById('formEvento')

const listaEventos = document.getElementById('listaEventos')

const loading = document.getElementById('loading')

const botaoSalvar = document.getElementById('botaoSalvar')


// ID DO EVENTO SENDO EDITADO
let eventoEditandoId = null


// MOSTRAR LOADING
function mostrarLoading() {
  loading.style.display = 'block'
}


// ESCONDER LOADING
function esconderLoading() {
  loading.style.display = 'none'
}


// LISTAR EVENTOS
async function carregarEventos() {

  mostrarLoading()

  const resposta = await fetch(API)

  const eventos = await resposta.json()

  listaEventos.innerHTML = ''

  eventos.forEach(evento => {

    listaEventos.innerHTML += `
      <div class="card">

        <h3>${evento.titulo}</h3>

        <p>
          <strong>Descrição:</strong>
          ${evento.descricao}
        </p>

        <p>
          <strong>Data:</strong>
          ${evento.data}
        </p>

        <p>
          <strong>Local:</strong>
          ${evento.local}
        </p>

        <button onclick="editarEvento(
          ${evento.id},
          '${evento.titulo}',
          '${evento.descricao}',
          '${evento.data}',
          '${evento.local}'
        )">
          Editar
        </button>

        <button onclick="removerEvento(${evento.id})">
          Excluir
        </button>

      </div>
    `
  })

  esconderLoading()
}


// SALVAR EVENTO
form.addEventListener('submit', async (e) => {

  e.preventDefault()

  mostrarLoading()

  const evento = {
    titulo: titulo.value,
    descricao: descricao.value,
    data: data.value,
    local: local.value
  }


  // EDITAR EVENTO
  if (eventoEditandoId) {

    await fetch(`${API}/${eventoEditandoId}`, {

      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(evento)
    })

    botaoSalvar.innerText = 'Salvar Evento'

    eventoEditandoId = null
  }


  // NOVO EVENTO
  else {

    await fetch(API, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(evento)
    })
  }

  form.reset()

  carregarEventos()
})


// EDITAR EVENTO
function editarEvento(
  id,
  tituloEvento,
  descricaoEvento,
  dataEvento,
  localEvento
) {

  eventoEditandoId = id

  titulo.value = tituloEvento
  descricao.value = descricaoEvento
  data.value = dataEvento
  local.value = localEvento

  botaoSalvar.innerText = 'Atualizar Evento'
}


// REMOVER EVENTO
async function removerEvento(id) {

  mostrarLoading()

  await fetch(`${API}/${id}`, {
    method: 'DELETE'
  })

  carregarEventos()
}


// INICIAR
carregarEventos()