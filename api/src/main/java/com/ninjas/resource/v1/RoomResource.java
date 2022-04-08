package com.ninjas.resource.v1;

import com.ninjas.model.Room;
import rx.Observable;

import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import static com.ninjas.utils.CookieParams.ROOM_PLAYER_AUTH_COOKIE_NAME;

/**
 * Resource for actions that happen when players are in the room waiting for the next round and watching current results.
 */
@Path("/api/fikolosseum/room-v1")
public interface RoomResource {

    /**
     * Removes the player from the room and from the table of authenticated users.
     * @return the result of whether the player was removed
     */
    @PUT
    @Path("/{roomId}/log-out")
    Observable<Boolean> logOut(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken);

    /**
     * Set player ready to play the next round.
     * @return the result of whether the player was removed
     */
    @PUT
    @Path("/{roomId}/set-player-ready")
    Observable<Boolean> setPlayerReady(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken);

    /**
     * Fetches the current status of the room.
     * @return Room
     */
    @GET
    @Path("/{roomId}/room-status")
    Observable<Room> getRoomStatus(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken);

}
