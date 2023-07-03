package br.com.movenow.crudbackend.exception;

public class UsuarioNotFoundException extends RuntimeException {
	public UsuarioNotFoundException(Long id_usuario) {
		super("NAO FOI POSSIVEL ENCONTRAR NENHUM CADASTRO COM ESTE ID" + id_usuario);
	}
}
