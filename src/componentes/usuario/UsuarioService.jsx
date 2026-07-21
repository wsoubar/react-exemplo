// services/UsuarioService.js

import api from '../../services/api';

const usuarioService = {
    listarUsuarios: async () => {
        const { data } = await api.get('/usuarios');
        return data;
    },

    criarUsuario: async (usuario) => {
        const { data } = await api.post('/usuarios', usuario);
        return data;
    },

    excluirUsuario: async (id) => {
        await api.delete(`/usuarios/${id}`);
    },

    atualizarUsuario: async (id, usuario) => {
        const { data } = await api.put(`/usuarios/${id}`, usuario);
        return data;
    }
};

export default usuarioService;