package br.com.movenow.crudbackend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.movenow.crudbackend.model.Motorista;
import br.com.movenow.crudbackend.model.Usuario;
import br.com.movenow.crudbackend.repository.MotoristaRepository;
import br.com.movenow.crudbackend.repository.UsuarioRepository;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
	private MotoristaRepository motoristaRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	 public static class LoginResponse {
	        private String id;
	        private String message;

	        public LoginResponse(String id, String message) {
	            this.id = id;
	            this.message = message;
	        }

	        public String getId() {
	            return id;
	        }

	        public void setId(String id) {
	            this.id = id;
	        }

	        public String getMessage() {
	            return message;
	        }

	        public void setMessage(String message) {
	            this.message = message;
	        }
	    }
	

	@PostMapping("/login")
	 public ResponseEntity<LoginResponse> loginMotorista(@RequestBody Map<String, String> loginData) {
        String user = loginData.get("user");
        String senha = loginData.get("senha");
        
        // Verificar na tabela de Motorista
        Optional<Motorista> motoristaOptional = motoristaRepository.findByCpf_motoristaAndSenha_motorista(user, senha);
        if (motoristaOptional.isPresent()) {
            Motorista motorista = motoristaOptional.get();
            LoginResponse response = new LoginResponse(String.valueOf(motorista.getId_motorista()), "LogadoMot");
            return ResponseEntity.ok(response);
        }
         
        // Verificar na tabela de Usuario
        Optional<Usuario> usuarioOptional = usuarioRepository.findByUsernameAndSenha(user, senha);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            LoginResponse response = new LoginResponse(String.valueOf(usuario.getId_cliente()), "LogadoUser");
            return ResponseEntity.ok(response);
        }
     		  		
        // Caso não encontre em nenhuma tabela, retornar erro
        LoginResponse response = new LoginResponse("", "Chapo");
        return ResponseEntity.ok(response);
       
	}
}
