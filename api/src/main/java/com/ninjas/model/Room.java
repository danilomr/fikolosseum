package com.ninjas.model;

import java.util.List;

public class Room {

    private List<Player> players;
    private List<Round> rounds;

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Round> getRounds() {
        return rounds;
    }

    public void setRounds(List<Round> rounds) {
        this.rounds = rounds;
    }

    public Room(List<Player> players, List<Round> rounds) {
        this.players = players;
        this.rounds = rounds;
    }

    public Room() {
    }
}
