package br.com.movenow.crudbackend.exception;

public class MotoristaNotFoundException extends RuntimeException {
	public MotoristaNotFoundException(Long id_motorista) {
		super("NAO FOI POSSIVEL ENCONTRAR NENHUM CADASTRO COM ESTE ID" + id_motorista);
	}
}
