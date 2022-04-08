package com.ninjas.utils;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;

/**
 * Class to manage date time taking to account Swedish timezone.
 * It will be used to avoid eventual problem of server date time other than Swedish one.
 */
public class SwedishDateTime {

    /**
     * Returns the current time regarding Swedish timezone.
     * @return LocalDateTime
     */
    public static LocalDateTime now() {
        LocalDateTime now = LocalDateTime.now();
        return OffsetDateTime.now(ZoneId.of("Europe/Stockholm").getRules().getOffset(now)).toLocalDateTime();
    }

}
