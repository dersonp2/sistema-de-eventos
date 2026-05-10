const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express()

app.use(cors())
app.use(express.json())


// CONEXÃO SUPABASE
supabaseUrl='https://kcezzbdtqxavxyrofifq.supabase.co'
supabaseKey='sb_publishable_pWWFhKTS9w_kAkIxhWjhqw_zRYhhCSn'

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)


// LISTAR EVENTOS
app.get('/eventos', async (req, res) => {

  const { data, error } = await supabase
    .from('eventos')
    .select('*')

  if (error) {
    return res.status(500).json(error)
  }

  res.json(data)
})


// CADASTRAR EVENTO
app.post('/eventos', async (req, res) => {

  const {
    titulo,
    descricao,
    data,
    local
  } = req.body

  const { data: evento, error } = await supabase
    .from('eventos')
    .insert([
      {
        titulo,
        descricao,
        data,
        local
      }
    ])
    .select()

  if (error) {
    return res.status(500).json(error)
  }

  res.status(201).json(evento)
})


// ATUALIZAR EVENTO
app.put('/eventos/:id', async (req, res) => {

  const { id } = req.params

  const {
    titulo,
    descricao,
    data,
    local
  } = req.body

  const { data: evento, error } = await supabase
    .from('eventos')
    .update({
      titulo,
      descricao,
      data,
      local
    })
    .eq('id', id)
    .select()

  if (error) {
    return res.status(500).json(error)
  }

  res.json(evento)
})


// EXCLUIR EVENTO
app.delete('/eventos/:id', async (req, res) => {

  const { id } = req.params

  const { error } = await supabase
    .from('eventos')
    .delete()
    .eq('id', id)

  if (error) {
    return res.status(500).json(error)
  }

  res.json({
    mensagem: 'Evento removido com sucesso'
  })
})



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})