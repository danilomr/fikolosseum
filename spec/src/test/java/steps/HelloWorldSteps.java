package steps;

import com.fortnox.auth.Auth;
import org.jbehave.core.annotations.Given;
import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;

import javax.inject.Inject;
import com.ninjas.hello.v1.HelloResource;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

public class HelloWorldSteps {
	@Inject
	Auth auth;

	@Inject
	HelloResource helloResource;

	String answer;

	@Given("user $uid of tenant $tenantId")
	public void setupUser(String uid, Long tenantId) {
		when(auth.getTenantId()).thenReturn(tenantId);
		when(auth.getUserId()).thenReturn(uid);
	}

	@When("you say hello")
	public void sayHello() {
		answer = helloResource.sayHello(auth).toBlocking().single();
	}

	@Then("the greeting should be \"$expectedGreeting\"")
	public void assertGreeting(String expectedGreeting) {
		assertThat(answer).isEqualTo(expectedGreeting);
	}
}
