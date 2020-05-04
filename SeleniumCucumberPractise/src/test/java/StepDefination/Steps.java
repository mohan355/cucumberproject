package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.LoginPage;
import io.cucumber.java.en.*;

public class Steps {

	public WebDriver driver;
	public LoginPage obj;
		


	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\kafle\\Desktop\\PNT\\SeleniumCucumberPractise\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		obj=new LoginPage(driver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		
		driver.get(url);

	}

	@When("User enters email as {string} and password as {string}")
	public void user_enters_email_as_and_password_as(String email, String password) {
		
		obj.setUserName(email);
		obj.setPassword(password);
		

	}

	@When("Click on login")
	public void click_on_login() {
		obj.clickLogin();
	}

	@Then("page Title should be {string}")
	public void page_Title_should_be(String title) {
		if(driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			Assert.assertTrue(false);
		}
		else {
			Assert.assertEquals(title, driver.getTitle());
		}

	}

	@When("user click on the logout link")
	public void user_click_on_the_logout_link() throws InterruptedException {
		obj.clickLogout();
		Thread.sleep(8000);

	}

	@Then("close browser")
	public void close_browser() {
		driver.quit();

	}

}
