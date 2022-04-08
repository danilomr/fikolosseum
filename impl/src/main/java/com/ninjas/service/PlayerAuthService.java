package com.ninjas.service;

import com.ninjas.dao.PlayerAuthDao;
import com.ninjas.model.PlayerAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rx.Observable;
import se.fortnox.reactivewizard.jaxrs.WebException;

import javax.inject.Inject;

import static com.ninjas.utils.SwedishDateTime.now;
import static io.netty.handler.codec.http.HttpResponseStatus.BAD_REQUEST;
import static rx.Observable.just;

public class PlayerAuthService {

    private static final Logger LOG = LoggerFactory.getLogger(PlayerAuthService.class);

    private final PlayerAuthDao playerAuthDao;
    private final JwtService jwtService;

    @Inject
    public PlayerAuthService(PlayerAuthDao playerAuthDao, JwtService jwtService) {
        this.playerAuthDao = playerAuthDao;
        this.jwtService = jwtService;
    }

    /**
     * In case the player name was not taken by another user, the player will be created and a jwt token will be returned.
     * @param playerName String
     * @return a jwt token as String
     */
    public Observable<String> playerLogin(String playerName) {
        return createPlayerAuth(playerName)
                .switchIfEmpty(Observable.defer(() -> { throw new WebException(BAD_REQUEST, "player.name.already.taken"); }));
    }

    private Observable<String> createPlayerAuth(String playerName) {
        return playerNameAlreadyExists(playerName)
                .filter(playerNameExists -> !playerNameExists)
                .concatMap(playerDoesNotExist -> {
                    String token = jwtService.createTokenFromPlayerName(playerName);
                    return addPlayerAuth(new PlayerAuth(playerName, now()))
                            .map(integer -> token);
                });
    }

    private Observable<Boolean> playerNameAlreadyExists(String playerName) {
        return playerAuthDao.getPlayerAuth(playerName)
                .map(playerAuth -> true)
                .switchIfEmpty(Observable.defer(() -> just(false)))
                .doOnError(throwable -> LOG.warn("Could not fetch player auth.", throwable));
    }

    private Observable<Integer> addPlayerAuth(PlayerAuth playerAuth) {
        return playerAuthDao.addPlayerAuth(playerAuth)
                .doOnError(throwable -> LOG.warn("Could not add player auth for {}.", playerAuth.getPlayerName(), throwable));
    }

    public Observable<Integer> playerLogout(String playerName) {
        return playerAuthDao.deletePlayerAuth(playerName)
                .doOnError(throwable -> LOG.warn("Could not delete player auth for {}.", playerName, throwable));
    }

    public Observable<Integer> deleteExpiredPlayerAuths() {
        return playerAuthDao.deleteExpiredPlayerAuth(now().minusHours(2))
                .doOnError(throwable -> LOG.warn("Could not delete expired player auths.", throwable));
    }

}
