package br.com.movenow.crudbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Motorista {

	@Id
	@GeneratedValue
	private Long id_motorista;

	private String senha_motorista;
	
	private String nome_completo_motorista;
	
	private String endereco_motorista;
	
	private String cnh_motorista;
	
	private String cpf_motorista;
	
	private String data_nasc_motorista;
	
	private String email_motorista;
	
	private String telefone_motorista;

	public Long getId_motorista() {
		return id_motorista;
	}

	public void setId_motorista(Long id_motorista) {
		this.id_motorista = id_motorista;
	}

	public String getSenha_motorista() {
		return senha_motorista;
	}

	public void setSenha_motorista(String senha_motorista) {
		this.senha_motorista = senha_motorista;
	}

	public String getNome_completo_motorista() {
		return nome_completo_motorista;
	}

	public void setNome_completo_motorista(String nome_completo_motorista) {
		this.nome_completo_motorista = nome_completo_motorista;
	}

	public String getEndereco_motorista() {
		return endereco_motorista;
	}

	public void setEndereco_motorista(String endereco_motorista) {
		this.endereco_motorista = endereco_motorista;
	}

	public String getCnh_motorista() {
		return cnh_motorista;
	}

	public void setCnh_motorista(String cnh_motorista) {
		this.cnh_motorista = cnh_motorista;
	}

	public String getCpf_motorista() {
		return cpf_motorista;
	}

	public void setCpf_motorista(String cpf_motorista) {
		this.cpf_motorista = cpf_motorista;
	}

	public String getData_nasc_motorista() {
		return data_nasc_motorista;
	}

	public void setData_nasc_motorista(String data_nasc_motorista) {
		this.data_nasc_motorista = data_nasc_motorista;
	}

	public String getEmail_motorista() {
		return email_motorista;
	}

	public void setEmail_motorista(String email_motorista) {
		this.email_motorista = email_motorista;
	}

	public String getTelefone_motorista() {
		return telefone_motorista;
	}

	public void setTelefone_motorista(String telefone_motorista) {
		this.telefone_motorista = telefone_motorista;
	}
	
	

}
