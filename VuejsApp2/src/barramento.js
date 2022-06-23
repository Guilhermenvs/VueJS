export default{
    methods: {
        setUsuarioSeleciondo(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
}