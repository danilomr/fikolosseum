package com.ninjas.model;

public class RoundResult {

    private Integer id;
    private Room room;
    private Round round;
    private Player player;
    private Integer place;
    private Integer points;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Round getRound() {
        return round;
    }

    public void setRound(Round round) {
        this.round = round;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getPlace() {
        return place;
    }

    public void setPlace(Integer place) {
        this.place = place;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public RoundResult(Integer id, Room room, Round round, Player player, Integer place, Integer points) {
        this.id = id;
        this.room = room;
        this.round = round;
        this.player = player;
        this.place = place;
        this.points = points;
    }

    public RoundResult() {

    }
}
