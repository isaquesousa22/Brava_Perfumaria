export interface Cliente{
    id?: string,
    cpf: string,
    nome: string,
    dataNascimento: string,
    email: string,
    endereco?: string,
    senha?:string
}