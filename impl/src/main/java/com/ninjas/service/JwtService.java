package com.ninjas.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fortnox.reactivewizard.dates.DateProvider;
import io.netty.handler.codec.http.HttpResponseStatus;
import se.fortnox.reactivewizard.jaxrs.WebException;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Date;

import static org.slf4j.event.Level.INFO;

@Singleton
public class JwtService {

    public static final int TOKEN_VALID_HOURS = 2;
    private static final String AUTHORIZATION_PREFIX = "Bearer ";
    private static final String KEY = "dHASsc.hb123da.bva21dv.mdaDcl44ssabl**6ascv";

    private final DateProvider dateProvider;
    private final Algorithm algorithm;
    private final JWTVerifier jwtVerifier;

    @Inject
    public JwtService(DateProvider dateProvider) {
        this.dateProvider = dateProvider;
        algorithm = Algorithm.HMAC256(KEY);
        jwtVerifier = buildVerifier();
    }

    private JWTVerifier buildVerifier() {
        JWTVerifier.BaseVerification verification = (JWTVerifier.BaseVerification) JWT.require(algorithm);
        return verification.build(() -> Date.from(dateProvider.getOffsetDateTime().toInstant()));
    }

    public String createTokenFromPlayerName(String playerName) {
        JWTCreator.Builder jwtBuilder = JWT.create()
                .withClaim("playerName", playerName);

        return AUTHORIZATION_PREFIX + jwtBuilder
                .withExpiresAt(Date.from(dateProvider.getOffsetDateTime().plusHours(TOKEN_VALID_HOURS).toInstant()))
                .sign(algorithm);
    }

    public DecodedJWT decodeToken(String authorizationToken) {
        if (authorizationToken != null && !authorizationToken.isEmpty()) {
            String jwtToken = authorizationToken.substring(AUTHORIZATION_PREFIX.length());
            try {
                return jwtVerifier.verify(jwtToken);
            } catch(TokenExpiredException e) {
                throw new WebException(HttpResponseStatus.UNAUTHORIZED, "session.token.expired").withLogLevel(INFO);
            }
        }
        throw new WebException(HttpResponseStatus.UNAUTHORIZED, "session.token.missing").withLogLevel(INFO);
    }

}
