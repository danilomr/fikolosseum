package com.ninjas.dao;

import com.ninjas.model.PlayerAuth;
import rx.Observable;
import se.fortnox.reactivewizard.db.Query;
import se.fortnox.reactivewizard.db.Update;

import java.time.LocalDateTime;

public interface PlayerAuthDao {

    @Query("""
            SELECT pa.player_name, pa.auth_time
            FROM player_auth pa
            WHERE pa.player_name = :playerName
            """)
    Observable<PlayerAuth> getPlayerAuth(String playerName);

    @Update(value = """
            INSERT INTO player_auth (player_name, auth_time)
            VALUES (:playerAuth.playerName, :playerAuth.authTime)
            """)
    Observable<Integer> addPlayerAuth(PlayerAuth playerAuth);

    @Update(value = """
            DELETE FROM player_auth
            WHERE pa.player_name = :playerName
            """)
    Observable<Integer> deletePlayerAuth(String playerName);

    @Update(value = """
            DELETE FROM player_auth
            WHERE pa.auth_time < :authTime
            """)
    Observable<Integer> deleteExpiredPlayerAuth(LocalDateTime authTime);

}
