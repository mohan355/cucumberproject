package HomePageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomeSecondPage {
	
	WebDriver driver;
	
	@FindBy(xpath = "//*[@type='text'][1]")
	WebElement eml;
	
	@FindBy(xpath = "//*[@id='password-input-field']")
	WebElement pasdd;
	
	@FindBy(id ="zipCode")
	WebElement zpcd;
	
	@FindBy(id="phone")
	WebElement numbr;
	
	@FindBy(xpath = "//*[contains(@class,'bttn')]")
	WebElement create;
	
	public HomeSecondPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void emil(String email) {
		eml.sendKeys(email);
		
	}
	public void psdwd (String password) {
		pasdd.sendKeys(password);
		
	}
	public void zpcod(String zip) {
		zpcd.sendKeys(zip);
	}
	public void phne(String phno) {
		numbr.sendKeys(phno);
	}
	public void crteacc() {
		create.click();
	}
	


}
