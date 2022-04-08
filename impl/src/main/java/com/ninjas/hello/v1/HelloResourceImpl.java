package com.ninjas.hello.v1;

import com.fortnox.auth.Auth;
import rx.Observable;

import javax.inject.Inject;

import static rx.Observable.just;

public class HelloResourceImpl implements HelloResource {

	@Inject
	public HelloResourceImpl() {
	}

	@Override
	public Observable<String> sayHello(Auth auth) {
		return just("Hello user " + auth.getUserId() + " of tenant " + auth.getTenantId());
	}
}
