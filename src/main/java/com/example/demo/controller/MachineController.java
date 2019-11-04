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

import com.example.demo.model.Machine;
import com.example.demo.model.Marque;
import com.example.demo.model.Produit;
import com.example.demo.repository.MachineRepository;
import com.example.demo.repository.MarqueRepository;
import com.example.demo.repository.ProduitRepository;

@RestController
@RequestMapping("machines")

public class MachineController {

	@Autowired
	private MachineRepository machineJpaRepository;
	private MarqueRepository marqueJpaRepository;

	@GetMapping("/all")
	public List<Machine> findAll() {
		return machineJpaRepository.findAll();
	}

	@GetMapping(value = "/{id}/marque/all")
	public List<Machine> findByMarque(@PathVariable final String marque) {
		return machineJpaRepository.findbyMarque(marque) ;
	}

	@PostMapping(value = "/save")
	public void save(@RequestBody final Machine machine) {
		machineJpaRepository.save(machine);
	}

	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		System.out.println("id = "+id);
		Machine machine = machineJpaRepository.findById(Long.parseLong(id));
		machineJpaRepository.delete(machine);
		machineJpaRepository.flush();
	}
	
	@GetMapping(value = "/count")
	public long countMachine() {
		return machineJpaRepository.count();
	}

}
