package com.ninjas.resource.v1;

import com.ninjas.model.Room;
import rx.Observable;

import javax.inject.Inject;

public class RoomResourceImpl implements RoomResource {

    @Inject
    public RoomResourceImpl() {
    }

    @Override
    public Observable<Boolean> logOut(Integer roomId, String jwtToken) {
        return null;
    }

    @Override
    public Observable<Boolean> setPlayerReady(Integer roomId, String jwtToken) {
        return null;
    }

    @Override
    public Observable<Room> getRoomStatus(Integer roomId, String jwtToken) {
        return null;
    }
}
