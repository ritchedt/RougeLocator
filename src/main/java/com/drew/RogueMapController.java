package com.drew;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import au.com.bytecode.opencsv.CSVReader;


@Controller
public class RogueMapController {
	
	private CSVReader reader;
    private String[] nextLine;
    private List<Agent> agentList;
	
	@RequestMapping(value = "rogue-map", method = RequestMethod.GET)
	public String rogueMap(Model model) throws Exception {
		
		reader = new CSVReader(new FileReader("src/main/resources/cc-maps-data-set.csv"));
		agentList = new ArrayList<Agent>();
        
        while ((nextLine = reader.readNext()) != null) {
            agentList.add(new Agent(nextLine[0], Double.parseDouble(nextLine[1]), 
            		Double.parseDouble(nextLine[2]), Integer.parseInt(nextLine[3]), nextLine[4]));
        }
        model.addAttribute("agentList", agentList);
	
		return "rogue-map";
	}
	
	@RequestMapping(value = "agent-search", method = RequestMethod.GET)
	public String agentSearch(@RequestParam(value="name", required=true) String name, Model model) throws Exception {
		
		reader = new CSVReader(new FileReader("src/main/resources/cc-maps-data-set.csv"));
		agentList = new ArrayList<Agent>();
        
        while ((nextLine = reader.readNext()) != null) {
        	if(nextLine[0].matches(name)){
        		agentList.add(new Agent(nextLine[0], Double.parseDouble(nextLine[1]), 
        				Double.parseDouble(nextLine[2]), Integer.parseInt(nextLine[3]), nextLine[4]));
            }
        }
        model.addAttribute("agentList", agentList);
	
		return "agent-search";
	}
	
}
