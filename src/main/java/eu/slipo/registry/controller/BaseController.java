package eu.slipo.registry.controller;

import java.text.MessageFormat;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;


import eu.slipo.registry.model.Error;

/**
 * Base controller class providing helper methods for creating application messages, errors and responses.
 */
public abstract class BaseController {

    /**
     * Resolves application messages and supports internationalization.
     */
    @Autowired
    protected MessageSource messageSource;


    /**
     * Returns a localized message based on the error code.
     *
     * @param code the error code.
     * @return the localized message.
     */
    protected String getMessage(String code) {
        return messageSource.getMessage(code, null, code, null);
    }

    /**
     * Creates a localized message based on the error code and formats the
     * message using the given set of properties.
     *
     * @param code the error code.
     * @param properties the properties for formatting the message.
     * @return the localized message.
     */
    protected String getMessage(String code, Map<String, Object> properties) {
        String message = messageSource.getMessage(code, null, code, null);

        MessageFormat msgFmt = new MessageFormat(message);

        return msgFmt.format(properties);
    }


    /**
     * Returns an {@link Error} based on a {@link Throwable}.
     *
     * @param t the throwable.
     * @return the localized error.
     */
    protected Error getError(Throwable t) {
        return getError((Exception) t.getCause());
    }


}