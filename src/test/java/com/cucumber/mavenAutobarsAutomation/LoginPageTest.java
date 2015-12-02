package com.cucumber.mavenAutobarsAutomation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class LoginPageTest {
 
	// declare an element variable as null
	
   private static WebElement element = null;
   
   //define a method getusername
    public static WebElement getusername(WebDriver driver){
    	 
        element = driver.findElement(By.id("UserName"));
     
        return element;
     
        }

    public static WebElement getpassword(WebDriver driver){
   	 
        element = driver.findElement(By.id("UserPassword"));
     
        return element;
     
        }

    public static WebElement getSignInButton(WebDriver driver){
      	 
       // element = driver.findElement(By.xpath("//*[@id='content']/div[2]/div/form/p[4]/input"));

         element = driver.findElement(By.className("button"));

        return element;
     
        }

  
}