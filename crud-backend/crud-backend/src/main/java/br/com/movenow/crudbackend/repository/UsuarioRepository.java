package br.com.movenow.crudbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.movenow.crudbackend.model.Usuario;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Optional<Usuario> findByUsernameAndSenha(String username, String senha);
}
