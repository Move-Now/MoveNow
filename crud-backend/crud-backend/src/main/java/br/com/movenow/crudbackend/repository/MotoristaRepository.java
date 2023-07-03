package br.com.movenow.crudbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.movenow.crudbackend.model.Motorista;
import java.util.Optional;

@Repository
public interface MotoristaRepository extends JpaRepository<Motorista, Long> {
    @Query("SELECT m FROM Motorista m WHERE m.cpf_motorista = :cpf AND m.senha_motorista = :senha")
    Optional<Motorista> findByCpf_motoristaAndSenha_motorista(@Param("cpf") String cpf, @Param("senha") String senha);
}
