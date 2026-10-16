export interface Cliente{
    id?: number,
    cpf: String,
    nome: String,
    dataNascimento: String,
    email:String,
    endereco: String,
    senha?:String
}