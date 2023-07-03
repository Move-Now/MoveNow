package br.com.movenow.crudbackend.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class MotoristaNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(MotoristaNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	
	public Map<String, String> exceptionHandler(MotoristaNotFoundException exception){
		Map<String, String>	errorMap=new HashMap<>();
		errorMap.put("erromesage",exception.getMessage());
		return errorMap;
	}
	
}
