import api from "../../services/api";

const UsuarioService = () => {
    const listarUsuarios = async () => {
        try {
            const response = await api.get('/usuarios');
            const data = response.data;
            console.log('Fetched users:', data);
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    };

    return { listarUsuarios };
};

export default UsuarioService;