package com.techm.auth.archiusSchedule;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.scheduling.annotation.Scheduled;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.techm.auth.jwt.GenerateJwtToken;
@Component
public class ScheduledTasks {

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

  /*  @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        log.info("The time is now {}", dateFormat.format(new Date()));
    }*/
    
    @Scheduled(fixedRate = 30000)
    public void copyFileContents() throws Exception {
        log.info("The time is now {}", dateFormat.format(new Date()));
      
        GenerateJwtToken generateJwtToken  = new GenerateJwtToken();
        generateJwtToken.getDynamicIp();
    }
    
    
}
