package HomeStepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import HomePageObject.HomeFirstPage;
import HomePageObject.HomeSecondPage;
import io.cucumber.java.en.*;

public class HomeSteps {
	
	public WebDriver driver;
	public HomeFirstPage obj1;
	public HomeSecondPage obj2;
	
	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\kafle\\Desktop\\PNT\\SeleniumCucumberPractise\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		obj1=new HomeFirstPage(driver);
		obj2=new HomeSecondPage(driver);
	    
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		driver.get(url);
	    
	}

	@Then("User click on the myaccount button")
	public void user_click_on_the_myaccount_button() {
		obj1.signinn();
	    
	}

	@Then("User click on the Register")
	public void user_click_on_the_Register() {
		obj1.Registr();
	    
	}

	@Then("User enters email as {string}")
	public void user_enters_email_as(String email) {
		obj2.emil(email);
	   
	}

	@Then("User enters password as {string}")
	public void user_enters_password_as(String password) {
		obj2.psdwd(password);
	    
	}

	@Then("User enters Zip Code as {string}")
	public void user_enters_Zip_Code_as(String zip) {
		obj2.zpcod(zip);
	    
	}

	@Then("User enters phone number as {string}")
	public void user_enters_phone_number_as(String phno) {
		obj2.phne(phno);
	}

	@Then("User click on the creat account")
	public void user_click_on_the_creat_account() {
	    obj2.crteacc();
	}
	   
	@Then("close browser")
	public void close_browser() {
		driver.quit();
	    
	}



}
