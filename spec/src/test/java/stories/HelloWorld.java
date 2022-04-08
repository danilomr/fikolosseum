package stories;

import com.fortnox.reactivewizard.bdd.RWStory;
import com.fortnox.reactivewizard.bdd.extras.WithPostgres;
import steps.HelloWorldSteps;

@WithPostgres
public class HelloWorld extends RWStory {
	public HelloWorld() {
		super("en", HelloWorldSteps.class);
	}
}
