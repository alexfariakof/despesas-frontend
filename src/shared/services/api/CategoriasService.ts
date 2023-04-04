import { Api } from "../axios-config";

export interface ICategoriaVO {
    id:number;
    idTipoCategoria : number;
    descricao: string;
    idUsuario: number;    
}

const getAll = async (): Promise<ICategoriaVO[] | Error> => {
    try {
        const { data } = await Api.get('/Categoria');
        if (data) {
            return data;
        }

        return Error('Erro getAll ao listar Categorias.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro getAll ao listar Categorias.');
    }
};

const getById = async (id: number): Promise<ICategoriaVO | Error> => {
    try {
        const { data } = await Api.get('/Categoria/' + id);
        if (data) {
            return data;
        }

        return Error('Erro getById ao pesquisar Categorias.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro getById ao pesquisar Categorias.');
    }
};

const getByIdUsuario = async (idUsuario: number): Promise<ICategoriaVO[] | Error> => {
    try {
        const { data } = await Api.get('/Categoria/byIdUsuario/' + idUsuario);
        if (data) {
            return data;
        }

        return Error('Erro getByIdUsuario ao listar Categorias.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro getByIdusuario ao listar Categorias.');
    }
};


const getByTipoCategoria = async (idUsuario: number, idTipoCategoria: number): Promise<ICategoriaVO[] | Error> => {
    try {
        const { data } = await Api.get('/Categoria/byTipoCategoria/' + idUsuario + '/' + idTipoCategoria);
        if (data) {
            return data;
        }

        return Error('Erro getByTipoCategoria ao pesquisar Categorias.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro getByTipoCategoria ao pesquisar Categorias.');
    }
};

const create = async (dados: Omit<ICategoriaVO, 'id'>): Promise<any | Error> => {
    try {
        const { data } = await Api.post<ICategoriaVO>('/Categoria', dados );
        if (data) {
            return data
        }

        return Error('Erro ao criar novo registro de Categoria.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro ao criar novo registro de Categoria.');
    }
};


const updateById = async (id: number, dados: ICategoriaVO): Promise<ICategoriaVO | Error> => {
    try {
        dados.id = id;
        const { data } = await Api.put<ICategoriaVO>('/Categoria', dados);
        if (data) {
            return data
        }

        return Error('Erro ao atualizar registro de Categoria.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro ao atualizar registro de Categoria.');
    }

 };

const deleteById = async (id: number): Promise<any | Error> => { 
    try {
        const { data } = await Api.delete('/Categoria/' + id);
        if (data) {
            return Boolean(data.message)
        }

        return Error('Erro ao deletar registro de Categoria.');
    } catch (error) {
        console.log(error);
        return Error((error as { message: string }).message || 'Erro ao deletar registro de Categoria.');
    }

};

export const CategoriasService = {
    getAll,
    getById,
    getByIdUsuario,
    getByTipoCategoria,
    create,
    updateById,
    deleteById
};