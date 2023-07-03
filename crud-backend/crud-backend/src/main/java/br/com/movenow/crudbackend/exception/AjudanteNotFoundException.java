package br.com.movenow.crudbackend.exception;

public class AjudanteNotFoundException extends RuntimeException {
	public AjudanteNotFoundException(Long id_ajudante) {
		super("NAO FOI POSSIVEL ENCONTRAR NENHUM CADASTRO COM ESTE ID" + id_ajudante);
	}
}
