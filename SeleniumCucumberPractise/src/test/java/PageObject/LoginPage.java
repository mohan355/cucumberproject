package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver driver;
	
	@FindBy(id="Email")
	WebElement txtEmail;
	
	@FindBy(id="Password")
	WebElement txtPassword;
	
	@FindBy(xpath = "/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/input")
	WebElement btnlogin;
	
	@FindBy(linkText = "Logout")
	WebElement lnkLogout;
	
	
	public LoginPage(WebDriver driver) {
	    this.driver=driver;
		PageFactory.initElements(driver, this);
		
		}
	
	public void setUserName(String uname) {
		txtEmail.clear();
		txtEmail.sendKeys(uname);
		}
	
	 public void setPassword(String pwd) {
		 txtPassword.clear(); 
		 txtPassword.sendKeys(pwd);
	 }
	 public void clickLogin() {
		 btnlogin.click();
	 }
	 public void clickLogout() {
		 lnkLogout.click();
	  
  }
}
