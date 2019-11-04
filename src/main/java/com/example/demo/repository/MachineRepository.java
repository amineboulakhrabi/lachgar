package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.example.demo.model.Machine;

import java.util.List;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@Component
public interface MachineRepository extends JpaRepository<Machine, Long> {
       
    
	Machine findById(long id);
	
	@PersistenceContext
	public default  List<Machine> findbyMarque(String marque){
		EntityManager entityManager = null;
		Query query =  (Query) entityManager.createNamedQuery("findbyMarque");
	    ((javax.persistence.Query) query).setParameter("marque", marque);
	    return ((javax.persistence.Query) query).getResultList();


	}
	

}
