package com.ninjas.model;

import java.time.LocalDateTime;
import java.util.List;

public class Round {

    private Room room;
    private Integer id;
    private Game game;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private List<RoundResult> results;

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public List<RoundResult> getResults() {
        return results;
    }

    public void setResults(List<RoundResult> results) {
        this.results = results;
    }

    public Round(Room room, Integer id, Game game, LocalDateTime startTime, LocalDateTime endTime, List<RoundResult> results) {
        this.room = room;
        this.id = id;
        this.game = game;
        this.startTime = startTime;
        this.endTime = endTime;
        this.results = results;
    }

    public Round() {
    }
}
