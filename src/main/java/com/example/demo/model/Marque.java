package com.example.demo.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.example.demo.model.Marque;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;



@Entity
@NamedQuery(name = "findByLibelle", query = "From Marque where libelle=:libelle")

public class Marque {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String code;
	private String libelle;
	
	@Autowired
	@OneToMany(mappedBy = "marque", cascade = CascadeType.ALL, fetch= FetchType.EAGER)
	
	
	
	private List<Machine> machines ;

	
	public Marque() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	
	
}

