package com.ninjas.resource.external.v1;

import rx.Observable;

import javax.ws.rs.HeaderParam;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;

/**
 * Resource for creating player authentication.
 */
@Path("/api/fikagame/external/authentication-v1")
public interface AuthenticationResource {

    /**
     * Generates an authentication for the player.
     * If the playerName is not used by other players, a JWT token will be returned.
     * @param playerName String     A playerName that will be used
     * @return an empty string in the response body and optionally a "Set-Cookie" response header
     */
    @PUT
    @Path("player-auth")
    Observable<String> playerAuth(@HeaderParam("playerName") String playerName);

}
