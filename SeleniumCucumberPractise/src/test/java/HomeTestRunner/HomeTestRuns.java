package HomeTestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
        (
		features = ".//Features//HomeDepot.feature",
		glue = "HomeStepDefination",
		 dryRun=false,
		 monochrome=true,
		 plugin= {"pretty","html:test-output"}
		
		)

public class HomeTestRuns {

}
