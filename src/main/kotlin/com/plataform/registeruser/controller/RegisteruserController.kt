package com.plataform.registeruser.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class RegisteruserController {
    @GetMapping("/")
    fun index(): String {
        return "formulario"
    }

}