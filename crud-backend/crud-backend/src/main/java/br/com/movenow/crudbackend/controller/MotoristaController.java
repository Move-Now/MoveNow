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

import br.com.movenow.crudbackend.exception.MotoristaNotFoundException;
import br.com.movenow.crudbackend.model.Motorista;
import br.com.movenow.crudbackend.repository.MotoristaRepository;

@RestController
@CrossOrigin("*")

public class MotoristaController {
	@Autowired
	
	private MotoristaRepository motoristaRepository;
	
	@PostMapping("/motorista")
	Motorista newMotorista(@RequestBody Motorista newMotorista) {
		return motoristaRepository.save(newMotorista);
	}
	
	@GetMapping("/motoristas")
	List<Motorista> getAllMotoristas(){
		return motoristaRepository.findAll(); 
	}
	
	@GetMapping("motorista/{id_motorista}")
	Motorista getMotoristaByIdMotorista(@PathVariable Long id_motorista) {
		return motoristaRepository.findById(id_motorista)
				.orElseThrow(()->new MotoristaNotFoundException(id_motorista));
	}
	
	@PutMapping("/motorista/{id_motorista}")
	Motorista updateMotorista(@RequestBody Motorista newMotorista, @PathVariable Long id_motorista) {
		return motoristaRepository.findById(id_motorista)
				.map(motorista ->{
					motorista.setEmail_motorista(newMotorista.getEmail_motorista());
					motorista.setSenha_motorista(newMotorista.getSenha_motorista());
					motorista.setNome_completo_motorista(newMotorista.getNome_completo_motorista());
					motorista.setEndereco_motorista(newMotorista.getEndereco_motorista());
					motorista.setCnh_motorista(newMotorista.getCnh_motorista());
					motorista.setCpf_motorista(newMotorista.getCpf_motorista());
					motorista.setData_nasc_motorista(newMotorista.getData_nasc_motorista());
					motorista.setTelefone_motorista(newMotorista.getTelefone_motorista());
					return motoristaRepository.save(motorista);
				})
				.orElseThrow(()->new MotoristaNotFoundException(id_motorista));
	}
	
	@DeleteMapping("/motorista/{id_motorista}")
	String deleteMotorista (@PathVariable Long id_motorista) {
		if(!motoristaRepository.existsById(id_motorista)) {
			throw new MotoristaNotFoundException(id_motorista);
		}
		motoristaRepository.deleteById(id_motorista);
		return "ESTE MOTORISTA COM ID " +id_motorista+" FOI DELETADO COM SUCESSO";
	}
}
