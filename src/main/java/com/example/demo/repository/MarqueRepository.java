package com.example.demo.repository;

import java.util.List;

import javax.management.Query;
import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Component;

import com.example.demo.model.Machine;
import com.example.demo.model.Marque;


@Component
public interface MarqueRepository extends JpaRepository<Marque, Long> {
       
	Marque findByLibelle(String libelle);

	Marque findById(long id);
	
	public default  List<Machine> findbyLibelle(String libelle){
		EntityManager entityManager = null;
		Query query =  (Query) entityManager.createNamedQuery("findbyLibelle");
	    ((javax.persistence.Query) query).setParameter("libelle", libelle);
	    return ((javax.persistence.Query) query).getResultList();


	}


}