package com.drew;

public class Agent {
	
	private final String name;
    private final double latitude;
    private final double longitude;
    private final int age;
    private final String gender;

    public Agent(String name, double latitude, double longitude, int age, String gender) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.age = age;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public double getLatitude() {
        return latitude;
    }
    
    public double getLongitude() {
        return longitude;
    }
    
    public int getAge(){
    	return age;
    }
    
    public String getGender(){
    	return gender;
    }

}
