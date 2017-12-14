package eu.slipo.registry.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.bedatadriven.jackson.datatype.jts.JtsModule;

@Configuration
public class RepoConfig {

	
	
	
	@Bean
	public Jackson2ObjectMapperBuilder objectMapperBuilder() {
		Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();

		// Add additional modules to JSON parser
		builder.modules( new JtsModule());

		return builder;
	}
}
