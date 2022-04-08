package com.ninjas.hello.v1;

import com.fortnox.reactivewizard.internalauth.MockAuth;
import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class HelloResourceTest {

	private HelloResource helloResource = new HelloResourceImpl();

	@Test
	public void shouldSayHello() {
		String greeting = helloResource.sayHello(new MockAuth("1", "2")).toBlocking().single();
		assertThat(greeting).isEqualTo("Hello user 2 of tenant 1");
	}
}
