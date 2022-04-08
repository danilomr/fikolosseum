package com.ninjas.model;

import java.time.LocalDateTime;

/**
 * Initially, once we don't have a profile system, the player will authenticate and its username will be stored in the
 * table. So other players can't pick the same player name.
 */
public class PlayerAuth {

    private String playerName;

    private LocalDateTime authTime;

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public LocalDateTime getAuthTime() {
        return authTime;
    }

    public void setAuthTime(LocalDateTime authTime) {
        this.authTime = authTime;
    }

    public PlayerAuth(String playerName, LocalDateTime authTime) {
        this.playerName = playerName;
        this.authTime = authTime;
    }

    public PlayerAuth() {
    }
}
