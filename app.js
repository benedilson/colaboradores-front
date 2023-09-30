angular.module('ColaboradoresApp', [])
    .controller('ColaboradoresController', function($scope, $http) {
        $scope.colaborador = {
            nome: '',
            senha: ''
        };

        $scope.forcaSenha = '';

        $scope.salvarColaborador = function() {
            $http.post('http://localhost:8081/api/colaboradores', $scope.colaborador)
                .then(function(response) {
                    $scope.forcaSenha = response.data.valida ? 'Senha forte' : 'Senha fraca';
                    $scope.carregarColaboradores();
                })
                .catch(function(error) {
                    console.error('Erro ao salvar o colaborador:', error);
                });
        };

        $scope.carregarColaboradores = function() {
            $http.get('http://localhost:8081/api/colaboradores')
                .then(function(response) {
                    $scope.colaboradores = response.data;
                })
                .catch(function(error) {
                    console.error('Erro ao carregar a lista de colaboradores:', error);
                });
        };


        $scope.carregarColaboradores();

        $scope.obterClasseSenha = function(colaborador) {
            if (colaborador.cor === 'vermelha') {
                return 'ruim';
            } else if (colaborador.cor === 'amarela') {
                return 'mediana';
            } else if (colaborador.cor === 'verde claro') {
                return 'bom';
            } else if (colaborador.cor === 'verde escuro') {
                return 'forte';
            }
        };

        $scope.obterClassificacaoSenha = function(colaborador) {
            if (colaborador.cor === 'vermelha') {
                return 'Ruim';
            } else if (colaborador.cor === 'amarela') {
                return 'Mediana';
            } else if (colaborador.cor === 'verde claro') {
                return 'Bom';
            } else if (colaborador.cor === 'verde escuro') {
                return 'Forte';
            } else {
                return 'Não Classificada';
            }
        };
    });
