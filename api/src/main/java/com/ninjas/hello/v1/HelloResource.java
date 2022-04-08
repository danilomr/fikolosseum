package com.ninjas.hello.v1;

import com.fortnox.auth.Auth;
import rx.Observable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Template resource for saying hello
 */
@Path("/api/fikolosseum/hello-v1")
public interface HelloResource {
	@GET
	Observable<String> sayHello(Auth auth);
}
