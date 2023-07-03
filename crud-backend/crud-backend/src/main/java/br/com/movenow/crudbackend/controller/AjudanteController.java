package br.com.movenow.crudbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.movenow.crudbackend.exception.AjudanteNotFoundException;
import br.com.movenow.crudbackend.model.Ajudante;
import br.com.movenow.crudbackend.repository.AjudanteRepository;

@RestController
@CrossOrigin("*")

public class AjudanteController {
	@Autowired
	
	private AjudanteRepository ajudanteRepository;
	
	@PostMapping("/ajudante")
	Ajudante newAjudante(@RequestBody Ajudante newAjudante) {
		return ajudanteRepository.save(newAjudante);
	}
	
	@GetMapping("/ajudantes")
	List<Ajudante> getAllAjudantes(){
		return ajudanteRepository.findAll();
	}
	
	@GetMapping("ajudante/{id_ajudante}")
	Ajudante getAjudanteByIdAjudante(@PathVariable Long id_ajudante) {
		return ajudanteRepository.findById(id_ajudante)
				.orElseThrow(()->new AjudanteNotFoundException(id_ajudante));
	}
	
	@PutMapping("/ajudante/{id_ajudante}")
	Ajudante updateAjudante(@RequestBody Ajudante newAjudante, @PathVariable Long id_ajudante) {
		return ajudanteRepository.findById(id_ajudante)
				.map(ajudante ->{
					ajudante.setEmail_ajudante(newAjudante.getEmail_ajudante());
					ajudante.setSenha_ajudante(newAjudante.getSenha_ajudante());
					ajudante.setNome_completo_ajudante(newAjudante.getNome_completo_ajudante());
					ajudante.setEndereco_ajudante(newAjudante.getEndereco_ajudante());
					ajudante.setCpf_ajudante(newAjudante.getCpf_ajudante());
					ajudante.setData_nasc_ajudante(newAjudante.getData_nasc_ajudante());
					ajudante.setTelefone_ajudante(newAjudante.getTelefone_ajudante());
					return ajudanteRepository.save(ajudante);
				})
				.orElseThrow(()->new AjudanteNotFoundException(id_ajudante));
	}
	
	@DeleteMapping("/ajudante/{id_ajudante}")
	String deleteAjudante (@PathVariable Long id_ajudante) {
		if(!ajudanteRepository.existsById(id_ajudante)) {
			throw new AjudanteNotFoundException(id_ajudante);
		}
		ajudanteRepository.deleteById(id_ajudante);
		return "ESTE AJUDANTE COM ID " +id_ajudante+" FOI DELETADO COM SUCESSO";
	}
}
