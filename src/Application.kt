package com.example

import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.application.call
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.serialization.json
import io.ktor.routing.routing
import io.ktor.routing.post
import io.ktor.routing.get
import io.ktor.response.respond
import io.ktor.request.receiveText
import io.ktor.http.HttpStatusCode
import io.ktor.features.ContentTransformationException
import io.ktor.http.content.*


fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.module() {

    install(CallLogging)

    install(ContentNegotiation) {
        json()
    }

    routing {
        static("/") {
            resources("static/")
        }

        default("static/index.html")

        post("/buyTicket") {
            val ticket = try {
                GameManager.buyTicket()
            } catch (e: GameManager.NotEnoughMoneyException) {
                call.respond(HttpStatusCode.Conflict)
                return@post
            }
            call.respond(ticket)
        }

        post("redeemPrize") {
            val prize = try {
                call.receiveText().toInt()
            } catch (e: ContentTransformationException) {
                call.respond(HttpStatusCode.BadRequest)
                return@post
            } catch (e: NumberFormatException) {
                call.respond(HttpStatusCode.BadRequest)
                return@post
            }
            val nextMoney = GameManager.redeemPrize(prize)
            call.respond(nextMoney)
        }

        post("askForMoney") {
            val nextMoney = GameManager.getMoneyFromMom()
            call.respond(nextMoney)
        }

        get("myMoney") {
            call.respond(GameManager.getMoney())
        }
    }
}

