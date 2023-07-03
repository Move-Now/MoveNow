package br.com.movenow.crudbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Ajudante {

	@Id
	@GeneratedValue
	private Long id_ajudante;
	
	private String senha_ajudante;
	
	private String nome_completo_ajudante;
	
	private String endereco_ajudante;
		
	private String cpf_ajudante;
	
	private String data_nasc_ajudante;
	
	private String email_ajudante;
	
	private String telefone_ajudante;

	public Long getId_ajudante() {
		return id_ajudante;
	}

	public void setId_ajudante(Long id_ajudante) {
		this.id_ajudante = id_ajudante;
	}

	public String getSenha_ajudante() {
		return senha_ajudante;
	}

	public void setSenha_ajudante(String senha_ajudante) {
		this.senha_ajudante = senha_ajudante;
	}

	public String getNome_completo_ajudante() {
		return nome_completo_ajudante;
	}

	public void setNome_completo_ajudante(String nome_completo_ajudante) {
		this.nome_completo_ajudante = nome_completo_ajudante;
	}

	public String getEndereco_ajudante() {
		return endereco_ajudante;
	}

	public void setEndereco_ajudante(String endereco_ajudante) {
		this.endereco_ajudante = endereco_ajudante;
	}

	public String getCpf_ajudante() {
		return cpf_ajudante;
	}

	public void setCpf_ajudante(String cpf_ajudante) {
		this.cpf_ajudante = cpf_ajudante;
	}

	public String getData_nasc_ajudante() {
		return data_nasc_ajudante;
	}

	public void setData_nasc_ajudante(String data_nasc_ajudante) {
		this.data_nasc_ajudante = data_nasc_ajudante;
	}

	public String getEmail_ajudante() {
		return email_ajudante;
	}

	public void setEmail_ajudante(String email_ajudante) {
		this.email_ajudante = email_ajudante;
	}

	public String getTelefone_ajudante() {
		return telefone_ajudante;
	}

	public void setTelefone_ajudante(String telefone_ajudante) {
		this.telefone_ajudante = telefone_ajudante;
	}

	
}
