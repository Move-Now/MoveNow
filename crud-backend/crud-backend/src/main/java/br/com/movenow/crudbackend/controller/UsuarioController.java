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

import br.com.movenow.crudbackend.exception.UsuarioNotFoundException;
import br.com.movenow.crudbackend.model.Usuario;
import br.com.movenow.crudbackend.repository.UsuarioRepository;

@RestController
@CrossOrigin("*")
public class UsuarioController {
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping("/usuario")
	Usuario newUsuario(@RequestBody Usuario newUsuario) {
	
		return usuarioRepository.save(newUsuario);
	}
	
	@GetMapping("/usuarios")
	List<Usuario> getAllUsuarios(){
		return usuarioRepository.findAll();
	}
	
	@GetMapping("usuario/{id_usuario}")
	Usuario getUsuarioByIdUsuario(@PathVariable Long id_usuario) {
		return usuarioRepository.findById(id_usuario)
				.orElseThrow(()->new UsuarioNotFoundException(id_usuario));
	}
	
	@PutMapping("/usuario/{id_usuario}")
	Usuario updateUsuario(@RequestBody Usuario newUsuario, @PathVariable Long id_usuario) {
		return usuarioRepository.findById(id_usuario)
				.map(usuario ->{
					usuario.setUsername(newUsuario.getUsername());
					usuario.setSenha(newUsuario.getSenha());
					usuario.setNome_completo(newUsuario.getNome_completo());
					usuario.setEndereco(newUsuario.getEndereco());
					usuario.setCpf(newUsuario.getCpf());
					usuario.setData_nasc(newUsuario.getData_nasc());
					usuario.setEmail(newUsuario.getEmail());
					usuario.setTelefone(newUsuario.getTelefone());
					return usuarioRepository.save(usuario);
				})
				.orElseThrow(()->new UsuarioNotFoundException(id_usuario));
	}
	
	@DeleteMapping("/usuario/{id_usuario}")
	String deleteUsuario (@PathVariable Long id_usuario) {
		if(!usuarioRepository.existsById(id_usuario)) {
			throw new UsuarioNotFoundException(id_usuario);
		}
		usuarioRepository.deleteById(id_usuario);
		return "ESTE USUARIO COM ID " +id_usuario+" FOI DELETADO COM SUCESSO";
	}
	
}
