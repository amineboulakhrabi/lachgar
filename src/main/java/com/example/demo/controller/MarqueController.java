package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Marque;
import com.example.demo.repository.MarqueRepository;
@RestController
@RequestMapping("marques")

public class MarqueController {

	@Autowired
	private MarqueRepository marqueJpaRepository;

	@GetMapping("/all")
	public List<Marque> findAll() {
		return marqueJpaRepository.findAll();
	}

	@GetMapping(value = "/{libelle}")
	public Marque findByCode(@PathVariable final String libelle) {
		return marqueJpaRepository.findByLibelle(libelle);
	}

	@PostMapping(value = "/save")
	public void save(@RequestBody final Marque marque) {
		marqueJpaRepository.save(marque);
	}

	
	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		System.out.println("id = "+id);
		Marque marque = marqueJpaRepository.findById(Long.parseLong(id));
		marqueJpaRepository.delete(marque);
		marqueJpaRepository.flush();
	}
	
	@GetMapping(value = "/count")
	public long countMarque() {
		return marqueJpaRepository.count();
	}

}
