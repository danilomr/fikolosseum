package com.ninjas.resource.external.v1;

import com.ninjas.service.PlayerAuthService;
import rx.Observable;
import se.fortnox.reactivewizard.jaxrs.response.ResponseDecorator;

import javax.inject.Inject;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class AuthenticationResourceImpl implements AuthenticationResource {

    public final static String PLAYER_AUTH_COOKIE_NAME = "fika_game_player_auth";
    private final PlayerAuthService playerAuthService;

    @Inject
    public AuthenticationResourceImpl(PlayerAuthService playerAuthService) {
        this.playerAuthService = playerAuthService;
    }

    @Override
    public Observable<String> playerAuth(String playerName) {
        Map<String, String> headers = new HashMap<>();
        Observable<String> getTokenAndSetHeader = playerAuthService.playerLogin(playerName)
                .map(jwtToken -> {
                    String encodedToken = URLEncoder.encode(jwtToken, StandardCharsets.UTF_8);
                    headers.put("Set-Cookie", PLAYER_AUTH_COOKIE_NAME + "=" + encodedToken + "; path=/; HttpOnly; SameSite=Strict; Secure;");
                    return "";
                });
        return ResponseDecorator.withHeaders(getTokenAndSetHeader, headers);
    }

    @Override
    public Observable<String> playerAuthTest(String playerName) {
        return Observable.just("Hey ho " + playerName);
    }

}
